
```
const obj = { id: 1, name: 'Acme' };

// R.prop() tager en property fra et objekt:
R.prop('name', obj); // => Acme

const getId = R.prop('id');

const getIds = R.map(getId);

const objs = [obj, { id: 13:, name: 'Corp2000' }, { id: 35, name: 'company Inc' }];

getIds(objs); // => [1, 13, 35]
```
