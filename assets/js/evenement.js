$(document).ready(function() {


    $("div#formAjoutEven").hide();

    $("#menuProfil").show();
    $("#deconnexionButton").show();
    $("#loginButton").hide();
    $("#InscriptionButton").hide();
    $("#iconNotif").show();


    $("a#openFormEven").click(function (e) {
        e.preventDefault();
        if( $("div#formAjoutEven").is(":visible")) {
            $("div#formAjoutEven").hide();
        }
        else {
            $("div#formAjoutEven").show();
        }
    });


});
