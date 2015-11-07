/*
* ===== Async Google Maps Module =====
* Google Script on page:
* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=googleMap.init"
* 	async defer></script>
*/

var googleMap = (function(){
	var myLatLng = {lat: 47.550987, lng: -122.277863},
		map,
		marker;

	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng,
			zoom: 13
		});

		marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'Hello World!'
		});
	}

	return {
		init: function() {
			return initMap();
		}
	};
}());
