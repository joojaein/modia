window.addEventListener("load",function(){
    
    var main = document.querySelector("main"); 
    var join = main.querySelector(".join");

    var btnEmailSend = join.querySelector(".btn-send");
    var txtEmail = join.querySelector(".txt-email");
    var btnEmailAuth = join.querySelector(".btn-auth");
    var txtAuthNum = join.querySelector(".txt-authNum");

    var textarea = join.querySelector("textarea");
    
    //selSido 관련//////////////////////////////////////////////////
	var selSido = join.querySelector(".sido")
	var jsonPost;
	var postRequest = new XMLHttpRequest(); 
	postRequest.open("POST", "/get-sido", true); 
	postRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	postRequest.onload = function () {	
		jsonPost = JSON.parse(postRequest.responseText);
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
	}
	postRequest.send();	
	
    selSido.onclick= function() {		
    	selSido.style.color="black";
	};
	
	//프로필 이미지 관련//////////////////////////////////////////////////
    var preview= join.querySelector(".img-prof");
	var fileDnone = join.querySelector("input[type='file']")
	
	preview.onclick=function(){
		var evt = new MouseEvent("click", {
			"view":window,
			"bubbles":true,
			"cancelable":true
		});
		fileDnone.dispatchEvent(evt);
	}
	
	fileDnone.addEventListener('change', updateImageDisplay);

	function updateImageDisplay() {
		
		  var curFiles = fileDnone.files;
		  var file = curFiles[0];

		  preview.src = window.URL.createObjectURL(file);
		
		
		  
		}
	
	
	
	
	//이메일 인증 관련 //////////////////////////////////////////////////
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
    	btnEmailAuth.classList.remove("d-none");
    	
    	btnEmailSend.classList.add("timer");
    	btnEmailSend.value = "3 : 00";   
    	
    	var timer = setInterval(function(){
    		formTimer(btnEmailSend);
    		if(btnEmailSend.value=="0&nbsp;00" ||
    				btnEmailSend.value=="0 : 00"){
    	    	btnEmailSend.classList.remove("timer");
    	    	btnEmailSend.value = "인증번호 발송"; 
                clearInterval(timer);
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
    
    
	//기타 //////////////////////////////////////////////////
    textarea.onkeyup = function(){
    	if(textarea.value.length > 40){  
  		  textarea.value = textarea.value.substring(0,40);  
  		  textarea.focus();  
  	  } 
    };
    

   
});

