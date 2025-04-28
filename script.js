var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 32.987716, lng: -96.751056 },
    mapTypeControl: true,
    mapTypeControlOptions: {
	style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    zoomControl: true,
    zoomControlOptions: {
    	position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoom: 15
  });
}
