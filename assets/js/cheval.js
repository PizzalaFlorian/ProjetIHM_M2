$(document).ready(function() {

    var toogle = true;
    var papa = true;
    var mama = true;
    var momo = true;
    var child = false;

    $("#formAjoutCheval").hide();
    $("#saillieFormAjout").hide();
    $("#papaOuté").hide();
    $("#mamaOuté").hide();
    $("#momoOuté").hide();
    $("#papaCache").hide();
    $("#mamaCache").hide();
    $("#enfant1").hide();
    $("#enfant2").hide();
    $("#newGea").hide();
    $("#ptitNouveau").hide()

    $("#addPtit").click(function(e){
        e.preventDefault();
        $("#formAjoutCheval").hide();
        $("#ptitNouveau").show()
    })

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

    $("#raficherModalRemplie").click(function(e){
        $("#id02").show();
        $("#papaCache").show();
        $("#mamaCache").show();
        $("#enfant1").show();
        $("#enfant2").show();
        $("#maman").hide();
        $("#papa").hide();
    });

    $("#saveGea").click(function(e){
        e.preventDefault();
        $("#id02").hide();
        $("#newGea").show();
        $("#oldGea").hide();
    });

    $("#addMomo").click(function(e) {
        e.preventDefault();
        console.log("coucou");
        if(child == true){
            $("#enfant2").show()
            $("#momoOuté").hide();
            momo = true;
        }
        else{
            $("#enfant1").show();
            $("#momoOuté").hide();
            momo = true;
            child = true;
        }
    });

     $("#addMama").click(function(e) {
        e.preventDefault();
        $("#mamaCache").show();
        $("#mamaOuté").hide();
        $("#maman").hide();
    });
    
    $("#raPapa").click(function(e) {
        $("#maman").show();
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
