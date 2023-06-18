//=============================== page ===========================//
$(document).ready(function()
{
    $('.place').select2(
        {
            theme: 'flat'
        }
    );

    $('.place').trigger('change');

});

$(window).unload(function() { $('select option').remove(); });

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
       placename.style.paddingTop = '30px';
       open.innerText="X Close";

    }
    else
    {
        content.prepend(open);
        open.innerText = "☰ Options";
    }
}
