const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const eve = new Date(2022, 11, 24);
  let today = new Date();
  let date =
    Math.ceil((eve.getTime() - today.getTime()) / (1000 * 3600 * 24)) - 1;
  let hour = String(24 - today.getHours() - 1).padStart(2, "0");
  let min = String(60 - today.getMinutes() - 1).padStart(2, "0");
  let sec = String(60 - today.getSeconds()).padStart(2, "0");
  clockTitle.innerHTML = `${date}d ${hour}h ${min}m ${sec}s`;
}

getClock();
setInterval(getClock, 1000);
