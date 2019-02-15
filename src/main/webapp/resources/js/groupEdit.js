window.addEventListener("load",function() {
	var main = document.querySelector("main");
	var divEdit = main.querySelector(".create");
	var divTag = divEdit.querySelector(".div-tag");
	var btnImg = divEdit.querySelector(".div-photo .btn")
	var fileDnone = divEdit.querySelector("input[type='file']")
	var divImg = divEdit.querySelector(".div-img");
	var imgBanner = divImg.querySelector('img');
	var file;
	
	var btnSubmit = divEdit.querySelector(".btn-create");
	var crowdId =  getQuerystring('crowd')

	var divLocation = divEdit.querySelector(".div-location");
	var selSido = divLocation.querySelector(".sido")
	var selSigungu = divLocation.querySelector(".sigungu")
	
	var divAge = divEdit.querySelector(".div-age");
	var selMin = divAge.querySelector(".age-min")
	var selMax = divAge.querySelector(".age-max")
	
	var divGender = divEdit.querySelector(".div-gender");
	var selGen = divGender.querySelector(".gender")
		
	var divMaxperson = divEdit.querySelector(".div-maxperson");
	var inputMaxPerson = divMaxperson.querySelector("input");	
	
	btnSubmit.onclick = function(){
		var areaSido = selSido.value;
		var areaSigungu = selSigungu.value;
		var name = divEdit.querySelector(".input-name").value;
		var content = divEdit.querySelector(".textarea-content").value;
		var ageMin = selMin.value;
		var ageMax = selMax.value;
		var gender = selGen.value;
		var maxPerson = inputMaxPerson.value;
		var img = imgBanner.name;
		var tagList=[];
		var cnt = 0;
		var divTag = document.querySelector(".div-tag");
		var children = divTag.children;
		if(warn()==1){
			return;
		}
		function warn(){
			var patt = new RegExp('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$');
			var tags = divTag.querySelectorAll("input");
			for (var i = 0; i < tags.length; i++) {
				if (tags[i].classList.contains("selected-tag"))
					cnt++;
			}
			
			if (cnt==0) {
				swal({
					  title: "태그를 선택해주세요",
					  text: "최소 1개의 태그가 필요합니다",
					  icon: "warning",
					  button : "확인",
					  dangerMode: true,
				  	});		
				return 1;
			}
			else if((selSigungu.value=="null")||(selSigungu.value=="시군구")){
				swal({
					  title: "지역을 입력해주세요",
					  text: "정확한 시도,시군구의 지역이 필요합니다",
					  icon: "warning",
					  button : "확인",
					  dangerMode: true,
				  	});		
				return 1;
			}
			else if(name==""){
				swal({
					  title: "모임이름을 입력해주세요",
					  text: "적어도 한글자 이상의 이름이 필요합니다.",
					  icon: "warning",
					  button : "확인",
					  dangerMode: true,
				  	});	
				return 1;
			}
			else if(content==""){
				swal({
					  title: "소개란을 입력해주세요",
					  text: "적어도 100자 이상의 소개가 필요합니다.",
					  icon: "warning",
					  button : "확인",
					  dangerMode: true,
				  	});			
				return 1;

			}
			else if(ageMin > ageMax && ageMin!="무관" && ageMax!="무관"){
				swal({
					  title: "나이을 선택해주세요",
					  text: "최소 나이가 최대 나이보다 클 수 없습니다.",
					  icon: "warning",
					  button : "확인",
					  dangerMode: true,
				  	});
				return 1;
			}
			else if(!patt.test(maxPerson)){
				swal({
					  title: "정원을 제대로 입력해주세요",
					  text: "정원수는 1~999까지의 숫자들만 가능합니다",
					  icon: "warning",
					  button : "확인",
					  dangerMode: true,
				  	});
				return 1;
			}
		}
			

		
		/////////////////////////////////////////////////////////////////////
		
		if(areaSido=="null" || areaSigungu=="null" || name=="" ||content==""){
			alert("미기재 사항이 존재하여 모임 수정이 취소 되었습니다.");
			return;
		}
		var tags = divTag.querySelectorAll(".btn");
		for (var i = 0; i < tags.length; i++) {
			if(tags[i].classList.contains("selected-tag")){
				tagList.push(tags[i].name);
			}
		}
		
		if(file!=null){
			img = file.name;
			var fileDelRequest = new XMLHttpRequest(); 
			fileDelRequest.open("POST", "/delete-file", true); 
			fileDelRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
			fileDelRequest.onload = function () {	
				var fd = new FormData();
		          fd.append("file", file);  
		          fd.append("id", crowdId);  
		          fd.append("root", "crowd-banner"); 
				$.ajax({
		  			url: '/file-upload',
					data: fd,
					dataType: 'text',
					processData: false,
					contentType: false,
					type: 'POST',
					success : function(data) {				
					}	
				});
			}
			fileDelRequest.send("fileName="+imgBanner.name+"&root=crowd-banner");			
		}
		
		var updateRequest = new XMLHttpRequest(); 
		updateRequest.open("POST", "/leader/update-crowd", true); 
		updateRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		updateRequest.onload = function () {	
			window.location.href="/leader/manage?crowd="+crowdId;
		}
		updateRequest.send("id="+crowdId+
				"&areaSido="+areaSido+
				"&areaSigungu="+areaSigungu+
				"&name="+name+
				"&content="+content+
				"&ageMin="+ageMin+
				"&ageMax="+ageMax+
				"&gender="+gender+
				"&maxPerson="+maxPerson+
				"&img="+img+
				"&tagList="+tagList		
		);
	};
	
	
	
	btnImg.onclick = function() {
		var evt = new MouseEvent("click", {
			"view" : window,
			"bubbles" : true,
			"cancelable" : true
		});
		fileDnone.dispatchEvent(evt);
	}
	
	fileDnone.addEventListener('change', function(evt){
		var curFiles = fileDnone.files;
		file = curFiles[0];
		imgBanner.src =window.URL.createObjectURL(curFiles[0]); 
	});
	
	divTag.addEventListener("click", function(evt) {
		if (evt.target.nodeName != "INPUT")
			return;
		if (evt.target.classList.contains("selected-tag")) {
			evt.target.classList.remove("selected-tag");
		} else {
			var tags = divTag.querySelectorAll("input");
			var cnt = 0;
			for (var i = 0; i < tags.length; i++) {
				if (tags[i].classList.contains("selected-tag"))
					cnt++;
			}
			if (cnt < 3) {
				evt.target.classList.add("selected-tag");
			} else {
				alert("태그는 최대 3개까지 선택 가능합니다.");
			}
		}
	});
	
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

	var crowdRequest = new XMLHttpRequest(); 
	crowdRequest.open("POST", "/leader/get-crowd", true); 
	crowdRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	crowdRequest.onload = function () {	
		var jsonCrowd = JSON.parse(crowdRequest.responseText);	
		
		//selSido 관련
		var jsonPost;
		var postRequest = new XMLHttpRequest(); 
		postRequest.open("POST", "../get-sido", true); 
		postRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		postRequest.onload = function () {	
			jsonPost = JSON.parse(postRequest.responseText);
			selSido.innerHTML="";
			var temp = document.createElement('option');
			temp.value="null";
			temp.innerHTML = "시도";
			temp.classList.add("option");
		    selSido.appendChild(temp);
			for(var i=0; i<jsonPost.length; i++){
				var opt = document.createElement('option');
				opt.value = jsonPost[i][0];
			    opt.innerHTML = jsonPost[i][0];
			    opt.classList.add("option");
			    if(opt.value==selSido.value){
			    	opt.defaultSelected = true;
			    }
			    selSido.appendChild(opt);
			}
			selSido.value=jsonCrowd.areaSido;
			
			var sidoIndex = selSido.selectedIndex-1;
			selSigungu.innerHTML="";
			var temp = document.createElement('option');
			temp.value="null";
			temp.innerHTML = "시군구";
			temp.classList.add("option");
			selSigungu.appendChild(temp);
			for(var i=1; i<jsonPost[sidoIndex].length; i++){
				var opt = document.createElement('option');
				opt.value = jsonPost[sidoIndex][i];
			    opt.innerHTML = jsonPost[sidoIndex][i];
			    opt.classList.add("option");
			    selSigungu.appendChild(opt);
			}	
			selSigungu.value=jsonCrowd.areaSigungu;
		}
		postRequest.send();	
		
		selSido.onchange= function() {
			if(selSido.selectedIndex==0){
				selSigungu.innerHTML="";
				var temp = document.createElement('option');
				temp.value="null";
				temp.innerHTML = "시군구";
				temp.classList.add("option");
				selSigungu.appendChild(temp);
				return 
			}
			var sidoIndex = selSido.selectedIndex-1;
			selSigungu.innerHTML="";
			var temp = document.createElement('option');
			temp.value="null";
			temp.innerHTML = "시군구";
			temp.classList.add("option");
			selSigungu.appendChild(temp);
			for(var i=1; i<jsonPost[sidoIndex].length; i++){
				var opt = document.createElement('option');
				opt.value = jsonPost[sidoIndex][i];
			    opt.innerHTML = jsonPost[sidoIndex][i];
			    opt.classList.add("option");
			    selSigungu.appendChild(opt);
			}	
		};
		
		//div age 관련
		for(var i=1; i<7; i++){
				var opt = document.createElement('option');
				opt.value = i+"0대";
			    opt.innerHTML = i+"0대";
			    opt.classList.add("option");
			    selMin.appendChild(opt);
		}	
		var optMin = document.createElement('option');
		optMin.value = "무관";
		optMin.innerHTML = "무관";
		optMin.classList.add("option");
	    selMin.appendChild(optMin);
	    selMin.value=jsonCrowd.ageMin;
		for(var i=1; i<7; i++){
			var opt = document.createElement('option');
			opt.value = i+"0대";
		    opt.innerHTML = i+"0대";
		    opt.classList.add("option");
		    selMax.appendChild(opt);
		}	
		var optMax = document.createElement('option');
		optMax.value = "무관";
		optMax.innerHTML = "무관";
		optMax.classList.add("option");
		selMax.appendChild(optMax);
		selMax.value=jsonCrowd.ageMax;
			
		
		//div gender 관련
		var optMale = document.createElement('option');
		optMale.value = "남자";
		optMale.innerHTML = "남자";
		optMale.classList.add("option");
		selGen.appendChild(optMale);
		var optFemale = document.createElement('option');
		optFemale.value = "여자";
		optFemale.innerHTML = "여자";
		optFemale.classList.add("option");
		selGen.appendChild(optFemale);
		var optEtc = document.createElement('option');
		optEtc.value = "무관";
		optEtc.innerHTML = "무관";
		optEtc.classList.add("option");
		selGen.appendChild(optEtc);
		var gender = "무관";
		if(jsonCrowd.gender==0){
			gender = "남자";
		}else if(jsonCrowd.gender==1){
			gender = "여자";
		}
		selGen.value=gender;
		
		inputMaxPerson.value = jsonCrowd.maxPerson;
		imgBanner.src = "/get-img?folder=crowd-banner&file="+jsonCrowd.img;  
		imgBanner.name=jsonCrowd.img;
	}
	crowdRequest.send("crowdId="+crowdId);
});






















