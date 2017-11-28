export const getLocation = address => {
  if (!window.geocoder) {
    window.geocoder = new window.google.maps.Geocoder();
  }
  return new Promise((resolve, reject) => {
    window.geocoder.geocode({ address: address }, function(results, status) {
      if (status === window.google.maps.GeocoderStatus.OK) {
        resolve(results);
      } else {
        reject(status);
      }
    });
  });
};
