$(document).ready(function(){

	var categoryImg = document.querySelector(".group-logo");

	switch(categoryImg.name){
	case "1" : categoryImg.src="/resources/images/mainIcon/backpack.png"
		break;
	case "2" : categoryImg.src="/resources/images/mainIcon/balls.png"
		break;
	case "3" : categoryImg.src="/resources/images/mainIcon/books.png"
		break;
	case "4" : categoryImg.src="/resources/images/mainIcon/cubes.png"
		break;
	case "5" : categoryImg.src="/resources/images/mainIcon/tickets.png"
		break;
	case "6" : categoryImg.src="/resources/images/mainIcon/piano.png"
		break;
	case "7" : categoryImg.src="/resources/images/mainIcon/yarn.png"
		break;
	case "8" : categoryImg.src="/resources/images/mainIcon/ballerina.png"
		break;
	case "9" : categoryImg.src="/resources/images/mainIcon/heart.png"
		break;
	case "11" : categoryImg.src="/resources/images/mainIcon/car.png"
		break;
	case "12" : categoryImg.src="/resources/images/mainIcon/photo-camera.png"
		break;
	case "13" : categoryImg.src="/resources/images/mainIcon/baseball-field.png"
		break;
	case "14" : categoryImg.src="/resources/images/mainIcon/game-controller.png"
		break;
	case "15" : categoryImg.src="/resources/images/mainIcon/cooking.png"
		break;
	case "16" : categoryImg.src="/resources/images/mainIcon/dog.png"
		break;
	case "17" : categoryImg.src="/resources/images/mainIcon/family.png"
		break;
	case "10" : categoryImg.src="/resources/images/mainIcon/small-talk.png"
		break;
	case "18" : categoryImg.src="/resources/images/mainIcon/puzzle.png"
		break;
	}

		var areaContent = document.querySelector(".content div");
		var textareaContent = areaContent.querySelector("textarea");
		textareaContent.style.height = "1px";
		textareaContent.style.height = (1+textareaContent.scrollHeight)+"px";
})

$(function () {

	var joinBtn = document.querySelector(".join");

	joinBtn.onclick=function(){
		var crowdId =  getQuerystring('crowd')

		var joinRequest = new XMLHttpRequest(); 
		joinRequest.open("POST", "/crowd/request-join", true); 
		joinRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		joinRequest.onload = function () {	
			var joinResult = joinRequest.responseText;
			if(joinResult=="anonymousUser"){
				var sesssionRequest = new XMLHttpRequest(); 
				sesssionRequest.open("GET", "/set-session?href="+window.location, true); 
				sesssionRequest.onload = function () {
					window.location.href = "/login";
				}
				sesssionRequest.send();
			}
			else{
				swal({
					title: "가입요청이 완료 되었습니다.",
					text: "모임장이 승인하면 가입이 완료됩니다.",
					icon: "warning",
					button : "확인",
					dangerMode: true,
				});
			}
		};
		joinRequest.send("crowd="+crowdId);		
	};
	function getQuerystring(paramName){ 
		var _tempUrl = window.location.search.substring(1); 
		var _tempArray = _tempUrl.split('&'); 
		for(var i = 0; _tempArray.length; i++) { 
			var _keyValuePair = _tempArray[i].split('='); 
			if(_keyValuePair[0] == paramName){ 
				return _keyValuePair[1]; 
			}
		}
	}

	/*
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
	 */
});