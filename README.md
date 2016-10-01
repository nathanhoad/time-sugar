# Time Sugar

[![CircleCI](https://circleci.com/gh/nathanhoad/time-sugar/tree/master.svg?style=svg)](https://circleci.com/gh/nathanhoad/time-sugar/tree/master)

Some simple syntax for handling dates and times.


## Usage

`npm install time-sugar`

Examples:

```javascript
var T = require('time-sugar');


// Times

T(1).minute() == 60
T(5).minutes() == 300

T(60).minutes() == T(1).hour()

T(24).hours() == T(1).day()
T(48).hours() == T(2).days()

T(7).days() == T(1).week()
T(14).days() == T(2).weeks()

T(52).weeks() == T(1).year()

T(3).months() == T(0.25).years()
T(6).months() == T(0.5).years()
T(12).months() == T(1).year()


// Dates
var now = new Date();

T(1).day().fromNow()
T(2).weeks().fromNow()

T(1).day().beforeNow() // also: (1).day().ago()
T(3).weeks().beforeNow() // also: (3).weeks().ago()

T(1).day().from(now)
T(2).weeks().from(now)

T(1).day().before(now)
T(3).weeks().before(now)
```