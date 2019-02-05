window.addEventListener("load",function(){
    
    var main = document.querySelector("main");
    
    var divProfile = main.querySelector(".profile");
    var img = divProfile.querySelector("img");
    var btnImg= divProfile.querySelector(".btn");
	var fileDnone = divProfile.querySelector("input[type='file']")
	
    img.src= "/get-img?folder=member-profile&file="+img.name;    	

	btnImg.onclick=function(){
		var evt = new MouseEvent("click", {
			"view":window,
			"bubbles":true,
			"cancelable":true
		});
		fileDnone.dispatchEvent(evt);
	}
	
	fileDnone.addEventListener('change', function(evt){
		  var curFiles = fileDnone.files;
		  var profileFile = curFiles[0];
		  
		  var fd = new FormData();
          fd.append("file", profileFile);  
          fd.append("id", divProfile.querySelector(".id").innerText);  
          fd.append("root", "member-profile");  
          $.ajax({
  			url: '/file-upload',
  			data: fd,
  			dataType: 'text',
  			processData: false,
  			contentType: false,
  			type: 'POST',
  			success : function(data) {
  				window.location.href = "/member/index";
  			}	
          });
	});
	
	
	var divMsg = main.querySelector(".div-msg");
	var textarea = divMsg.querySelector("textarea");
	var btnSubmitMsg = divMsg.querySelector(".btn");
	
    textarea.onkeyup = function(){
    	if(textarea.value.length > 40){  
  		  textarea.value = textarea.value.substring(0,40);  
  		  textarea.focus();  
  	  } 
    };
    
	btnSubmitMsg.onclick = function(){
		var msgRequest = new XMLHttpRequest(); 
		msgRequest.open("POST", "/member/update-msg", true); 
		msgRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		msgRequest.onload = function () {	
				window.location.href = "/member/index";
		}
		msgRequest.send("msg="+textarea.value);	
	};
	
	
	var divPwd = main.querySelector(".div-pw");
	var btnSubmitPwd = divPwd.querySelector(".btn");
	var pw = divPwd.querySelector(".pw");
	var npw = divPwd.querySelector(".npw");
	var rpw = divPwd.querySelector(".rpw");
	
	btnSubmitPwd.onclick = function(){
		if(npw.value!=rpw.value) {
			alert("새로운 비밀번호와 재확인용 비밀번호가 일치하지 않습니다.");
			return;
		}		
		var pwdRequest = new XMLHttpRequest(); 
		pwdRequest.open("POST", "/member/update-pw", true); 
		pwdRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		pwdRequest.onload = function () {	
			if(pwdRequest.responseText=="0"){
				alert("기존 비밀번호가 일치하지 않습니다.");
			}else{
				window.location.href = "/member/index";
			}
		};
		pwdRequest.send("pw="+pw.value+"&npw="+npw.value);	
	};
	
	
	var divEmail = main.querySelector(".div-email");
    var btnEmailSend = divEmail.querySelector(".btn-send");
    var txtEmail = divEmail.querySelector(".txt-email");
    var btnEmailAuth = divEmail.querySelector(".btn-auth");
    var txtAuthNum = divEmail.querySelector(".txt-authNum");
	var btnSubmitEmail = divEmail.querySelector(".submit");
	
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
    
    btnEmailSend.onclick = function(){	
    	if(btnEmailSend.value!="인증번호 발송") return;
    	txtAuthNum.value="";
    	txtAuthNum.classList.remove("d-none");
        btnEmailAuth.value = "인 증";
    	btnEmailAuth.classList.remove("d-none");
    	btnEmailSend.classList.add("timer");
    	btnEmailSend.value = "3 : 00";     	
    	var timer = setInterval(function(){
    		formTimer(btnEmailSend);
    		if(btnEmailSend.value=="0&nbsp;00" ||
    				btnEmailSend.value=="0 : 00"){
                clearInterval(timer);
    	    	btnEmailSend.classList.remove("timer");
    	    	btnEmailSend.value = "인증번호 발송"; 
            	txtAuthNum.classList.add("d-none");
            	btnEmailAuth.classList.add("d-none");
    		}},1000);
  	
		btnEmailAuth.onclick = function(){};
    	var emailRequest = new XMLHttpRequest(); 
	    	emailRequest.open("POST", "/email-send", true); 
	    	emailRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	    	emailRequest.onload = function () {	
	    		btnEmailAuth.name=emailRequest.responseText;	  		
	    		btnEmailAuth.onclick = function(){	
	            	if(btnEmailAuth.name==txtAuthNum.value){
	                	alert("이메일 인증이 완료되었습니다.");
	                    clearInterval(timer);
	                    btnEmailAuth.value = "인증완료";
	                    btnSubmitEmail.classList.remove("d-none");                  
	            	}else{
	                	alert("이메일 인증이 실패했습니다.");
	                    clearInterval(timer);
	        	    	btnEmailSend.classList.remove("timer");
	        	    	btnEmailSend.value = "인증번호 발송"; 
	                	txtAuthNum.classList.add("d-none");
	                	btnEmailAuth.classList.add("d-none");
	            	}
	            };
    	}
    	emailRequest.send("email="+txtEmail.value);			
    };
    
    btnSubmitEmail.onclick = function(){
    	 var mailRequest = new XMLHttpRequest(); 
         mailRequest.open("POST", "/member/update-email", true); 
         mailRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
         mailRequest.onload = function () {	
				window.location.href = "/member/index";
 		};
 		mailRequest.send("email="+txtEmail.value);	
    };
   
    
    var divSido = main.querySelector(".div-location");
	var selSido = divSido.querySelector(".sido")
	var btnSubmitSido = divSido.querySelector(".btn");

	function getSido(){
		var postRequest = new XMLHttpRequest(); 
		postRequest.open("POST", "/get-sido", true); 
		postRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		postRequest.onload = function () {
			var jsonPost = JSON.parse(postRequest.responseText);
			selSido.innerHTML="";
			var temp = document.createElement('option');
			temp.value="null";
			temp.innerHTML = "주요 활동 지역";
			temp.classList.add("option");
		    selSido.appendChild(temp);
			for(var i=0; i<jsonPost.length; i++){
				var opt = document.createElement('option');
				opt.value = jsonPost[i][0];
			    opt.innerHTML = jsonPost[i][0];
			    opt.classList.add("option");
			    selSido.appendChild(opt);
			}
			selSido.value=selSido.name;
		}
		postRequest.send();	
	}
	
	getSido();
	
    selSido.onclick= function() {		
    	selSido.style.color="black";
	};
	
	btnSubmitSido.onclick = function(){
		var sidoRequest = new XMLHttpRequest(); 
		sidoRequest.open("POST", "/member/update-sido", true); 
		sidoRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		sidoRequest.onload = function () {
			window.location.href = "/member/index";
		}
		sidoRequest.send("sido="+selSido.value);	
	};
});

