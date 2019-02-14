window.addEventListener("load",function(){

    var main = document.querySelector("main"); 
    var join = main.querySelector(".join");

    var btnEmailSend = join.querySelector(".btn-send");
    var txtEmail = join.querySelector(".txt-email");
    var btnEmailAuth = join.querySelector(".btn-auth");
    var txtAuthNum = join.querySelector(".txt-authNum");
    
    var preview= join.querySelector(".img-prof");
	var fileDnone = join.querySelector("input[type='file']")

    var textarea = join.querySelector("textarea");
    
	var btnOverlap = join.querySelector(".btn-overlap");
	var txtId = join.querySelector(".txt-id");
	var overlap = true;
	
	var profileFile;
	
	//중복확인 관련//////////////////////////////////////////////////
	btnOverlap.onclick = function(){
		var overlapRequest = new XMLHttpRequest(); 
		overlapRequest.open("POST", "/chk-overlap", true); 
		overlapRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		overlapRequest.onload = function () {	
			if(overlapRequest.responseText=="0"){
				alert("사용 가능한 아이디 입니다.");
				overlap=false;
			}else{
				alert("이미 사용중인 아이디 입니다.");
				overlap=true;
			}
		}
		overlapRequest.send("id="+join.querySelector(".txt-id").value);	
	};
	txtId.onkeyup = function(){
		overlap = true;
    };
    
	
    //selSido 관련//////////////////////////////////////////////////
	var selSido = join.querySelector(".sido")
	
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
		}
		postRequest.send();	
	}
	
	getSido();
	
    selSido.onclick= function() {		
    	selSido.style.color="black";
	};
	

	
	//프로필 이미지 관련//////////////////////////////////////////////////
	preview.onclick=function(){
		var evt = new MouseEvent("click", {
			"view":window,
			"bubbles":true,
			"cancelable":true
		});
		fileDnone.dispatchEvent(evt);
	}
	
	fileDnone.addEventListener('change', function(evt){
		  var curFiles = fileDnone.files;
		  profileFile = curFiles[0];
		  preview.src = window.URL.createObjectURL(profileFile); 
	});


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
    

    //가입하기 버튼 클릭시//////////////////
    var btnJoin = join.querySelector(".btn-join");
    btnJoin.onclick = function(){	
    	var isNull = chkNull();
    	if(isNull){
    		alert("프로필 이미지를 포함한 모든 정보를 입력하세요.");
    	}else if(join.querySelector(".txt-pw").value != join.querySelector(".txt-rpw").value){
    		alert("동일한 비밀번호를 입력하세요.");
    	}else if(btnEmailAuth.value!="인증완료"){
    		alert("이메일을 인증하세요.");
    	}else if(join.querySelector(".radio-male").checked == join.querySelector(".radio-female").checked){
    		alert("성별을 선택하세요.");
    	}else if(overlap){
    		alert("아이디 중복을 확인하세요.");
    	}else{
    		
    		var gen = 0;
    		if(join.querySelector(".radio-female").checked){
    			gen=1;
    		}
        	
    		var joinRequest = new XMLHttpRequest(); 
    		joinRequest.open("POST", "/join", true); 
    		joinRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
			joinRequest.onload = function () {
				if(joinRequest.responseText == "1"){
					var fd = new FormData();
					fd.append("file", profileFile);  
					fd.append("id", join.querySelector(".txt-id").value);  
					fd.append("root", "member-profile");  
					$.ajax({
						url: 'file-upload',
						data: fd,
						dataType: 'text',
						processData: false,
						contentType: false,
						type: 'POST',
						success : function(data) {
						window.location.href = "/login";
						}	
					});
				}
			};    		
			joinRequest.send("id="+join.querySelector(".txt-id").value
    				+"&pwd="+join.querySelector(".txt-pw").value
    				+"&name="+join.querySelector(".txt-name").value
    				+"&areaSido="+selSido.value
    				+"&email="+txtEmail.value
    				+"&birth="+join.querySelector(".date-etc").value
    				+"&gender="+gen
    				+"&msg="+join.querySelector("textarea").value
    				+"&img="+fileDnone.value   		
    		);	    		
    	}
    	
    	
    };
   
    function chkNull(){
    	if(join.querySelector(".txt-id").value == "") return true;
    	if(join.querySelector(".txt-pw").value == "") return true;
    	if(join.querySelector(".txt-rpw").value == "") return true;
    	if(join.querySelector(".txt-name").value == "") return true;
    	if(join.querySelector(".date-etc").value == "") return true;
    	if(selSido.value == "" || selSido.value == "주요 활동 지역") return true;
    	if(txtEmail.value == "") return true;
    	if(txtAuthNum.value == "") return true;
    	if(fileDnone.value == "") return true;
    	return false;
    };
});

