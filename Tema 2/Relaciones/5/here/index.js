function obtenerPosicion(pos) {
    let latitud = pos.coords.latitude;
    let longitud = pos.coords.longitude;
    var platform = new H.service.Platform({
        'apikey': 'tgcQzNubSdPhYqMtsSaakJ2Cpm17wRBRUd4EGpAlFc4'
      });

    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
        zoom: 20,
        center: { lat: latitud, lng: longitud }
        });
    
    var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">H</text></svg>';
    
    // Create an icon, an object holding the latitude and longitude, and a marker:
    var icon = new H.map.Icon(svgMarkup),
        coords = {lat: latitud, lng: longitud},
        marker = new H.map.Marker(coords, {icon: icon});
    
    // Add the marker to the map and center the map at the location of the marker:
    map.addObject(marker);
    map.setCenter(coords);
}

navigator.geolocation.getCurrentPosition(obtenerPosicion);