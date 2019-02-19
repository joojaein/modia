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
	var cid = $(".crowdId").val();
	var start = $(".from-date").val();
	var end = $(".to-date").val();
	var title = $("input[name=title]").val();
	var content = $("input[name=title]").val();
	if(end == "")
		end = start;
	$('#calendar').fullCalendar({
		events:function(start, end, callback) {
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
	})
}

/*==========================================================================*/
$(document).ready(function() {
	
	$('#calendar').fullCalendar({
		header: {
			left: '',
			center: 'prev, title, next',
			right: 'addEventButton'
		},
		customButtons: {
			addEventButton: {
				text: '일정추가',
			}
		},
		lang: "ko",
		defaultDate: new Date(),
		selectable: true,
		selectHelper: true,
		googleCalendarApiKey: "AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE",
		eventSources:[ 
		{
			events:dataset
		},
			{
			googleCalendarId: "ko.south_korea#holiday@group.v.calendar.google.com",
			className: "koHolidays"
		}
		],
		eventClick: function (eventObj) {
			var eh = $(".eh");
			var tp = $('.tp');
			var p = $(".p");
			var title = $(".fc-title").text();
			
			var temp=eventObj.end.format();
			var tempdate = new Date(temp);
			tempdate.setDate(tempdate.getDate()-1);
			
			 var month = '' + (tempdate.getMonth() + 1);
	         var day = '' + tempdate.getDate();
	         var year = tempdate.getFullYear();
	         if (month.length < 2) month = '0' + month;
	         if (day.length < 2) day = '0' + day;
	         var temEnd = year+"-"+month+"-"+day;

	         if(eventObj.url && temEnd != eventObj.start.format()){
				p.empty();
				eh.text(eventObj.start.format()+" - "+temEnd);
				tp.text(eventObj.title);
				//p.text(eventObj.data).append("<p class='d-none'>"+eventObj.id+"</p>");
				p.text(eventObj.data).after("<div><p class='d-none calendar-id'>"+eventObj.id+"</p></div>");
				return false;
			}else if(eventObj.url && eventObj.start.format() == temEnd){
				p.empty();
				eh.text(eventObj.start.format());
				tp.text(eventObj.title);
				//p.text(eventObj.data).append("<p class='d-none'>"+eventObj.id+"</p>");
				p.text(eventObj.data).after("<div><p class='d-none calendar-id'>"+eventObj.id+"</p></div>");
				return false;
			}
		
			if(temEnd != eventObj.start.format()){
			p.empty();
			eh.text(eventObj.start.format()+" - "+ temEnd);
			tp.text(eventObj.title);
			p.text(eventObj.data).after("<div><p class='d-none calendar-id'>"+eventObj.id+"</p></div>");
			}else if(temEnd == eventObj.start.format()){
				p.empty();
				eh.text(eventObj.start.format());
				tp.text(eventObj.title);
				p.text(eventObj.data).after("<div><p class='d-none calendar-id'>"+eventObj.id+"</p></div>");
			}
			$(deleteBox()).appendTo(".eh");
		}
	});
});
