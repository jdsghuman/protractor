var Helper = require('../pageobjects/helper.po.js');
var HomePage = require('../pageobjects/homepage.po.js');
var MyBagPage = require('../pageobjects/mybagpage.po.js');
var OrderHistory = require('../pageobjects/orderhistory.po.js');

var homePage = new HomePage(),
myBagPage = new MyBagPage(),
helper = new Helper(),
orderHistory = new OrderHistory();

describe('Shop Disney Site', function() {

	beforeEach(function() {
		browser.driver.get(browser.params.url);
	});

	afterEach(function() {
		browser.manage().deleteAllCookies();
	});

	it('should have the correct navbar content', function() {
		expect(homePage.wdwMainSiteLogo.isPresent()).toBeTruthy();
		expect(orderHistory.orderHistoryButton.isPresent()).toBeTruthy();
		expect(myBagPage.myBag.isPresent()).toBeTruthy();
	});

	it('should show My Bag is empty', function() {
		myBagPage.myBag.click();
		expect(browser.wait(helper.EC.urlContains('/my-bag/'), 5000));
		expect(myBagPage.emptyCart.getText()).toEqual('Your Bag is Empty');
		myBagPage.continueShopping.click();
		browser.wait(helper.EC.urlIs('https://disneyworld.disney.go.com/shop-parks/resort-add-ons/'), 5000);
	});

	it('should show login page on Order History', function() {
		orderHistory.orderHistoryButton.click();
		helper.switchToNonAngularPage();
		helper.waitForElementToBeVisible(orderHistory.signInPage);
		orderHistory.signInButton.click();
		browser.wait(helper.EC.textToBePresentInElement(orderHistory.genericValidation, 'Sorry, there are one or more errors on this page.'), 5000);
		browser.driver.navigate().back();
		browser.wait(helper.EC.urlIs('https://disneyworld.disney.go.com/shop-parks/resort-add-ons/'), 5000);
	});
});
