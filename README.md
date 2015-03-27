# Time Sugar

Some simple syntax for handling dates and times.


## Usage

`npm install time-sugar`

Examples:

```javascript
var T = require('time-sugar');


// Times

T(1).minute() == 60
T(5).minutes() == 300

T(60).minutes() == (1).hour()

T(24).hours() == (1).day()
T(48).hours() == (2).days()

T(7).days() == (1).week()
T(14).days() == (2).weeks()

T(52).weeks() == (1).year()

T(3).months() == (0.25).years()
T(6).months() == (0.5).years()
T(12).months() == (1).year()


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