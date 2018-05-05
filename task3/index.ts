import 'reflect-metadata';

const happines = {
  first: 4,
  second: 1,
  third: 5,
  fourth: 5,
  fives: 2
};

function sortedPropertyNames(obj: Object) {
  const entries = Object.entries(obj);
  entries.sort((curr, next) => next['1'] - curr['1']);
  const propertyNames = entries.map((value: [string, number], index: number) => value['0']);
  return propertyNames;
}

const propertyNames = sortedPropertyNames(happines);
console.log('sorted property names by priority is ', propertyNames);
