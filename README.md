# Ryan Chetty Portfolio

Production-ready personal portfolio for **Ryan Chetty** (Senior Software Engineer / Tech Lead), optimized for deployment on **Cloudflare Pages**.

## Project Overview

This repository contains a premium, responsive, recruiter-friendly portfolio site built with:
- modern UI and strong engineering aesthetic
- dark/light theme support
- reusable Astro components
- centralized profile/content configuration
- Cloudflare Pages deployment configuration

## Chosen Stack (and Why)

- **Astro + TypeScript**: Fast, content-focused, minimal JavaScript by default, excellent for high-performance portfolio sites.
- **Tailwind CSS**: Rapid and maintainable design system for responsive, consistent styling.
- **Cloudflare Pages (static output)**: Minimal deployment friction (`npm run build` -> `dist`), global edge delivery, easy custom-domain setup.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## How to Edit Personal Info (Central Config)

Update this file:

- `/home/runner/work/ryan-chetty-portfolio/ryan-chetty-portfolio/src/config/site.ts`

Centralized values include:
- name
- title
- bio
- email
- phone
- social links
- GitHub username

## GitHub Profile Image Integration

The profile image is automatically generated from the GitHub username in central config:

- `githubUsername` in `src/config/site.ts`
- image URL format: `https://github.com/<githubUsername>.png?size=400`

Changing `githubUsername` updates the profile image site-wide.

## Build

```bash
npm run lint
npm run build
```

Build output is generated in `dist/`.

## Deploy to Cloudflare Pages

### Option A: Connect GitHub Repository (recommended)
1. In Cloudflare Dashboard, go to **Workers & Pages** -> **Create application** -> **Pages**.
2. Connect this GitHub repository.
3. Set build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Deploy.

### Option B: Wrangler-based workflow
`wrangler.toml` is included with:
- `pages_build_output_dir = "./dist"`

Build then deploy with your preferred Wrangler Pages command in CI/CD.

## Custom Domain Setup

1. Open your Pages project in Cloudflare.
2. Go to **Custom domains**.
3. Add your domain (for example `ryanchetty.dev`).
4. Follow Cloudflare DNS verification prompts.
5. Ensure HTTPS is active (Cloudflare provisions certificates automatically).

## Content Notes

- Experience and project cards intentionally use editable placeholders until verified final details are provided.
- Do not add unverified employers, achievements, or project claims.
- Inline comments in components highlight where to customize content safely.
