# Deployment Guide - GitHub Pages

This guide will help you deploy your Next.js portfolio to GitHub Pages automatically.

## Prerequisites

1. Your code should be in a GitHub repository
2. You need to push your code to the `main` branch
3. GitHub Pages should be enabled in your repository settings

## Automatic Deployment Setup

### Step 1: GitHub Repository Settings

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### Step 2: Push Your Code

The deployment is already configured with GitHub Actions. Simply push your code to the main branch:

```bash
git add .
git commit -m "Deploy portfolio to GitHub Pages"
git push origin main
```

### Step 3: Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You'll see the deployment workflow running
3. Once completed, your site will be available at: `https://yourusername.github.io/MJEngi`

## Configuration Details

### Next.js Configuration (`next.config.js`)

The project is configured for static export with:
- `output: 'export'` - Enables static site generation
- `images: { unoptimized: true }` - Required for static export
- `basePath: '/MJEngi'` - Only applied in production for GitHub Pages
- `assetPrefix: '/MJEngi/'` - Ensures assets load correctly on GitHub Pages

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

The workflow:
1. Triggers on push to main branch
2. Sets up Node.js environment
3. Installs dependencies
4. Builds the static site
5. Deploys to GitHub Pages

## Local Development vs Production

- **Local Development**: Run `npm run dev` - site available at `http://localhost:3000`
- **Production**: Site available at `https://yourusername.github.io/MJEngi`

## Troubleshooting

### Common Issues:

1. **404 Error**: Make sure GitHub Pages source is set to "GitHub Actions"
2. **Assets not loading**: Check that `basePath` and `assetPrefix` are correctly configured
3. **Build fails**: Check the Actions tab for error logs

### Manual Build Test:

To test the build locally:
```bash
npm run build
```

This will create an `out` folder with your static site.

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## Updates

Every time you push to the main branch, the site will automatically rebuild and deploy. The process typically takes 2-3 minutes. 