# Currying??

Efter Haskell Curry

Omformer en funktion fra en der tager multiple parametre til en af højere orden. Resultatet er en funktion der laver _partial application_ hvis den ikke får det fulde antal parametre. Det lyder komplekst men er let at forstå ved at se et eksempel.

Alle Ramda funktioner er curried. 

```javascript
const a = [1, 2, 3];
const square = x => x * x;

R.map(square, a); // [2, 4, 6]

const squarer = R.map(square);

squarer(a) // [2, 4, 6]
```

