# CareTailor website

The marketing site for [caretailor.co.uk](https://www.caretailor.co.uk), built with [Astro](https://astro.build) and hosted on Vercel.

Every push to `main` deploys automatically. Pull requests get their own preview link.

## Where to edit things

| What | File |
| --- | --- |
| Homepage text and cards | `src/pages/index.astro` (the lists at the top of the file) |
| Sign-up link, Mailchimp list, social links | `src/data/site.ts` |
| Terms and Conditions | `src/pages/terms-and-conditions.md` |
| Privacy Policy | `src/pages/privacy-policy.md` |
| Colours, fonts, spacing | `src/styles/global.css` (the `:root` block at the top) |
| Images and icons | `public/images/` |

To add a new page, create `src/pages/your-page.md` (copy the top block from `privacy-policy.md`). It will appear at `/your-page`.

You can make small text edits straight on GitHub: open the file, click the pencil icon, save. Vercel publishes the change in about a minute.

## Run it on your computer

Needs Node.js 20 or later.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Mailing list

Both sign-up forms send people straight to the Mailchimp audience set in `src/data/site.ts`. The "I'm a" choice is saved to the `MMERGE7` merge field. Nothing is stored on the website itself.
