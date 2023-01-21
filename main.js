const timer = document.querySelector(".timer");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const refresh = document.querySelector(".refresh");
// console.log(timer);
// console.log(play);
// console.log(pause);
// console.log(refresh);
let [hours, mins, secs] = [0, 0, 0];
function startTimer() {
  secs++;
  if (secs == 60) {
    secs = 0;
    mins++;
    if (mins == 60) {
      mins = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = mins < 10 ? "0" + mins : mins;
  let s = secs < 10 ? "0" + secs : secs;
  timer.innerHTML = `${h}:${m}:${s}`;
}

play.addEventListener("click", () => {
  let int = setInterval(startTimer, 1000);
  pause.addEventListener("click", () => {
    clearInterval(int);
  });
  refresh.addEventListener("click", () => {
    hours = 0;
    mins = 0;
    secs = 0;
    clearInterval(int);
    timer.innerHTML = "00:00:00";
  });
});
