function tax(c, t){
    taxes = t*.01*c;
    total = (t*.01*c)+c;
    return total, taxes;
}

$(".calculator").submit(function() {
    var c = parseFloat($("#c").val());
    var t = parseFloat($("#t").val());
    var temp = tax(c, t).toFixed(2);
    $("p.tax-out").fadeIn(200);
    $("#tax-out").text(taxes).css("color", "#36af42");
    $("#cost-out").text(total).css("color", "#36af42").toFixed(2);
});

$(".calculator").on("reset", function() {
    $("p.tax-out").fadeOut(200);
});
