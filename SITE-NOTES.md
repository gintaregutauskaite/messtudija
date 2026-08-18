# Site notes — for humans and Cursor AI

Reference for editing the **mēs.** website. Pair with `SETUP-GUIDE.md` for install/login steps.

---

## Live infrastructure

| Service | Role |
|---------|------|
| **GitHub** | `gintaregutauskaite/messtudija` — source code, branch `main` |
| **Netlify** | Gintarė's account — hosts site, deploys on every push to `main` |
| **Formspree** | Contact form endpoint in `kontaktai.html` — inbox at formspree.io |

Netlify settings: **no build command**, publish directory **`.`** (project root).

---

## Local preview

```powershell
cd path\to\messtudija
python -m http.server 8080 --bind 127.0.0.1
```

- http://127.0.0.1:8080/index.html  
- http://127.0.0.1:8080/paslaugos.html  
- http://127.0.0.1:8080/portfolio.html  
- http://127.0.0.1:8080/kontaktai.html  

In Cursor preview: click page first, then **Ctrl+Shift+R**, or add `?v=2` to URL to bypass cache.

---

## Page structure (what to edit)

### Home (`index.html` + `css/home.css`)
- Hero photo + text overlay **`mes.`** with tilde (`˜`) centered above letter **e**
- Subtitle: `interjero dizaino studija`
- Sections: Studijos vizija, Portfolio darbai (3 thumbs), Apie mane

### Paslaugos (`paslaugos.html` + `css/paslaugos.css`)
- Hero photo → heading **Paslaugų paketai** on white background below
- 2×2 service cards: labels Mini / Midi / Kūrybinis / Pilnas, prices, expandable lists
- Bottom: **Atskirų paslaugų kainoraštis**

### Portfolio (`portfolio.html` + `css/portfolio.css` + `js/portfolio.js`)
- Hero → **Mūsų kuriamos erdvės** on background below
- Grid 36 images; click opens lightbox (large viewport-sized viewer)

### Kontaktai (`kontaktai.html` + `css/kontaktai.css` + `js/kontaktai.js`)
- Hero → **Įgyvendinkime Jūsų idėją** on background below
- Form: name, email, message → Formspree Ajax

### All pages
- Shared nav (overlay on heroes): Pagrindinis, Portfolio, Paslaugos, Kontaktai
- Shared footer: copyright, links, contact lines

---

## Common tasks

| Task | Where |
|------|--------|
| Change homepage hero text | `index.html` + `css/home.css` (`.hero__logo`, `.hero__tilde`, `.hero__tag`) |
| Change service prices | `paslaugos.html` → `.svc-card__price` |
| Replace a photo | `public/images/…` — keep similar size/aspect if possible |
| Add portfolio image | Add `37.png` in `public/images/portfolio/`, update loop in `js/portfolio.js` (currently 1–36) |
| Change contact email | Footer in every `.html` + `kontaktai.html` body |
| Change form recipient | Formspree dashboard + `action` URL in `kontaktai.html` if endpoint changes |

---

## Do not commit

- `design.fig` (large Figma export)
- `public/images/_fig-originals/` (raw extracts)
- Passwords, `.env`, API keys

Listed in `.gitignore`.

---

## Publishing checklist

1. Save files in Cursor  
2. Check locally (port 8080)  
3. `git add .` → `git commit -m "describe change"` → `git push`  
4. Netlify → **Deploys** → wait for **Published**  
5. Open live URL → **Ctrl+Shift+R**

---

## Custom domain (future)

Netlify → **Domain management** → add domain → follow DNS instructions → HTTPS is automatic.

No code change required for basic domain attach.

---

## Getting help in Cursor

Ask the AI in plain language, e.g.:

- “Change the Paslaugos hero heading text to …”
- “Replace home-about.png — same size, no crop”
- “Why isn’t my Netlify deploy updating?”

Project rules in `.cursor/rules/` give the AI permanent context about this site. See also `.cursor/rules/mes-studija-site.mdc`.

---

*Last updated: August 2026*
