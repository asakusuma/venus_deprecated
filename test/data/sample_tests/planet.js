/**
 *  @venus-library    mocha
 *  @venus-template   default
 *  @venus-include    parse_comments.js
 *  @venus-include    foo.js
 */

var javascript = true;

describe('first test', function() {
  it('should work', function() {
    '1'.should.eql('1');
  });
  it('should work again', function() {
  	'2'.should.eql('2');
  });
  it('should not work', function() {
  	'1'.should.eql('2');
  });
  it('this test should fail', function() {
    '1'.should.eql('2');
  });
});

describe('second test', function() {
  it('definitely work', function() {
    '3'.should.eql('3');
  });
});
