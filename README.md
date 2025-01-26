# fluid-article
Template repo for Fluid article.

## Website instructions

Paths are relative to folder containing these instructions. `$WEBSITE_NAME` refers to any of the website
folders under `website`.

### Bundling Website

To bundle a website:
1. Run `yarn fluid publish -w $WEBSITE_NAME -l`

This will create a folder in `dist` with a Lisp-cased version of `$WEBSITE_NAME`.

### Serving Website Locally

To run the website in the browser:
1. run `npx http-serve dist/$WEBSITE_NAME_LISP_CASE -a 127.0.0.1 -c-1`
2. Open browser at localhost

### Running Puppeteer Tests

To run your website tests:
1. Run `yarn website-test $WEBSITE_NAME_LISP_CASE`
