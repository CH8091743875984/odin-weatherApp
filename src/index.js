import "./style.css";

console.log("initializing");

async function getWeather(location) {
  const baseURL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const key = "Z3RK8ACQE7B4YJFZ9AEPWPQ4D";
  const fetchURL = baseURL + location + "?key=" + key;
  // console.log(fetchURL);
  try {
    const response = await fetch(fetchURL, { mode: "cors" });
    // console.log(response);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    alert("Location not found.");
    console.log("There was an error!");
    console.log(error);
  }
}

//split this into api vs dom, add template structure to html file, make query selectors in index and add data to them

async function processWeatherDataAll(location) {
  const data = await getWeather(location);
  processWeatherData(data);
  processDailyForecast(data);
  processHourlyForecast(data);
}

function processWeatherData(data) {
  const date = data.currentConditions.datetimeEpoch;
  const timezoneOffset = data.tzoffset;
  const localeDatetime = getLocalizedDatetime(date, timezoneOffset);
  const renderLocaleDatetime = formatDatetime(localeDatetime);

  const renderAddress = data.resolvedAddress;
  const renderTemp = formatTemp(data.currentConditions.temp);
  const renderHumidity = formatPercent(data.currentConditions.humidity);
  const renderFeelsLike = formatTemp(data.currentConditions.feelslike);
  const renderSunrise = formatTime(data.currentConditions.sunrise);
  const renderSunset = formatTime(data.currentConditions.sunset);
  const renderConditions = data.currentConditions.conditions;
  const renderPrecipProb = formatPercent(data.currentConditions.precipprob);
  const renderPrecipType = data.currentConditions.preciptype;
  const renderWindSpeedDir =
    createWindDirText(data.currentConditions.winddir) +
    " " +
    data.currentConditions.windspeed +
    " mph";

  document.querySelector(".localDatetime").textContent = renderLocaleDatetime;
  document.querySelector(".resolvedAddress").textContent = renderAddress;
  document.querySelector(".currentTemp").textContent = renderTemp;
  document.querySelector(".currentHumidity").textContent = renderHumidity;
  document.querySelector(".currentFeelsLike").textContent = renderFeelsLike;
  document.querySelector(".currentSunrise").textContent = renderSunrise;
  document.querySelector(".currentSunset").textContent = renderSunset;
  document.querySelector(".currentConditions").textContent = renderConditions;
  document.querySelector(".currentPrecipProb").textContent = renderPrecipProb;
  document.querySelector(".currentPrecipType").textContent = renderPrecipType;
  document.querySelector(".currentWindSpeed").textContent = renderWindSpeedDir;
}

function createWindArrow(direction) {
  //takes an angle / degrees and returns an arrow svg rotated to that angle
  const arrow = document.createElement("i");
  arrow.classList.add("material-symbols-outlined");
  arrow.textContent = "north";
  rotateSVG(arrow, direction);

  return arrow;
}

function createWindDirText(direction) {
  //takes an angle / degrees and returns a text abbreviation of the cardinal direction
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round((direction % 360) / 45);
  return directions[index % 8];
}

function processDailyForecast(data) {
  clearChildren(document.querySelector(".dailyForecastCarousel"));
  data.days.forEach((day) => {
    const date = day.datetime;
    const conditions = day.conditions;
    const tempHigh = formatTemp(day.tempmax);
    const tempLow = formatTemp(day.tempmin);
    const windSpeedDir =
      createWindDirText(day.winddir) + " " + day.windspeed + " mph";
    const precipProb = formatPercent(day.precipprob);

    addDailyForcastWidget(
      date,
      conditions,
      tempHigh,
      tempLow,
      windSpeedDir,
      precipProb
    );
  });
}

function processHourlyForecast(data) {
  clearChildren(document.querySelector(".hourlyForecastCarousel"));
  data.days.forEach((day) => {
    day.hours.forEach((hour) => {
      const date = day.datetime;
      const timezoneOffset = data.tzoffset;

      const hourThis = hour.datetimeEpoch;

      const localeDatetime = getLocalizedDatetime(hourThis, timezoneOffset);
      const renderLocaleDatetime = formatTimeShort(localeDatetime);

      const conditions = hour.conditions;
      const temp = formatTemp(hour.temp);
      const windSpeedDir =
        createWindDirText(hour.winddir) + " " + hour.windspeed + " mph";
      const precipProb = formatPercent(day.precipprob);

      addHourlyForcastWidget(
        date,
        renderLocaleDatetime,
        conditions,
        temp,
        windSpeedDir,
        precipProb
      );
    });
  });
}

function formatDateShort(dateString) {
  //formats a date string originating in the format "YYYY-MM-DD"
  const parts = dateString.split("-");
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  const formattedDate = month + "/" + day;
  return formattedDate;
}

function addDailyForcastWidget(
  date,
  conditions,
  tempHigh,
  tempLow,
  windSpeedDir,
  precipProb
) {
  const carousel = document.querySelector(".dailyForecastCarousel");

  const widget = document.createElement("div");
  widget.classList.add("dailyWidget");

  const dateDiv = document.createElement("div");
  dateDiv.textContent = formatDateShort(date);

  const conditionsDiv = document.createElement("div");
  conditionsDiv.textContent = conditions;

  const tempsDiv = document.createElement("div");
  tempsDiv.textContent = tempHigh + " / " + tempLow;

  const windDiv = document.createElement("div");
  windDiv.textContent = windSpeedDir;

  const precipDiv = document.createElement("div");
  precipDiv.textContent = precipProb;

  widget.appendChild(dateDiv);
  widget.appendChild(tempsDiv);
  widget.appendChild(conditionsDiv);

  widget.appendChild(precipDiv);
  widget.appendChild(windDiv);

  carousel.append(widget);
}

function addHourlyForcastWidget(
  date,
  hour,
  conditions,
  temp,
  windSpeedDir,
  precipProb
) {
  const carousel = document.querySelector(".hourlyForecastCarousel");

  const widget = document.createElement("div");
  widget.classList.add("hourlyWidget");

  const dateDiv = document.createElement("div");
  dateDiv.textContent = formatDateShort(date);

  const hourDiv = document.createElement("div");
  hourDiv.textContent = hour;

  const conditionsDiv = document.createElement("div");
  conditionsDiv.textContent = conditions;
  const tempDiv = document.createElement("div");
  tempDiv.textContent = temp;

  const windDiv = document.createElement("div");
  windDiv.textContent = windSpeedDir;

  const precipDiv = document.createElement("div");
  precipDiv.textContent = precipProb;

  widget.appendChild(dateDiv);
  widget.appendChild(hourDiv);
  widget.appendChild(tempDiv);
  widget.appendChild(conditionsDiv);

  widget.appendChild(precipDiv);
  widget.appendChild(windDiv);

  carousel.append(widget);
}

function clearChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function formatTemp(value) {
  return Math.round(value) + "\u00B0";
}

function getLocalizedDatetime(epoch, timezoneOffset) {
  const date = new Date(epoch * 1000);
  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const localDateTime = new Date(utc + 60 * 60 * 1000 * timezoneOffset);

  return localDateTime;
}

function formatDatetime(dateObject) {
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDay();
  const hour = dateObject.getHours();
  const minute = dateObject.getMinutes();

  const hourTwelve = hour % 12 || 12;
  const period = hour >= 12 ? "PM" : "AM";

  return `${month}/${day}/${year} ${hourTwelve}:${minute} ${period}`;
}

function formatTimeShort(dateObject) {
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDay();
  const hour = dateObject.getHours();
  const minute = dateObject.getMinutes();

  const hourTwelve = hour % 12 || 12;
  const period = hour >= 12 ? "PM" : "AM";

  return `${hourTwelve} ${period}`;
}

function formatPercent(value) {
  return Math.round(value) + "%";
}

function formatTime(timeString) {
  let [hours, minutes, seconds] = timeString.split(":");
  hours = parseInt(hours);

  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const result = `${hours}:${minutes} ${period}`;

  return result;
}

function rotateSVG(target, angle) {
  if (angle >= 0 && angle <= 360) {
    target.style.visibility = "visible";
    target.style.transform = "rotate(" + angle + "deg)";
  } else {
    target.style.visibility = "hidden";
  }
}

function setSearchButtonListener() {
  const searchButton = document.querySelector("#searchButton");
  searchButton.addEventListener("click", () => {
    const searchValue = document.querySelector("#searchInput").value;
    processWeatherDataAll(searchValue);
  });
}

function setSearchInputListener() {
  const searchInput = document.querySelector("#searchInput");
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const searchValue = document.querySelector("#searchInput").value;
      processWeatherDataAll(searchValue);
    }
  });
}

function setAllScrolling() {
  const carouselDaily = document.querySelector(".dailyForecastCarousel");
  addScrollingTouch(carouselDaily);
  addScrollingWheel(carouselDaily);

  const carouselHourly = document.querySelector(".hourlyForecastCarousel");
  addScrollingTouch(carouselHourly);
  addScrollingWheel(carouselHourly);
}

function addScrollingTouch(element) {
  const carousel = element;

  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("touchstart", (event) => {
    console.log("touch started");
    isDown = true;
    startX = event.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("touchmove", (event) => {
    console.log("touch moving");
    if (!isDown) return;
    event.preventDefault();

    const x = event.touches[0].pageX - carousel.offsetLeft;
    const walk = x - startX;
    carousel.scrollLeft = scrollLeft - walk;
  });
  carousel.addEventListener("touchend", () => {
    console.log("touch ending");
    isDown = false;
  });
  carousel.addEventListener("touchcancel", () => {
    console.log("touch canceled");
    isDown = false;
  });
}

function addScrollingWheel(element) {
  const carousel = element;
  carousel.addEventListener("wheel", (event) => {
    //prevent default vertical scroll
    event.preventDefault();
    carousel.scrollLeft += event.deltaY;
  });
}

let main = getWeather("anchorage");
// processWeatherData("anchorage");
// processDailyForecast("anchorage");
// processHourlyForecast("anchorage");

processWeatherDataAll("anchorage");
setSearchButtonListener();
setSearchInputListener();
setAllScrolling();

// window.formatTime = formatTime;

window.main = main;

window.createWindDirText = createWindDirText;
// window.getLocalizedDatetime = getLocalizedDatetime;

// window.getWeather = getWeather;
