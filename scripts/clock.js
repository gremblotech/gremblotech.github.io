function updateTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let period = "AM"; 

  if (hour >= 12) {
    period = "PM";
    hour -= 12;
  }

  hour = hour === 0 ? 12 : hour; // Sets 0 AM/PM to 12
  min = min < 10 ? `0${min}` : min; // e.g. converts 9 to 09

  document.querySelector(".js-hours").innerHTML = hour;
  document.querySelector(".js-minuteperiod").innerHTML = `${min} ${period}`;
}

updateTime();
setInterval(updateTime, 15000);