import axios from "axios";

const KEY = "836059622a1ffd17acb7fad70ef9f70f",
  // Create a axios object and set some early request's configurations:
  request = axios.create({
    baseURL: "http://api.openweathermap.org/geo/1.0/",
    timeout: 3000,
  });

/**
 * getGeocoding search for locations while working with geographic names and coordinates,
 * and returns found location's coordinate, name, state name and ...
 *
 * @param {*String} cityName
 * @returns {*Promise} {
 *      lat : Float,
 *      lon : Float,
 *       name : String,
 *      state : String,
 *     place_names: Object (location name in some langues)
 * }
 */
async function getGeocoding(cityName, limit) {
  // Make URL with customized options:
  const URL = getURL(cityName, limit, KEY);

  // Send request to url and get response:
  try {
    const response = await request.get(URL);
    const resDataArr = response.data;

    return resDataArr.map((item) => ({
      lat: item.lat,
      lon: item.lon,
      name: item.name,
      state: item.state,
      country: item.country,
      place_names: item.local_names,
    }));
  } catch (error) {
    return Promise.reject(error);
  }
}

function getURL(cityName, limit, key) {
  return `/direct?q=${cityName}&limit=${limit}&appid=${key}`;
}

export default getGeocoding;
