import mocks from '../../mocks.json'

module.exports = function() {

  this.Before(function(_, done) {
    this.simulado.defaults(mocks, done);
  });

};

