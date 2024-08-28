import "./style.css";

console.log("initializing");

async function getWeather(location) {
  const baseURL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const key = "Z3RK8ACQE7B4YJFZ9AEPWPQ4D";
  const fetchURL = baseURL + location + "?key=" + key;
  console.log(fetchURL);
  try {
    const response = await fetch(fetchURL, { mode: "cors" });
    // console.log(response);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log("There was an error!");
    console.log(error);
  }
}

//split this into api vs dom, add template structure to html file, make query selectors in index and add data to them

async function processWeatherData(location) {
  const data = await getWeather(location);

  const date = data.currentConditions.datetimeEpoch;
  const timezoneOffset = data.tzoffset;
  const localeDatetime = getLocalizedDatetime(date, timezoneOffset);
  const renderLocaleDatetime = formatDatetime(localeDatetime);

  const renderAddress = data.resolvedAddress;
  const renderTemp = formatTemp(data.currentConditions.temp);
  const renderHumidity = formatPercent(data.currentConditions.humidity);
  const renderFeelsLike = formatTemp(data.currentConditions.feelslike);
  const renderSunrise = data.currentConditions.sunrise;

  const renderSunset = data.currentConditions.sunset;
  const renderConditions = data.currentConditions.conditions;
  const renderPrecipProb = formatPercent(data.currentConditions.precipprob);
  const renderPrecipType = data.currentConditions.preciptype;
  const renderWindSpeed = data.currentConditions.windspeed + " mph";
  const renderWindDir = data.currentConditions.winddir;

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
  document.querySelector(".currentWindSpeed").textContent = renderWindSpeed;
  document.querySelector(".currentWindDir").textContent = renderWindDir;
}

function formatTemp(value) {
  return Math.round(value) + "\u00B0";
}

function getLocalizedDatetime(epoch, timezoneOffset) {
  const date = new Date(epoch * 1000);
  console.log("date: " + date);
  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  console.log("date: " + utc);
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

function formatPercent(value) {
  return Math.round(value) + "%";
}

function formatTime(dateObject) {}

let main = getWeather("anchorage");
processWeatherData("anchorage");

window.main = main;
window.getLocalizedDatetime = getLocalizedDatetime;

// window.getWeather = getWeather;
