# Jewelry Image Review by Jewels Retouch

Free desktop Chrome extension for manual jewelry image comparison. No accounts, uploads, telemetry, host permissions, content scripts or remote code.

## Install

1. Download and extract jewelry-image-review-1.0.0.zip from the parent resource site, or keep this extension folder.
2. Open chrome://extensions in desktop Chrome and enable Developer mode.
3. Choose Load unpacked and select the folder containing manifest.json.
4. Click the extension toolbar action to open a fresh review tab.

This is unpacked distribution; Chrome Web Store publication or approval is not claimed.

Choose local PNG, JPEG or WebP images (up to 25 MB, 60 megapixels and 16,000 pixels per side). Compare side by side or use the before/after reveal slider. Inspect all eight criteria yourself; the extension does not automatically detect changes or certify accuracy. Mark Pass only after inspection. Leave unavailable details unreviewed and explain in notes.

Export includes filenames, image metadata, manual selections and notes, never image pixels. A pass means all eight selections are Pass; any Needs correction selection determines the overall correction result. Otherwise the review is incomplete. Image replacement or removal clears prior decisions and notes. Invalid replacement retains the previous valid image and decisions. Reset or close the tab to discard tab memory. Downloaded exports and browser download history remain until removed.

See privacy.html for exact local processing behavior, LICENSE for MIT code terms, and ASSET-PROVENANCE.json for the existing Jewels Retouch brand assets. Brand marks remain owned by Jewels Retouch. The parent site provides installation help, complete source guide/report and presentation resources.

## Runtime

manifest.json and background.js define the Manifest V3 toolbar action. review.html, review.css and review.js provide comparison, bounded image decoding, checklist state and local JSON download. No runtime dependencies or build step are required. This curated distribution excludes development fixtures, screenshots, browser profiles and private verification logs.
