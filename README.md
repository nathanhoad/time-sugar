# Time Sugar

Some simple syntax for handling dates and times.


## Usage

`npm install time-sugar`

Examples:

```javascript
require('time-sugar');


// Times

(1).minute() == 60
(5).minutes() == 300

(60).minutes() == (1).hour()

(24).hours() == (1).day()
(48).hours() == (2).days()

(7).days() == (1).week()
(14).days() == (2).weeks()

(52).weeks() == (1).year()

(3).months() == (0.25).years()
(6).months() == (0.5).years()
(12).months() == (1).year()


// Dates
var now = new Date();

(1).day().fromNow()
(2).weeks().fromNow()

(1).day().beforeNow() // also: (1).day().ago()
(3).weeks().beforeNow() // also: (3).weeks().ago()

(1).day().from(now)
(2).weeks().from(now)

(1).day().before(now)
(3).weeks().before(now)
```