import axios from "axios";
import getGeocoding from "./geocoding";

const KEY = "376247ddbe706b93323968f0ee0237e4",
  requestCurrentWeather = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    timeout: 2000,
  });

async function getCurrentWeather(lat, lon) {
  try {
    // Make URL of location Geocode:
    const URL = getURL(lat, lon, KEY);

    // Get and return current weather infos:
    const response = await requestCurrentWeather.get(URL);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

function getURL(lat, lon, key) {
  return `/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
}

export default getCurrentWeather;
