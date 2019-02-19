window.addEventListener("load",function() {
	
	/*var t = {"name":"","content":"","areaSido":"null","areaSigungu":"시군구","ageMin":"무관","ageMax":"무관","gender":0,"maxPerson":20,"img":"5.png","categoryId":2};
	alert(t.areaSigungu);*/
	
	var main = document.querySelector("main");
	var divCreate = main.querySelector(".create");
	
	var divTag = divCreate.querySelector(".div-tag");
	
    var img = document.querySelector(".div-img img");	
	var btnImg = divCreate.querySelector(".div-photo .btn")
	var fileDnone = divCreate
			.querySelector("input[type='file']")
	var curFiles;
	fileDnone.addEventListener('change', function(evt){
    curFiles = fileDnone.files;   
       img.src= window.URL.createObjectURL(curFiles[0]);  
	});
	
	
	btnImg.onclick = function() {
		var evt = new MouseEvent("click", {
			"view" : window,
			"bubbles" : true,
			"cancelable" : true
		});
		fileDnone.dispatchEvent(evt);
	}
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
	
	///////////////////post 관련/////////////////////////////////////
	var divLocation = divCreate.querySelector(".div-location");
	var selSido = divLocation.querySelector(".sido")
	var selSigungu = divLocation.querySelector(".sigungu")
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
		    selSido.appendChild(opt);
		}
	}
	postRequest.send();	
	
	selSido.onchange= function(e) {
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

	var regBtn = document.querySelector(".btn-create");
	var titleBox = document.querySelector(".div-text input");
	var contentBox = document.querySelector(".div-text textarea");
	var minAge = document.querySelector(".age-min");
	var maxAge = document.querySelector(".age-max");
	var gender = document.querySelector(".gender");
	var maxPer = document.querySelector(".div-maxperson input");
	var categoryId = document.querySelector(".categoryId");
	var tagBtn = document.querySelectorAll(".selected-tag");
	var chk = true;

	regBtn.onclick = function(){
		var cnt = 0;
		var divTag = document.querySelector(".div-tag");
		var children = divTag.children;
		if(warn()==1){
			return;
		}
		function warn(){
			
/*			var patt = new RegExp(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/);*/
			var patt = new RegExp('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$');
			
			var tags = divTag.querySelectorAll("input");
            for (var i = 0; i < tags.length; i++) {
                if (tags[i].classList.contains("selected-tag"))
                   cnt++;
             }
            if (cnt==0) {////////////////
                swal({
                     title: "태그를 선택해주세요",
                     text: "최소 1개의 태그가 필요합니다",
                     icon: "warning",
                     button : "그랭",
                     dangerMode: true,
                     });      
                return 1;
             }else if((selSigungu.value=="null")||(selSigungu.value=="시군구")){
				swal({
					  title: "지역을 입력해주세요",
					  text: "정확한 시도,시군구의 지역이 필요합니다",
					  icon: "warning",
					  button : "그랭",
					  dangerMode: true,
				  	})
					.then((willDelete) => {
					  if (willDelete) {
	
					  }
					});		
				return 1;
			}
			else if(titleBox.value==""){
				swal({
					  title: "모임이름을 입력해주세요",
					  text: "적어도 한글자 이상의 이름이 필요합니다.",
					  icon: "warning",
					  button : "그랭",
					  dangerMode: true,
				  	})
					.then((willDelete) => {
					  if (willDelete) {

					  }
					});		
				return 1;
			}
			else if(contentBox.value==""){
				swal({
					  title: "소개란을 입력해주세요",
					  text: "적어도 100자 이상의 소개가 필요합니다.",
					  icon: "warning",
					  button : "그랭",
					  dangerMode: true,
				  	})
					.then((willDelete) => {
					  if (willDelete) {

					  }
					});				
				return 1;

			}
			else if(minAge.value > maxAge.value){
				swal({
					  title: "나이을 선택해주세요",
					  text: "최소 나이가 최대 나이보다 클 수 없습니다.",
					  icon: "warning",
					  button : "그랭",
					  dangerMode: true,
				  	})
					.then((willDelete) => {
					  if (willDelete) {

					  }
					});
				return 1;
			}
			else if(!patt.test(maxPer.value)){
				swal({
					  title: "정원을 제대로 입력해주세요",
					  text: "정원수는 1~999까지의 숫자들만 가능합니다",
					  icon: "warning",
					  button : "그랭",
					  dangerMode: true,
				  	})
					.then((willDelete) => {
					  if (willDelete) {

					  }
					});
				return 1;
			}else if(curFiles==null){
	            swal({
	                title: "이미지가 없습니다",
	                text: "대표사진을 설정해주세요",
	                icon: "warning",
	                button : "그랭",
	                dangerMode: true,
	                });      
				return 1;
			}
		}

/*		if((selSido.value=="null")&&(selSigungu.value=="시군구")&&
				(titleBox.value=="")&&(contentBox.value=="")&&
				(minAge.value=="무관")&&(maxAge.value=="무관")&&
				(gender.value==0)||(maxPer.value<2)){
			swal({
				  title: "아직",
				  text: "모임을 만들기 위해선 다 필요합니다.",
				  icon: "warning",
				  button : "그랭",
				  dangerMode: true,
				})
				.then((willDelete) => {
				  if (willDelete) {

				  }
				});
			return;
		};*/
				
		console.log(titleBox.value);
		console.log(contentBox.value);
		console.log(selSido.options[selSido.selectedIndex].value);
		console.log(selSigungu.options[selSigungu.selectedIndex].value);
		console.log(minAge.options[minAge.selectedIndex].value);
		console.log(maxAge.options[maxAge.selectedIndex].value);
		console.log(gender.selectedIndex);
		console.log(maxPer.value);
		console.log(categoryId.getAttribute("data-cid"));
		var tagArray=[];
		for (var i = 0; i < children.length; i++) {
			if (children[i].classList.contains("selected-tag")) {
				
				tagArray.push(children[i].getAttribute("data-tid"));
				
			}
		}
		console.log("어레이"+tagArray);
		
		var json = JSON.stringify({
			name:titleBox.value,
			content:contentBox.value,
			areaSido:selSido.options[selSido.selectedIndex].value,
			areaSigungu:selSigungu.options[selSigungu.selectedIndex].value,
			ageMin:minAge.options[minAge.selectedIndex].value,
			ageMax:maxAge.options[maxAge.selectedIndex].value,
			gender:gender.selectedIndex,
			maxPerson:parseInt(maxPer.value),
			img:curFiles[0].name.substring(curFiles[0].name.lastIndexOf(".")),
			categoryId:parseInt(categoryId.value)
		})
		
		console.log(json);
		var regRequest = new XMLHttpRequest();
		regRequest.open("POST","/crowd/Reg",true);
		regRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		regRequest.onload = function(){
			var crowdId = regRequest.responseText;
			
			var fd = new FormData();
            fd.append("file", curFiles[0]);  
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
               window.location.href = "/crowd/main?crowd="+crowdId;
               }   
            });
		}
		regRequest.send("json="+json+"&tagId="+tagArray);
		
	}
});






















