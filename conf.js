var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // urlTest: 'https://disneyworld.disney.go.com/shop-parks/resort-add-ons/',
  specs: ['spec.js'],
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'reports/htmlreport',
          fileName: 'ShopDisneyReport'
        })
      );
   },
   jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    allScriptsTimeout: 15000
  },
  params: {
    url: 'https://disneyworld.disney.go.com/shop-parks/resort-add-ons/'
  }
};
