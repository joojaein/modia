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
			window.location.href="";
		};

	});
	setTimeout(function () {
		screen.style.opacity = "0.7";
	}, 10);
};


function dataadd() {
	var modal = document.querySelector(".send-modal");
	var screen = $(".screen");
	var cid = $(".crowdId").val();
	var start = $(".from-date").val();
	var end = $(".to-date").val();
	var title = $("input[name=title]").val();
	var content = $("input[name=title]").val();
	if(end == "")
		end = start;
	
	$.ajax({
		url: '/crowd/calendar',
		type: "post",
		dataType: "json",
		data: {"crowdId":cid ,"startDate": start, "endDate": end, "title":title, "content":content},
		success : function(json) {
		console.log("연결");


		modal.classList.remove("show");
		modal.classList.remove("hide");
		screen.remove();
		}
		
	})
}

