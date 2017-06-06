var MyBagPage = function() {
  this.myBag = $('.bag-copy');
  this.emptyCart = element(by.className('section-title'));
  this.continueShopping = element(by.linkText('Continue Shopping'));
};

module.exports = MyBagPage;
