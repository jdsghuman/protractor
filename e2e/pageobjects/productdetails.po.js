var ProductDetails = function() {
  this.productImage = element.all(by.repeater('product in productsData.entries')).get(0);
  this.sizeChart = element(by.className('size-chart-link'));
  this.priceDisplay = element(by.className('product-name-price'));

};

module.exports = ProductDetails;
