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
  }),

  "shinagawa": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Region%20Maps/shinagawa/{z}/{x}/{y}.png', {
    maxZoom: 6,
    minZoom: 2,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "taito": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Region%20Maps/taito/{z}/{x}/{y}.png', {
    maxZoom: 6,
    minZoom: 2,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "bethel_meeting": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Bethel/meeting/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 2,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

 "bethel_terminal": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Bethel/terminal/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 2,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "demon_king_1": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Demon%20King\'s%20Castle/1f/{z}/{x}/{y}.png', {
    maxZoom: 4,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

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

    case "shinagawa":
      loadShinagawa();
      break;

    case "taito":
      loadTaito();
      break;

    case "bethel_terminal":
      loadBethelTerminal();
      break;

    case "bethel_meeting":
      loadBethelMeeting();
      break;

    case "bethel_terminal":
      loadBethelTerminal();
      break;

    case "demonking_1":
      loadDemon1f();
      break;

    default:
      loadMinato();
      break;
  }
}

// ========================= REGION MAPS ==========================//
function loadTaito()
{

  $(".name").attr("src", "/images/placenames/taito.png");

  mapGroup.clearLayers();

  img = [
   4844,
   4846
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.taito);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadShinagawa()
{

  $(".name").attr("src", "/images/placenames/shinagawa.png");

  mapGroup.clearLayers();

  img = [
   4294,
   4292
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.shinagawa);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
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

// ===================== BETHEL =================================//
function loadBethelMeeting()
{

  $(".name").attr("src", "/images/placenames/bethel_meeting_room.png");

  mapGroup.clearLayers();

  img = [
   605,
   385
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.bethel_meeting);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadBethelTerminal()
{

  $(".name").attr("src", "/images/placenames/bethel_terminal_room.png");

  mapGroup.clearLayers();

  img = [
   628,
   596
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.bethel_terminal);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

//=================== DEMON KING'S CASTLE ======================//
function loadDemon1f()
{

  $(".name").attr("src", "/images/placenames/demon_king_1f.png");

  mapGroup.clearLayers();

  img = [
   2048,
   2048
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.demon_king_1);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

