export function getGeolocationByGPS(callback) {
  const geolocationInstance = navigator.geolocation,
    options = {
      timeout: 3000,
      enableHighAccuracy: false,
    };

  geolocationInstance.getCurrentPosition(success, unsuccess, options);

  function success(geoLocationPositionInstance) {
    const coords = geoLocationPositionInstance.coords;

    const { latitude, longitude } = coords;
    callback(latitude, longitude);
  }

  function unsuccess(geoLocationPositionError) {
    const message = geoLocationPositionError.message;

    alert(message);
    console.log(message);
  }
}
