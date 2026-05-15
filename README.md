# Praveen Gadiparthi — Portfolio Website

A modern, vibrant personal portfolio for a **Cloud & DevOps Engineer** built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, zero dependencies beyond Google Fonts and Font Awesome CDN.

---

## Features

- **Animated hero** — typing effect, rotating gradient photo ring, floating tech icons, parallax scrolling
- **Cursor particles** — subtle canvas-based particles that follow your mouse
- **Scroll animations** — Intersection Observer fade-ins with stagger delays
- **Timeline experience** — pulsing dot markers, tech badges, achievement bullets
- **8 skill categories** — matching the resume's complete skill set
- **4 certification cards** — with glow hover effects
- **Contact form** — opens your default email client via `mailto:`
- **Glassmorphism navbar** — blur + background on scroll
- **Mobile-first responsive** — hamburger menu with overlay, touch-friendly
- **Accessible** — semantic HTML, `aria-label` on all icon buttons, focus-visible styles

---

## File Structure

```
Portfolio/
├── index.html          ← Main page (all sections)
├── styles.css          ← All styling, animations, responsive design
├── script.js           ← Interactive JavaScript
├── profile-photo.jpg   ← Your profile photo (add this yourself — see below)
├── Praveen_Gadiparthi.pdf  ← Resume PDF for download button
└── README.md           ← This file
```

---

## Adding Your Profile Photo

1. Name your photo file exactly **`profile-photo.jpg`**
2. Place it in the same folder as `index.html`
3. Recommended: square crop, at least **500×500px**, JPG or PNG
4. If no photo is found, the site displays a **"PG" gradient placeholder** automatically

---

## Deploy to GitHub Pages — Step by Step

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it: `praveengadiparthi-max.github.io` *(exactly your GitHub username + `.github.io`)*
4. Set visibility to **Public**
5. Click **Create repository**

### Step 2: Upload Your Files

**Option A — Upload via GitHub web interface (easiest):**

1. Open your new repository
2. Click **Add file → Upload files**
3. Drag and drop all 4 files (plus `profile-photo.jpg` and the PDF)
4. Scroll down → write a commit message like `"Initial portfolio deployment"`
5. Click **Commit changes**

**Option B — Using Git CLI:**

```bash
# In your Portfolio folder:
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/praveengadiparthi-max/praveengadiparthi-max.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository → **Settings** tab
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: **main**, folder: **/ (root)**
5. Click **Save**

### Step 4: Access Your Live Site

After 1–3 minutes, your site will be live at:

```
https://praveengadiparthi-max.github.io
```

GitHub will show you the URL in the Pages settings once it's deployed.

---

## Custom Domain (Optional)

If you own a domain (e.g., `praveengadiparthi.com`):

1. In your domain registrar's DNS settings, add a **CNAME** record:
   - Name: `www`
   - Value: `praveengadiparthi-max.github.io`
2. In GitHub Pages settings → **Custom domain** → enter your domain
3. Check **Enforce HTTPS**

---

## Customization Guide

### Update Contact Information

In `index.html`, search for `praveengadiparthi007@gmail.com` and replace with your actual email. Also update:
- Phone: search `940) 299-6707`
- Location: search `Cary, NC`
- LinkedIn URL: search `linkedin.com/in/praveen-gadiparthi`
- GitHub URL: search `github.com/praveengadiparthi-max`

### Change Color Scheme

Open `styles.css` and edit the CSS variables at the top:

```css
:root {
    --primary-start:  #667eea;   /* Purple-blue gradient start */
    --primary-end:    #764ba2;   /* Purple gradient end */
    --accent-start:   #f093fb;   /* Pink-purple accent */
    --accent-end:     #fa709a;   /* Pink accent */
    --bg-dark:        #0f0f23;   /* Darkest background */
    --bg-dark-2:      #1a1a2e;   /* Medium dark */
    --bg-dark-3:      #16213e;   /* Dark blue-ish */
}
```

### Add/Remove Skills

In `index.html`, find the `<!-- Skills -->` section. Each skill card looks like:

```html
<div class="skill-card fade-in">
    <div class="skill-header">
        <div class="skill-icon icon-aws"><i class="fab fa-aws"></i></div>
        <h3>Category Name</h3>
    </div>
    <div class="skill-tags">
        <span class="tag">Skill Name</span>
        <!-- add more tags here -->
    </div>
</div>
```

### Add Experience Entries

Copy an existing `.timeline-item` block and update the content. The `.current-badge` class adds the glowing "Current" indicator to the active role.

### Update Typing Strings

In `script.js`, edit the `typingStrings` array:

```javascript
const typingStrings = [
    'Cloud & DevOps Engineer',
    'AWS Solutions Architect',
    // add your own strings here
];
```

### Disable Cursor Particles

In `script.js`, delete or comment out the entire **"Cursor Particle Effect"** section. Also remove `<canvas id="cursor-canvas">` from `index.html`.

---

## Browser Compatibility

| Browser | Supported |
|---------|-----------|
| Chrome 90+ | ✅ Full support |
| Firefox 88+ | ✅ Full support |
| Safari 15+ | ✅ Full support |
| Edge 90+ | ✅ Full support |
| Chrome Mobile | ✅ Full support |

**Note:** `conic-gradient` (used for the spinning ring) requires Chrome 69+, Firefox 83+, Safari 12.1+.

---

## Troubleshooting

**Site not loading after deploy:**
- Wait 5 minutes — GitHub Pages can take time to propagate
- Check that `index.html` is in the **root** of the repository (not in a subfolder)
- Go to repository → **Actions** tab to see if the deployment succeeded

**Profile photo not showing:**
- Ensure the file is named exactly `profile-photo.jpg` (case-sensitive on Linux servers)
- The site auto-falls back to the "PG" placeholder if the image 404s

**Resume download not working:**
- Ensure `Praveen_Gadiparthi.pdf` is uploaded to the repository
- The filename must match exactly what's in the `href` attribute of the download button

**Typing animation not working:**
- Check browser console for JavaScript errors (F12 → Console)
- Ensure `script.js` is in the same folder as `index.html`

**CSS animations feel slow on mobile:**
- This is expected on lower-end devices; the site gracefully degrades

---

## Local Development

No build tools needed. Just open `index.html` in a browser:

```bash
# Using Python (quick local server — avoids CORS issues):
python -m http.server 8080
# Then open: http://localhost:8080

# Using Node.js:
npx serve .
# Then open: http://localhost:3000
```

---

## License

Personal portfolio — all rights reserved by Praveen Gadiparthi.

---

*Built with pure HTML, CSS & JS — no frameworks, no build step, just cloud-speed deployment.*
