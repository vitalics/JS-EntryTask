const startDay = new Date();
const currentDay = new Date();
startDay.setHours(0, 0, 0);

// first variant
const currentHours = currentDay.getHours();
const currentMinutes = currentDay.getMinutes();
const currentSeconds = currentDay.getSeconds();
const totalSeconds = currentHours * 3600 + currentMinutes * 60 + currentSeconds;
console.log('seconds passed from startedDay is', totalSeconds);

// second variant
const total: number = ~~((currentDay.getTime() - startDay.getTime()) / 1000); // 1000 - milliseconds
console.log('seconds passed from started day is', total);
