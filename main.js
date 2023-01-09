const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const refresh = document.querySelector(".refresh");
const timer = document.querySelector(".timer");
let [hours, mins, secs] = [00, 00, 00];
function startCounter() {
  timer.innerHTML = "00:00:00";
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
  let int = setInterval(startCounter, 10);
  pause.addEventListener("click", () => {
    clearInterval(int);
  });
  refresh.addEventListener("click", () => {
    timer.textContent = "00:00:00";
  });
});
