import anime from "./anime-master/lib/anime.es.js";

const svg = document.getElementById("svg");
const popup = document.getElementById("popup");
const logoText = document.querySelector("#logo-text");

const width = innerWidth;
const height = innerHeight;

const horC = width / 2;
const vertC = height / 2;

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
const timeDurationOpen = 500;

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
  complete: () => {
    logoText.innerHTML = 'Click here';
    svg.addEventListener("click", startAnimateOpen);
  },
});

timeLineIn.add({
  fill: [{ value: `rgba(18,18,18,1)` }],
  duration: 800
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
      startAnimateLineLogoOpen();
    },
    complete: function (e) {
      startContentAnimate();
    }
  });
}

function startAnimateLineLogoOpen() {
  anime({
    targets: ".line.top",
    translateX: horC,
    scaleX: 0,
    opacity: 0,
    easing: "linear",
    duration: timeDurationOpen,
    round: 1,
    loop: false,
  });
  anime({
    targets: ".line.bottom",
    translateX: -horC,
    opacity: 0,
    scaleX: 0,
    easing: "linear",
    duration: timeDurationOpen,
    round: 1,
    loop: false,
  });
  anime({
    targets: "#logo-text",
    opacity: 0,
    easing: "linear",
    duration: timeDurationOpen - 200,
    delay: 100,
    round: 100,
    loop: false,
  });
}

function startContentAnimate() {
  console.log(123);

}
