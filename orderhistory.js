var OrderHistory = function() {
  this.orderHistoryButton = element(by.className('order-history'));
  this.signInPage = element(by.id('signInPageHeader'));
  this.signInButton = element(by.id('loginPageSubmitButton'));
};

module.exports = OrderHistory;
