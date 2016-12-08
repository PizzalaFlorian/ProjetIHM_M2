$(document).ready(function() {

    $("#chevalResearch").hide();
    $("#organismeResearch").hide();
    $("#eventResearch").hide();
    $("#advanced").hide();
    $("div#id04").hide();

    $("#cheval").click(function() {
        $("#chevalResearch").show();
        $("#organismeResearch").hide();
        $("#eventResearch").hide();
    });
    $("#orga").click(function() {
        $("#chevalResearch").hide();
        $("#organismeResearch").show();
        $("#eventResearch").hide();
    });
    $("#event").click(function() {
        $("#chevalResearch").hide();
        $("#organismeResearch").hide();
        $("#eventResearch").show();
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
