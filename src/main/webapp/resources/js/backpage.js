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
