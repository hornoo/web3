var map;

window.onload = initMap;

function initMap(){
	map = new google.maps.Map(document.getElementById('divMapCanvas'),{
		center : {lat: -45.866400, lng : 170.520701},
		zoom: 12
	});
	
	
	map.addListener('click', function(e)
	{
		placeMarker(e.latLng, map);
	});
};

function placeMarker(latLng, map){
	
	var infoWindow = new google.maps.InfoWindow({
		content: document.getElementById("txtMarkerCaption").value,
	});
	
	
	
	var marker = new google.maps.Marker({
		
		position : latLng,
		map : map
	
	});
	
	infoWindow.open(map, marker);
	
    
}

