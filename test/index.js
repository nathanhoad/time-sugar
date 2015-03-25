var Should = require('should');


var TimeMagic = require('..');

function compare (days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    
    return date.getDate();
}


describe('Number Helpers', function () {
    
    it('should help define times', function (done) {
        (1).minute().should.equal(60);
        (5).minutes().should.equal(5 * 60);
        
        (60).minutes().should.equal((1).hour());
        
        (24).hours().should.equal((1).day());
        (48).hours().should.equal((2).days());
        
        (7).days().should.equal((1).week());
        (14).days().should.equal((2).weeks());
        
        (52).weeks().should.equal((1).year());
        (3).months().should.equal((0.25).years());
        (6).months().should.equal((0.5).years());
        (12).months().should.equal((1).year());
        
        done();
    });
    
    
    it('should help define dates', function (done) {
        var now = new Date();

        (1).day().fromNow().getDate().should.equal(compare(1));
        (2).weeks().fromNow().getDate().should.equal(compare(14));
        
        (1).day().beforeNow().getDate().should.equal(compare(-1));
        (3).weeks().beforeNow().getDate().should.equal(compare(-21));
        
        (1).day().from(now).getDate().should.equal(compare(1));
        (2).weeks().from(now).getDate().should.equal(compare(14));
        
        (1).day().before(now).getDate().should.equal(compare(-1));
        (3).weeks().before(now).getDate().should.equal(compare(-21));
        
        done();
    });
    
});