# Function


```javascript
// R.pipe afvikles fra venstre mod højre
let filterObject = pred => R.pipe(
  R.toPairs,
  R.filter(R.apply(pred)),
  R.map(R.head)
);

// Returnerer altid 42
const fortyTwo = R.always(42);

// Returnerer altid true
R.T(); 

// Curry dine egne funktioner
const product = (x, y) => x * y;
const cProduct = R.curry(product);

const double = product(2);
double(4); // => 8
```
