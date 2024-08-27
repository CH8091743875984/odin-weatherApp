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

  document.querySelector(".localDatetime").textContent =
    formatDatetime(localeDatetime);

  document.querySelector(".resolvedAddress").textContent = data.resolvedAddress;
  document.querySelector(".currentTemp").textContent = formatTemp(
    data.currentConditions.temp
  );
  document.querySelector(".currentHumidity").textContent =
    data.currentConditions.humidity;
  document.querySelector(".currentFeelsLike").textContent = formatTemp(
    data.currentConditions.feelslike
  );
  document.querySelector(".currentSunrise").textContent =
    data.currentConditions.sunrise;
  document.querySelector(".currentSunset").textContent =
    data.currentConditions.sunset;
  document.querySelector(".currentConditions").textContent =
    data.currentConditions.conditions;
  document.querySelector(".currentPrecipProb").textContent =
    data.currentConditions.precipprob;
  document.querySelector(".currentPrecipType").textContent =
    data.currentConditions.preciptype;
  document.querySelector(".currentWindSpeed").textContent =
    data.currentConditions.windspeed;
  document.querySelector(".currentWindDir").textContent =
    data.currentConditions.winddir;

  const address = data.resolvedAddress;

  return address;
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

let main = getWeather("anchorage");
processWeatherData("anchorage");

window.main = main;
window.getLocalizedDatetime = getLocalizedDatetime;

// window.getWeather = getWeather;
