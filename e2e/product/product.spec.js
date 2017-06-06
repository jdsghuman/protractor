var Helper = require('../pageobjects/helper.po.js');
var ProductDetails = require('../pageobjects/productdetails.po.js');

var productDetails = new ProductDetails(),
helper = new Helper();

describe('Product', function() {

  beforeEach(function() {
    browser.get(browser.params.url);
  });

  afterEach(function() {
		browser.manage().deleteAllCookies();
	});

  it('should navigate to the product detail page', function() {
    helper.switchToAngularPage();
    productDetails.productImage.click();
    expect(productDetails.addToCartButton.isPresent()).toBe(true);
  });

});
