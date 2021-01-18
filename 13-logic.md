# Logic

```javascript
const even = x => x % 2 === 0;
const gt10 = x => x > 10;

const evenAndGt10 = R.both(even, gt10);

evenAndGt10(100); // => true
evenAndGt10(101); // => false

const isQueen = R.propEq('rank', 'Q');
const isSpade = R.propEq('suit', '♠︎');
const isQueenOfSpades = R.allPass([isQueen, isSpade]);

isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true

R.and(true, true); //=> true
R.and(true, false); //=> false
```
