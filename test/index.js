var Should = require('should');


var T = require('..');

function compare (days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    
    return date.getDate();
}


describe('Number Helpers', function () {
    
    it('should help define times', function (done) {
        T(1).minute().valueOf().should.equal(60);
        T(5).minutes().valueOf().should.equal(5 * 60);
        
        T(60).minutes().valueOf().should.equal(T(1).hour().valueOf());
        
        T(24).hours().valueOf().should.equal(T(1).day().valueOf());
        T(48).hours().valueOf().should.equal(T(2).days().valueOf());
        
        T(7).days().valueOf().should.equal(T(1).week().valueOf());
        T(14).days().valueOf().should.equal(T(2).weeks().valueOf());
        
        T(52).weeks().valueOf().should.equal(T(1).year().valueOf());
        T(3).months().valueOf().should.equal(T(0.25).years().valueOf());
        T(6).months().valueOf().should.equal(T(0.5).years().valueOf());
        T(12).months().valueOf().should.equal(T(1).year().valueOf());
        
        done();
    });
    
    
    it('should help define dates', function (done) {
        var now = new Date();

        T(1).day().fromNow().getDate().should.equal(compare(1));
        T(2).weeks().fromNow().getDate().should.equal(compare(14));
        
        T(1).day().beforeNow().getDate().should.equal(compare(-1));
        T(3).weeks().beforeNow().getDate().should.equal(compare(-21));
        
        T(1).day().from(now).getDate().should.equal(compare(1));
        T(2).weeks().from(now).getDate().should.equal(compare(14));
        
        T(1).day().before(now).getDate().should.equal(compare(-1));
        T(3).weeks().before(now).getDate().should.equal(compare(-21));
        
        done();
    });
    
});