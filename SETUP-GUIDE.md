# mēs. website — setup guide for Gintarė

This guide explains how to manage the studio website on your computer using **Cursor**, **GitHub**, and **Netlify**.

You will receive login details separately (do not store passwords in this file).

---

## What you are managing

| Item | Purpose |
|------|---------|
| **Website files** | HTML, CSS, images — the site itself |
| **GitHub** | Stores the website code and history of changes |
| **Netlify** | Publishes the site to the internet when GitHub is updated |
| **Cursor** | Program on your computer to edit files and send changes to GitHub |

**Live site:** check Netlify → your site → **Domain management** or **Site overview** for the current URL.

**GitHub repository:** `https://github.com/gintaregutauskaite/messtudija`

---

## Part 1 — Install required software (one time)

### 1.1 Git

1. Download Git for Windows: https://git-scm.com/download/win  
2. Run the installer → accept defaults → finish.  
3. Restart the computer if asked.

**Check it works:** open **PowerShell** or **Terminal** and run:

```powershell
git --version
```

You should see a version number (e.g. `git version 2.x`).

### 1.2 Cursor

1. Download Cursor: https://cursor.com  
2. Install and open Cursor.  
3. Sign in with the account you will use (or the one provided to you).

### 1.3 (Optional) Tell Cursor where Git is

If Cursor says Git is not found:

1. Cursor → **File** → **Preferences** → **Settings**  
2. Search for `git.path`  
3. Set value to:

```
C:\Program Files\Git\cmd\git.exe
```

---

## Part 2 — GitHub (one time)

### 2.1 Log in

1. Open https://github.com  
2. Log in as **gintaregutauskaite** (credentials provided separately).

### 2.2 Confirm you see the repository

Open: https://github.com/gintaregutauskaite/messtudija  

You should see folders: `css`, `js`, `public`, and files like `index.html`, `paslaugos.html`.

### 2.3 Set your Git identity (one time, on your computer)

Open **Terminal** in Cursor (**Ctrl + `**) and run (use your real name and the **same email as on GitHub**):

```powershell
git config --global user.name "Gintarė Gutauskaitė"
git config --global user.email "YOUR-GITHUB-EMAIL@example.com"
```

Replace the email with the email verified on your GitHub account.

---

## Part 3 — Open the project in Cursor (one time)

### 3.1 Clone the repository

**Option A — Cursor UI (easiest)**

1. Cursor → **File** → **New Window**  
2. **Clone repo** (or Command Palette: **Ctrl+Shift+P** → type `Git: Clone`)  
3. Paste: `https://github.com/gintaregutauskaite/messtudija.git`  
4. Choose a folder, e.g. `C:\Users\YourName\Documents\messtudija`  
5. Click **Open** when clone finishes.

**Option B — Terminal**

```powershell
cd C:\Users\YourName\Documents
git clone https://github.com/gintaregutauskaite/messtudija.git
```

Then in Cursor: **File** → **Open Folder** → select the `messtudija` folder.

### 3.2 You should see this structure

```
messtudija/
  index.html          ← home page
  paslaugos.html      ← services
  portfolio.html      ← portfolio
  kontaktai.html      ← contact
  css/
  js/
  public/images/
  SETUP-GUIDE.md      ← this file
```

---

## Part 4 — Preview the site on your computer

Before publishing, check changes locally.

1. In Cursor, open **Terminal** (**Ctrl + `**).  
2. Make sure you are in the project folder:

```powershell
cd "C:\Users\YourName\Documents\messtudija"
```

3. Start a small local web server:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

4. Open in browser:

- Home: http://127.0.0.1:8080/index.html  
- Services: http://127.0.0.1:8080/paslaugos.html  
- Portfolio: http://127.0.0.1:8080/portfolio.html  
- Contact: http://127.0.0.1:8080/kontaktai.html  

5. To stop the server: click the terminal → **Ctrl+C**.

**If `python` is not found:** install Python from https://www.python.org/downloads/ (tick “Add Python to PATH”), then try again.

---

## Part 5 — Edit a page and publish live

Every time you change the site and want it online:

### 5.1 Edit files

- Open a file in Cursor (e.g. `paslaugos.html` or a file in `css/`).  
- Save with **Ctrl+S**.

### 5.2 Preview locally (recommended)

Run the local server (Part 4) and check the page in the browser.

### 5.3 Send changes to GitHub

**Using Terminal (recommended — avoids extra “contributor” issues on Netlify):**

```powershell
cd "C:\Users\YourName\Documents\messtudija"
git status
git add .
git commit -m "Short description of what you changed"
git push
```

GitHub may ask you to log in the first time (browser window or token).

**Using Cursor Source Control (alternative):**

1. **Ctrl+Shift+G** → Source Control  
2. Review changed files under **Changes**  
3. Enter a message → **Commit**  
4. Click **Sync** or **Push**

### 5.4 Netlify updates automatically

1. Log in to https://app.netlify.com (Gintarė’s account).  
2. Open your site → **Deploys**.  
3. Wait 1–2 minutes until status is **Published** (green).  
4. Open the live site URL and refresh with **Ctrl+Shift+R**.

**You do not need to upload files manually anymore.** Push to GitHub → Netlify deploys.

---

## Part 6 — Netlify (ongoing management)

### What Netlify does

- Hosts the public website  
- Rebuilds the site after each GitHub push  
- Will host your custom domain when you add one  

### Useful Netlify pages

| Section | Use |
|---------|-----|
| **Site overview** | Live URL, quick open site |
| **Deploys** | See if latest push succeeded |
| **Domain management** | Add custom domain (e.g. messtudija.lt) |
| **Build & deploy** | GitHub connection, branch `main`, build command empty |

### Build settings (should already be correct)

- **Branch:** `main`  
- **Build command:** *(empty)*  
- **Publish directory:** `.` (root)  

This is a static site — no build step required.

### If a deploy fails

1. Open **Deploys** → click the failed deploy → read the log.  
2. Common fixes:  
   - GitHub not connected → **Build & deploy** → reconnect repository  
   - Wrong branch → set to `main`  
3. Ask for help if the error mentions “contributor” or “build failed”.

---

## Part 7 — Custom domain (when ready)

Do this on **Gintarė’s Netlify account**, not anyone else’s.

1. Buy a domain (e.g. `.lt` from Hostinger, Domreg, etc.).  
2. Netlify → your site → **Domain management** → **Add a domain**.  
3. Follow Netlify’s DNS instructions (nameservers or A/CNAME records).  
4. Wait for DNS (often 15 minutes to a few hours).  
5. Netlify enables **HTTPS** automatically.  
6. Set one **Primary domain** (with or without `www`).

No code changes are required for a basic domain setup.

---

## Part 8 — Other services (already on the site)

| Service | Purpose | Action needed |
|---------|---------|----------------|
| **Formspree** | Contact form emails | Form sends to inbox configured in Formspree; log in at https://formspree.io if you need to change the receiving email |
| **Google Fonts** | Montserrat font | Loaded from internet; no login |
| **Instagram link** | Footer social link | Edit `kontaktai.html` / footer in HTML files if handle changes |

---

## Part 9 — What NOT to put on GitHub

These are ignored or should never be uploaded:

- `design.fig` (large Figma file)  
- `public/images/_fig-originals/` (raw design exports)  
- Passwords, API secrets, `.env` files  
- Personal passwords in any file  

The `.gitignore` file in the project helps block some of these.

---

## Part 10 — Quick reference

### Daily workflow

```
1. Open project in Cursor
2. Edit files → Save
3. Preview locally (optional)
4. git add . → git commit -m "message" → git push
5. Check Netlify Deploys → Published
6. Check live site in browser
```

### Important URLs

| What | URL |
|------|-----|
| GitHub repo | https://github.com/gintaregutauskaite/messtudija |
| GitHub login | https://github.com/login |
| Netlify login | https://app.netlify.com |
| Cursor download | https://cursor.com |

*(Fill in live site URL and Netlify site name on your copy.)*

### Pages on the site

| File | Page |
|------|------|
| `index.html` | Home (Pagrindinis) |
| `paslaugos.html` | Services |
| `portfolio.html` | Portfolio |
| `kontaktai.html` | Contact |

### Cursor AI (built-in assistant)

This project includes **Cursor rules** so the AI knows the site structure, deployment, and how to edit safely.

- Rules file: `.cursor/rules/mes-studija-site.mdc` (loads automatically when you open the folder)
- Extra reference: `SITE-NOTES.md` (pages, common tasks, checklist)

**Examples you can ask in Cursor chat:**

- “Change the text on the Paslaugos page heading to …”
- “How do I publish my changes to the live site?”
- “Replace the about photo on the homepage”

You do not need to explain GitHub/Netlify from scratch each time — the rules handle that.

### Getting help

- Deploy not updating → check Netlify **Deploys** and that you pushed to `main`  
- Git push asks for password → use GitHub Personal Access Token, not account password  
- Site looks old in browser → **Ctrl+Shift+R** hard refresh  
- Contact Marius / your developer with: what you changed, screenshot of error, link to failed Netlify deploy  

---

## Checklist — first-time setup

- [ ] Git installed  
- [ ] Cursor installed  
- [ ] GitHub login works  
- [ ] Git `user.name` and `user.email` configured  
- [ ] Repository cloned to computer  
- [ ] Local preview works (`python -m http.server 8080`)  
- [ ] Test push to GitHub works  
- [ ] Netlify shows **Published** after push  
- [ ] Live site opens and looks correct  
- [ ] Netlify login saved (Gintarė’s account only)  
- [ ] Passwords stored safely (password manager — not in email/chat long-term)  

---

*Document version: August 2026 — mēs. interjero dizaino studija website*
