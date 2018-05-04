function fillArrRandValues(arr: number[], fillCounting: number) {
  for (let i = 0; i < fillCounting; i++) {
    arr.push(getRandomIntegerValue(1, 100));
  }
}

function getRandomIntegerValue(min: number, max: number) {
  return ~~(Math.random() * (max - min + 1)) + min; // ~~ operator is the same as Math.floor
}

function getMaxValues(arr: number[], countOfMaxes: number) {
  const sortedArrByMaxes = arr.sort((curr, next) => next - curr);
  const firsOfMaxes = sortedArrByMaxes.slice(0, countOfMaxes);
  return firsOfMaxes;
}

const arr: number[] = [];
const countOfMaxes = 3;
console.log(`array before: `, arr);
fillArrRandValues(arr, 10);
console.log(`array values is`, arr);
const firstMaxValues = getMaxValues(arr, countOfMaxes);
console.log(`first ${countOfMaxes} of maxes from array`, firstMaxValues);
