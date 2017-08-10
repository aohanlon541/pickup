// console.log("testing");

var map, infoWindow;

      function initMap() {

        let park_coordinates = [
          {lat: 30.2665, lng: -97.748},
          {lat: 30.2670, lng: -97.739},
          {lat: 30.2665, lng: -97.747},
        ];

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });

        add_markers_to_map(map, park_coordinates);
        find_and_set_current_location(map);
  
      }

      function find_and_set_current_location(map) {
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }


      function add_markers_to_map(map, markers) {
        // requires markers like 
        // [{lat: 30.2665, lng: -97.748}, {lat: 30.267, lng: -97.743}, ...]

        for (let coordinate of markers) {
          let marker = new google.maps.Marker({
            position: coordinate,
            map: map
          });
        }
      }

      	

function initialize() {

    //Add the event listener after Google Mpas and window is loaded
    $('#show-map').click(function () {
         var mapOptions = {
	    center: { lat: 0, lng: 0 },
	    zoom: 8
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

module.exports

//       // Insert into HTML file
//     // <script async defer
//     // src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcJmdtAXR1uxhLwobke4lqqKQmfuSw8VQ&callback=initMap">
//     // </script>