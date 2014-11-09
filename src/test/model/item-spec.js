'use strict';

var expect = require('chai').expect;
var Item = require('../../main/model/item').Item;

describe('Item', function() {

  it('can instantiate by constructor', function() {
    var item = new Item('BARCODE', 'ITEM', 'UNIT', 9.99);

    expect(item.barcode).to.equal('BARCODE');
    expect(item.name).to.equal('ITEM');
    expect(item.unit).to.equal('UNIT');
    expect(item.price).to.equal(9.99);
  });

  describe('.all()', function() {

    it('should return array', function() {
      var result = Item.all();
      expect(result).to.be.a('array');
    });
  });

  describe('#price', function() {

    var item;

    beforeEach(function() {
      item = new Item();
    });

    it('should be number type', function() {
      expect(item.price).to.be.a('number');
    });

    it('has default value 0.00', function() {
      expect(item.price).to.equal(0.00);
    });
  });
});
