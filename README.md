# Shafin Portfolio

Welcome to Nabi Shafin's Full-Stack Developer Portfolio.

## Run Locally

1. Install dependencies:
   `pnpm install`
2. Run the app:
   `pnpm dev`

## Deploy to Cloudflare Pages

### Option 1: Using Cloudflare Dashboard (Recommended)
1. Push this code to a GitHub/GitLab repository.
2. Go to the Cloudflare dashboard > Pages > Connect to Git.
3. Select your repository.
4. Set the **Framework preset** to `None` (or `Vite`).
5. Set the **Build command** to `pnpm build`.
6. Set the **Build output directory** to `dist`.
7. Click **Save and Deploy**.

### Option 2: Using Wrangler CLI
If you have Wrangler installed globally (`pnpm i -g wrangler`), you can deploy directly from your terminal:

```bash
# Build the project first
pnpm build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist
```
