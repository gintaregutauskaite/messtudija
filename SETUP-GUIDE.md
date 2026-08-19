# mēs. website — complete setup guide for Gintarė

Step-by-step guide to set up **your computer** and manage the studio website.

**Passwords and logins:** store in a password manager (or receive separately from Marius). **Do not** save passwords in this file or in GitHub.

---

## Overview — what each service does

| Service | Your login | What it does |
|---------|------------|--------------|
| **Hostinger** | Gintarė | Domain `messtudija.lt`, DNS, email mailbox, hosting (optional backup) |
| **GitHub** | `gintaregutauskaite` | Stores website code — master copy |
| **Netlify** | Gintarė | **Hosts the live website** — auto-updates when GitHub changes |
| **Cursor** | Gintarė | Program on your PC to edit files and push to GitHub |
| **Gmail** | Your personal Gmail | Where you read/send mail (connected to Hostinger email) |
| **Formspree** | Gintarė | Sends contact form submissions to your inbox |

**Live website:** https://www.messtudija.lt  
**GitHub repo:** https://github.com/gintaregutauskaite/messtudija  
**Netlify site name:** `messtudia2` (open this site in Netlify — not an old/test site)

---

## Master checklist — do in this order

Use this on **first setup day** on your computer. Tick each box when done.

### A. Software on your computer
- [ ] **1.** Install Git → check with `git --version`
- [ ] **2.** Install Cursor → https://cursor.com
- [ ] **3.** Install Python (for local preview) → https://www.python.org/downloads/ — tick **Add Python to PATH**

### B. Accounts — confirm you can log in
- [ ] **4.** GitHub → https://github.com/login (account: **gintaregutauskaite**)
- [ ] **5.** Netlify → https://app.netlify.com — open site **`messtudia2`**
- [ ] **6.** Hostinger → https://www.hostinger.com — hPanel opens
- [ ] **7.** Formspree → https://formspree.io (contact form inbox)
- [ ] **8.** Gmail → your personal account (for email setup later)

### C. Project on your computer
- [ ] **9.** Set Git name and email (Part 2 below)
- [ ] **10.** Clone repository into `Documents\messtudija` (Part 3)
- [ ] **11.** Open folder in Cursor
- [ ] **12.** Local preview works — http://127.0.0.1:8080/index.html (Part 4)

### D. Test publish once
- [ ] **13.** Make a tiny test edit → save
- [ ] **14.** `git add .` → `git commit -m "Test"` → `git push` (Part 5)
- [ ] **15.** Netlify → **Deploys** → **Published**
- [ ] **16.** Live site https://www.messtudija.lt looks correct (**Ctrl+Shift+R**)

### E. Email (when ready)
- [ ] **17.** Create mailbox on Hostinger (Part 8)
- [ ] **18.** Connect Gmail — receive + send as studio address (Part 8)
- [ ] **19.** Add email signature in Gmail (Part 9)

---

## Part 1 — Install Git, Cursor, Python (one time)

### 1.1 Git

1. Download: https://git-scm.com/download/win  
2. Install → accept defaults → finish.  
3. Restart if asked.

Check:

```powershell
git --version
```

### 1.2 Cursor

1. Download: https://cursor.com  
2. Install and open.  
3. Sign in with your Cursor account.

**If Cursor cannot find Git:**  
Settings → search `git.path` → set to:

```
C:\Program Files\Git\cmd\git.exe
```

### 1.3 Python (local preview only)

1. Download: https://www.python.org/downloads/  
2. During install, tick **Add Python to PATH**.  
3. Check:

```powershell
python --version
```

---

## Part 2 — GitHub and Git identity (one time)

### 2.1 Log in to GitHub

1. Open https://github.com/login  
2. Log in as **gintaregutauskaite**.  
3. Open the repo: https://github.com/gintaregutauskaite/messtudija  

You should see: `index.html`, `css/`, `js/`, `public/`, `SETUP-GUIDE.md`.

### 2.2 Set your name on this computer

In Cursor: **Terminal** (**Ctrl + `**) and run (use **your GitHub email**):

```powershell
git config --global user.name "Gintarė Gutauskaitė"
git config --global user.email "ginttaregutta@gmail.com"
```

Use the same email as on your GitHub account.

### 2.3 First-time Git push login

When you `git push`, GitHub may ask you to sign in:

- **Do not** use your GitHub account password for push.  
- Use a **Personal Access Token (PAT)** or sign in via browser when Git asks.  
- Help: https://docs.github.com/en/authentication  

---

## Part 3 — Clone project and open in Cursor (one time)

### Option A — Cursor (easiest)

1. **File** → **New Window**  
2. **Clone repo** (or **Ctrl+Shift+P** → `Git: Clone`)  
3. URL: `https://github.com/gintaregutauskaite/messtudija.git`  
4. Folder: e.g. `C:\Users\Gintarė\Documents\messtudija`  
5. **Open** when finished.

### Option B — Terminal

```powershell
cd C:\Users\Gintarė\Documents
git clone https://github.com/gintaregutauskaite/messtudija.git
```

Then Cursor → **File** → **Open Folder** → select `messtudija`.

### Project folder structure

```
messtudija/
  index.html          ← Pagrindinis (home)
  paslaugos.html      ← Paslaugos
  portfolio.html      ← Portfolio
  kontaktai.html      ← Kontaktai
  css/                ← styles
  js/                 ← scripts
  public/images/      ← photos
  favicon.svg         ← browser tab icon
  SETUP-GUIDE.md      ← this file
  SITE-NOTES.md       ← quick editing reference
  .cursor/rules/      ← AI context for Cursor (automatic)
```

---

## Part 4 — Preview on your computer

Before publishing live, check changes locally.

1. Cursor → **Terminal** (**Ctrl + `**)  
2. Go to project folder:

```powershell
cd "C:\Users\Gintarė\Documents\messtudija"
```

3. Start server:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

4. Open in **Chrome or Edge** (not only Cursor preview):

| Page | URL |
|------|-----|
| Home | http://127.0.0.1:8080/index.html |
| Paslaugos | http://127.0.0.1:8080/paslaugos.html |
| Portfolio | http://127.0.0.1:8080/portfolio.html |
| Kontaktai | http://127.0.0.1:8080/kontaktai.html |

5. Stop server: click terminal → **Ctrl+C**.

**Note:** `127.0.0.1` works **only on this computer**. Your phone uses https://www.messtudija.lt instead.

**Mobile preview on PC:** **F12** → phone icon (**Ctrl+Shift+M**) → width ~390px.

---

## Part 5 — Edit and publish (every time you change the site)

### 5.1 Edit

- Open file in Cursor → change text, images, prices → **Ctrl+S**.

### 5.2 Preview locally (recommended)

Run Part 4 server and check in browser.

### 5.3 Push to GitHub

```powershell
cd "C:\Users\Gintarė\Documents\messtudija"
git status
git add .
git commit -m "Short description of change"
git push origin main
```

**Alternative — Cursor Source Control:** **Ctrl+Shift+G** → message → **Commit** → **Push**.

### 5.4 Netlify publishes automatically

1. Log in: https://app.netlify.com  
2. Open **`messtudia2`** (not another site).  
3. **Deploys** → wait **Published** (1–2 min).  
4. Open https://www.messtudija.lt → **Ctrl+Shift+R**.

**You never upload files to Netlify manually.** Push to GitHub → Netlify deploys.

---

## Part 6 — Netlify (important details)

### Correct site

Your live domain is connected to Netlify site **`messtudia2`**.

If you open Netlify and see no new deploys after a push, you may be on the **wrong account** or **wrong site**. Always use Gintarė’s Netlify and site **`messtudia2`**.

### Build settings (should already be set)

| Setting | Value |
|---------|--------|
| Repository | `gintaregutauskaite/messtudija` |
| Branch | `main` |
| Build command | *(empty)* |
| Publish directory | `.` (dot = project root) |

### Netlify Free plan

- **$0/month** — not a trial with an end date.  
- Limited by **monthly usage credits** (deploys + traffic).  
- For a small studio site, Free is usually enough for a long time.  
- If limits are ever hit, site pauses until next month — or upgrade to Personal (~$9/month).

### If deploy fails

1. **Deploys** → click failed deploy → read log.  
2. Check GitHub is connected under **Build & deploy**.  
3. Branch must be **`main`**.  
4. Ask for help with: screenshot + link to failed deploy.

---

## Part 7 — Domain (already set up)

| Item | Value |
|------|--------|
| Domain | `messtudija.lt` / `www.messtudija.lt` |
| Bought at | Hostinger |
| Website points to | Netlify (`messtudia2.netlify.app`) |
| DNS managed at | Hostinger → **DNS / DNS Zone** |

**Primary domain** in Netlify: set **`www.messtudija.lt`** or **`messtudija.lt`** as you prefer; redirect the other.

No code changes needed for domain — only DNS + Netlify settings.

---

## Part 8 — Email: Hostinger + Gmail (no Outlook)

You can use **Gmail** for daily mail and still send/receive as **`gintare@messtudija.lt`** (or the address you create).

### 8.1 Create mailbox on Hostinger

1. Hostinger **hPanel** → **Emails** → **Email accounts**  
2. Create: e.g. `gintare@messtudija.lt` + strong password  
3. Enable **DKIM** (Emails → DKIM) — reduces spam issues  

### 8.2 Receive mail in Gmail

**Easiest — forwarding:**

1. Hostinger → email account → **Forwarders**  
2. Forward `gintare@messtudija.lt` → your personal Gmail address  

Mail arrives in your normal Gmail inbox.

### 8.3 Send mail *from* studio address in Gmail

1. Gmail → **Settings** (gear) → **See all settings**  
2. **Accounts and Import** → **Send mail as** → **Add another email address**  
3. Name: `Gintarė Gutauskaitė`  
4. Email: `gintare@messtudija.lt`  
5. SMTP settings (Hostinger):

| Field | Value |
|-------|--------|
| SMTP server | `smtp.hostinger.com` |
| Port | **465** (SSL) or **587** (TLS) |
| Username | full email, e.g. `gintare@messtudija.lt` |
| Password | Hostinger mailbox password |

6. Gmail sends verification — click the link.  
7. When writing email, use **From:** dropdown to pick studio address.

### 8.4 Contact form (Formspree)

Website contact form uses **Formspree**, not Hostinger mail directly.

1. Log in: https://formspree.io  
2. Set receiving email to the inbox you actually read (e.g. your Gmail or `gintare@messtudija.lt`).  
3. Site form endpoint is in `kontaktai.html` — only change if Formspree gives you a new URL.

### 8.5 Site vs email address

The website footer shows **`gintare@messtudija.lt`** — keep in sync with Hostinger mailbox and Formspree inbox.

---

## Part 9 — Gmail email signature (copy-paste)

Gmail → **Settings** → **General** → **Signature** → paste:

```
Pagarbiai,

Gintarė Gutauskaitė
mēs. interjero dizaino studija

El. paštas: gintare@messtudija.lt
Tel.: +370 678 24470
Svetainė: www.messtudija.lt
Instagram: https://www.instagram.com/mes.studija/
```

Adjust email line if you use a different address.

---

## Part 10 — Using Cursor AI

This project includes rules so Cursor understands the site automatically.

- Rules: `.cursor/rules/mes-studija-site.mdc`  
- Extra notes: `SITE-NOTES.md`  

**Example prompts:**

- “Change the Paslaugos hero heading to …”  
- “How do I publish my changes?”  
- “Update the price on the Midi package to …”  

---

## Part 11 — What NOT to upload to GitHub

- Passwords or API keys  
- `design.fig` (large Figma file)  
- `public/images/_fig-originals/`  

These are blocked or listed in `.gitignore`.

---

## Part 12 — Quick reference

### Daily workflow

```
1. Open messtudija folder in Cursor
2. Edit → Save
3. Preview locally (optional)
4. git add . → git commit -m "message" → git push
5. Netlify messtudia2 → Deploys → Published
6. Check https://www.messtudija.lt
```

### Important URLs

| What | URL |
|------|-----|
| Live site | https://www.messtudija.lt |
| GitHub repo | https://github.com/gintaregutauskaite/messtudija |
| Netlify | https://app.netlify.com |
| Hostinger | https://www.hostinger.com |
| Formspree | https://formspree.io |
| Instagram | https://www.instagram.com/mes.studija/ |

### Which pages to edit

| File | Page |
|------|------|
| `index.html` | Pagrindinis |
| `paslaugos.html` | Paslaugos |
| `portfolio.html` | Portfolio |
| `kontaktai.html` | Kontaktai |

### Getting help

Send Marius:

- What you tried to change  
- Screenshot of any error  
- Link to failed Netlify deploy (if publish failed)  

Common fixes:

| Problem | Fix |
|---------|-----|
| Deploy not showing | Wrong Netlify account or wrong site — use **messtudia2** |
| Git push fails | Use GitHub token, not password |
| Site looks old | **Ctrl+Shift+R** hard refresh |
| Local link not working | Run `python -m http.server 8080 --bind 127.0.0.1` in project folder |

---

## Part 13 — Hostinger hosting (you bought it)

**Today the website runs on Netlify** (free auto-deploy from GitHub).  
**Hostinger hosting** is available if you ever want everything in one place — but you do **not** need both serving the same site.

| Use Hostinger for | Use Netlify for |
|-------------------|-----------------|
| Domain + DNS | Live website hosting |
| Email mailbox | Auto-deploy from GitHub |
| Optional backup hosting | HTTPS + CDN |

For now: keep Netlify for the website; use Hostinger for domain and email.

---

*Document version: August 2026 — mēs. interjero dizaino studija*
