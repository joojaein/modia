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
  				window.location.href = "/admin/index";
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
		msgRequest.open("POST", "/admin/update-msg", true); 
		msgRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		msgRequest.onload = function () {	
				window.location.href = "/admin/index";
		}
		msgRequest.send("msg="+encodeURIComponent(textarea.value));	
	};
	
	
	var divPwd = main.querySelector(".div-pw");
	var btnSubmitPwd = divPwd.querySelector(".btn");
	var pw = divPwd.querySelector(".pw");
	var npw = divPwd.querySelector(".npw");
	var rpw = divPwd.querySelector(".rpw");
	
	btnSubmitPwd.onclick = function(){
		if(npw.value!=rpw.value) {
    		swal({
    			  title: "새로운 비밀번호와 재확인용 비밀번호가 일치하지 않습니다.",
    			  icon: "warning",
    			  button : "확인",
    			  dangerMode: true,
    			});	
			return;
		}		
		var pwdRequest = new XMLHttpRequest(); 
		pwdRequest.open("POST", "/admin/update-pw", true); 
		pwdRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		pwdRequest.onload = function () {	
			if(pwdRequest.responseText=="0"){
	    		swal({
	    			  title: "기존 비밀번호가 일치하지 않습니다.",
	    			  icon: "warning",
	    			  button : "확인",
	    			  dangerMode: true,
	    			});	
			}else{
				window.location.href = "/admin/index";
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
	            		swal({
	            			  title: "이메일 인증이 완료되었습니다.",
	            			  icon: "warning",
	            			  button : "확인",
	            			  dangerMode: true,
	            			});	
	                    clearInterval(timer);
	                    btnEmailAuth.value = "인증완료";
	                    btnSubmitEmail.classList.remove("d-none");                  
	            	}else{
	            		swal({
	            			  title: "이메일 인증이 실패했습니다.",
	            			  icon: "warning",
	            			  button : "확인",
	            			  dangerMode: true,
	            			});	
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
         mailRequest.open("POST", "/admin/update-email", true); 
         mailRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
         mailRequest.onload = function () {	
				window.location.href = "/admin/index";
 		};
 		mailRequest.send("email="+txtEmail.value);	
    };
    
    

	var divBanner = main.querySelector(".div-banner");
	var ulBanner = divBanner.querySelector(".ul-banner");
	var tplBannerLi = divBanner.querySelector("#banner-li-template");
	var tplAddBannerLi = divBanner.querySelector("#add-banner-li-template");
	var btnSubmitBanner = divBanner.querySelector(".right .btn");
    var fileMap = new Map();

	var bindBanner = function(tpl, banner){
		var tempImg = tpl.querySelector("img");
		tempImg.src= "../get-img?folder=main-banner&file="+banner.src;    
	};
	
	var appendAddBanner = function(){
		var tplAdd=document.importNode(tplAddBannerLi.content, true);
		var tempFileDnone = tplAdd.querySelector("input[type='file']");
		var tempBtn = tplAdd.querySelector(".btn");

		tempBtn.onclick=function(evt){
			var evt = new MouseEvent("click", {
				"view":window,
				"bubbles":true,
				"cancelable":true
			});
			tempFileDnone.dispatchEvent(evt);
		}	
		
		tempFileDnone.addEventListener('change', function(evt){
			var oldtplAdd = ulBanner.querySelector(".add-li-banner")
			oldtplAdd.remove();
			
			var curFiles = tempFileDnone.files;
			
			for (var i = 0; i < curFiles.length; i++) {
				var tpl=document.importNode(tplBannerLi.content, true);
				var tempImg = tpl.querySelector("img");
				tempImg.src= window.URL.createObjectURL(curFiles[i]);  
				tempImg.name = curFiles[i].name;
	            fileMap.set(tempImg.name, curFiles[i]);		
	            ulBanner.append(tpl);
			}
			/*
			var tpl=document.importNode(tplBannerLi.content, true);
			var tempImg = tpl.querySelector("img");
			tempImg.src= window.URL.createObjectURL(curFiles[0]);  
			tempImg.name = tempFileDnone.value;
            fileMap.set(tempImg.name, curFiles[0]);
            */
			/*
			var oldtplAdd = ulBanner.querySelector(".add-li-banner")
			oldtplAdd.remove();
			ulBanner.append(tpl);  */
			appendAddBanner();
		});
		
		ulBanner.append(tplAdd);  

		$(".add-btn").width($(".banner-img").width()-2);
		$(".add-btn").height($(".add-btn").width()*0.4);
		$(".li-banner").height($(".li-banner").width()*0.4);
		
		var tempDels = ulBanner.querySelectorAll(".del")
		for (var i = 0; i < tempDels.length; i++) {
			 tempDels[i].classList.remove("d-none");
		}

	};
	
	var bannerRequest = new XMLHttpRequest(); 
	bannerRequest.open("POST", "/get-mainbannerlist", true); 
	bannerRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	bannerRequest.onload = function () {	
		var bannerList = JSON.parse(bannerRequest.responseText);
	    for(var i = 0; i < bannerList.length; i++){
	        var tpl=document.importNode(tplBannerLi.content, true);
	        bindBanner(tpl, bannerList[i]);	
	        ulBanner.append(tpl);  
	    }
		appendAddBanner();
	};
	bannerRequest.send();

	$(window).resize(function (){
		$(".li-banner").height($(".li-banner").width()*0.4);
		$(".add-btn").width($(".banner-img").width()-2);
		$(".add-btn").height($(".banner-img").height());
	 })
		 
	 ulBanner.addEventListener("click", function(evt){
		 var target = evt.target;
		 var childrenUp = ulBanner.querySelectorAll(".up");
		 var childrenDown = ulBanner.querySelectorAll(".down");
		 var childrenDel = ulBanner.querySelectorAll(".del");
		 var childrenImg = ulBanner.querySelectorAll(".banner-img");
		 var childrenLi = ulBanner.querySelectorAll(".li-banner");
		 if(target.classList.contains("up")){
			 for (var i = 1; i < childrenUp.length; i++) {
				if(childrenUp[i]==target){
					var temp = childrenImg[i].src;
					childrenImg[i].src = childrenImg[i-1].src;
					childrenImg[i-1].src = temp;

					var temp = childrenImg[i].name;
					childrenImg[i].name = childrenImg[i-1].name;
					childrenImg[i-1].name = temp;
				}
			 }
		 }else if(target.classList.contains("down")){
			 for (var i = 0; i < childrenDown.length-1; i++) {
					if(childrenDown[i]==target){
						var temp = childrenImg[i].src;
						childrenImg[i].src = childrenImg[i+1].src;
						childrenImg[i+1].src = temp;

						var temp = childrenImg[i].name;
						childrenImg[i].name = childrenImg[i+1].name;
						childrenImg[i+1].name = temp;
					}
			 }
		 }else if(target.classList.contains("del")){
			 for (var i = 0; i < childrenDel.length; i++) {
					if(childrenDel[i]==target){
						childrenLi[i].remove();
					}
			 }

			 if(ulBanner.querySelectorAll(".li-banner").length==2){
				 ulBanner.querySelectorAll(".del")[0].classList.add("d-none");
			 }
		 }
	 });
	 
	btnSubmitBanner.onclick = function(){	
		/*
		var bannerDBdelRequest = new XMLHttpRequest(); 
		bannerDBdelRequest.open("POST", "/admin/delete-banner", true); 
		bannerDBdelRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		bannerDBdelRequest.onload = function () {
			
			var imgList = ulBanner.querySelectorAll(".banner-img");
			var cnt=0;
			for (var i = 0; i < imgList.length; i++) {
				var file=null;
				var fileName = imgList[i].src;
				if(imgList[i].name!=null && imgList[i].name!=""){
					fileName = imgList[i].name;
					file = fileMap.get(fileName);
				}

				var fd = new FormData();
				fd.append("file", file);  
				fd.append("fileName", fileName);  
				fd.append("ord",i);  
				$.ajax({
					url: '/admin/update-banner',
					data: fd,
					dataType: 'text',
					processData: false,
					contentType: false,
					type: 'POST',
					success : function(data) {
						cnt++;
						if(cnt==imgList.length){
							var bannerRequest = new XMLHttpRequest(); 
							bannerRequest.open("POST", "/admin/banner-folder-setting", true); 
							bannerRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
							bannerRequest.onload = function () {
				  				//window.location.href = "/admin/index";
							}
							bannerRequest.send();
						}
					}	
				});
			}
		}
		bannerDBdelRequest.send();
		*/
		
		var imgList = ulBanner.querySelectorAll(".banner-img");
		var cnt=0;
		for (var i = 0; i < imgList.length; i++) {
			var file=null;
			var fileName = imgList[i].src;
			if(imgList[i].name!=null && imgList[i].name!=""){
				fileName = imgList[i].name;
				file = fileMap.get(fileName);
			}

			var fd = new FormData();
			fd.append("file", file);  
			fd.append("fileName", fileName);  
			fd.append("ord",i);  
			$.ajax({
				url: '/admin/update-banner',
				data: fd,
				dataType: 'text',
				processData: false,
				contentType: false,
				type: 'POST',
				success : function(data) {
					cnt++;
					if(cnt==imgList.length){
						var bannerRequest = new XMLHttpRequest(); 
						bannerRequest.open("POST", "/admin/banner-folder-setting", true); 
						bannerRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
						bannerRequest.onload = function () {
			  				window.location.href = "/admin/index";
						}
						bannerRequest.send();
					}
				}	
			});
		}
		
	};
	
	
});
















