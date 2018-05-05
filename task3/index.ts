import 'reflect-metadata';

const happines = {
  first: 4,
  second: 1,
  third: 5,
  fourth: 5,
  fives: 2
};

function sortedPropertyNames(obj: Object): string[] {
  const entries = Object.entries(obj);
  entries.sort((curr, next) => next['1'] - curr['1']);
  const sortedNames = entries.map((value: [string, number], index: number) => value['0']);
  return sortedNames;
}

const propertyNames = sortedPropertyNames(happines);
console.log('sorted property names by priority is ', propertyNames);
