function modalopen() {
	var modal = document.querySelector(".send-modal");
	var screen = document.createElement("div");
	var close = document.querySelector(".close");

	screen.classList.add("screen");
	document.body.appendChild(screen);
	screen.addEventListener("transitionend", function () {
		modal.classList.remove("d-none");
		modal.classList.add("day-modal");

		setTimeout(function () {
			modal.classList.add("show");
		}, 10);
		close.onclick = function () {
			// dlg.removerChild();
			modal.classList.remove("show");
			modal.classList.remove("hide");
			screen.remove();
		};

	});
	setTimeout(function () {
		screen.style.opacity = "0.7";
	}, 10);
};
function dataadd() {
	var corwdId = window.location.search.split("=")[1];
	var startday = document.querySelector(".from-date").value;
	var endday = document.querySelector(".to-date").value;
	var sday = moment(startday);
	var eday = moment(endday);
	var titletxt = document.querySelector(".title-text");
	var contenttxt = document.querySelector(".content-text").value;
	var modal = document.querySelector(".send-modal");
	var screen = $(".screen");
		
	var cListRequest = new XMLHttpRequest();
    cListRequest.open("POST", "/crowd/calendar", true);
    cListRequest.setRequestHeader("Content-Type",
          "application/x-www-form-urlencoded");
    cListRequest.onload = function() {

    	window.location.href="";
    	}
	
		if(endday ==""){
			endday = startday;

        cListRequest.send("crowdId="+corwdId+"&startDate="+startday+"&endDate="+endday+"&title="+titletxt.value+"&content="+contenttxt);
		}else{
			cListRequest.send("crowdId="+corwdId+"&startDate="+startday+"&endDate="+endday+"&title="+titletxt.value+"&content="+contenttxt);	
		}
		modal.classList.remove("show");
		modal.classList.remove("hide");
		screen.remove();
};


