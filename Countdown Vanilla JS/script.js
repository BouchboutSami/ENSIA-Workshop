const daysHTML = document.querySelector("#tiles > span:nth-child(1)");
const hoursHTML = document.querySelector("#tiles > span:nth-child(2)");
const minutesHTML = document.querySelector("#tiles > span:nth-child(3)");
const secondsHTML = document.querySelector("#tiles > span:nth-child(4)");

const newyear = new Date("2023-05-05").getTime();

setInterval(() => {
  const today = new Date().getTime();
  let diff = (newyear - today) / 1000;
  let days = Math.floor(diff / 60 / 60 / 24);
  days < 10 ? (days = "0" + days) : null;
  let hours = Math.floor(diff / 60 / 60) - days * 24;
  hours < 10 ? (hours = "0" + hours) : null;
  let minutes = Math.floor(diff / 60) - days * 24 * 60 - hours * 60;
  minutes < 10 ? (minutes = "0" + minutes) : null;
  let seconds =
    Math.floor(diff) - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
  seconds < 10 ? (seconds = "0" + seconds) : null;
  daysHTML.innerHTML = days;
  hoursHTML.innerHTML = hours;
  minutesHTML.innerHTML = minutes;
  secondsHTML.innerHTML = seconds;
}, 1000);
