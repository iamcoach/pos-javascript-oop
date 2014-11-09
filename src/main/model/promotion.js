'use strict';

var Promotion = (function() {

  function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
  }

  Promotion.all = function() {
    // Test data, should load form database in future.
    return [
      new Promotion('BUY_TWO_GET_ONE_FREE', [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ])
    ];
  };

  return Promotion;

})();

exports.Promotion = Promotion;
