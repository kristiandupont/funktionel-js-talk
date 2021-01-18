/*
Tag data fra data.json og find følgende:

For hver virksomhed (= domæne) vil vi have:
et ojekt som indeholder antal medarbejdere af de forskellige køn og en liste af fulde navne

*/


const data = require('./exercise/data.json');

// Imperativ implementation:
let companies = {};
for (let i = 0; i < data.length; i++) {
  let companyName = data[i].company_name || data[i].email && data[i].email.split('@')[1];
  if (!companyName) {
    continue;
  }

  if (!(companyName in companies)) {
    companies[companyName] = {
      employees: [],
      genders: {}
    }
  }
  companies[companyName].employees.push(`${data[i].first_name} ${data[i].last_name}`);
  
  if (!(data[i].gender in companies[companyName].genders)) {
    companies[companyName].genders[data[i].gender] = 0;
  }

  companies[companyName].genders[data[i].gender] += 1;
}


// Deklarativ implementation med Ramda:
const indexToArray = f => R.reduce((acc, elem) => R.assoc(f(elem), R.append(elem, acc[f(elem)]), acc), {})

const getCompanyName = user => user.company_name || user.email && R.split('@')(user.email)[1];
const getFullName = user => `${user.first_name} ${user.last_name}`

R.pipe(
  indexToArray(getCompanyName),
  R.map((people) => ({
    employees: R.map(getFullName, people),
    genders: R.countBy(R.prop('gender'), people),
  })),
  R.omit([null])
)(data);

