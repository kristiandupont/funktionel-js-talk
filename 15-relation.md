# Relation

```javascript
R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]

R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]

// Der er også en række numeriske hjælpere:
R.clamp(1, 10, -5) // => 1
R.clamp(1, 10, 15) // => 10
R.clamp(1, 10, 4)  // => 4

R.gt(2, 1); //=> true
```
