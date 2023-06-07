//=============================== page ===========================//
function toggleNav() {

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("content");
    var open = document.getElementById("open");
    var openalt = document.getElementById("openalt");
    var placename = document.getElementById("placename");

    if(width < 500)
    {
        content = document.getElementById("content");
        sidebar.style.width = sidebar.style.width == (width +'px') ? '0' : (width+'px');
        content.style.marginLeft = content.style.marginLeft === (width +'px') ? '0' : (width+'px');
        //window.alert(parseInt(sidebar.style.width));
    }
    else
    {
        content = document.getElementById("content");
        sidebar.style.width = sidebar.style.width == "500px" ? '0' : '500px';
        content.style.marginLeft = content.style.marginLeft === "500px" ? '0' : '500px';
        //window.alert(parseInt(sidebar.style.width));

    }

    if(parseInt(sidebar.style.width) > 0)
    {
        //window.alert("true");
       openalt.prepend(open);
       placename.style.paddingTop = '30px'

    }
    else
    {
        content.prepend(open);
    }
}


//====================== Leaflet.js ===================================//
var map = L.map('map').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '©SEGA ©ATLUS'
}).addTo(map);