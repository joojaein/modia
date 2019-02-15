window.addEventListener("load", function () {

	var userCrowdAuthType=-1;
	var crowdId =  getQuerystring('crowd')
    
    var btnsHeader = document.querySelector(".sirenedit");
    var btnSetting = btnsHeader.querySelector(".btn-setting");
    var btnReg = btnsHeader.querySelector(".btn-reg");
    var btnSiren = btnsHeader.querySelector(".btn-siren");
    var btnClear = document.querySelector(".clear-btn");
    var btnRprtSubmit = document.querySelector(".rprt-btn input");

    btnClear.onclick = function (e) {
        e.preventDefault();
		var rprt = document.querySelector(".rprt");
        rprt.classList.add("d-none");
    }
    btnSiren.onclick = function (e) {
        e.preventDefault();
        var rprtRequest = new XMLHttpRequest(); 
        rprtRequest.open("POST", "/crowd/get-rprt-crowd", true); 
        rprtRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        rprtRequest.onload = function () {
        	if(rprtRequest.responseText==0){        
        		var rprt = document.querySelector(".rprt");
        		rprt.classList.remove("d-none");
        	}else{
        		if(confirm("이미 신고한 모임입니다.\n모임신고를 취소 하시겠습니까?")){
        			var rprtDelRequest = new XMLHttpRequest(); 
        			rprtDelRequest.open("POST", "/crowd/del-rprt-crowd", true); 
        			rprtDelRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        			rprtDelRequest.onload = function () {
        				alert("모임신고가 취소 되었습니다.");
        			}
        			rprtDelRequest.send("crowdIdStr="+crowdId);
        		}
        	}
        }
        rprtRequest.send("crowdIdStr="+crowdId);
        

    }
    
    btnRprtSubmit.onclick = function(evt){
    	evt.preventDefault();
        var rprt = document.querySelector(".rprt");
        var title = rprt.querySelector("select");
        var content = rprt.querySelector("textarea");
        
        var rprtRequest = new XMLHttpRequest(); 
        rprtRequest.open("POST", "/crowd/set-rprt-crowd", true); 
        rprtRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        rprtRequest.onload = function () {
        	alert("해당 모임의 신고가 완료 되었습니다.")
            title.value="";
            content.value="";
            rprt.classList.add("d-none");
        }
        rprtRequest.send("crowdIdStr="+crowdId+"&title="+title.value+"&content="+content.value);
    }
    
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
							var sesssionRequest = new XMLHttpRequest(); 
							sesssionRequest.open("GET", "/set-session?href="+href, true); 
							sesssionRequest.onload = function () {
								window.location.href = "/login";
							}
							sesssionRequest.send();
						}
						else{
							alert("가입요청이 완료 되었습니다.\n모임장이 승인하면 가입이 완료됩니다.");
						}
					};
					joinRequest.send("crowd="+crowdId);		
				}
			}else if(userCrowdAuthType=="-1"){
				var sesssionRequest = new XMLHttpRequest(); 
				href = "/crowd/main?crowd="+crowdId;
				sesssionRequest.open("GET", "/set-session?href="+href, true); 
				sesssionRequest.onload = function () {
					window.location.href = "/login";
				}
				sesssionRequest.send();
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