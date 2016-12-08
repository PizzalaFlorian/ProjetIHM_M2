$(document).ready(function() {

    $("#chevalResearch").hide();
    $("#organismeResearch").hide();
    $("#eventResearch").hide();
    $("#advanced").hide();
    $("div#id04").hide();
    $("#dada").show();
    $("#listOrga").hide();
    $("#listEvent").hide();

    $("#cheval").click(function() {
        $("#chevalResearch").show();
        $("#dada").show();
        $("#organismeResearch").hide();
        $("#eventResearch").hide();
        $("#listOrga").hide();
        $("#listEvent").hide();
    });
    $("#orga").click(function() {
        $("#chevalResearch").hide();
        $("#dada").hide();
        $("#organismeResearch").show();
        $("#eventResearch").hide();
        $("#listOrga").show();
        $("#listEvent").hide();
    });
    $("#event").click(function() {
        $("#dada").hide();
        $("#chevalResearch").hide();
        $("#organismeResearch").hide();
        $("#eventResearch").show();
        $("#listOrga").hide();
        $("#listEvent").show();
    });

    $("a#MoreInfo").click(function () {
        if( $("div#id04").is(":visible")) {
            $("div#id04").hide();
        }
        else {
            $("div#id04").show();
        }
    });

    $("#toogle").click(function(e) {
        e.preventDefault();
        $("#advanced").show();
        $("#chevalResearch").show();
    });




    // $("div ul li#InscriptionButton").click(function () {
    //     if( $("div.w3-top div#nav-inscription").is(":visible")) {
    //         $("div.w3-top div#nav-inscription").hide();
    //     }
    //     else {
    //         $("div.w3-top div#nav-inscription").show();
    //         $("div.w3-top div#nav-login").hide();
    //     }

    // });

});
