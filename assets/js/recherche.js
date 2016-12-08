$(document).ready(function() {

    $("#chevalResearch").hide();
    $("#organismeResearch").hide();
    $("#eventResearch").hide();
    $("#advanced").hide();
    $("div#id04").hide();
    $("#dada").show();
    $("#listOrga").hide();
    $("#listEvent").hide();


    $("#trait").click(function(e){
        if(trait == false){
            trait = true;
        }
        else{
            trait = false;
        }
        if(selle){
            $(".selle").each(function(){
                $(this).show();
            })
        }
        else{
             $(".selle").each(function(){
                $(this).hide();
            })
        }
        if(demiSelle){
            $(".demi-selle").each(function(){
                $(this).show();
            })
        }
        else{
             $(".demi-selle").each(function(){
                $(this).hide();
            })
        }
        if(trait){
            $(".trait").each(function(){
                $(this).show();
            })
        }
        else{
             $(".trait").each(function(){
                $(this).hide();
            })
        }
    });

    $("#selle").click(function(e){
         if(selle == false){
            selle = true;
        }
        else{
            selle = false;
        }
        if(selle){
            $(".selle").each(function(){
                $(this).show();
            })
        }
        else{
             $(".selle").each(function(){
                $(this).hide();
            })
        }
        if(demiSelle){
            $(".demi-selle").each(function(){
                $(this).show();
            })
        }
        else{
             $(".demi-selle").each(function(){
                $(this).hide();
            })
        }
        if(trait){
            $(".trait").each(function(){
                $(this).show();
            })
        }
        else{
             $(".trait").each(function(){
                $(this).hide();
            })
        }
    });

    $("#demi-selle").click(function(e){
        if(demiSelle == false){
            demiSelle = true;
        }
        else{
            demiSelle = false;
        }
        if(selle){
            $(".selle").each(function(){
                $(this).show();
            })
        }
        else{
             $(".selle").each(function(){
                $(this).hide();
            })
        }
        if(demiSelle){
            $(".demi-selle").each(function(){
                $(this).show();
            })
        }
        else{
             $(".demi-selle").each(function(){
                $(this).hide();
            })
        }
        if(trait){
            $(".trait").each(function(){
                $(this).show();
            })
        }
        else{
             $(".trait").each(function(){
                $(this).hide();
            })
        }
    });



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
