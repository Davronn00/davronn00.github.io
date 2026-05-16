# Davronbek Nurmakhatov — Portfolio

Personal portfolio site. Static HTML/CSS/JS — no build step.

## View locally

Just double-click `index.html` in this folder, or right-click → Open with → your browser.

For a proper local server (recommended for relative-path PDFs and font preloads):

```powershell
# from this folder, pick whichever you have installed
python -m http.server 8000
# then open http://localhost:8000
```

## Files

```
portfolio/
  index.html
  styles.css
  script.js
  README.md
  assets/
    Davronbek_Nurmakhatov_Resume.pdf
    certificates/
      Google Coursera.pdf
      Deloitte Forage Certificate.pdf
      Udemy data analyst certificate.pdf
      Excel VBA Certificate.pdf
      Coursera Excel certificate.pdf
      Coursera certificate.pdf
      IELTS.pdf
      Aiesec certificate.pdf
      Employment Certificate.pdf
      Reference letter Afeja.pdf
```

## Deploying

### GitHub Pages (free, recommended)

1. Create a new repo on GitHub, e.g. `davronn00.github.io` (use your username for a root-level site) or `portfolio`.
2. From this folder:
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Davronn00/davronn00.github.io.git
   git push -u origin main
   ```
3. In the repo settings → **Pages** → Source: `main` branch / root. Done.

If you used a `portfolio` repo instead, the URL becomes `https://davronn00.github.io/portfolio/`.

### Netlify drop

Go to https://app.netlify.com/drop, drag this whole `portfolio` folder onto the page. Live in seconds. You can rename the auto-generated subdomain to something like `davronbek.netlify.app` in site settings.

### Vercel

```powershell
npm i -g vercel
vercel
```
Follow the prompts. Auto-deploys static sites with no config.

## Editing content

All text lives in `index.html`. Sections are clearly delimited with comments (`<section id="...">`). Update copy in place. Colors and spacing are tokenized in `:root` at the top of `styles.css` — change the accent by editing `--accent` and `--accent-2`.

## Updating certificates

Drop new PDFs into `assets/certificates/` and add a `<li><a>` entry to the `.certs` list in `index.html`. Use `%20` in href paths for spaces in filenames (already done for existing ones).
