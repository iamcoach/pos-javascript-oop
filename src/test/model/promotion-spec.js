'use strict';

var expect = require('chai').expect;
var Promotion = require('../../main/model/promotion').Promotion;

describe('Promotion', function() {

  it('can instantiate by constructor', function() {
    var promotion = new Promotion('TYPE', ['BARCODE1', 'BARCODE2']);

    expect(promotion.type).to.equal('TYPE');
    expect(promotion.barcodes).to.deep.equal(['BARCODE1', 'BARCODE2']);
  });

  describe('.all()', function() {

    it('should return array', function() {
      var result = Promotion.all();
      expect(result).to.be.a('array');
    });
  });

  describe('#barcodes', function() {

    var promotion;

    beforeEach(function() {
      promotion = new Promotion();
    });

    it('should be array type', function() {
      expect(promotion.barcodes).to.be.a('array');
    });

    it('has default value []', function() {
      expect(promotion.barcodes).to.deep.equal([]);
    });
  });
});
