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
  var startday = document.querySelector(".from-date").value;
  var endday = document.querySelector(".to-date").value;
  var sday = moment(startday);
  var eday = moment(endday);
  var titletxt = document.querySelector(".title-text");
  var contenttxt = document.querySelector(".content-text").value;
  var modal = document.querySelector(".send-modal");
  var screen = $(".screen");
 

  if (sday.isValid()) {
    $('#calendar').fullCalendar('renderEvent', {
      title: titletxt.value,
      data: {
        custom_param1: contenttxt
      },
      start: sday,
      end: eday,
      allDay: true,
      
    });
    
      // dlg.removerChild();
      modal.classList.remove("show");
      modal.classList.remove("hide");
      screen.remove();
   
  } else {
    alert("잘못된 날짜.");
  }
  
};

    


