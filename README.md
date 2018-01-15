# angularjs-boilerplate

A starting point for AngularJS apps

To get started run:

npm install

This boilerplate uses browserify (via watchify) to watch for changes in app/js/app.module.js.

app.module.js uses CommonJS to require all the files the app needs.

Browserify then bundles all these into bundle.js, which is the only script file referenced in index.html.

Browser-sync is used to serve the app in the default browser.  It watches the bundle.js file and refreshes the browser when any changes to this file are detected.

To run the project:

npm run serve
