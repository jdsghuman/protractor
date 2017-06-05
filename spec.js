var Helper = require('./helper');
var HomePage = require('./homepage');
var MyBagPage = require('./mybagpage');
var OrderHistory = require('./orderhistory');

beforeEach(function() {
	browser.driver.get(browser.params.url);
	homePage = new HomePage();
	mb = new MyBagPage();
	helper = new Helper();
	orderHistory = new OrderHistory();
});

describe('Shop Disney Site', function() {
	var homePage, mb, helper, orderHistory;

	it('should have a logo in the menu', function() {
		// Verify logo appears
		expect(homePage.logo.count()).toEqual(1);
	});

	it('should show My Bag is empty', function() {
		// Select My Bag
		mb.myBag.click();
		// Waits for the URL '.../my-bag/''
		expect(browser.wait(helper.EC.urlContains('/my-bag/'), 5000));
		// Verify text 'Your Bag is Empty'
		expect(mb.emptyCart.getText()).toEqual('Your Bag is Empty');
		mb.continueShopping.click();
		// Waits for the URL is on the Home Page
		browser.wait(helper.EC.urlIs('https://disneyworld.disney.go.com/shop-parks/resort-add-ons/'), 5000);
	});

	it('should show login page on Order History', function() {
		orderHistory.orderHistoryButton.click();
		// browser.ignoreSynchronization = true;
		browser.waitForAngularEnabled(false);
		helper.waitForElementToBeVisible(orderHistory.signInPage);
		orderHistory.signInButton.click();
		browser.wait(helper.EC.textToBePresentInElement($('.genericValidationErrorMessage'), 'Sorry, there are one or more errors on this page.'), 5000);
		browser.driver.navigate().back();
		// Waits for the URL is on the Home Page
		browser.wait(helper.EC.urlIs('https://disneyworld.disney.go.com/shop-parks/resort-add-ons/'), 5000);
	});
});
