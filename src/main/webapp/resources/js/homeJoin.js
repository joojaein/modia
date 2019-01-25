window.addEventListener("load",function(){
    
    var main = document.querySelector("main");
    
    var join = main.querySelector(".join");

    var btnEmailSend = join.querySelector(".btn-send");
    var btnEmailAuth = join.querySelector(".btn-auth");
    var textarea = join.querySelector("textarea");
    
	var selSido = join.querySelector(".sido")
	var jsonPost;
	var postRequest = new XMLHttpRequest(); 
	postRequest.open("POST", "../crowd/get-sido", true); 
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
	
    var btnImg= main.querySelector(".img-prof");
	var fileDnone = main.querySelector("input[type='file']")
	
	btnImg.onclick=function(){
		var evt = new MouseEvent("click", {
			"view":window,
			"bubbles":true,
			"cancelable":true
		});
		fileDnone.dispatchEvent(evt);
	}
	
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
    
    textarea.onkeyup = function(){
    	if(textarea.value.length > 40){  
  		  textarea.value = textarea.value.substring(0,40);  
  		  textarea.focus();  
  	  } 
    };
    
    selSido.onclick= function() {		
    	selSido.style.color="black";
	};
   
});

