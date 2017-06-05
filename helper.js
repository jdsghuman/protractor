var Helper = function() {
	 this.EC = protractor.ExpectedConditions;

	 this.waitForElementToBeVisible = function (elm) {
		browser.wait(this.EC.visibilityOf(elm), 15000);
	};

	 this.waitUntilReady = function(elm) {
		return browser.wait(function() {
			return elm.isPresent();
		}, 10000).then(function() {
			return browser.wait(function() {
				return elm.isDisplayed();
			}, 10000);
		});
	};

}

module.exports = Helper;
