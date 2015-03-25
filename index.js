// TIME

Number.prototype.minutes = function () {
    return this * 60;
};

Number.prototype.minute = Number.prototype.minutes;


Number.prototype.hours = function () {
    return this.minutes() * 60;
};

Number.prototype.hour = Number.prototype.hours;


Number.prototype.days = function () {
    return this.hours() * 24;
};

Number.prototype.day = Number.prototype.days;


Number.prototype.weeks = function () {
    return this.days() * 7;
};

Number.prototype.week = Number.prototype.weeks;


Number.prototype.months = function () {
    return Math.round((this.weeks() * (52/12)) * 100) / 100.0;
}

Number.prototype.month = Number.prototype.months;


Number.prototype.years = function () {
    return this.months() * 12;
}

Number.prototype.year = Number.prototype.years;


// DATE

Number.prototype.from = function (date) {
    return new Date(date.getTime() + (this * 1000));
}

Number.prototype.fromNow = function () {
    return this.from(new Date());
}


Number.prototype.before = function (date) {
    return new Date(date.getTime() - (this * 1000));
}

Number.prototype.beforeNow = function () {
    return this.before(new Date());
}

Number.prototype.ago = Number.prototype.beforeNow;