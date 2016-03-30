module.exports = function() {

  this.Given(/^the products service returns a (.*)$/, function(statusCode, done) {
    this.simulado.mock({
      path: '/api/products',
      status: statusCode
    }, done);
  });

  this.Given(/^the product information service returns a 503$/, function(done) {
    this.simulado.mock({
      path: '/api/products/101',
      status: 503
    }, done);
  });

};
