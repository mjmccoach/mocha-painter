const Decorator = function() {
    this.paintStock = [];

    Decorator.prototype.addPaintCan = function(paintCan) {
        this.paintStock.push(paintCan)
    }
}

module.exports = Decorator;