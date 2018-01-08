var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./e2e/*/*.spec.js'],
  onPrepare: function() {
    browser.driver.manage().window().maximize();
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'reports/htmlreport',
          fileName: 'TestReport',
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
    url: 'URL'
  },
  browserName: 'chrome',
  directConnect: true
};
