# Sana Ullah — Portfolio

React.js + TypeScript + Tailwind CSS + Vite personal portfolio.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Add your real CV

The Hero, Navbar, and Contact "Download CV" buttons link to
`/Sanaullah-CV.pdf`. Drop your actual CV PDF into the `public/` folder
and name it exactly:

```
public/Sanaullah-CV.pdf
```

No code changes are needed after that — you can then delete
`public/PLACE-CV-HERE.txt`.

## Add LinkedIn / GitHub links

If/when you want your GitHub or LinkedIn shown in the Contact section
and footer icons, add the exact URLs to `src/data/portfolio.ts`:

```ts
export const personal = {
  ...
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
  },
};
```

They're left blank for now since no URLs were provided — the icons
simply won't render until filled in.

## Structure

```
src/
  components/   Navbar, Hero, About, Skills, AiMl, Experience,
                Projects, Education, Contact, Footer, Reveal
  data/         portfolio.ts — all content in one place
  hooks/        useReveal.ts — scroll-reveal IntersectionObserver hook
```

All content (experience, skills, projects, education) lives in
`src/data/portfolio.ts` — edit that file to update anything on the site.
