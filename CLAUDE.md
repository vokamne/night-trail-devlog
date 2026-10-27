# Night Trail devlog — project rules

Progress blog for the game Night Trail (Kingston University, BSc Game Development & Computer Science).
The teacher reads it as part of the grade. Site language: **English**. Talk to the owner in **Russian**.

Live site: https://vokamne.github.io/night-trail-devlog/ (GitHub Pages, branch `main`, root).

## Tech rules
- Plain static site: HTML, CSS (`assets/css/style.css`), a little JS (`assets/js/main.js`). No frameworks, no build step.
- Must work by double-clicking `index.html`. All links are **relative** (`media/...`, `../media/...` from `posts/`). Never start a path with `/`.
- Keep `.nojekyll` in the root.
- Every image below the first screen gets `loading="lazy"` plus `width`/`height`.
- No code snippets on the site (course requirement). Describe solutions in words.
- Header and footer are copied into every page. If you change the menu, change it in all pages, including `posts/*.html` and `content/post-template.html`.

## Folders
- `content/posts/` — markdown source of every post (`YYYY-MM-DD-name.md`, front matter: title, date, type, summary, cover, page).
- `content/post-template.html` — HTML template for a post page.
- `posts/` — published post pages (`YYYY-MM-DD-name.html`, same name as the md).
- `media/game/` — concept art. `media/sprint-N/` — screenshots, GIFs, videos for sprint N.
- `source/` — pitch PDF and design doc (`DESIGN.md`).

## File names
- Latin letters, lowercase, kebab-case: `beam-warm.png`, `night-camp-concept.jpg`. No spaces, no Cyrillic.
- Before/after pairs: `thing-before.png` / `thing-after.png` or a clear pair like `night-too-dark.png` / `night-fixed.png`.
- Big PNG concept art (over ~500 KB): keep the original `.png`, use a 1600px-wide `.jpg` copy on the site.
- Videos over 25 MB are not committed: upload to YouTube (unlisted) and embed with `youtube-nocookie.com`.

## How to add a new post
1. Write `content/posts/YYYY-MM-DD-name.md` (blocks: What I did, Problems & solutions, Media, Useful links, Next steps).
2. Put media in `media/sprint-N/` with proper names.
3. Copy `content/post-template.html` to `posts/YYYY-MM-DD-name.html`, fill it from the md. Before/after pairs go side by side (`.compare`). Type tag: `tag-sprint` "Sprint review" or `tag-weekly` "Weekly update".
4. Add a card at the **top** of the list in `devlog.html`. Replace the "Latest post" card in `index.html`.
5. Set the previous/next links in the `post-nav` of the new post and the previous one.
6. Add the post's new useful links to `resources.html` (right section, with "Used in <post>").
7. Sprint review: update `roadmap.html` (status Done / In progress / Planned, "Next up" label, link to the review).
8. New screenshots or sketches worth showing: add them to `design.html`.
9. Check all links work locally, then commit and push.

## Images and AI
- Every AI-generated image gets the label `<span class="ai-label">AI-generated concept art</span>` in its caption. These are concepts, not final graphics.
- Every image needs a meaningful `alt`.

## Writing style
- Short sentences, simple words, first person ("I made...", "I fixed...").
- Problems & solutions is the main block: what went wrong, why, what I changed.
- No hype, no long intros. Facts from the real build.

## Look
Colours: night `#0F1A24`, `#18263A`; amber `#F2A33A`, ember `#D9622B`; cream text `#F4EBDD`.
Headings: Fraunces (serif). Body: Inter (sans). Keep the night mood light: soft stars and warm glow only.
