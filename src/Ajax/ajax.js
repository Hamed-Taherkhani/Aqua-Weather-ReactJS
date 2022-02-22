import getGeocoding from "./geocoding";
import getCurrentWeather from "./currentWeather";

async function getCurrentWeatherData(cityName) {
  try {
    // Get location geocode:
    const geoCode = await getGeocoding(cityName);

    // Get lat and lon of geoCode:
    const { lat, lon } = geoCode;

    // Get location current weather:
    const currentWeather = await getCurrentWeather(lat, lon);

    return { geo_code: geoCode, current_weather: currentWeather };
  } catch (error) {
    return Promise.reject(error);
  }
}

export default getCurrentWeather;
