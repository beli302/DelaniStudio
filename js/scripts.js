$(document).ready(function(){
$("#des,#design").click(function() {
$(".hide0").toggle();
$("#design").toggle();
    });
$("#dev,#development").click(function() {
$(".hide1").toggle();
$("#development").toggle();
    });
 $("#prod,#product").click(function() {
$(".hide2").toggle();
$("#product").toggle();
});
$("#row1").hover(function() {
    $(".portfolio1").css({"opacity": "0.2", "transition": "3s"});
    $("#text1").show();

},
function() {
    $(".portfolio1").css("opacity", "1");
    $("#text1").hide();
});
$("#row2").hover(function() {
    $(".portfolio2").css({"opacity": "0.2", "transition": "3s"});
    $("#text2").show();

},
function() {
    $(".portfolio2").css("opacity", "1");
    $("#text2").hide();
});
$("#row3").hover(function() {
    $(".portfolio3").css({"opacity": "0.2", "transition": "3s"});
    $("#text3").show();

},
function() {
    $(".portfolio3").css("opacity", "1");
    $("#text3").hide();
});
$("#row4").hover(function() {
    $(".portfolio4").css({"opacity": "0.2", "transition": "3s"});
    $("#text4").show();

},
function() {
    $(".portfolio4").css("opacity", "1");
    $("#text4").hide();
});
$("#row5").hover(function() {
    $(".portfolio5").css({"opacity": "0.2", "transition": "3s"});
    $("#text5").show();

},
function() {
    $(".portfolio5").css("opacity", "1");
    $("#text5").hide();
});
$("#row6").hover(function() {
    $(".portfolio6").css({"opacity": "0.2", "transition": "3s"});
    $("#text6").show();

},
function() {
    $(".portfolio6").css("opacity", "1");
    $("#text6").hide();
});
$("#row7").hover(function() {
    $(".portfolio7").css({"opacity": "0.2", "transition": "3s"});
    $("#text7").show();

},
function() {
    $(".portfolio7").css("opacity", "1");
    $("#text7").hide();
});
$("#row8").hover(function() {
    $(".portfolio8").css({"opacity": "0.2", "transition": "3s"});
    $("#text8").show();

},
function() {
    $(".portfolio8").css("opacity", "1");
    $("#text8").hide();
});

});
$("form#formSubmission").submit(function() {
    var name = ("#name").value();
    var email = ("#email").value();
    var text = ("#message").value();
    alert("Hello" + name + "We have received your message thank you for reaching out to us!")
});