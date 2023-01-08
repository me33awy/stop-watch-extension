const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const refresh = document.querySelector(".refresh");
const timer = document.querySelector(".timer");
// console.log(play);
// console.log(pause);
// console.log(refresh);
let [hours, mins, secs] = [0, 0, 0];
function startCounter() {
  secs++;
  if (secs == 60) {
    secs = 0;
    mins++;
    if (mins == 60) {
      mins = 0;
      hours++;
    }
  }
  timer.innerHTML = `${hours} : ${mins} : ${secs}`;
}
play.addEventListener("click", () => {
  setInterval(startCounter);
});
