window.addEventListener("load",function(){
    
    var main = document.querySelector("main");
    
    var join = main.querySelector(".join");

    var btnEmailSend = join.querySelector(".btn-send");
    var btnEmailAuth = join.querySelector(".btn-auth");

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
    	    	
    	var txtAuthNum = join.querySelector(".authNum");
    	var btnAuth = join.querySelector(".btn-auth");
    	
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
    	alert("인증!");
    };
});

