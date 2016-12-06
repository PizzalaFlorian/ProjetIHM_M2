$(document).ready(function() {

    var toogle = true;

    $("#formAjoutCheval").hide();
    $("#saillieFormAjout").hide();

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
