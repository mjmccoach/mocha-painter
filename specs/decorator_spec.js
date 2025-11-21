const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paintCan.js');

describe('Decorator', function() {
    let decorator;
    let paintCan;

    beforeEach(function() {
        decorator = new Decorator();
        paintCan = new PaintCan(1);
    });

    it('should start with an empty paint stock', function() {
        assert.strictEqual(0, decorator.paintStock.length);
    })

    it('should be able to add paint to stock', function() {
        decorator.addPaintCan(paintCan);
        assert.strictEqual(1, decorator.paintStock.length);
    })
})