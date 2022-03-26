export function getCurrentGeolocationWithGPS(callback) {
  // Create Geolocation instance:
  const instance = navigator.geolocation,
    // Set options for request:
    options = {
      enableHighAccuracy: false,
      timeout: 3000,
      maximumAge: 0,
    };

  instance.getCurrentPosition(success, unsuccess, options);

  function success(geolocationPosition) {
    const { coords } = geolocationPosition,
      { latitude, longitude } = coords,
      lat_lon = { lat: latitude, lon: longitude };

    callback(lat_lon);
  }

  function unsuccess(geolocationPositionError) {
    console.log(geolocationPositionError.message);
  }
}
