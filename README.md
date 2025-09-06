# Portfolio

A clean and minimal one-page portfolio built with **Next.js 15**, **React**, and **TailwindCSS**.  
It supports light/dark mode (based on system preference), server-side rendering, and data-driven sections from JSON files.

## ✨ Features

- About section
- Education section (multiple entries)
- Experience section
- Projects section with tags and multiple links (Live, GitHub, etc.)
- Skills grouped by categories
- Contact section with multiple buttons
- Responsive design with TailwindCSS
- Dark/light mode auto-detected from system

## 📂 Project Structure

```
app/
  page.tsx          # main page
components/         # all UI components
data/               # JSON data (about, education, experience, projects, skills, contact)
lib/types.ts        # shared TypeScript types
```

Each section reads from its corresponding JSON file in `data/`.

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

### 3. Build for production

```bash
npm run build
npm run start
```

## ☁️ Deployment

### Vercel (recommended)

1. Push your repo to GitHub/GitLab/Bitbucket.
2. Go to [Vercel](https://vercel.com), import the project.
3. It auto-detects Next.js and deploys.
4. Done! 🎉

### Netlify

1. Add `@netlify/plugin-nextjs` as a dev dependency.
2. Create a `netlify.toml` with:
   ```toml
   [build]
     command = "next build"
     publish = ".next"
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```
3. Connect repo on Netlify and deploy.

### Self-host

```bash
npm run build
npm run start
```

Use a process manager like **PM2** or systemd, and reverse proxy with Nginx.

## 🛠 Customization

- Update JSON files in `data/` to change content.
- Modify styles via Tailwind classes in components.
- Add/remove sections by editing `app/page.tsx` and components.

## 📜 License

MIT — free to use and modify.
