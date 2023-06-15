//============================ Leaflet.js ================================//
var L = require('leaflet')
L.RasterCoords = require('leaflet-rastercoords')
var img;
var mapGroup = new L.FeatureGroup();
var maps =
{
  "minato": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Region%20Maps/minato/{z}/{x}/{y}.png', {
    maxZoom: 7,
    minZoom: 2,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "chiyoda": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Region%20Maps/chiyoda/{z}/{x}/{y}.png', {
    maxZoom: 6,
    minZoom: 2,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  })

}

// create the map
var map = L.map('map', {
  crs: L.CRS.Simple
}).fitWorld();

mapGroup.addTo(map);
loadMinato();
document.getElementById('place').onchange = loadMap;

function loadMap()
{
  var place = this.value;
  switch(place)
  {
    case "minato":
      loadMinato();
      break;

    case "chiyoda":
      loadChiyoda();
      break;

    default:
      loadMinato();
      break;
  }
}

function loadChiyoda()
{

  $(".name").attr("src", "/images/placenames/chiyoda.png");

  mapGroup.clearLayers();

  img = [
   4140,
   3780
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.chiyoda);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadMinato()
{

  $(".name").attr("src", "/images/placenames/minato.png");

  mapGroup.clearLayers();

  img = [
  3860,
  5766
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.minato);

  map.setMaxBounds(null)
  setTimeout(function(){ map.invalidateSize()}, 100)

}






