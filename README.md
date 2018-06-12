---
**NOTE:** This is a proof of concept

---
# Wikimedia Styleguide theme for Hugo
This a theme for [Hugo](https://gohugo.io) based on [design.wikimedia.org](https://design.wikimedia.org/style-guide/). It's built to work as a standalone site (The exampleSite *is* the styleguide website) as well as a base to build other microsites.

All dependencies and build steps (including the Hugo binary itself) are run through NPM.

### Get started
clone the repo and...
```
npm install
npm run start
```
This will start the Hugo dev server on http://localhost:1313/ and watch/compile assets (currently only PostCSS) in the `static-src/` folder.

 To create a new build, run:
 ```
 npm run build
 ```
This will output static HTML/CSS/JS into the `exampleSite/public/` folder.

 ### Disclaimers:
 **Translations** are mocked just to test Hugo's multilingual functionality.
