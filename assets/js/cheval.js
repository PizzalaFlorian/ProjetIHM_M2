$(document).ready(function() {

    var toogle = true;
    var papa = true;
    var mama = true;
    var momo = true;

    $("#formAjoutCheval").hide();
    $("#saillieFormAjout").hide();
    $("#papaOuté").hide();
    $("#mamaOuté").hide();
    $("#momoOuté").hide();
    $("#papaCache").hide();

    $("#openFormCheval").click(function(e) {
        e.preventDefault();
        if(toogle){
            $("#formAjoutCheval").show();
            toogle = false;
        }
        else{
             $("#formAjoutCheval").hide();
             toogle = true;
        }
    });
    $("#addPapa").click(function(e) {
        e.preventDefault();
        $("#papaCache").show();
        $("#papaOuté").hide();
        $("#papa").hide();
    });
    
    $("#raPapa").click(function(e) {
        $("#papa").show();
    });

    $("#papa").click(function(e) {
        e.preventDefault();
        if(papa){
            $("#papaOuté").show();
            papa = false;
        }
        else{
             $("#papaOuté").hide();
             papa = true;
        }
    });

    $("#maman").click(function(e) {
        e.preventDefault();
        if(mama){
            $("#mamaOuté").show();
            mama = false;
        }
        else{
             $("#mamaOuté").hide();
             mama = true;
        }
    });

     $("#morveux").click(function(e) {
        e.preventDefault();
        if(momo){
            $("#momoOuté").show();
            momo = false;
        }
        else{
             $("#momoOuté").hide();
             momo = true;
        }
    });

    $("#oui").click(function(e) {
        $("#saillieFormAjout").show();
    });
    $("#non").click(function(e) {
        $("#saillieFormAjout").hide();
    });

    $("#reset").click(function(e) {
        $("#formAjoutCheval").hide();
    });
});
