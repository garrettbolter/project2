$(document).ready(function () {
    console.log("Henlo, World!");
    $('.slider').bxSlider();
});

$("#a1").on('click', function(){
    let click_id = this.id;
    console.log(click_id);
    this.classList += " active";
    $("#a2").className = $("#a2").className.replace(" active", "");
    // console.log($("#a2").classList);
    $("#a3").removeClass(" active");
    $("#a4").removeClass(" active");
});

$("#a2").on('click', function(){
    let click_id = this.id;
    console.log(click_id);
    this.classList += " active";
    $("#a1").removeClass(" active");
    $("#a3").removeClass(" active");
    $("#a4").removeClass(" active");
});

