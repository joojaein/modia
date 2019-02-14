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

    var userCrowdAuthType=-1;
	var crowdId =  getQuerystring('crowd')
    
    var btnsHeader = document.querySelector(".sirenedit");
    var btnSetting = btnsHeader.querySelector(".btn-setting");
    var btnSiren = btnsHeader.querySelector(".btn-siren");
    var btnReg = btnsHeader.querySelector(".btn-reg");
    
    
    var authRequest = new XMLHttpRequest(); 
	authRequest.open("POST", "/crowd/get-crowd-auth", true); 
	authRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	authRequest.onload = function () {	
		userCrowdAuthType = authRequest.responseText;
		if(userCrowdAuthType==0) btnSetting.classList.remove("d-none");
		if(userCrowdAuthType!=-1) btnSiren.classList.remove("d-none");
		if(userCrowdAuthType!=-1 && userCrowdAuthType!=3) btnReg.classList.remove("d-none");
	}
	authRequest.send("crowd="+crowdId);	

    var mainHead = document.querySelector(".main-head");
    mainHead.onclick = function (evt) {
        evt.preventDefault();
        var href = evt.target.href;     
    	var crowdId =  getQuerystring('crowd')

    	var basicLocationArr = href.split('?');
    	var clickLocationArr = basicLocationArr[0].split('/');
    	var clickLocation = clickLocationArr[clickLocationArr.length-1];
    	if(clickLocation=="main") {
			window.location.href = href;
    	}else{
    		if(userCrowdAuthType=="3"){
				if(confirm("모임 가입자만 이용 가능한 서비스 입니다.\n가입 요청을 하시겠습니까?")){
					var joinRequest = new XMLHttpRequest(); 
					joinRequest.open("POST", "/crowd/request-join", true); 
					joinRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
					joinRequest.onload = function () {	
			    		var joinResult = joinRequest.responseText;
						if(joinResult=="anonymousUser"){
							window.location.href = "/login";
						}
						else{
							alert("가입요청이 완료 되었습니다.\n모임장이 승인하면 가입이 완료됩니다.");
						}
					};
					joinRequest.send("crowd="+crowdId);		
				}
			}else if(userCrowdAuthType=="-1"){
				window.location.href = "/login";
			}else{
				window.location.href = href;
			}
    	}
    }
    
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
});