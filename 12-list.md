# List

```javascript
// Check om alle elementer opfylder et prædikat
R.all(R.gt(4), [1, 2, 3]); // => true

R.contains(3, [1, 2, 3]); // => true

R.drop(1, ['foo', 'bar', 'baz']) // => ['bar', 'baz']

const l = [{a: 1}, {a: 2}, {a: 3}];
R.find(R.propEq('a', 2))(l); // => {a: 2}
R.find(R.propEq('a', 4))(l); // => undefined

const deepList = [1, [2, 3], [4, 5, [6, 7]]];
R.flatten(deepList); // => [1, 2, 3, 4, 5, 6, 7]

const objList = [{ id: 'I-12', name: 'John' }, { id: 'I-21', name: 'Jane' }];
const objMap = R.indexBy(R.prop('id'), objList)
// => { 'I-12': { id: 'I-12', name: 'John' }, 'I-21': { id: 'I-21', name: 'Jane' }}

```
