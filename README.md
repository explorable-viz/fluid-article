[![test-deploy](https://github.com/explorable-viz/fluid-article/actions/workflows/test-deploy.yml/badge.svg)](https://github.com/explorable-viz/fluid-article/actions/workflows/test-deploy.yml)
[![GitHub pages](https://github.com/explorable-viz/fluid-article/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/explorable-viz/fluid-article/actions/workflows/pages/pages-build-deployment)

# fluid-article

Template repo for Fluid article websites, built with SvelteKit.

## Creating a new article

1. Create a new repository from this template
2. In the repo's Workflow Permissions settings, enable:
   - Read and write permissions
   - Create and approve pull requests
3. Once the `test-deploy` workflow succeeds, configure GitHub Pages to deploy from the `gh-pages` branch

## Running locally

Requires [Node.js](https://nodejs.org/) >= 22.

```bash
yarn install
yarn setup
cd website/article
yarn install
yarn dev
```

For a production-like preview:

```bash
yarn build
yarn preview
```

## Testing

```bash
yarn test
```
