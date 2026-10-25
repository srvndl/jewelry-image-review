'use strict';
const $ = id => document.getElementById(id);
const definitions = [
 ['silhouette','Silhouette & construction','Check overall shape, proportions, joins and structural details.'],
 ['stones','Stone count & layout','Compare each visible stone, spacing, orientation and arrangement.'],
 ['settings','Settings & prongs','Inspect bezels, claws, seats and the visible setting structure.'],
 ['chains','Chains & clasps','Check links, fastenings, hinges and connection points.'],
 ['marks','Engraving & hallmarks','Compare visible text, stamps, logos and fine surface markings.'],
 ['color','Metal & stone color','Check against the actual piece or a trusted color reference; screens and lighting can differ.'],
 ['scale','Worn scale & contact','For on-body images, inspect scale, placement, skin contact and natural fit.'],
 ['collection','Collection consistency','Compare framing, finish, color and styling with your collection references.']
];
const files = {source:null, edited:null};
const generations = {source:0, edited:0};
const pending = new Set();
const exportUrls = new Set();
function releaseExports(){for(const url of exportUrls)URL.revokeObjectURL(url);exportUrls.clear();}
for (const [id,title,description] of definitions) {
 const row = document.createElement('div'); row.className='check';
 const copy=document.createElement('div'); const label=document.createElement('label'); label.htmlFor=`check-${id}`; label.textContent=title;
 const detail=document.createElement('p'); detail.id=`detail-${id}`; detail.textContent=description;
 copy.append(label,detail); const select=document.createElement('select'); select.id=`check-${id}`; select.setAttribute('aria-describedby',detail.id);
 for(const [value,text] of [['unreviewed','Unreviewed'],['pass','Pass'],['needs_correction','Needs correction']]){const option=document.createElement('option');option.value=value;option.textContent=text;select.append(option);}
 select.addEventListener('change',update); row.append(copy,select);$('checks').append(row);
}
function checks(){return definitions.map(([id,title])=>({id,title,status:$(`check-${id}`).value}));}
function result(){const values=checks();return values.some(x=>x.status==='needs_correction')?'needs_correction':values.every(x=>x.status==='pass')?'pass':'unreviewed';}
function update(){const count=checks().filter(x=>x.status!=='unreviewed').length;$('progress').textContent=`${count} of 8 reviewed`;$('result').textContent={pass:'All checks marked pass',needs_correction:'Needs correction',unreviewed:count?'Review incomplete':'Unreviewed'}[result()];const ready=!!files.source&&!!files.edited&&!pending.size;$('export').disabled=!ready;$('export-hint').textContent=ready?'Export includes image metadata, your checklist and notes. It does not contain image pixels.':'Add both images to export a review. Nothing is saved automatically.';$('wipe').disabled=!ready||document.querySelector('[name=view]:checked').value!=='wipe';document.querySelector('[value=wipe]').disabled=!ready;if(!ready&&document.querySelector('[value=wipe]').checked){document.querySelector('[value=side]').checked=true;$('comparison').classList.remove('wipe');}if(!document.querySelector('[value=wipe]').checked)$('edited-figure').style.clipPath='';}
function clearDecisions(message){for(const [id] of definitions)$(`check-${id}`).value='unreviewed';$('notes').value='';$('status').textContent=message;update();}
function removeImage(key){generations[key]++;if(files[key])URL.revokeObjectURL(files[key].url);files[key]=null;const img=$(`${key}-image`);img.removeAttribute('src');img.hidden=true;$(`${key}-empty`).hidden=false;$(`${key}-file`).value='';$(`${key}-meta`).textContent='Choose a local image. Files stay in this tab.';$(`${key}-error`).textContent='';$(`${key}-clear`).disabled=true;}
function size(bytes){return bytes<1024*1024?`${(bytes/1024).toFixed(1)} KB`:`${(bytes/1024/1024).toFixed(2)} MB`;}
async function load(key,file){if(!file)return;const token=++generations[key];$(`${key}-error`).textContent='';let url;
 try {
  if(!['image/png','image/jpeg','image/webp'].includes(file.type))throw Error('Choose a PNG, JPEG or WebP image. This file type is not supported.');
  if(!file.size)throw Error('This file is empty. Choose a complete image.');
  if(file.size>25*1024*1024)throw Error('This image exceeds 25 MB. Export a smaller copy and try again.');
  url=URL.createObjectURL(file);pending.add(token+key);update();$(`${key}-meta`).textContent='Opening image…';
  const image=new Image();image.src=url;await image.decode();
  if(token!==generations[key])return;
  const width=image.naturalWidth,height=image.naturalHeight;
  if(!width||!height||width*height>60000000||Math.max(width,height)>16000)throw Error('Image dimensions exceed the review limit (60 megapixels or 16,000 pixels per side). Choose a smaller copy.');
  if(files[key])URL.revokeObjectURL(files[key].url);
  files[key]={url,name:file.name,type:file.type,bytes:file.size,width,height};url=null;
  const target=$(`${key}-image`);target.src=files[key].url;target.hidden=false;$(`${key}-empty`).hidden=true;$(`${key}-clear`).disabled=false;
  $(`${key}-meta`).textContent=`${file.name} · ${width.toLocaleString()} × ${height.toLocaleString()} px · ${size(file.size)}`;
  clearDecisions('Image changed. Checklist and notes cleared so this pair receives a fresh review.');
 } catch(error){if(token===generations[key]){$(`${key}-error`).textContent=error.message?.startsWith('Choose')||error.message?.startsWith('This')||error.message?.startsWith('Image dimensions')?error.message:'This image could not be opened. It may be damaged or mislabeled. Export a new PNG, JPEG or WebP and try again.';$(`${key}-meta`).textContent=files[key]?`${files[key].name} · Previous valid image retained.`:'No image loaded.';$(`${key}-file`).value='';}}
 finally{if(url)URL.revokeObjectURL(url);pending.delete(token+key);update();}
}
for(const key of ['source','edited']){$(`${key}-file`).addEventListener('change',event=>load(key,event.target.files[0]));$(`${key}-clear`).addEventListener('click',()=>{removeImage(key);clearDecisions('Image removed. Checklist and notes cleared.');});}
for(const radio of document.querySelectorAll('[name=view]'))radio.addEventListener('change',()=>{$('comparison').classList.toggle('wipe',radio.value==='wipe'&&radio.checked);update();});
$('wipe').addEventListener('input',()=>{const value=$('wipe').value;$('comparison').style.setProperty('--reveal',`${value}%`);$('edited-figure').style.clipPath=document.querySelector('[value=wipe]').checked?`inset(0 ${100-Number(value)}% 0 0)`:'';$('reveal').textContent=`${value}%`;});
for(const radio of document.querySelectorAll('[name=view]'))radio.addEventListener('change',()=>{$('edited-figure').style.clipPath=radio.value==='wipe'&&radio.checked?`inset(0 ${100-Number($('wipe').value)}% 0 0)`:'';});
$('reset').addEventListener('click',()=>{releaseExports();for(const key of ['source','edited'])removeImage(key);$('wipe').value=50;$('reveal').textContent='50%';$('comparison').style.setProperty('--reveal','50%');$('edited-figure').style.clipPath='';clearDecisions('Review reset. Images released from this tab.');});
$('export').addEventListener('click',()=>{if(!files.source||!files.edited||pending.size)return;const metadata=key=>{const {url,...data}=files[key];return data;};const data={schema:'jewelsretouch.manual-image-review',schemaVersion:1,extensionVersion:'1.0.0',reviewedAt:new Date().toISOString(),reviewMethod:'manual',result:result(),images:{source:metadata('source'),edited:metadata('edited')},checks:checks(),notes:$('notes').value,disclaimer:'Records reviewer selections only. No automatic accuracy analysis or product certification.'};const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)+'\n'],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download=`jewelry-review-${new Date().toISOString().replace(/[:.]/g,'-')}.json`;link.click();exportUrls.add(url);$('status').textContent='Review JSON download requested. Check your browser downloads.';});
window.addEventListener('beforeunload',()=>{releaseExports();for(const value of Object.values(files))if(value)URL.revokeObjectURL(value.url);});update();
