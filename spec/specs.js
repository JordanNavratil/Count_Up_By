describe('countUp', function() {
    it("counts up to a number", function() {
        expect(countUp(10, 1)).to.eql("1,2,3,4,5,6,7,8,9,10");
    });
});

describe('countUp', function() {
    it("counts up by a given multiple", function() {
        expect(countUp(20, 2)).to.eql("2,4,6,8,10,12,14,16,18,20");
    });
});
