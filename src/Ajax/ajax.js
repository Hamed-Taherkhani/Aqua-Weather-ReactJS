import getGeocoding from "./geocoding";
import getWeather from "./weather";

async function getWeatherData(cityName, limit) {
  try {
    // Get location geocode:
    const geoCode = await getGeocoding(cityName, limit);

    // Get lat and lon of geoCode:
    const { lat, lon } = geoCode[0];

    // Get location current weather:
    const weather = await getWeather(lat, lon, ["alerts", "minutely"]);

    return { location: geoCode, weather: weather };
  } catch (error) {
    return Promise.reject(error);
  }
}

export default getWeatherData;
