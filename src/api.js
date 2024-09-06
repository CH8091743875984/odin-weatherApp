export async function getWeather(location) {
  //returns full data from an api call to the given location
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
