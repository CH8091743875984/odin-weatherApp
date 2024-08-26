import "./style.css";

console.log("initializing");

async function getWeather(location) {
  const baseURL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const key = "Z3RK8ACQE7B4YJFZ9AEPWPQ4D";
  const fetchURL = baseURL + location + "?key=" + key;
  try {
    const response = await fetch(fetchURL, { mode: "cors" });

    const result = await response.json();

    return result;
  } catch (error) {
    console.log("There was an error!");
  }
}

window.getWeather = getWeather;
