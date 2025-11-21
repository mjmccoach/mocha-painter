const PaintCan = function(litres) {
    this.litres = litres;

    PaintCan.prototype.isEmpty() = function() {
        return litres > 0;
    }

    PaintCan.prototype.emptyCan() = function() {
        litres = 0;
    }
}