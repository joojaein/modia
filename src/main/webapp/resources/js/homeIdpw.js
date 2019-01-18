window.addEventListener("load",function(){
    
    var main = document.querySelector("main");

    var idpw = main.querySelector(".idpw");
    var btnIdEmailSend = idpw.querySelector(".id .btn-send");
    var btnPwEmailSend = idpw.querySelector(".pw .btn-send");
    
    var btnIdEmailAuth = idpw.querySelector(".id .btn-auth");
    var btnPwEmailAuth = idpw.querySelector(".pw .btn-auth");
    
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
    
    btnIdEmailSend.onclick = function(){	
    	if(btnIdEmailSend.value!="인증번호 발송") return;
    	
    	var divId = idpw.querySelector(".id");
    	
    	var txtAuthNum = divId.querySelector(".authNum");
    	var btnAuth = divId.querySelector(".btn-auth");
    	
    	txtAuthNum.classList.remove("d-none");
    	btnAuth.classList.remove("d-none");
    	
    	btnIdEmailSend.classList.add("timer");
    	btnIdEmailSend.value = "3 : 00"; 
    	var timer = setInterval(function(){
    		formTimer(btnIdEmailSend);
    		if(btnIdEmailSend.value=="0&nbsp;00" ||
    			btnIdEmailSend.value=="0 : 00"){
                clearInterval(timer);
    		}
    	},1000);
    };
    
    btnPwEmailSend.onclick = function(){
    	if(btnPwEmailSend.value!="인증번호 발송") return;

    	var divPw = idpw.querySelector(".pw");
    	
    	var txtAuthNum = divPw.querySelector(".authNum");
    	var btnAuth = divPw.querySelector(".btn-auth");
    	
    	txtAuthNum.classList.remove("d-none");
    	btnAuth.classList.remove("d-none");
    	
    	btnPwEmailSend.classList.add("timer");
    	btnPwEmailSend.value = "3 : 00"; 
    	var timer = setInterval(function(){
    		formTimer(btnPwEmailSend);
    		if(btnPwEmailSend.value=="0&nbsp;00" ||
    				btnPwEmailSend.value=="0 : 00"){
                clearInterval(timer);
    		}
    	},1000);
    };
    
    btnIdEmailAuth.onclick = function(){
    	var divId = idpw.querySelector(".id");

    	var pId= divId.querySelector(".p-id");
    	pId.classList.remove("d-none");
    };
    
    btnPwEmailAuth.onclick = function(){
    	var divPw = idpw.querySelector(".pw");

    	var txtPw= divPw.querySelector(".txtpw");
    	var txtRpw= divPw.querySelector(".txtrpw");
    	var btnEdit= divPw.querySelector(".btn-edit");
    	txtPw.classList.remove("d-none");
    	txtRpw.classList.remove("d-none");
    	btnEdit.classList.remove("d-none");
    };
});

