# Deklarativ Javascript

Javascript overtog mange egenskaber fra C/C++/Java som var populære da Javascript blev skabt. Dermed kan man kalde JS for et multi-paradigme sprog, der tillader mange forskellige slags kode. 

_momentjs_ -- imperativt og mutable: 
```javascript
const m = moment();
m.add(1, 'hours');
```

_date-fns_ -- deklarativt og immutable:
```javascript
const d1 = new Date();
const d2 = add(d1, { hours: 1 });
```
