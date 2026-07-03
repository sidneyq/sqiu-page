# sqiu-page

Personal website for Sidney Qiu — built with [Next.js](https://nextjs.org), deployed on [Vercel](https://vercel.com).

**Live at [sqiu-page.vercel.app](https://sqiu-page.vercel.app)**


## Editing the site

**All content lives in one file: [`data/profile.ts`](data/profile.ts).**

- Update your title, company, bio, or links → edit the `profile` object
- Add/remove a job → edit the `experience` array
- Change interests → edit the `interests` array

You never need to touch the layout code (`app/`) for content changes.

After editing, commit and push — Vercel redeploys automatically:

```bash
git add -A
git commit -m "Update profile"
git push
```

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Changing the look

Colors, fonts, and spacing are defined as CSS variables at the top of
[`app/globals.css`](app/globals.css). Change `--accent` to re-theme the
whole site in one line.
