var Helper = require('../page-objects/helper.po.js');
var ProductDetails = require('../page-objects/productdetails.po.js');

var productDetails = new ProductDetails(),
helper = new Helper();

describe('New Arrivals', function() {

  beforeEach(function() {
    browser.get(browser.params.url);
  });

  afterEach(function() {
		browser.manage().deleteAllCookies();
	});

  it('should launch Top Sellers Product detail page', function() {
    helper.switchToAngularPage();
    helper.waitElementToBeClickable(productDetails.productImage);
    productDetails.productImage.click();
    helper.waitForElementToBeVisible(productDetails.priceDisplay);
    expect(productDetails.priceDisplay.isPresent()).toBe(true);
  });

});
