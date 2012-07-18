/**
 *  @venus-library    mocha
 *  @venus-template   default
 *  @venus-include    parse_comments.js
 *  @venus-include    foo.js
 */

var javascript = true;

describe('ONE', function(){
  it('should be in ONE', function(){
    var arr = [];
    arr.push('foo');
    arr.push('bar');
    arr.push('baz');
    //assert('foo' == arr[0]);
    //assert('bar' == arr[1]);
    //assert('baz' == arr[2]);
    arr[0].should.equal('foo');
    arr[1].should.equal('bar');
    arr[2].should.equal('baz');
  })

  describe('ONE - NESTED', function(){
    it('should be in ONE - NESTED', function(){
      var arr = [];
      arr.push('foo');
      arr.push('bar');
      arr.push('baz');
      //assert('foo' == arr[0]);
      //assert('bar' == arr[1]);
      //assert('baz' == arr[2]);
      arr[0].should.equal('foo');
      arr[1].should.equal('bar');
      arr[2].should.equal('baz');
    })

    it('should be in ONE - NESTED again', function(){
      var arr = [];
      //assert(1 == arr.push('foo'));
      //assert(2 == arr.push('bar'));
      //assert(3 == arr.push('baz'));
      arr.push('foo').should.equal(1);
      arr.push('bar').should.equal(2);
      arr.push('baz').should.equal(3);
    })
    describe('ONE - NESTED - NESTED', function(){
      it('should be in ONE - NESTED - NESTED', function(){
        var arr = [];
        arr.push('foo');
        arr.push('bar');
        arr.push('baz');
        //assert('foo' == arr[0]);
        //assert('bar' == arr[1]);
        //assert('baz' == arr[2]);
        arr[0].should.equal('foo');
        arr[1].should.equal('bar');
        arr[2].should.equal('baz');
      })

      it('should be in ONE - NESTED - NESTED again', function(){
        var arr = [];
        //assert(1 == arr.push('foo'));
        //assert(2 == arr.push('bar'));
        //assert(3 == arr.push('baz'));
        arr.push('foo').should.equal(1);
        arr.push('bar').should.equal(2);
        arr.push('baz').should.equal(3);
      })
    })
  })

  describe('ONE - NESTED - AGAIN', function(){
    it('should be in ONE - NESTED - TWO', function(){
      var arr = [];
      arr.push('foo');
      arr.push('bar');
      arr.push('baz');
      //assert('foo' == arr[0]);
      //assert('bar' == arr[1]);
      //assert('baz' == arr[2]);
      arr[0].should.equal('foo');
      arr[1].should.equal('bar');
      arr[2].should.equal('baz');
    })
    it('should be in ONE - NESTED - TWO again', function(){
      var arr = [];
      arr.push('foo');
      arr.push('bar');
      arr.push('baz');
      //assert('foo' == arr[0]);
      //assert('bar' == arr[1]);
      //assert('baz' == arr[2]);
      arr[0].should.equal('foo');
      arr[1].should.equal('bar');
      arr[2].should.equal('baz');
    })

    it('should be in ONE - NESTED - TWO again again', function(){
      var arr = [];
      //assert(1 == arr.push('foo'));
      //assert(2 == arr.push('bar'));
      //assert(3 == arr.push('baz'));
      arr.push('foo').should.equal(1);
      arr.push('bar').should.equal(2);
      arr.push('baz').should.equal(3);
    })
  })
})

describe('TWO', function(){
  describe('TWO - NESTED', function(){
    it('should be in TWO - NESTED', function(){
      var arr = [1,2,3];
      //assert(arr.pop() == 3);
      //assert(arr.pop() == 2);
      //assert(arr.pop() == 1);
      arr.pop().should.equal(3);
      arr.pop().should.equal(2);
      arr.pop().should.equal(1);
    })

    it('should be in TWO - NESTED again', function(){
      var arr = [1,2,3];
      arr.pop();
      //assert(arr.length == 2);
      arr.should.have.length(2);
    })
  })
})