export function formatPercent(value) {
  //returns a rounded value with a percent symbol appended
  return Math.round(value) + "%";
}

export function formatTime(timeString) {
  //takes a datetime object and returns a string in the format HH:MM AM/PM

  let [hours, minutes, seconds] = timeString.split(":");
  hours = parseInt(hours);

  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const result = `${hours}:${minutes} ${period}`;

  return result;
}

export function formatTemp(value) {
  //returns a rounded number and appends a degree symbol to format for temperature
  return Math.round(value) + "\u00B0";
}

export function getLocalizedDatetime(epoch, timezoneOffset) {
  //given an epoch (seconds) and a timezone offset (hours) return a localized datetime object
  const date = new Date(epoch * 1000);
  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const localDateTime = new Date(utc + 60 * 60 * 1000 * timezoneOffset);

  return localDateTime;
}

export function formatDatetime(dateObject) {
  //takes a datetime object and returns a string in the format mm/dd/yyyy MM:HH AM/PM
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDay();
  const hour = dateObject.getHours();
  const minute = String(dateObject.getMinutes()).padStart(2, "0");

  const hourTwelve = hour % 12 || 12;
  const period = hour >= 12 ? "PM" : "AM";

  return `${month}/${day}/${year} ${hourTwelve}:${minute} ${period}`;
}

export function formatTimeShort(dateObject) {
  //takes a datetime object and returns a string in the format HH AM/PM
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDay();
  const hour = dateObject.getHours();
  const minute = dateObject.getMinutes();

  const hourTwelve = hour % 12 || 12;
  const period = hour >= 12 ? "PM" : "AM";

  return `${hourTwelve} ${period}`;
}

export function createWindArrow(direction) {
  //takes an angle / degrees and returns an arrow svg rotated to that angle
  const arrow = document.createElement("i");
  arrow.classList.add("material-symbols-outlined");
  arrow.textContent = "north";
  rotateSVG(arrow, direction);

  return arrow;
}

export function createWindDirText(direction) {
  //takes an angle / degrees and returns a text abbreviation of the cardinal direction
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round((direction % 360) / 45);
  return directions[index % 8];
}

export function formatDateShort(dateString) {
  //formats a date string originating in the format "YYYY-MM-DD to e.g. Fri 10/1"

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(dateString);

  const dayOfWeek = days[date.getDay()];
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${dayOfWeek} ${month}/${day}`;

  return formattedDate;
}

export function clearChildren(parent) {
  //clears all child elements from a given parent element
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function rotateSVG(target, angle) {
  //rotates a given element (e.g. SVG) given a target element and angle to rotate
  if (angle >= 0 && angle <= 360) {
    target.style.visibility = "visible";
    target.style.transform = "rotate(" + angle + "deg)";
  } else {
    target.style.visibility = "hidden";
  }
}
