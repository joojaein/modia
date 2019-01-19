window.addEventListener("load",function(){
    
    var main = document.querySelector("main");
    
    var btnImg= main.querySelector(".profile .btn");
	var fileDnone = main.querySelector("input[type='file']")
	
	var textarea = main.querySelector("textarea");
	
	var divEmail = main.querySelector(".div-email");
    var btnEmailSend = divEmail.querySelector(".btn-send");
    var btnEmailAuth = divEmail.querySelector(".btn-auth");
 
    
	btnImg.onclick=function(){

		var evt = new MouseEvent("click", {
			"view":window,
			"bubbles":true,
			"cancelable":true
		});

		fileDnone.dispatchEvent(evt);
	}
    
    textarea.onkeyup = function(){
    	if(textarea.value.length > 40){  
  		  textarea.value = textarea.value.substring(0,40);  
  		  textarea.focus();  
  	  } 
    };
    
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
    	    	
    	var txtAuthNum = divEmail.querySelector(".authNum");
    	var btnAuth = divEmail.querySelector(".btn-auth");
    	
    	txtAuthNum.classList.remove("d-none");
    	btnAuth.classList.remove("d-none");
    	
    	btnEmailSend.classList.add("timer");
    	btnEmailSend.value = "3 : 00"; 
    	var timer = setInterval(function(){
    		formTimer(btnEmailSend);
    		if(btnEmailSend.value=="0&nbsp;00" ||
    				btnEmailSend.value=="0 : 00"){
                clearInterval(timer);
    		}
    	},1000);
    };
    
    btnEmailAuth.onclick = function(){	
    	var btnEdit = divEmail.querySelector(".right .btn");
    	btnEdit.classList.remove("d-none");

    };
});

