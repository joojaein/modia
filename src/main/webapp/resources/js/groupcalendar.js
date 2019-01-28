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
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        googleCalendarApiKey: "AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE",
        eventSources: [
            {
                googleCalendarId: "ko.south_korea#holiday@group.v.calendar.google.com",
                className: "koHolidays"
            },
        ],
        dayClick: function (date ,jsEvent) {
            var eh = $(".eh");
          
            eh.text(date.format());
        }
       
    });
});

window.addEventListener("load", function () {
    var addevntbtn = document.querySelector(".fc-addEventButton-button");
    addevntbtn.onclick = function (e) {
      e.preventDefault();
      modalopen();
    }
  });