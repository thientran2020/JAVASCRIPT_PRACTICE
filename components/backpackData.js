import backpack from "./backpack.js";

const everydayPack = new backpack(
  "001",
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "images/everyday.svg"
);

const frogPack = new backpack(
  "002",
  "Frog Backpack",
  8,
  "green",
  3,
  10,
  10,
  false,
  "October 16, 2019 15:00:00 PST",
  "images/frog.svg"
);

const backpackArray = [everydayPack, frogPack];

export default backpackArray;