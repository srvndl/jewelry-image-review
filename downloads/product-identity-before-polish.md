# Product identity before polish: an acceptance framework for AI jewelry images and video

Serdar Arniyazov, founder, Jewels Retouch

Practice-led method report · Version 1.0 · 25 October 2026

Founder-authored practice-led method report. This report proposes a review framework; it reports no measured benchmark and has not been peer reviewed.

## Abstract

AI jewelry imagery requires two distinct decisions: whether an output represents the intended item and whether its presentation suits the destination. This report proposes an acceptance framework that places product identity before visual polish. It maps visible source evidence to nine review criteria, separates critical product failures from cosmetic issues, and records approval at item and version level. A companion machine-readable rubric and trial logging schema support consistent records. The method covers still images, collections, worn-source editing, and temporal review of video. It is intended for jewelry producers, manufacturers, wholesalers, exporters, brands, retailers, resellers, photographers, and retouchers. It is a practice-led proposal informed by the author's jewelry trade experience and the published Jewels Retouch workflow. It reports no experiment, measured outcomes, comparative benchmark, or validated error rate. Its purpose is to make approval decisions explicit and testable in subsequent production evaluation.

## 1. Scope and working assumptions

The object of approval is a particular output version for a declared use. A catalog image, wholesale line sheet, buyer selection, retailer listing, reseller stock record, and campaign video can require different framing, but all need an intentional relationship to the jewelry represented. Ecommerce is one use within this wider trade context.

The framework assumes access to an original source image and an item identifier. A physical piece, trusted detail photographs, and verified product records strengthen review where available. An output cannot supply missing proof of hidden construction. Reviewers should mark uncertain details as unverified instead of treating plausible generated detail as observed fact.

This is a visual acceptance method, not material certification, a substitute for gemological assessment, or a determination of legal product-description requirements. Product facts such as alloy, dimensions, stone treatment, condition, availability, and price must come from appropriate business records or examination. Image appearance alone does not establish them.

## 2. Evidence and version chain

Create an item record before generation. Preserve the original source bytes; attach the model or stock code, source filename, intended use, requested treatment, and available references. Where reproducibility matters, record a cryptographic hash alongside a stable internal file location. A hash identifies bytes, not the truth of their contents.

Record every output as a new version with its source relationship. Keep rejected outputs and reasons when they explain a production decision. If manual finishing follows AI editing, identify the finished file separately and review that final version. An approval of an earlier image does not transfer automatically to a later file.

The brief should specify allowed presentation changes and identity features that must remain. For example, a background may change while the stone layout must not. A style reference describes a desired look; it is not evidence that the product has the same construction as the reference jewelry.

## 3. Hazard model and rubric

The proposed rubric uses three review states: pass, fail, and unverified. “Pass” means the available evidence supports the criterion for the declared use. “Fail” means a visible discrepancy is observed. “Unverified” means evidence is insufficient. It should not be silently converted into a pass.

Each failure also receives a severity and a reason. A critical failure changes product identity, misrepresents relevant condition, or introduces an unsupported product implication. A cosmetic failure affects presentation without changing identity. Severity depends on the actual discrepancy and destination, rather than merely the criterion's name. A clipped chain can be cosmetic in one crop and conceal essential construction in another.

| Criterion | Source-to-output check | Hazard and decision boundary |
| --- | --- | --- |
| 1. Item correspondence and silhouette | Match model code, item, pair or set, outline, and visible proportions | Wrong item, missing pair member, or changed outline is critical |
| 2. Stone layout and appearance | Compare visible count, arrangement, spacing, and color appearance | Added or removed stones and changed layout are critical; uncertain color needs a trusted reference |
| 3. Settings and connections | Trace prongs, bezels, galleries, chain links, clasps, and attachment | Invented or broken construction is critical; hidden connections remain unverified |
| 4. Marks, engraving, and condition | Compare readable marks and relevant wear or distinctive features | Altered text or concealed selling-relevant condition is critical |
| 5. Material and tone | Compare with a trusted material-appearance reference under consistent viewing conditions | Material substitution or unsupported material claim is critical; lesser tone mismatch may be cosmetic |
| 6. Boundaries, reflections, and transparency | Inspect edges, openings, facets, shadows, and reflection transitions | Cosmetic artifacts need correction; artifacts that change apparent structure are critical |
| 7. Worn contact and scale | Compare placement and contact against the worn source | Implausible attachment or materially altered apparent proportions can be critical |
| 8. Destination and collection presentation | Check crop, framing, readability, background, and consistency | Presentation mismatch is normally cosmetic unless it hides required identity evidence |
| 9. Temporal identity and implied behavior | Review product features and new views throughout a video | Changing construction or unsupported mechanisms are critical; distracting motion may be cosmetic |

The companion JSON gives these criteria stable identifiers. It does not assign a numerical quality score. Averaging a changed stone count with a good background could produce a misleading overall score, so critical failures remain blocking decisions.

## 4. Still-image review procedure

Begin with the source, item record, and destination brief beside the output. Confirm correspondence before zooming into detail. Review at full available resolution to inspect construction and boundaries, then at the intended display size to judge readability and framing. Neither viewing scale replaces the other.

For each criterion, record the state, severity where relevant, evidence location, and a short reason. “Prong missing at upper right compared with source” is more actionable than “looks wrong.” If the image does not show a required detail clearly enough, request another source view or examination rather than approving an inference.

Complete identity review before cosmetic approval. A critical fail blocks use of that version. An unverified required criterion blocks approval for that destination until resolved. Cosmetic failures may be routed to a defined correction or manual finishing. Reinspect the corrected file because a local improvement can accompany a new defect elsewhere.

Use explicit terminal decisions: approved for the named use, rejected, needs correction, needs manual finishing, or needs new capture. Keep the reviewer and decision date. Where a team uses conditional approval, list its conditions and prevent the file from being mistaken for an unrestricted final export.

## 5. Collections: sampling is not item approval

A small real-collection trial can test whether a workflow is worth adopting. Choose ordinary items alongside relevant hazards such as reflective gold, fine chains, prongs, matched pairs, openwork, and engraving. Document why the selection was chosen. Do not describe convenience or risk-based sampling as a statistically representative evaluation.

Use that trial to find input limitations, establish the presentation brief, estimate review effort, and identify items needing manual work or capture. Sample success supports a process decision; it does not prove that all later outputs preserve identity. Batch processing remains distinct from batch acceptance.

Before releasing a collection, approve each intended output and reconcile its item code, version, and destination. Review collection consistency across approved items as a separate pass. This catches a range that is individually acceptable but inconsistent in crop or tone. It also prevents a uniform treatment from disguising differences between designs.

For wholesale line sheets, verify any dimensions and commercial facts against current records. For resale, retain condition-relevant detail views. For pairs and sets, verify both completeness and correspondence. A shared filename prefix alone is not sufficient evidence of a correct pairing.

## 6. Video and temporal review

Video requires its own approval record even when the source photograph is approved. Record source versions, the campaign brief, and reference footage provenance or authorization where relevant. The Jewels Retouch workflow supports photo-led and authorized reference-video-led production; neither route removes output review.

Use three passes. First, watch the entire clip at normal playback speed for continuity and intended presentation. Second, pause at transitions, occlusions, highlight changes, and newly exposed surfaces. Record timestamps and inspect stones, settings, links, outline, and contact. Third, compare flagged moments with source evidence and check what the motion implies about the product.

An apparent opening clasp or newly revealed back surface may communicate construction not established by the source. Reject an unsupported product claim rather than accepting it because the movement is convincing. A slower or simpler treatment can still require review; simplicity is not proof of fidelity.

This procedure can miss brief defects. For high-consequence uses, extend review with frame-by-frame inspection or suitable manual production controls. Timestamp sampling alone cannot establish that every frame is correct. Any revised render should be reviewed from beginning to end as a new version.

## 7. Trial logging and resource accounting

The companion schema records trial ID, item code, source identity, output version, workflow, intended use, treatment, references, review states, terminal decision, reviewer, and resource observations. Video records add duration and timestamped findings. Missing observations should be null or explicitly unknown, never zero by default.

Separate credits used from review time, finishing time, and accepted exports. These quantities answer different questions. The cost of an accepted deliverable can include rejected versions and manual work. A proposed reporting exercise should state its accounting period and denominator before calculating any rate; this report calculates none.

At the report date, Jewels Retouch offers new accounts a one-time photo trial of 3 free previews and 1 HD download; video requires paid credits. Within-family gold-tone correction uses 0 credits, with no extra download charge for already HD-unlocked corrected results and the normal download charge for unpaid previews. Eligible credit-paid standard photos rated 1–3 stars qualify for one retry credit or one returned credit, one remedy per result, with lifetime account limits. Log a remedy separately from an ordinary additional version and consult current terms before budgeting.

## 8. Limitations and further validation

This method has not been tested for inter-reviewer agreement, defect detection sensitivity, review duration, or business outcomes. It contains no measured performance claims. Its categories are proposed operational controls, not a validated standard. Reviewer experience, source quality, display conditions, available physical evidence, and destination requirements can change decisions.

A future validation plan should define item selection and defect categories before review, preserve sources and outputs, and use reviewers with documented roles. Reviewers could apply the rubric independently, then examine disagreement by criterion without hiding critical errors inside an average score. Any reference judgments should state how they were established from physical inspection or trusted evidence.

Temporal validation should separately examine complete playback, timestamp checks, and frame-level review. Resource evaluation should distinguish processing, operator review, corrections, and final exports. Report exclusions and unresolved cases. Publishing that evidence could refine the rubric; no such results are implied here.

## 9. Authorship, affiliation, and conflict of interest

Serdar Arniyazov is the founder of Jewels Retouch, the platform discussed in this report, and remains active in the jewelry business. The public About page records more than ten years of gold jewelry sales experience across Europe and the Baltics. The author has a commercial interest in the platform. This founder-authored report presents an original proposed method, not independent product certification or a comparative endorsement.

## Primary references consulted

The following Jewels Retouch pages were consulted in captured source text, checked 25 October 2026. They document product context and terms; they do not empirically validate the proposed rubric.

1. [About Jewels Retouch](https://jewelsretouch.com/about): audience, founder background, source review, and trade workflows.
2. [Pricing](https://jewelsretouch.com/pricing): photo trial, credits, batch workflow, and displayed-action pricing model.
3. [Credit-back guarantee and refund policy](https://jewelsretouch.com/refund): eligibility and distinction between credit remedies and cash refunds.
4. [Best AI Jewelry Photo Editors: Which Tool Fits Your Collection?](https://jewelsretouch.com/blog/best-ai-jewelry-retouching-tools-2026): published workflow comparison and source-detail review context. This report does not adopt its competitor claims as experimental evidence.

## License

Copyright 2026 Serdar Arniyazov / Jewels Retouch. This report and its companion acceptance rubric and trial-log schema are shared under the [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/). Jewels Retouch brand marks remain the property of their owner.
