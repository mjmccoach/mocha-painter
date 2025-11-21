const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paintCan.js');

describe('Decorator', function() {
    let decorator;
    let paintCan;
    let paintCan1;

    beforeEach(function() {
        decorator = new Decorator();
        paintCan = new PaintCan(2);
        paintCan1 = new PaintCan(2);
    });

    it('should start with an empty paint stock', function() {
        assert.strictEqual(0, decorator.paintStock.length);
    })

    it('should be able to add paint to stock', function() {
        decorator.addPaintCan(paintCan);
        assert.strictEqual(1, decorator.paintStock.length);
    })

    it('should be able to calculate total litres of paint available', function() {
        decorator.addPaintCan(paintCan);
        decorator.addPaintCan(paintCan1);

        // assert.strictEqual(2, decorator.paintStock.length)
        assert.strictEqual(4, decorator.calculateTotalLitres());;
    })
})