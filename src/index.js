import "./style.css";
import { getWeather } from "./api";
import {
  formatPercent,
  formatTime,
  formatTemp,
  getLocalizedDatetime,
  formatDatetime,
  formatTimeShort,
  createWindDirText,
  formatDateShort,
  clearChildren,
} from "./util";

console.log("initializing");

//split this into api vs dom, add template structure to html file, make query selectors in index and add data to them

async function processWeatherDataAll(location) {
  //pulls weather data for the given location and populates the UI modules
  const data = await getWeather(location);
  processWeatherData(data);
  processDailyForecast(data);
  processHourlyForecast(data);
}

function processWeatherData(data) {
  //for the current conditions: input of a full data object is formatted as needed and populated in the UI
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

function processDailyForecast(data) {
  //for the daily conditions: input of a full data object is formatted as needed and populated in the UI

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
  //for the hourly conditions: input of a full data object is formatted as needed and populated in the UI

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
      const precipProb = formatPercent(hour.precipprob);

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

function addDailyForcastWidget(
  date,
  conditions,
  tempHigh,
  tempLow,
  windSpeedDir,
  precipProb
) {
  //adds a single daily forcast widget to the DOM with the given arguments
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
  //adds a single hourly forcast widget to the DOM with the given arguments

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

function setSearchButtonListener() {
  //triggers UI population with newly searched term upon clicking the search button
  const searchButton = document.querySelector("#searchButton");
  searchButton.addEventListener("click", () => {
    const searchValue = document.querySelector("#searchInput").value;
    processWeatherDataAll(searchValue);
  });
}

function setSearchInputListener() {
  //triggers UI population with newly searched term upon hitting the enter key from the input element

  const searchInput = document.querySelector("#searchInput");
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const searchValue = document.querySelector("#searchInput").value;
      processWeatherDataAll(searchValue);
    }
  });
}

function setAllScrolling() {
  //consolidated function to set scroll behavior on page
  const carouselDaily = document.querySelector(".dailyForecastCarousel");
  addScrollingTouch(carouselDaily);
  addScrollingWheel(carouselDaily);

  const carouselHourly = document.querySelector(".hourlyForecastCarousel");
  addScrollingTouch(carouselHourly);
  addScrollingWheel(carouselHourly);
}

function addScrollingTouch(element) {
  //sets scroll by touch functionality for mobile
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
  //sets scroll by mouse wheel functionality

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
