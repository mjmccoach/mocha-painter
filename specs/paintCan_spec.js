const assert = require('assert');
const PaintCan = require('../paintCan.js');

describe('PaintCan', function() {
    let paintCan;

    beforeEach(function() {
        paintCan = new PaintCan(1);
    });

    it('should have a number of litres of paint', function() {
        assert.strictEqual(1, paintCan.litres)
    })

    it('should be able to check if its empty', function() {
        assert.strictEqual(false, paintCan.isEmpty());
    })
});
