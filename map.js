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

  "demon_king_2": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Demon%20King\'s%20Castle/2f/{z}/{x}/{y}.png', {
    maxZoom: 4,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "demon_king_3": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Demon%20King\'s%20Castle/3f/{z}/{x}/{y}.png', {
    maxZoom: 4,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "demon_king_4": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Demon%20King\'s%20Castle/4f/{z}/{x}/{y}.png', {
    maxZoom: 4,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "jouin_gate": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Jouin%20High%20School/gate/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "jouin_1": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Jouin%20High%20School/normal/1f/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "jouin_2": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Jouin%20High%20School/normal/2f/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "inv_jouin_1": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Jouin%20High%20School/invaded/1f/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "inv_jouin_2": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Jouin%20High%20School/invaded/2f/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "inv_jouin_3": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Jouin%20High%20School/invaded/3f/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "inv_jouin_4": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Jouin%20High%20School/invaded/4f/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "jozoji": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Jozoji/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),
  
  "temple_1f": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Temple%20of%20Eternity/1f/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "temple_2f": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Temple%20of%20Eternity/2f/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "temple_3f": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Temple%20of%20Eternity/3f/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "temple_4f": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Temple%20of%20Eternity/4f/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "emperyan": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/The%20Emperyan/emperyan/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "throne": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/The%20Emperyan/throne/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "tokyo_terminal": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Tokyo%20Diet%20Building/terminal/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "tokyo_building": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Tokyo%20Diet%20Building/building/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "station": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Other%20Maps/station/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "summit": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Other%20Maps/summit/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
    attribution: '&copy; <a href="https://www.sega.co.jp">SEGA</a>, &copy; <a href="https://www.atlus.co.jp">ATLUS</a>'
  }),

  "chaos": L.tileLayer('https://github.com/The-NinToaster/smtv-interactive-map-tileset/raw/main/Hall%20of%20Chaos/chaos/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 1,
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

    case "demonking_2":
      loadDemon2f();
      break;

    case "demonking_3":
      loadDemon3f();
      break;

    case "demonking_4":
      loadDemon4f();
      break;

    case "jouin_gate":
      loadJouinGate();
      break;

    case "jouin_1":
      loadJouin1();
      break;

    case "jouin_2":
      loadJouin2();
      break;

    case "inv_jouin_gate":
      loadInvJouinGate();
      break;

    case "inv_jouin_1":
      loadInvJouin1();
      break;

    case "inv_jouin_2":
      loadInvJouin2();
      break;

    case "inv_jouin_3":
      loadInvJouin3();
      break;

    case "inv_jouin_4":
      loadInvJouin4();
      break;

    case "jozoji":
      loadJozoji();
      break;

    case "inv_jozoji":
      loadInvJozoji();
      break;

    case "temple_1f":
      loadTemple1f();
      break;

    case "temple_2f":
      loadTemple2f();
      break;

    case "temple_3f":
      loadTemple3f();
      break;

    case "temple_4f":
      loadTemple4f();
      break;

    case "emperyan":
      loadEmperyan();
      break;

    case "throne":
      loadThrone();
      break;

    case "tokyo_terminal":
      loadTokyoTerminal();
      break;

    case "tokyo_building":
      loadTokyoBuilding();
      break;

    case "tokyo_building":
      loadTokyoBuilding();
      break;

    case "station":
      loadStation();
      break;

    case "summit":
      loadSummit();
      break;

    case "chaos":
      loadChaos();
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

function loadDemon2f()
{

  $(".name").attr("src", "/images/placenames/demon_king_2f.png");

  mapGroup.clearLayers();

  img = [
   2048,
   2048
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.demon_king_2);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadDemon3f()
{

  $(".name").attr("src", "/images/placenames/demon_king_3f.png");

  mapGroup.clearLayers();

  img = [
   2048,
   2048
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.demon_king_3);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadDemon4f()
{

  $(".name").attr("src", "/images/placenames/demon_king_4f.png");

  mapGroup.clearLayers();

  img = [
   1352,
   704
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.demon_king_4);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

//==================== JOUIN HIGH SCHOOL ========================//

function loadJouinGate()
{

  $(".name").attr("src", "/images/placenames/jouin_gate.png");

  mapGroup.clearLayers();

  img = [
   830,
   524
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.jouin_gate);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadInvJouinGate()
{

  $(".name").attr("src", "/images/placenames/invaded_jouin_gate.png");

  mapGroup.clearLayers();

  img = [
   830,
   524
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.jouin_gate);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadJouin1()
{

  $(".name").attr("src", "/images/placenames/jouin_1f.png");

  mapGroup.clearLayers();

  img = [
   1346,
   788
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.jouin_1);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadJouin2()
{

  $(".name").attr("src", "/images/placenames/jouin_2f.png");

  mapGroup.clearLayers();

  img = [
   1352,
   818
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.jouin_2);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadInvJouin1()
{

  $(".name").attr("src", "/images/placenames/invaded_jouin_1f.png");

  mapGroup.clearLayers();

  img = [
   1484,
   812
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.inv_jouin_1);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadInvJouin2()
{

  $(".name").attr("src", "/images/placenames/invaded_jouin_2f.png");

  mapGroup.clearLayers();

  img = [
   1370,
   812
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.inv_jouin_2);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadInvJouin3()
{

  $(".name").attr("src", "/images/placenames/invaded_jouin_3f.png");

  mapGroup.clearLayers();

  img = [
   1364,
   794
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.inv_jouin_3);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadInvJouin4()
{

  $(".name").attr("src", "/images/placenames/invaded_jouin_4f.png");

  mapGroup.clearLayers();

  img = [
   1394,
   884
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.inv_jouin_4);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

//============================= JOZOJI ======================================//

function loadJozoji()
{

  $(".name").attr("src", "/images/placenames/jozoji.png");

  mapGroup.clearLayers();

  img = [
   580,
   748
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.jozoji);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadInvJozoji()
{

  $(".name").attr("src", "/images/placenames/jozoji_invaded.png");

  mapGroup.clearLayers();

  img = [
   580,
   748
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.jozoji);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

//========================== TEMPLE OF ETERNITY ==============================//

function loadTemple1f()
{

  $(".name").attr("src", "/images/placenames/temple_eternity_1f.png");

  mapGroup.clearLayers();

  img = [
   1634,
   1952
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.temple_1f);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadTemple2f()
{

  $(".name").attr("src", "/images/placenames/temple_eternity_2f.png");

  mapGroup.clearLayers();

  img = [
   2048,
   2048
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.temple_2f);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadTemple3f()
{

  $(".name").attr("src", "/images/placenames/temple_eternity_3f.png");

  mapGroup.clearLayers();

  img = [
   2048,
   2048
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.temple_3f);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadTemple4f()
{

  $(".name").attr("src", "/images/placenames/temple_eternity_4f.png");

  mapGroup.clearLayers();

  img = [
   728,
   1112
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.temple_4f);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

//========================= THE EMPERYAN =====================================//

function loadEmperyan()
{

  $(".name").attr("src", "/images/placenames/emperyan.png");

  mapGroup.clearLayers();

  img = [
   640,
   1428
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.emperyan);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadThrone()
{

  $(".name").attr("src", "/images/placenames/emperyan_throne.png");

  mapGroup.clearLayers();

  img = [
   574,
   1160
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.throne);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

//======================== TOKYO DIET BUILDING ==============================//

function loadTokyoBuilding()
{

  $(".name").attr("src", "/images/placenames/tokyo_diet.png");

  mapGroup.clearLayers();

  img = [
   1118,
   644
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.tokyo_building);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadTokyoTerminal()
{

  $(".name").attr("src", "/images/placenames/tokyo_diet_terminal.png");

  mapGroup.clearLayers();

  img = [
   703,
   718
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.tokyo_terminal);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

//======================= OTHER MAPS =====================================//

function loadStation()
{

  $(".name").attr("src", "/images/placenames/shinagawa_station.png");

  mapGroup.clearLayers();

  img = [
   1544,
   686
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.station);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

function loadSummit()
{

  $(".name").attr("src", "/images/placenames/summit_conference.png");

  mapGroup.clearLayers();

  img = [
   1024,
   1024
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.summit);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}

//======================= HALL OF CHAOS =====================================//

function loadChaos()
{

  $(".name").attr("src", "/images/placenames/hall_of_chaos.png");

  mapGroup.clearLayers();

  img = [
   586,
   1250
  ]

  var rc = new L.RasterCoords(map, img)

  map.setView(rc.unproject([img[0], img[1]]), 2)

  mapGroup.addLayer(maps.chaos);

  map.setMaxBounds(null)

  setTimeout(function(){ map.invalidateSize()}, 100)
}