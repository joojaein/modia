window.addEventListener("load",function() {
	$( window ).resize( function() {
	var areaContent = document.querySelector(".content div");
	var textareaContent = areaContent.querySelector("textarea");
	textareaContent.style.height = "1px";
	textareaContent.style.height = (1+textareaContent.scrollHeight)+"px";
	});
	
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