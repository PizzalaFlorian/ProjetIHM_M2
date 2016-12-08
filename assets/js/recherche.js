$(document).ready(function() {

    $("#chevalResearch").hide();
    $("#organismeResearch").hide();
    $("#eventResearch").hide();
    $("#advanced").hide();
    $("div#id04").hide();
    $("#dada").show();
    $("#listOrga").hide();
    $("#listEvent").hide();

    var trait = false;
    var selle = false;
    var demi = false;
    var oui = false;
    var non = false;
    var nat = false;
    var art = false;

    $("#saillieArtificielle").click(function(e) {
        if(!art){
            art = true;
        }
        else{
            art = false;
        }
        if(nat){
            $("#dada1").show();
            $("#dada2").show();
            $("#dada3").show();
            $("#dada5").hide();
        }
        else{
            $("#dada2").hide();
        }
        if(art){
            $("#dada1").show();
            $("#dada3").show();
            $("#dada4").show();
            $("#dada6").show();
            $("#dada5").hide();
        }
        else{
            $("#dada4").hide();
            $("#dada6").hide();
        }

        if(!art && !nat){
            $("#dada1").show();
            $("#dada2").show();
            $("#dada3").show();
            $("#dada5").show();
            $("#dada6").show();
            $("#dada4").show();
        }
    });

    $("#saillieNaturelle").click(function(e){
        if(!nat){
            nat = true;
        }
        else{
            nat = false;
        }
        if(nat){
            $("#dada1").show();
            $("#dada2").show();
            $("#dada3").show();
            $("#dada5").hide();
        }
        else{
            $("#dada2").hide();
        }
        if(art){
            $("#dada1").show();
            $("#dada3").show();
            $("#dada4").show();
            $("#dada6").show();
            $("#dada5").hide();
        }
        else{
            $("#dada4").hide();
            $("#dada6").hide();
        }

        if(!art && !nat){
            $("#dada1").show();
            $("#dada2").show();
            $("#dada3").show();
            $("#dada5").show();
            $("#dada6").show();
            $("#dada4").show();
        }
    });

    $("#saillieOui").click(function(e){
        if(!oui){
            oui = true;
        }
        else{
            oui = false;
        }
        if(oui){
            $("#dada1").show();
            $("#dada2").show();
            $("#dada3").show();
            $("#dada4").show();
            $("#dada6").show();
        }
        else{
            $("#dada1").hide();
            $("#dada2").hide();
            $("#dada3").hide();
            $("#dada4").hide();
            $("#dada6").hide();
        }
        if(non){
            $("#dada5").show();
        }
        else{
            $("#dada5").hide();
        }


        if(!oui && !non){
            $("#dada1").show();
            $("#dada2").show();
            $("#dada3").show();
            $("#dada5").show();
            $("#dada6").show();
            $("#dada4").show();
        }
    });

    $("#saillieNon").click(function(e){
        if(!non){
            non = true;
        }
        else{
            non = false;
        }
        if(oui){
            $("#dada1").show();
            $("#dada2").show();
            $("#dada3").show();
            $("#dada4").show();
            $("#dada6").show();
        }
        else{
            $("#dada1").hide();
            $("#dada2").hide();
            $("#dada3").hide();
            $("#dada4").hide();
            $("#dada6").hide();
        }
        if(non){
            $("#dada5").show();
        }
        else{
            $("#dada5").hide();
        }


        if(!oui && !non){
            $("#dada1").show();
            $("#dada2").show();
            $("#dada3").show();
            $("#dada5").show();
            $("#dada6").show();
            $("#dada4").show();
        }
    });

    $("#trait").click(function(e){
        if(trait == false){
            trait = true;
        }
        else{
            trait = false;
        }
        if(selle){
            $("#dada1").show();
            $("#dada3").show();
            $("#dada4").show();
            $("#dada5").show();
        }
        else{
            $("#dada1").hide();
            $("#dada3").hide();
            $("#dada4").hide();
            $("#dada5").hide();           
        }
        if(demi){
            $("#dada2").show();
        }
        else{
            $("#dada2").hide();  
        }
        if(trait){
            $("#dada6").show();
        }
        else{
            $("#dada6").hide();
        }


        if(!trait && !selle && !demi){
            $("#dada1").show();
            $("#dada2").show();
            $("#dada3").show();
            $("#dada5").show();
            $("#dada6").show();
            $("#dada4").show();
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
            $("#dada1").show();
            $("#dada3").show();
            $("#dada4").show();
            $("#dada5").show();
        }
        else{
            $("#dada1").hide();
            $("#dada3").hide();
            $("#dada4").hide();
            $("#dada5").hide();           
        }
        if(demi){
            $("#dada2").show();
        }
        else{
            $("#dada2").hide();  
        }
        if(trait){
            $("#dada6").show();
        }
        else{
            $("#dada6").hide();
        }

        if(!trait && !selle && !demi){
            $("#dada1").show();
            $("#dada2").show();
            $("#dada3").show();
            $("#dada5").show();
            $("#dada6").show();
            $("#dada4").show();
        }
    });

    $("#demi-selle").click(function(e){
        if(demi == false){
            demi = true;
        }
        else{
            demi = false;
        }
        if(selle){
            $("#dada1").show();
            $("#dada3").show();
            $("#dada4").show();
            $("#dada5").show();
        }
        else{
            $("#dada1").hide();
            $("#dada3").hide();
            $("#dada4").hide();
            $("#dada5").hide();           
        }
        if(demi){
            $("#dada2").show();
        }
        else{
            $("#dada2").hide();  
        }
        if(trait){
            $("#dada6").show();
        }
        else{
            $("#dada6").hide();
        }

        if(!trait && !selle && !demi){
            $("#dada1").show();
            $("#dada2").show();
            $("#dada3").show();
            $("#dada5").show();
            $("#dada6").show();
            $("#dada4").show();
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
