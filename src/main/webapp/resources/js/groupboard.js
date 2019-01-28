window.addEventListener("load", function () {
	var div = document.querySelector(".div-list");
	var menuopen = document.querySelector(".board-list ul");
	var menulist = document.querySelector(".menu-list");
	div.onclick = function () {
		setTimeout(function () {
			if (menulist.classList.contains("d-none")) {
				menuopen.classList.remove("d-none");
			} else if (!menulist.classList.contains("d-none")) {
				menuopen.classList.add("d-none");
			}
		}, 10);
	}
});