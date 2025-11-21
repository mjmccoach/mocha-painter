const Decorator = function() {
    this.paintStock = [];

    Decorator.prototype.addPaintCan = function(paintCan) {
        this.paintStock.push(paintCan)
    }

    Decorator.prototype.calculateTotalLitres = function() {
        let litres = 0;

        this.paintStock.forEach((can) => { litres = litres + can.litres});
        return litres;
    }

    Decorator.prototype.hasEnoughPaintForRoom = function(room) {
        return room.area <= this.calculateTotalLitres();
    }
}

module.exports = Decorator;