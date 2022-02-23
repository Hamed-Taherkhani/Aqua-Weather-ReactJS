import getGeocoding from "./geocoding";
import getWeather from "./weather";

async function getWeatherData(cityName) {
  try {
    // Get location geocode:
    const geoCode = await getGeocoding(cityName);

    // Get lat and lon of geoCode:
    const { lat, lon } = geoCode;

    // Get location current weather:
    const weather = await getWeather(lat, lon, ["alerts", "minutely"]);

    return { location: geoCode, weather: weather };
  } catch (error) {
    return Promise.reject(error);
  }
}

export default getWeatherData;
