import {expect} from 'chai'

module.exports = function() {
  this.Given(/^I should see '(.*)'$/, function(content) {
    expect(this.browser.body.textContent).to.contain(content);
  });
};
