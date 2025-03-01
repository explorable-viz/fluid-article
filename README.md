# fluid-article
Template repo for Fluid article. To create a new online article:

- Create a new repository from this template
- In the Workflow Permissions settings for the new repo, enable the following for GitHub Actions:
   - Read and write permissions
   - Create and approve pull requests
- One the `test-deploy` workflow has succeeded, go to the Pages settings for the repo and configure GitHub Pages to deploy from the `gh-pages` branch
- When `pages-build-deployment` completes your website should be live

## Website instructions

Paths are relative to folder containing these instructions. `$WEBSITE_NAME` refers to any of the website
folders under `website`.

### Bundling Website

To bundle a website:
1. Run `yarn fluid publish -w $WEBSITE_NAME -l`

This will create a folder in `dist` with a Lisp-cased version of `$WEBSITE_NAME`.

### Serving Website Locally

To run the website in the browser:
1. run `npx http-serve dist/$WEBSITE_NAME -a 127.0.0.1 -c-1`
2. Open browser at localhost

### Running Puppeteer Tests

To run your website tests:
1. Run `yarn website-test $WEBSITE_NAME`

### Convenience commands for single website

If you have a single website called `Article`, the following are synonyms for the above:
- `yarn bundle`
- `yarn serve`
- `yarn test`
