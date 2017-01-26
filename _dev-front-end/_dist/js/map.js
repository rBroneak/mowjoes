
	function initMap() {
		// Styles a map in night mode.
		var azulseven = {lat: 44.97718025048359, lng: -93.27626235000002};
		var azulseven_mobile = {lat: 44.981853, lng: -93.280277};

		var map = new google.maps.Map(document.getElementById('map'), {
			center: azulseven,
			zoom: 14,
			draggable: false,
			scrollwheel: false,
			styles: [
				{
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#f5f5f5"
						}
					]
				},
				{
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#616161"
						}
					]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"color": "#f5f5f5"
						}
					]
				},
				{
					"featureType": "administrative.land_parcel",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#bdbdbd"
						}
					]
				},
				{
					"featureType": "landscape.natural.landcover",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#eeeeee"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#757575"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#e5e5e5"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#bfbfbf"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#757575"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#dadada"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#616161"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#bfbfbf"
						},
						{
							"lightness": 50
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#9e9e9e"
						}
					]
				},
				{
					"featureType": "transit.line",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#e5e5e5"
						}
					]
				},
				{
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#eeeeee"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#c9c9c9"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#3f3f3f"
						},
						{
							"weight": 1
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#9e9e9e"
						}
					]
				}
			]
		});

		var azulSevenPoint = {
			path: 'M18,0.7C8.5,0.7,0.8,8.4,0.8,18C0.8,29.1,18,51.1,18,51.1l0,0l0,0c0,0,17.2-22,17.2-33.2C35.2,8.4,27.5,0.7,18,0.7zM18,24.4c-3.4,0-6.2-2.8-6.2-6.2c0-3.4,2.8-6.2,6.2-6.2s6.2,2.8,6.2,6.2C24.2,21.6,21.4,24.4,18,24.4z',
			size: new google.maps.Size(36, 52),
			scaledSize: new google.maps.Size(36, 52),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(18, 52),
			fillColor: "#2bbfe0",
			fillOpacity: 1,
			strokeColor: "#2bbfe0",
			strokeWeight: 1
		};

		var marker = new google.maps.Marker({
			position: azulseven,
			icon: azulSevenPoint,
			map: map,
			draggable: false
		});
		function center() {
			google.maps.event.trigger(map, "resize");

			var width = $(window).width();
			if ((width <= 420)) {
				map.setCenter(azulseven_mobile)
			}
			else {
				map.setCenter(azulseven)
			}
		}
		google.maps.event.addDomListener(window, "resize", function() {
			center();
		});

		center();
	}//initMap

	$(document).ready(function() {
		initMap();
	});

