$(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('#MOVE_BACK_BTN').fadeOut();
        } else {
            $('#MOVE_BACK_BTN').fadeIn();
        }
    });

    $("#MOVE_BACK_BTN").click(function () {
    	window.history.back();
    });
});
window.addEventListener("load", function () {
    var siren = document.querySelector(".siren");
    var clear = document.querySelector(".clear-btn");
    siren.onclick = function (e) {
        e.preventDefault();
        var rprt = document.querySelector(".rprt");
        rprt.classList.remove("d-none");
    }

    clear.onclick = function (e) {
        e.preventDefault();
        var rprt = document.querySelector(".rprt");
        rprt.classList.add("d-none");

    }

});