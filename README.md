# Davronbek Nurmakhatov — Portfolio

Personal portfolio site. Static HTML/CSS/JS — no build step.

## Editing content

All text lives in `index.html`. Sections are clearly delimited with comments (`<section id="...">`). Update copy in place. Colors and spacing are tokenized in `:root` at the top of `styles.css` — change the accent by editing `--accent` and `--accent-2`.

## Updating certificates

Drop new PDFs into `assets/certificates/` and add a `<li><a>` entry to the `.certs` list in `index.html`. Use `%20` in href paths for spaces in filenames (already done for existing ones).
