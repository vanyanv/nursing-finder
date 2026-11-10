# Nursing Finder

BSN nursing programs in LA County for a Long Beach City College transfer student: requirements, deadlines, GPA comparisons and sign-up links for each school.

- `index.html` is the whole site (static, built from `src/`).
- `api/progress.js` is a Vercel function that saves checklist ticks to Neon Postgres (`DATABASE_URL`).
- Add `?p=<name>` to the URL to keep a separate checklist.

School data lives in `src/data.js` (the `SCHOOLS` array). All facts were checked against official school pages on Nov 10, 2026.
