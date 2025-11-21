const assert = require('assert');
const Room = require('../room.js');

describe("Room", function() {
    let room;

    beforeEach(function() {
        room = new Room(20);
    });

    it('should have an area', function() {
        const actual = room.area;
        assert.strictEqual(20, actual);
    })

    it('should start unpainted', function() {
        assert.strictEqual(false, room.isPainted);
    })
});