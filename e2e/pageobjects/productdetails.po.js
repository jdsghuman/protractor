var ProductDetails = function() {
  this.productImage = element.all(by.repeater('product in productsData.entries')).get(0);
  this.sizeChart = element(by.className('size-chart-link'));


};

module.exports = ProductDetails;
