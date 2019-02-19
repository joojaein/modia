window.addEventListener("load",function(){
    
    var main = document.querySelector("main");

    var divId = main.querySelector(".id");
    var btnEmailSendId = divId.querySelector(".btn-send");
    var txtEmailId = divId.querySelector(".txt-email");
    var btnEmailAuthId = divId.querySelector(".btn-auth");
    var txtAuthNumId = divId.querySelector(".txt-authNum");
	
    var formTimer = function(btn){
    	var timeString = btn.value;
    	var min = timeString.substring(0,1);
    	var sec = timeString.substring(4,6);
    	var time = parseInt(min)*60 + parseInt(sec);
    	time=time-1;
    	min=Math.floor(time/60);
    	sec=time%60;
    	if(sec<10){
    		btn.value=min+" : 0"+sec;
    	}else{
        	btn.value=min+" : "+sec;
    	}
    };
    
    btnEmailSendId.onclick = function(){	
    	if(btnEmailSendId.value!="인증번호 발송") return;
    	txtAuthNumId.value="";
    	txtAuthNumId.classList.remove("d-none");
        btnEmailAuthId.value = "인 증";
    	btnEmailAuthId.classList.remove("d-none");
    	btnEmailSendId.classList.add("timer");
    	btnEmailSendId.value = "3 : 00";     	
    	var timer = setInterval(function(){
    		formTimer(btnEmailSendId);
    		if(btnEmailSendId.value=="0&nbsp;00" ||
    				btnEmailSendId.value=="0 : 00"){
                clearInterval(timer);
    	    	btnEmailSendId.classList.remove("timer");
    	    	btnEmailSendId.value = "인증번호 발송"; 
            	txtAuthNumId.classList.add("d-none");
            	btnEmailAuthId.classList.add("d-none");
    		}},1000);
  	
		btnEmailAuthId.onclick = function(){};
    	var emailRequest = new XMLHttpRequest(); 
	    	emailRequest.open("POST", "/email-send", true); 
	    	emailRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	    	emailRequest.onload = function () {	
	    		btnEmailAuthId.name=emailRequest.responseText;	  		
	    		btnEmailAuthId.onclick = function(){	
	            	if(btnEmailAuthId.name==txtAuthNumId.value){
	                    clearInterval(timer);
	                    btnEmailAuthId.value = "인증완료";
		               	var idRequest = new XMLHttpRequest(); 
		                idRequest.open("POST", "/get-memberid", true); 
		                idRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		                idRequest.onload = function () {
		                	var idList = JSON.parse(idRequest.responseText);
		                	var p = divId.querySelector(".p-id");
		                	p.innerText="";
		                	p.classList.remove("d-none");         	
		                	if(idList.length==0){
		                		p.innerText+="회원정보가 존재하지 않습니다.";
		                	}else if(idList.length ==1){
		                		p.innerText+="고객님의 ID : "+idList[0].id;
		                	}else{
		                		p.innerText+="입력하신 이메일로 가입되어 있는 아이디"
		                    	for (var i = 0; i < idList.length; i++) {
		                    		p.innerText+="\n - "+idList[i].id;
		                    	}
		                	}
		                }
		                idRequest.send("email="+txtEmailId.value);
	            	}else{
	            		swal({
	            			title: "이메일 인증이 실패했습니다.",
	        				icon: "warning",
	        				button : "확인",
	        				dangerMode: true,
	        				});
	                    clearInterval(timer);
	        	    	btnEmailSendId.classList.remove("timer");
	        	    	btnEmailSendId.value = "인증번호 발송"; 
	                	txtAuthNumId.classList.add("d-none");
	                	btnEmailAuthId.classList.add("d-none");
	            	}
	            };
	    	}
	    	emailRequest.send("email="+txtEmailId.value);		
    };

    var divPw = main.querySelector(".pw");
    var btnEmailSendPw = divPw.querySelector(".btn-send");
    var txtEmailPw = divPw.querySelector(".txt-email");
    var btnEmailAuthPw = divPw.querySelector(".btn-auth");
    var txtAuthNumPw = divPw.querySelector(".txt-authNum");
    var id = divPw.querySelector(".txt-id");    
    var pw = divPw.querySelector(".txtpw");
    var rpw = divPw.querySelector(".txtrpw");
    var btnSubmicPw = divPw.querySelector(".btn-edit");
    
    btnEmailSendPw.onclick = function(){	
    	if(btnEmailSendPw.value!="인증번호 발송") return;
    	txtAuthNumPw.value="";
    	txtAuthNumPw.classList.remove("d-none");
        btnEmailAuthPw.value = "인 증";
    	btnEmailAuthPw.classList.remove("d-none");
    	btnEmailSendPw.classList.add("timer");
    	btnEmailSendPw.value = "3 : 00";     	
    	var timer = setInterval(function(){
    		formTimer(btnEmailSendPw);
    		if(btnEmailSendPw.value=="0&nbsp;00" ||
    				btnEmailSendPw.value=="0 : 00"){
                clearInterval(timer);
    	    	btnEmailSendPw.classList.remove("timer");
    	    	btnEmailSendPw.value = "인증번호 발송"; 
            	txtAuthNumPw.classList.add("d-none");
            	btnEmailAuthPw.classList.add("d-none");
    		}},1000);
  	
		btnEmailAuthPw.onclick = function(){};
    	var emailRequest = new XMLHttpRequest(); 
	    	emailRequest.open("POST", "/email-send", true); 
	    	emailRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	    	emailRequest.onload = function () {	
	    		btnEmailAuthPw.name=emailRequest.responseText;	  		
	    		btnEmailAuthPw.onclick = function(){	
	            	if(btnEmailAuthPw.name==txtAuthNumPw.value){
	                    clearInterval(timer);
	                    btnEmailAuthPw.value = "인증완료";
	                    pw.classList.remove("d-none");
	                    rpw.classList.remove("d-none");
	                    btnSubmicPw.classList.remove("d-none");
	            	}else{
	            		swal({
	            			title: "이메일 인증이 실패했습니다.",
	        				icon: "warning",
	        				button : "확인",
	        				dangerMode: true,
	        				});
	                    clearInterval(timer);
	        	    	btnEmailSendPw.classList.remove("timer");
	        	    	btnEmailSendPw.value = "인증번호 발송"; 
	                	txtAuthNumPw.classList.add("d-none");
	                	btnEmailAuthPw.classList.add("d-none");
	            	}
	            };
    	}
    	emailRequest.send("email="+txtEmailPw.value);			
    };
    
    btnSubmicPw.onclick = function(){
    	if(pw.value!=rpw.value){
    		swal({
    			title: "새로운 비밀번호와 재확인용 비밀번호가 일치하지 않습니다.",
				icon: "warning",
				button : "확인",
				dangerMode: true,
				});
			return;
    	}
    	
    	var idRequest = new XMLHttpRequest(); 
        idRequest.open("POST", "/get-memberid", true); 
        idRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        idRequest.onload = function () {
        	var idList = JSON.parse(idRequest.responseText);
        	var tempId = "";
        	for (var i = 0; i < idList.length; i++) {
        		if(idList[i].id==id.value){
        			tempId=idList[i].id;
        			break;
        		}
        	}
        	if(id==""){
        		swal({
        			title: "회원정보가 존재하지 않습니다.",
    				icon: "warning",
    				button : "확인",
    				dangerMode: true,
    				});
        	}else{
        		var pwdRequest = new XMLHttpRequest(); 
        		pwdRequest.open("POST", "/update-pw", true); 
        		pwdRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        		pwdRequest.onload = function () {	
            		swal({
            			title: "비밀번호 변경이 완료되었습니다.",
        				icon: "warning",
        				button : "확인",
        				dangerMode: true,
        				})
        				.then((willDelete) => {
							if (willDelete) {
								window.location.href = "/login";
							}
    					});
        		};
        		pwdRequest.send("id="+id.value+"&pw="+rpw.value);	
        	}
        }
        idRequest.send("email="+txtEmailId.value);

    	var pwdRequest = new XMLHttpRequest(); 
		pwdRequest.open("POST", "/update-pw", true); 
		pwdRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		pwdRequest.onload = function () {	
		};
		pwdRequest.send("id="+id.value+"&email="+txtEmailPw.value+"&pw="+pw.value);	
    };
    
});

