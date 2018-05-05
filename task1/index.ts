function fillArrRandValues(array: number[], fillCounting: number): void {
  for (let i = 0; i < fillCounting; i++) {
    array.push(getRandomIntegerValue(1, 100));
  }
}

function getRandomIntegerValue(min: number, max: number): number {
  return ~~(Math.random() * (max - min + 1)) + min; // ~~ operator is the same as Math.floor
}

function getMaxValues(array: number[], maxes: number): number[] {
  const sortedArrByMaxes = array.sort((curr, next) => next - curr);
  const firsOfMaxes = sortedArrByMaxes.slice(0, maxes);
  return firsOfMaxes;
}

const arr: number[] = [];
const countOfMaxes = 3;
console.log(`array before: `, arr);
fillArrRandValues(arr, 10);
console.log(`array values is`, arr);
const firstMaxValues = getMaxValues(arr, countOfMaxes);
console.log(`first ${countOfMaxes} of maxes from array`, firstMaxValues);
