var ProductDetails = function() {
  this.productImage = element.all(by.repeater('product in productListVm.featuredProducts')).get(0);
  this.addToCartButton = element(by.className('add-to-cart-btn'));


};

module.exports = ProductDetails;
