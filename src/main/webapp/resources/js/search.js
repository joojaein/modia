window.addEventListener("load", function () {
            var calist = $(".calist");
            var sebu = $(".sebu");
            var indicator = $(".indicator");
            var cacontainer = $(".category-list-container");
            var decontainer = $(".detail-list-container");
            var mainul = $(".category-main-ul");
            var chk = false;

            mainul.find("li").click(function () {
                if (!chk) {
                    mainul.find("li").find("ul").css({ "visibility": "hidden" });
                    $(this).find("ul").css({ "visibility": "visible" });
                    cacontainer.addClass("height");
                } else {
                    if (cacontainer.hasClass("height") && ($(this).find("ul").css("visibility") == "hidden")) {
                        mainul.find("li").find("ul").css({ "visibility": "hidden" });
                        $(this).find("ul").css({ "visibility": "visible" });
                        return chk;
                    } else if (cacontainer.hasClass("height") && ($(this).find("ul").css("visibility") == "visible")) {

                        mainul.find("li").find("ul").css({ "visibility": "hidden" });
                        $(this).find("ul").css({ "visibility": "visible" });
                        cacontainer.removeClass("height");
                    }

                }
                chk = !chk;

            })

            $("#bar").click(function () {
                calist.toggleClass("hide-calist");
                sebu.toggleClass("active");
                indicator.toggleClass("rotate");

                if (indicator.hasClass("rotate")) {
                    decontainer.animate({ opacity: 1 });
                } else {
                    decontainer.animate({ opacity: 0 });
                }
                if (cacontainer.hasClass("height")) {
                    cacontainer.removeClass("height");

                    decontainer.animate({ opacity: 1 });
                }
            })

        });