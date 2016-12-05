$(document).ready(function() {

    $("#formAjoutCheval").hide();
    $("#saillieFormAjout").hide();

    $("#openFormCheval").click(function(e) {
        e.preventDefault();
        $("#formAjoutCheval").show();
    });

    $("#oui").click(function(e) {
        $("#saillieFormAjout").show();
    });
    $("#non").click(function(e) {
        $("#saillieFormAjout").hide();
    });

});
