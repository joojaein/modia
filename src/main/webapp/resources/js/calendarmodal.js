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
	var modal = document.querySelector(".send-modal");
	var screen = $(".screen");
	var cform = $('#cform').serializeArray();
	alert(cform);
	var start = $(".from-date").val();
	
			cform = changeSerialize(cform, "endDate", start);
	
	$.ajax({
		url: '/crowd/calendar',
		type: "post",
		dataType: "json",
		data: cform,
		success : function(json) {
		console.log("연결");
		
		modal.classList.remove("show");
		modal.classList.remove("hide");
		screen.remove();
		}
		
	})
}
function changeSerialize(values,k,v) {
	var found = false;
	for (i = 0; i < values.length && !found; i++) {
		if (values[i].name == k) { 
			values[i].name = v;
			found = true;
		}
	}
	if(!found) {
		values.push(
			{
				name: k,
				value: v
			}	
		);
	}
	return values;

}
