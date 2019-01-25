$(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() > 200) {
            $('#MOVE_BACK_BTN').fadeOut();
        } else {
            $('#MOVE_BACK_BTN').fadeIn();
        }
    });

    $("#MOVE_BACK_BTN").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});