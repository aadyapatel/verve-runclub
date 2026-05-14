# VERVE Run Club — Website

The official website for Verve Run Club at KIIT University, Bhubaneswar.

## Tech Stack
- **Next.js 15** (App Router, static export)
- **Tailwind CSS**
- **Netlify** (hosting + forms)

---

## Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```

Open http://localhost:3000

---

## Project Structure

```
verve-runclub/
├── app/
│   ├── layout.js         # Root layout (fonts, nav, footer)
│   ├── page.js           # Homepage
│   ├── globals.css       # Global styles & design tokens
│   ├── runs/
│   │   └── page.js       # Events/Runs page
│   ├── gallery/
│   │   └── page.js       # Photo gallery
│   └── join/
│       └── page.js       # Join form (Netlify Forms)
├── components/
│   ├── Navbar.js         # Responsive navigation
│   ├── Footer.js         # Site footer
│   ├── Cursor.js         # Custom animated cursor
│   ├── Hero.js           # Homepage hero section
│   ├── Marquee.js        # Scrolling text ticker
│   ├── FounderStory.js   # Origin story / About section
│   ├── Values.js         # Core values grid
│   └── Community.js      # Member testimonials
├── public/
│   └── images/           # Drop your run photos here
├── netlify.toml          # Netlify build config
└── next.config.js        # Next.js config (static export)
```

---

## Adding Photos to Gallery

1. Drop your `.jpg` or `.webp` photos into `/public/images/`
2. Open `app/gallery/page.js`
3. Replace placeholder divs with:
```jsx
import Image from 'next/image'

<Image
  src="/images/your-photo.jpg"
  alt="Coffee Run 3K"
  fill
  style={{ objectFit: 'cover' }}
/>
```

---

## Deploy on Netlify

### Option A — Drag & Drop (quickest)
1. Run `npm run build` locally
2. Drag the `out/` folder to https://app.netlify.com/drop

### Option B — GitHub auto-deploy (recommended)
1. Push this repo to GitHub
2. Go to https://netlify.com → New site → Import from GitHub
3. Select your repo
4. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Click Deploy — done!

Every `git push` to `main` will auto-redeploy.

---

## Netlify Forms (Join Page)

The join form uses Netlify Forms — works automatically on Netlify.

To view submissions:
1. Go to your Netlify dashboard
2. Click your site → **Forms** tab
3. Select `verve-join`

To get email notifications, go to **Forms → Settings → Form notifications**.

---

## Customise

- **Colors:** Edit CSS variables in `app/globals.css` under `:root`
- **Events:** Edit the `events` array in `app/runs/page.js`
- **Testimonials:** Edit the `members` array in `components/Community.js`
- **Founder story:** Edit text in `components/FounderStory.js`

---

Built with ❤️ for Verve Run Club, KIIT University.
