# Cloudflare deployment plan (current repository snapshot)

## What this repo currently contains
This repository snapshot contains prebuilt static assets under `static/` and deployment metadata for Netlify, but it does **not** include app source files (`package.json`, Next.js source, API source, test source).

Because of that, this repo can be deployed as a static site, but form/business-logic changes cannot be safely implemented here.

## Recommended platform
Use **Cloudflare Pages** for this snapshot.

Why:
- It is optimized for static assets.
- It can add edge routing/headers and optional Pages Functions later.

## Deploy steps (Cloudflare Pages)
1. Create a new Cloudflare Pages project.
2. Select **Direct Upload** (or Git integration if you later add source).
3. Set the output directory to repository root (`.`) since assets are already present.
4. Ensure the `static/` directory is uploaded.

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

