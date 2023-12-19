const map = L.map('map', {
  center: [16.4815363533,121.144950018],
  zoom: 20
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);


const marker = L.marker([16.4815363533, 121.144950018],
  {alt: 'NVSU'}).addTo(map).bindPopup('NVSU Bayombong Campus');

  var popup = L.popup();

  function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(map);
  }
  
  map.on('click', onMapClick);

  var circle = L.circle([16.4815363533,121.144950018], {
    color: '#630000',
    fillColor: '#EEEBDD',
    fillOpacity: 0.2,
    radius: 100
}).addTo(map);