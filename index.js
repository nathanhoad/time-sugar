var N = function (n) {
    if (!(this instanceof N)) {
        return new N(n);
    }
    
    this.n = n;
}

N.prototype.valueOf = function () {
    return this.n;
}

N.prototype.toString = function () {
    return this.n.toString();
}


// TIME

N.prototype.seconds = function () {
    return N(this.n * 1000);
}

N.prototype.second = N.prototype.seconds;


N.prototype.minutes = function () {
    return N(this.seconds() * 60);
};

N.prototype.minute = N.prototype.minutes;


N.prototype.hours = function () {
    return N(this.minutes() * 60);
};

N.prototype.hour = N.prototype.hours;


N.prototype.days = function () {
    return N(this.hours() * 24);
};

N.prototype.day = N.prototype.days;


N.prototype.weeks = function () {
    return N(this.days() * 7);
};

N.prototype.week = N.prototype.weeks;


N.prototype.months = function () {
    return N(Math.round((this.weeks() * (52/12)) * 100) / 100.0);
}

N.prototype.month = N.prototype.months;


N.prototype.years = function () {
    return N(this.months() * 12);
}

N.prototype.year = N.prototype.years;


// DATE

N.prototype.from = function (date) {
    return new Date(date.getTime() + this.n);
}

N.prototype.after = N.prototype.from;

N.prototype.fromNow = function () {
    return this.from(new Date());
}

N.prototype.afterNow = N.prototype.fromNow;

N.prototype.before = function (date) {
    return new Date(date.getTime() - this.n);
}

N.prototype.beforeNow = function () {
    return this.before(new Date());
}

N.prototype.ago = N.prototype.beforeNow;


module.exports = N;
