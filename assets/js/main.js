
// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

$(document).ready(function () {

    $("div.w3-top div#nav-inscription").hide();
    $("div.w3-top div#nav-login").hide();

    $("div ul li#loginButton").click(function () {
        if( $("div.w3-top div#nav-login").is(":visible")) {
            $("div.w3-top div#nav-login").hide();
        }
        else {
            $("div.w3-top div#nav-login").show();
            $("div.w3-top div#nav-inscription").hide();
        }

    });

    $("div ul li#InscriptionButton").click(function () {
        if( $("div.w3-top div#nav-inscription").is(":visible")) {
            $("div.w3-top div#nav-inscription").hide();
        }
        else {
            $("div.w3-top div#nav-inscription").show();
            $("div.w3-top div#nav-login").hide();
        }

    });

});