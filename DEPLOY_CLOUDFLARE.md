# Cloudflare deployment plan (current repository snapshot)

## What this repo currently contains
This repository snapshot contains prebuilt static assets under `static/` and deployment metadata for Netlify, but it does **not** include app source files (`package.json`, Next.js source, API source, test source).

Because of that, this repo can be deployed as a static site, but form/business-logic changes cannot be safely implemented here.

## Recommended platform
Use **Cloudflare Pages** for this snapshot.

Why:
- It is optimized for static assets.
- It can add edge routing/headers and optional Pages Functions later.

## Critical debug finding from the failed runs
Your failing logs on **May 19, 2026** are building commit **`b828cff`**, shown directly in Cloudflare output:
- `HEAD is now at b828cff Revert "Prepare static export for Cloudflare Pages..."`

That commit contains a `wrangler.toml` with an `[assets]` block, and Pages rejects it with:
- `Configuration file for Pages projects does not support "assets"`

So the error is caused by Cloudflare building the reverted commit, not the current fixed config.

## Deploy steps (Cloudflare Pages)
1. In Cloudflare Pages → **Settings → Builds & deployments**, make sure production deploys from the correct branch (for example `main`), not a pinned old commit/workflow ref.
2. If using Deploy Hooks, verify the hook payload is not pinning `b828cff` (or any commit SHA).
3. Re-run deployment after confirming the latest commit is selected.
4. Use this repository `wrangler.toml` format for Pages (must include `pages_build_output_dir` and must not include `[assets]`).
5. Set the output directory to repository root (`.`) since assets are already present.

## Known-good Pages config in this repo
`wrangler.toml` should be:

```toml
name = "konnect-education"
compatibility_date = "2026-05-18"
pages_build_output_dir = "."
```

## Forms/API endpoint integration
Current code appears already compiled/minified, so endpoint changes should be done in source code.

When source is available, wire forms to:
- `POST ${PUBLIC_FORM_API_ENDPOINT}`
- Add client-side validation and submission/error states.
- Add server-side validation and retry/backoff strategy.

## Gaps that must be resolved for production-grade deployment
- Add full source code to repository.
- Replace Netlify-specific config with Cloudflare-native config in source repo.
- Add automated tests for form submit success and failure.
