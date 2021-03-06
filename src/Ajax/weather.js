import axios from "axios";

const KEY = "376247ddbe706b93323968f0ee0237e4",
  requestCurrentWeather = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    timeout: 3000,
  });

async function getWeather(lat, lon, exclude) {
  try {
    // Make URL of location Geocode:
    const URL = getURL(lat, lon, exclude, KEY);

    // Get and return current weather infos:
    const response = await requestCurrentWeather.get(URL);

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

function getURL(lat, lon, exclude, key) {
  return `/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude.join(
    ","
  )}&appid=${key}`;
}

export default getWeather;
