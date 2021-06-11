const fs = require('fs');

const auditoria = [
  {
    name: "Lilla salongen",
    seats: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
  {
    name: "Stora salongen",
    seats: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
];

const movies = [
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
  { movieId: , price: }
];

const dates = [
  "2021-06-01",
  "2021-06-02",
  "2021-06-03",
  "2021-06-04",
  "2021-06-05",
  "2021-06-06",
  "2021-06-07",
  "2021-06-08",
  "2021-06-09",
  "2021-06-10",
  "2021-06-11",
  "2021-06-12",
  "2021-06-13",
  "2021-06-14",
  "2021-06-15",
  "2021-06-16",
  "2021-06-17",
  "2021-06-18",
  "2021-06-19",
  "2021-06-20",
  "2021-06-21",
  "2021-06-22",
  "2021-06-23",
  "2021-06-24",
  "2021-06-25",
  "2021-06-26",
  "2021-06-27",
  "2021-06-28",
  "2021-06-29",
  "2021-06-30",
  "2021-07-01",
  "2021-07-02",
  "2021-07-03",
  "2021-07-04",
  "2021-07-05",
  "2021-07-06",
  "2021-07-07",
  "2021-07-08",
  "2021-07-09",
  "2021-07-10",
  "2021-07-11",
  "2021-07-12",
  "2021-07-13",
  "2021-07-14",
  "2021-07-15",
  "2021-07-16",
  "2021-07-17",
  "2021-07-18",
  "2021-07-19",
  "2021-07-21",
  "2021-07-22",
  "2021-07-23",
  "2021-07-24",
  "2021-07-25",
  "2021-07-26",
  "2021-07-28",
  "2021-07-29",
  "2021-07-30",
  "2021-07-31",
];
const startTimes = [
  ["15:10", "18:00", "21:00"],
  ["15:00", "18:00", "21:10"],
  ["15:00", "19:00", "21:00"],
];

const selectRandom = (max) => {
  return Math.floor(Math.random() * max);
};

//const prices = [100, 110, 90, 120]

const screenings = [];

dates.forEach((date) => {
  const times = startTimes[selectRandom(3)];
  times.forEach((time) => {
    screenings.push({
      startTime: date + "T" + time, // "2021-05-19T18:28:00.000+00:00"
    });
  });
});

screenings.forEach((screening, i) => {
  if(screening.startTime.includes("21:00") && screenings[i-1].startTime.includes("19:00")){
    screenings[i-1].auditoriumName === "Lilla salongen" ? screening.auditoriumName = "Stora salongen" : screening.auditoriumName = "Lilla salongen";
  } else {
    screening.auditoriumName = auditoria[selectRandom(2)].name;
  }
  screening.auditoriumName === "Lilla salongen" ? screening.seats = auditoria[0].seats : screening.seats = auditoria[1].seats;
});

screenings.forEach(screening => {
  let randomNumber = selectRandom(20)
  screening.movieId = movies[randomNumber].movieId;
  screening.price = movies[randomNumber].price;
});

console.log(screenings);

// let datum = new Date(screenings[0].startTime);
// console.log(datum.toLocaleString());
let data = JSON.stringify(screenings);
fs.writeFileSync('screenings.json', data);