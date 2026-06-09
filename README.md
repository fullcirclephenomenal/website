# Full Circle Phenomenal — Website

**Live Limitless** | full-circle-phenomenal.com

A pure HTML/CSS/JS static site. No frameworks. No build tools. Works offline, deploys to Vercel in one click.

---

## 📁 Folder Structure

```
fcp-site/
├── index.html              ← Home page
├── css/
│   └── global.css          ← All shared styles (colors, fonts, buttons, nav, footer)
├── js/
│   ├── components.js       ← Injects nav + footer into every page, scroll effects
│   └── main.js             ← Extra utilities (not required on most pages)
├── images/                 ← ⭐ PUT ALL YOUR PHOTOS HERE
│   └── (your jpg/png files)
└── pages/
    ├── about.html
    ├── mission.html
    ├── fire-arts.html
    ├── yoga-mentorship.html
    ├── blog-travel.html
    ├── blog-wellness.html
    ├── shop.html
    ├── support.html
    ├── early-access.html
    └── images.html         ← Internal image placement guide (not public)
```

---

## 🖼️ How to Add Your Images

1. **Export your photo** — JPG is fine. Resize to max 1600px wide (saves load time). Use a free tool like [Squoosh](https://squoosh.app) to compress.
2. **Drop the file** into the `/images/` folder
3. **Open the HTML page** where it should appear
4. **Find the placeholder** — they look like this:
   ```html
   <div class="blog-card__img-ph">[ Athens Greece Photo ]</div>
   ```
5. **Replace it** with a real image tag:
   ```html
   <img class="blog-card__img" src="../images/athens-blog-cover.jpg" alt="Athens Greece in winter" loading="lazy">
   ```
   *(For `index.html` use `images/` not `../images/` — no `..` needed from the root)*

**See `pages/images.html`** for a full checklist of every image slot on the site.

---

## 🌐 Deploying to GitHub + Vercel

### Step 1 — Push to GitHub
1. Create a free account at [github.com](https://github.com)
2. Click **New repository** → name it `fcp-site` → Public → Create
3. Download [GitHub Desktop](https://desktop.github.com) (easiest for non-coders)
4. In GitHub Desktop: **Add existing repository** → select your `fcp-site` folder
5. Click **Publish repository** → push to GitHub

### Step 2 — Deploy on Vercel
1. Create a free account at [vercel.com](https://vercel.com) (sign in with GitHub)
2. Click **New Project** → Import your `fcp-site` repository
3. Leave all settings as default → click **Deploy**
4. ✅ Your site is live at `something.vercel.app` within 60 seconds

### Step 3 — Update the site later
1. Edit any HTML file in your local `fcp-site` folder
2. In GitHub Desktop: write a short commit message → click **Commit** → **Push**
3. Vercel auto-deploys within ~30 seconds. Done.

---

## 🔗 Connecting Third-Party Services

### MailerLite (Email Signup)
- Log into MailerLite → **Forms** → create an embedded form
- Copy the embed code
- In `index.html` and `pages/early-access.html`, find the comment:
  `<!-- REPLACE THIS BLOCK with your actual MailerLite embed code -->`
- Replace the placeholder div with your MailerLite code

### Calendly (Mentorship Booking)
- Current setup: buttons link directly to `https://calendly.com/full-circle-phenomenal/30min`
- To embed inline: log into Calendly → **Scheduling links** → **Embed** → copy inline widget code
- In `pages/yoga-mentorship.html`, find the `calendar-embed` div and paste

### Bookvault (Physical Book)
- In `pages/shop.html`, find `href="BOOKVAULT_URL"` and replace with your Bookvault product page link

### Gumroad (Ebook)
- In `pages/shop.html`, find `href="GUMROAD_URL"` and replace with your Gumroad product link

### Contact Forms
- Currently use a basic `onsubmit` handler that shows a thank-you message
- To actually receive emails: sign up at [formspree.io](https://formspree.io) (free tier = 50 submissions/month)
- Replace `<form action="#"` with `<form action="https://formspree.io/f/YOUR_ID"`

### Systeme.io (Courses)
- Add course links directly to `pages/shop.html` product cards — just update the `href` on the buy buttons

### Printful (Merch)
- When ready, add the Printful store link to the merch product card in `pages/shop.html`

---

## 📝 Adding a New Blog Post

1. Open `pages/blog-travel.html` or `pages/blog-wellness.html`
2. Copy one of the existing `<a class="blog-card">` blocks
3. Paste it above the others (newest first)
4. Update: tag, title, date, excerpt, image, and the `href` link
5. For the full post: create a new `.html` file in `pages/` using the same nav/footer pattern
6. Save, commit, push → live in 30 seconds

---

## 🎨 Changing Colors or Fonts

All brand colors and fonts are defined in **one place**: `css/global.css` at the top under `:root { }`.
Change a value there and it updates everywhere on the site instantly.

---

## 📌 When You're Ready to Go Live with Your Real Domain

1. In Vercel dashboard → **Domains** → Add `full-circle-phenomenal.com`
2. Vercel gives you DNS records to add in your domain registrar (GoDaddy, Namecheap, etc.)
3. DNS propagates in 1–48 hours → your site is live on the real domain
4. During transition: your WordPress site stays live until you flip the DNS — zero downtime

---

*Built with ♥ for Jesse & Catherine Hart — Full Circle Phenomenal*
