$(document).ready(function() {


    $("div#formAjoutEven").hide();

    $("#menuProfil").show();
    $("#deconnexionButton").show();
    $("#loginButton").hide();
    $("#InscriptionButton").hide();
    $("#iconNotif").show();
    $("div#envoyerInvit").show();


    $("a#openFormEven").click(function (e) {
        e.preventDefault();
        if( $("div#formAjoutEven").is(":visible")) {
            $("div#formAjoutEven").hide();
            $("div#envoyerInvit").hide();
        }
        else {
            $("div#formAjoutEven").show();
            $("div#envoyerInvit").show();
        }
    });

    $("button#reset").click(function (e) {
        e.preventDefault();
        $("div#formAjoutEven").hide();
    });

    $("div#envoyerInvit a").click(function () {
        $("div#envoyerInvit").hide();
    });


});
