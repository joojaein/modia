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