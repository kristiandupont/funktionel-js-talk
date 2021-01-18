# Object

```javascript
R.path(['a', 'b'], {a: {b: 2}}); //=> 2
// ...savner du en udgave som tager en .-separeret streng?

R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}

R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}

// Manglende properties bliver oprettet
R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}

R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}

R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}

// mergeLeft, mergeRight, ...

const kids = [
  {name: 'Abby', age: 7, hair: 'blond', grade: 2},
  {name: 'Fred', age: 12, hair: 'brown', grade: 7}
];
// Næsten et SQL select statement:
R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
```
