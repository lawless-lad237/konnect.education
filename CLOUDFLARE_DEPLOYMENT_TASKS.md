# Proposed fix tasks

## 1) Typo fix task
Fix one user-visible typo in form labels or CTA copy and add a regression assertion in tests.

## 2) Bug fix task
Fix form submission bug where API failures are not surfaced to the user; show inline error and keep form state.

## 3) Comment/docs discrepancy task
Update deployment docs to remove Netlify-specific instructions and document Cloudflare Pages deployment path.

## 4) Test improvement task
Add an integration test for form submission that covers:
- success path
- validation error path
- upstream API 4xx/5xx path
