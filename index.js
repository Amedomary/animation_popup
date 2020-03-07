import anime from "./anime-master/lib/anime.es.js";

const svg = document.getElementById("svg");
const popup = document.getElementById("popup");

const width = innerWidth;
const height = innerHeight;

const horC = width / 2;
const vertC = height / 2;

const wPercent = width / 100;
const hPercent = height / 100;

const a1 = `0 0`;
const b1 = `${width} 0`;
const c1 = `${width} ${height}`;
const d1 = `0 ${height}`;

const a2 = `${horC - 10 * wPercent} ${vertC - 10 * hPercent}`;
const b2 = `${horC + 10 * wPercent} ${vertC - 10 * hPercent}`;
const c2 = `${horC + 10 * wPercent} ${vertC + 10 * hPercent}`;
const d2 = `${horC - 10 * wPercent} ${vertC + 10 * hPercent}`;

svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
popup.setAttribute("points", `${a2} ${b2} ${c2} ${d2}`);

function startAnimate() {
  anime({
    targets: "#popup",
    points: [
      { value: `${a1} ${b2} ${c2} ${d2}` },
      { value: `${a1} ${b1} ${c2} ${d2}` },
      { value: `${a1} ${b1} ${c2} ${d1}` },
      { value: `${a1} ${b1} ${c1} ${d1}` }
    ],
    easing: "easeOutQuad",
    duration: 800,
    loop: false
  });
}

svg.addEventListener("click", startAnimate);