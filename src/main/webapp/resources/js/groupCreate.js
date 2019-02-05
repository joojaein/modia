window.addEventListener("load",function() {
	var main = document.querySelector("main");
	var divCreate = main.querySelector(".create");
	
	var divTag = divCreate.querySelector(".div-tag");
	
	var btnImg = divCreate.querySelector(".div-photo .btn")
	var fileDnone = divCreate
			.querySelector("input[type='file']")
	
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
	
	selSido.onchange= function() {
		if(selSido.selectedIndex==0) return;
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

});






















