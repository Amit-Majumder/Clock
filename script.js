const secondHand = document.querySelector(".seconds");
const minuteHand = document.querySelector(".minutes");
const hourHand = document.querySelector(".hours");
function runTheClock() {
  var date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hr = date.getHours();
  let secPosition = (sec * 360) / 60;
  let minPosition = (min * 360) / 60 + (sec * 360) / 60 / 60;
  let hrPosition = (hr * 360) / 12 + (min * 360) / 60 / 12;
  secondHand.style.transform = "rotate(" + secPosition + "deg)";
  minuteHand.style.transform = "rotate(" + minPosition + "deg)";
  hourHand.style.transform = "rotate(" + hrPosition + "deg)";
}
var interval = setInterval(runTheClock, 1000);
