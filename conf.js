var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // urlTest: 'https://disneyworld.disney.go.com/shop-parks/resort-add-ons/',
  specs: ['./e2e/*/*.spec.js'],
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'reports/htmlreport',
          fileName: 'ShopDisneyReport'
        })
      );
   },
   allScriptsTimeout: 15000,
   jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },
  suites: {
    home: 'e2e/home/**/*.spec.js',
    product: 'e2e/product/**/*.spec.js'
  },
  params: {
    url: 'https://disneyworld.disney.go.com/shop-parks/resort-add-ons/'
  },
  browserName: 'chrome',
  directConnect: true
};
