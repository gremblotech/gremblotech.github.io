function updateTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let period = getPeriod(hour);

  hour = twelveHour(hour);
  min = min < 10 ? `0${min}` : min; // e.g. converts 9 to 09

  document.querySelector(".js-hours").innerHTML = hour;
  document.querySelector(".js-minuteperiod").innerHTML = `${min} ${period}`;
}

function twelveHour(hours) {
  if (hours === 0) hours += 12;
  else if (hours > 12) hours -= 12;

  return hours;
}

function getPeriod(hours) {
  let period = "AM";
  if (hours >= 12) period = "PM";
  
  return period;
}

updateTime();
setInterval(updateTime, 15000);