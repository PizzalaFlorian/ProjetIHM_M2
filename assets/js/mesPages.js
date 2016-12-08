$(document).ready(function() {

    $("div#formAjoutOrga").hide();

    $("#menuProfil").show();
    $("#deconnexionButton").show();
    $("#loginButton").hide();
    $("#InscriptionButton").hide();
    $("#iconNotif").show();

    $("a#openFormOrga").click(function (e) {
        e.preventDefault();
        if( $("div#formAjoutOrga").is(":visible")) {
            $("div#formAjoutOrga").hide();
        }
        else {
            $("div#formAjoutOrga").show();
        }
    });

    $("button#reset").click(function (e) {
        e.preventDefault();
        if( $("div#formAjoutOrga").is(":visible")) {
            $("div#formAjoutOrga").hide();
        }
    });

});
