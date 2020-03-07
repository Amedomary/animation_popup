import anime from "./anime-master/lib/anime.es.js";

const svg = document.getElementById("svg");
const popup = document.getElementById("popup");
const logo = document.querySelector(".logo");

const width = innerWidth;
const height = innerHeight;

const horC = width / 2;
const vertC = height / 2;

// const wPercent = width / 100;
// const hPercent = height / 100;

const a1 = `0 0`;
const b1 = `${width} 0`;
const c1 = `${width} ${height}`;
const d1 = `0 ${height}`;

const rectW = 300 / 2;
const rectH = 200 / 2;

const a2 = `${horC - rectW} ${vertC - rectH}`;
const b2 = `${horC + rectW} ${vertC - rectH}`;
const c2 = `${horC + rectW} ${vertC + rectH}`;
const d2 = `${horC - rectW} ${vertC + rectH}`;

svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
popup.setAttribute("points", `${a1} ${b1} ${c1} ${d1}`);
popup.setAttribute("fill", "rgba(18,18,18,1)");

const timeStartWait = 2000;
const timeDurationIn = 400;
const timeDurationOpen = 600;

const timeLineIn = anime.timeline({
  targets: "#popup",
  round: 1,
  loop: false,
  easing: "linear"
});

timeLineIn.add({
  targets: "#popup",
  points: [
    { value: `${a1} ${b1} ${c1} ${d1}` },
    { value: `${a2} ${b2} ${c2} ${d2}` }
  ],
  fill: [
    { value: `rgba(18,18,18,1)` },
    { value: `rgba(18,18,18,1)` },
    { value: `rgba(21,117,224,1)` },
    { value: `rgba(255,255,255,1)` }
  ],
  duration: timeDurationIn,
  delay: timeStartWait,
});

timeLineIn.add({
  fill: [{ value: `rgba(18,18,18,1)` }],
  duration: 800
});

anime({
  targets: ".logo",
  opacity: [{ value: "1" }, { value: "1" }],
  round: 1,
  loop: false,
  easing: "linear",
  delay: timeStartWait + timeDurationIn,
  duration: 1,
  complete: function(e) {
    logo.innerHTML = 'Click';
    svg.addEventListener("click", startAnimateOpen);
  }
});

function startAnimateOpen() {
  anime({
    targets: "#popup",
    points: [
      { value: `${a1} ${b2} ${c2} ${d2}` },
      { value: `${a1} ${b1} ${c2} ${d2}` },
      { value: `${a1} ${b1} ${c2} ${d1}` },
      { value: `${a1} ${b1} ${c1} ${d1}` }
    ],
    fill: [
      { value: `rgba(255,255,255,1)` },
      { value: `rgb(255,33,40)` },
      { value: `rgba(21,117,224,1)` },
      { value: `rgba(18,18,18,1)` }
    ],
    easing: "linear",
    duration: timeDurationOpen,
    round: 1,
    loop: false,
    begin: function (e) {
      svg.removeEventListener("click", startAnimateOpen);
    }
  });
}
