var locationx, infoWindow;
      function initMap() {
        locationx = new google.maps.Map(document.getElementById('locationx'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;


        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(locationx);
            locationx.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, locationx.getCenter());
          });
        } else {
          // IF Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, locationx.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(locationx);
      }