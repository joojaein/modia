window.addEventListener("load",function() {
	var main = document.querySelector("main");
    
	var areaName = document.querySelector(".area-name");
	var categoryImg = areaName.querySelector("img");
	
    switch(categoryImg.name){
       case "1" : categoryImg.src="/resources/images/mainIcon/backpack.png"
          break;
       case "2" : categoryImg.src="/resources/images/mainIcon/balls.png"
          break;
       case "3" : categoryImg.src="/resources/images/mainIcon/books.png"
          break;
       case "4" : categoryImg.src="/resources/images/mainIcon/cubes.png"
          break;
       case "5" : categoryImg.src="/resources/images/mainIcon/tickets.png"
          break;
       case "6" : categoryImg.src="/resources/images/mainIcon/piano.png"
          break;
       case "7" : categoryImg.src="/resources/images/mainIcon/yarn.png"
          break;
       case "8" : categoryImg.src="/resources/images/mainIcon/ballerina.png"
          break;
       case "9" : categoryImg.src="/resources/images/mainIcon/heart.png"
          break;
       case "11" : categoryImg.src="/resources/images/mainIcon/car.png"
          break;
       case "12" : categoryImg.src="/resources/images/mainIcon/photo-camera.png"
          break;
       case "13" : categoryImg.src="/resources/images/mainIcon/baseball-field.png"
          break;
       case "14" : categoryImg.src="/resources/images/mainIcon/game-controller.png"
          break;
       case "15" : categoryImg.src="/resources/images/mainIcon/cooking.png"
          break;
       case "16" : categoryImg.src="/resources/images/mainIcon/dog.png"
          break;
       case "17" : categoryImg.src="/resources/images/mainIcon/family.png"
          break;
       case "10" : categoryImg.src="/resources/images/mainIcon/small-talk.png"
          break;
       case "18" : categoryImg.src="/resources/images/mainIcon/puzzle.png"
          break;
    }
	
	var areaContent = document.querySelector(".area-content");
	var textareaContent = areaContent.querySelector("textarea");
	textareaContent.style.height = "1px";
	textareaContent.style.height = (textareaContent.scrollHeight)-20+"px";
 
	var menu = main.querySelector(".menu");
    
    var divEtc = main.querySelector(".div-etc");
    var divBorder = divEtc.querySelector(".board");
    var divMember = divEtc.querySelector(".member");
    var divApproval = divEtc.querySelector(".approval");
    var divStatistic = divEtc.querySelector(".statistic");
    
    var btnAdd = divBorder.querySelector(".btn-add");
    var btnCut = divMember.querySelector(".btn-cut");
    var btnApproval = divApproval.querySelector(".btn-approval");

    var radioMonth = divStatistic.querySelector("input[value='month']")
    var radioDay = divStatistic.querySelector("input[value='day']")
    var inputBeginDate = divStatistic.querySelector("input[name='date_begin']");
    var inputEndDate = divStatistic.querySelector("input[name='date_end']");
    
    var memberPaging = divMember.querySelector(".paging");
    var memberUlPaging = memberPaging.querySelector("ul");
  
    var approvalPaging = divApproval.querySelector(".paging");
    var approvalUlPaging = approvalPaging.querySelector("ul");
    
	var crowdId =  getQuerystring('crowd')
    var trMax = 10;
    var indexNowPage = 1;

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
	
    var img = main.querySelector(".area-banner img");
    img.src= "/get-img?folder=crowd-banner&file="+img.name;      
    
	setBoard();
	 
    menu.addEventListener("click",function(evt){
        if (evt.target.nodeName != "INPUT") return;  
        indexNowPage = 1;
    	var tab = menu.querySelectorAll(".btn");
        for (var i = 0; i < tab.length; i++) {
        	tab[i].classList.remove("selected-tab");
		}
        evt.target.classList.add("selected-tab");
        var divChildren = divEtc.children;
        for (var i = 0; i < divChildren.length; i++) {
        	divChildren[i].classList.add("d-none");
		}
        var div = divEtc.querySelector("."+evt.target.name);
    	div.classList.remove("d-none");
        
    	if(evt.target.name == "board"){
    		setBoard();      	
        }else if(evt.target.name == "member"){
        	setMember();
        }else if(evt.target.name == "approval"){
        	setApproval();
        } else if(evt.target.name == "statistic"){
        	setStatistic();
        }
    });
    
    btnAdd.onclick = function(){
    	var tbody = divBorder.querySelector("tbody");
    	var chkTempInput = tbody.querySelectorAll(".temp-input");
    	if(chkTempInput.length>0) return;
    	
    	var tempInput = document.createElement('input');
    	tempInput.classList.add("temp-input");
    	tempInput.placeholder = "게시판명을 입력하세요";
    	var tdInput = document.createElement('td');
    	tdInput.appendChild(tempInput);

    	var aAdd = document.createElement('a');
    	aAdd.classList.add("btn");
    	aAdd.innerText = "추가";
    	var tdAdd = document.createElement('td');
    	tdAdd.appendChild(aAdd);
 
    	var aCancel = document.createElement('a');
    	aCancel.classList.add("btn");
    	aCancel.innerText = "취소";
    	var tdCancel = document.createElement('td');
    	tdCancel.appendChild(aCancel);
    	
    	var tr = document.createElement('tr');
    	tr.appendChild(tdInput);
    	tr.appendChild(tdAdd);
    	tr.appendChild(tdCancel);
    
    	tbody.appendChild(tr);
    	tempInput.focus();

    	aAdd.onclick = function(){   
    		var insertRequest = new XMLHttpRequest(); 
    		insertRequest.open("POST", "/leader/insert-board", true); 
    		insertRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    		insertRequest.onload = function () {
				setBoard();
			};
			insertRequest.send("crowdId="+crowdId+"&name="+encodeURIComponent(tempInput.value));
    	};
    	aCancel.onclick = function(){
    		setBoard();
    	};
    };	
    
    function setBoard(){
    	var tbody = divBorder.querySelector("tbody");
    	tbody.innerHTML="";    	
		var boardRequest = new XMLHttpRequest(); 
		boardRequest.open("POST", "/leader/get-board-list", true); 
		boardRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		boardRequest.onload = function () {	
			var boardList = JSON.parse(boardRequest.responseText);
			for (var i = 0; i < boardList.length; i++) {
	        	var tdTitle = document.createElement('td');
	        	tdTitle.innerText=boardList[i].name;

	        	var aEdit = document.createElement('a');
	        	aEdit.classList.add("btn");
	        	aEdit.classList.add("edit");
	        	aEdit.innerText = "수정";
	        	var tdEdit = document.createElement('td');
	        	tdEdit.appendChild(aEdit);
	     
	        	var aDel = document.createElement('a');
	        	aDel.classList.add("btn");
	        	aDel.classList.add("del");
	        	aDel.innerText = "삭제";
	        	var tdDel = document.createElement('td');
	        	tdDel.appendChild(aDel);
	        	
	        	var tempTr = document.createElement('tr');
	        	tempTr.appendChild(tdTitle);
	        	tempTr.appendChild(tdEdit);
	        	tempTr.appendChild(tdDel);
	        	tempTr.value=boardList[i].id;
	        	tbody.appendChild(tempTr);
	        	
	        	aEdit.onclick = function(){
	        		var td = this.parentNode;
	        		var tr = td.parentNode;
	        		var trChildren = tr.childNodes;
	        		var tdTitle = trChildren[0];

	        		var tdEdit = trChildren[1];
	        		var tdEditChildren = tdEdit.childNodes;
	        		var aEdit = tdEditChildren[0];
	        		
	        		var tdDel = trChildren[2];
	        		var tdDelChildren = tdDel.childNodes;
	        		var aDel = tdDelChildren[0];
	        		
	        		var tempInput = document.createElement('input');
	            	tempInput.classList.add("temp-input");
	            	tempInput.placeholder = tdTitle.innerText;
	            	tdTitle.innerText="";
	            	tdTitle.appendChild(tempInput);
	            	tempInput.focus();
	            	aEdit.onclick = function(){
	            		swal({
	      	    	      text: "["+tempInput.placeholder+"] 게시판을 수정 하시겠습니까?",
	      	    	      icon: "warning",
	      	    	      buttons: [
	      	    	    	  '취소',
	      	    	    	  '확인'
	      	    	      ],
	      	    	      dangerMode: true,
	      	    	    }).then(function(isConfirm) {
	      	    	      if (isConfirm) {
		            			var updateRequest = new XMLHttpRequest(); 
		            			updateRequest.open("POST", "/leader/update-board", true); 
		            			updateRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		            			updateRequest.onload = function () {
		            				setBoard();
		            			};
		            			updateRequest.send("boardId="+tr.value +"&name="+encodeURIComponent(tempInput.value));
	            			} else {
		            			setBoard();
			            		}
	      	    	    })  
	            	};
	            	aDel.innerText="취소";
	            	aDel.onclick = function() {
	        			setBoard();
					};
	        	};
	        	
	        	aDel.onclick = function(){
	        		var td = this.parentNode;
	        		var tr = td.parentNode;
	        		var trChildren = tr.childNodes;
	        		var title = trChildren[0];
	        		swal({
	    	    	      text: "["+title.innerText+"] 게시판을 삭제 하시겠습니까?",
	    	    	      icon: "warning",
	    	    	      buttons: [
	    	    	    	  '취소',
	    	    	    	  '확인'
	    	    	      ],
	    	    	      dangerMode: true,
	    	    	    }).then(function(isConfirm) {
	    	    	      if (isConfirm) {
	  	        			var deleteRequest = new XMLHttpRequest(); 
		        			deleteRequest.open("POST", "/leader/delete-board", true); 
		        			deleteRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		        			deleteRequest.onload = function () {
	            				setBoard();
	            			};
	            			deleteRequest.send("boardId="+tr.value);
		        			setBoard();
		        		} else {
		        			setBoard();
			        		}
	    	    	    })  
	        	};
			}
		}
		boardRequest.send("crowdId="+crowdId);		
    };

    function setMember(){
    	var thead = divMember.querySelector("thead");
        thead.name="groupRole/asc";
        setMemberPaging();
        setMemberTable();
        
    	thead.addEventListener("click",function(evt){
            if (evt.target.nodeName != "SPAN") return; 
            indexNowPage = 1;
            var tempTheadName="";
            var td = thead.querySelectorAll("td");
            for (var i = 1; i < td.length; i++) {
    			var span = td[i].children;			
    			if(span[0]==evt.target){
    				var tempClassList = span[0].classList+"";
    				tempClassList = tempClassList.substring(4);
    				tempTheadName+=tempClassList+"/";
    				if(span[1].classList.contains("d-none")){
    					span[1].classList.remove("d-none");
    					span[2].classList.add("d-none");
    					tempTheadName+="asc"
    				}else if(span[2].classList.contains("d-none")){
    					span[1].classList.add("d-none");
    					span[2].classList.remove("d-none");
    					tempTheadName+="desc"
    				}else{
    					span[1].classList.remove("d-none");
    					span[2].classList.add("d-none");
    					tempTheadName+="asc"
    				}			
    			}else{
    				span[1].classList.add("d-none");
    				span[2].classList.add("d-none");
    			}
            }
            thead.name=tempTheadName;
            setMemberPaging();
            setMemberTable();
    	});	
    }  
    
    function setMemberTable(){
		var thead = divMember.querySelector("thead");
        var tempIndex = thead.name.indexOf("/");
    	var query = thead.name.substring(0,tempIndex);
    	var updown = thead.name.substring(tempIndex+1);
    	var min = (indexNowPage-1)*trMax;
    	var max= trMax;

    	var listRequest = new XMLHttpRequest(); 
    	listRequest.open("POST", "/leader/get-real-member-list", true); 
    	listRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    	listRequest.onload = function () {	
    		var list = JSON.parse(listRequest.responseText);
    		var tbody = divMember.querySelector("tbody");
	    	tbody.innerHTML="";
	    	for (var i = 0; i < list.length; i++) {
	    		var tdChkbox = document.createElement('td');
	    		if(list[i].groupRole!=0){
	    			var chkbox = document.createElement('input');
	        		chkbox.type="checkbox";
	        		tdChkbox.appendChild(chkbox);
	    		}
	    		var tdId = document.createElement('td');
	    		tdId.innerText=list[i].memberId
	    		var tdRegDate = document.createElement('td');
	    		tdRegDate.innerText=dateFormat(list[i].regDate);
	    		var tdVisitDate = document.createElement('td');
	    		tdVisitDate.innerText=dateFormat(list[i].recently);
	    		var tdLevel = document.createElement('td');
	    		if(list[i].groupRole!=0){
	    		var select = document.createElement('select');
	    		var opt1 = document.createElement('option');
	    		opt1.innerText="운영진";
	    		var opt2 = document.createElement('option');
	    		opt2.innerText="일반회원";
	    		select.appendChild(opt1);
	    		select.appendChild(opt2);
	    		var role= "일반회원";
	    		if(list[i].groupRole!=2){
	    			role="운영진"
	    		}
	    		select.value=role;
	    		select.onchange = function(evt){
	        		var tdLevel = this.parentNode;
	        		var tr = tdLevel.parentNode;
	        		var tdChildren = tr.children;
	        		swal({
	    	    	      text: "["+tdChildren[1].innerText+"]회원의 등급을 ["+ this.value + "]로 변경하시겠습니까?",
	    	    	      icon: "warning",
	    	    	      buttons: [
	    	    	    	  '취소',
	    	    	    	  '확인'
	    	    	      ],
	    	    	      dangerMode: true,
	    	    	    }).then(function(isConfirm) {
	    	    	      if (isConfirm) {
	  	        			var roleNum=2;
		        			if(evt.target.value=="운영진") roleNum=1;
		        			var updateRequest = new XMLHttpRequest(); 
		        			updateRequest.open("POST", "/leader/update-real-member", true); 
		        			updateRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		        			updateRequest.onload = function () {	
			        			setMember();
		        			}
		        			updateRequest.send("crowdId="+crowdId+"&memberId="+tdChildren[1].innerText+"&groupRole="+roleNum);	
		        		} else {
		        			setMember();
			        		}
	    	    	    })  
	        	};
	    		tdLevel.appendChild(select);
	    		}else{
	    			tdLevel.innerText="모임장";
	    		}
	        	var tr = document.createElement('tr');
	        	tr.appendChild(tdChkbox);
	        	tr.appendChild(tdId);
	        	tr.appendChild(tdRegDate);
	        	tr.appendChild(tdVisitDate);
	        	tr.appendChild(tdLevel);
	        	tbody.appendChild(tr);
			}
	    }
		listRequest.send("query="+query+"&updown="+updown+"&min="+min+"&max="+max+"&crowdId="+crowdId);	
    }
    
    memberUlPaging.addEventListener("click",function(evt){
        if (evt.target.nodeName != "INPUT") return;  
    	var page = memberUlPaging.querySelectorAll(".btn");
        for (var i = 0; i < page.length; i++) {
        	page[i].classList.remove("now-page");
		}      
        evt.target.classList.add("now-page");
        indexNowPage = evt.target.value;
        setMemberTable();
    });
    
    function setMemberPaging(){	
    	var inputs = menu.querySelectorAll("input");
    	var inputMember;
    	var inputApproval;
    	for (var i = 0; i < inputs.length; i++) {
			if(inputs[i].name=="member"){
				inputMember=inputs[i];
			}else if(inputs[i].name=="approval"){
				inputApproval=inputs[i];
			}
		}
    	var realCnt = 0;
    	var requestCnt = 0;

    	var cntReal = new XMLHttpRequest(); 
    	cntReal.open("POST", "/leader/get-real-member-cnt", true); 
    	cntReal.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    	cntReal.onload = function () {	
    		realCnt = parseInt(cntReal.responseText);
    		memberUlPaging.innerHTML="";
    		for (var i = parseInt((indexNowPage-1)/5)*5+1; i < parseInt((indexNowPage-1)/5)*5+6; i++) {
    			if(realCnt/trMax+1<=i){
    				break;
    			}	
    			var tempLi = document.createElement('li');
    			var tempInput = document.createElement('input');
    			tempInput.classList.add("btn");
    			if(indexNowPage==i){
        			tempInput.classList.add("now-page");
    			}
    			tempInput.type="button";
    			tempInput.value=i;
    			tempLi.appendChild(tempInput);
    			memberUlPaging.appendChild(tempLi);
			}
    		
    	    var btnPrev = memberPaging.querySelector(".prev");
    	    var btnNext = memberPaging.querySelector(".next");
    	    btnPrev.onclick = function(){
    	    	if(indexNowPage!=1){
    	    		indexNowPage--;
    	    	}
    	    	setMemberPaging();
    	    	setMemberTable();
    	    };
    	    
    	    btnNext.onclick = function(){
    	    	if(indexNowPage!=parseInt(realCnt/trMax+1)){
    	    		indexNowPage++;
    	    	}
    	    	setMemberPaging();
    	    	setMemberTable();
    	    };
    	    
    		var cntRequest = new XMLHttpRequest(); 
        	cntRequest.open("POST", "/leader/get-request-member-cnt", true); 
        	cntRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        	cntRequest.onload = function () {	
        		requestCnt = parseInt(cntRequest.responseText);
            	inputMember.value="회원 관리("+realCnt+")";
        		inputApproval.value="가입 승인("+requestCnt+")";	
    		}
        	cntRequest.send("crowdId="+crowdId);	
		}
    	cntReal.send("crowdId="+crowdId);
    }
    
    
    btnCut.onclick = function() {
    	var tbody = divMember.querySelector("tbody");
    	var trs = tbody.querySelectorAll("tr");
    	var chkboxs = tbody.querySelectorAll("input[type='checkbox']");
    	var ids ="";
    	var cnt=0;
    	for (var i = 0; i < chkboxs.length; i++) {
    		if(chkboxs[i].checked){
    			if(ids!=""){
        			ids+=", ";
        		}
    			var parentTd = chkboxs[i].parentNode;
    			var parentTr = parentTd.parentNode;
    			var childrenTd = parentTr.children;
        		ids+=childrenTd[1].innerText;
        		cnt++;
    		}
		}
    	
    	if(cnt==0){
    		swal({
    		  title: "회원이 선택되지 않았습니다.",
    		  icon: "warning",
    		  button : "확인",
    		  dangerMode: true,
    		});
    		return;
    	}
    	
    	swal({
  	      text: "["+ids+"]회원을 추방하시겠습니까?",
  	      icon: "warning",
  	      buttons: [
  	    	  '취소',
  	    	  '확인'
  	      ],
  	      dangerMode: true,
  	    }).then(function(isConfirm) {
  	      if (isConfirm) {
			var delRequest = new XMLHttpRequest(); 
			delRequest.open("POST", "/leader/del-real-member", true); 
			delRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
			delRequest.onload = function () {	
				setMember();
			}
			delRequest.send("crowdId="+crowdId+"&memberIds="+ids);	
		} else {
			setMember();
			}
  	    })  
	};
	
    function setApproval() {
    	var thead = divApproval.querySelector("thead");
        thead.name="reqDate/asc";
    	setApprovalPaging();
        setApprovalTable();
        
    	thead.addEventListener("click",function(evt){
            if (evt.target.nodeName != "SPAN") return; 
            indexNowPage = 1;
            var tempTheadName="";
            var td = thead.querySelectorAll("td");
            for (var i = 1; i < td.length; i++) {
    			var span = td[i].children;			
    			if(span[0]==evt.target){
    				var tempClassList = span[0].classList+"";
    				tempClassList = tempClassList.substring(4);
    				tempTheadName+=tempClassList+"/";
    				if(span[1].classList.contains("d-none")){
    					span[1].classList.remove("d-none");
    					span[2].classList.add("d-none");
    					tempTheadName+="asc"
    				}else if(span[2].classList.contains("d-none")){
    					span[1].classList.add("d-none");
    					span[2].classList.remove("d-none");
    					tempTheadName+="desc"
    				}else{
    					span[1].classList.remove("d-none");
    					span[2].classList.add("d-none");
    					tempTheadName+="asc"
    				}			
    			}else{
    				span[1].classList.add("d-none");
    				span[2].classList.add("d-none");
    			}
            }
            thead.name=tempTheadName;
        	setApprovalPaging();
            setApprovalTable();
    	});	
	};
		
	function setApprovalTable(){
		var thead = divApproval.querySelector("thead");
        var tempIndex = thead.name.indexOf("/");
    	var query = thead.name.substring(0,tempIndex);
    	var updown = thead.name.substring(tempIndex+1);
    	var min = (indexNowPage-1)*trMax;
    	var max= trMax;

    	var listRequest = new XMLHttpRequest(); 
    	listRequest.open("POST", "/leader/get-request-member-list", true); 
    	listRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    	listRequest.onload = function () {	
    		var list = JSON.parse(listRequest.responseText);
			var tbody = divApproval.querySelector("tbody");
	    	tbody.innerHTML="";
	    	
	    	for (var i = 0; i < list.length; i++) {
	    		var tdChkbox = document.createElement('td');
				var chkbox = document.createElement('input');
	    		chkbox.type="checkbox";
	    		tdChkbox.appendChild(chkbox);
	    		
	    		var tdId = document.createElement('td');
	    		tdId.innerText=list[i].memberId;
	    		var tdName = document.createElement('td');
	    		tdName.innerText=list[i].name;
	    		var tdAge = document.createElement('td');
	    		tdAge.innerText=list[i].age;
	    		var tdGender = document.createElement('td');
	    		var tempGender="남";
	    		if(list[i].gender==1) tempGender="여";
	    		tdGender.innerText=tempGender;	
	    		var tdAreaSido = document.createElement('td');
	    		tdAreaSido.innerText=list[i].areaSido;	
	    		var tdReqDate = document.createElement('td');
	    		tdReqDate.innerText=dateFormat(list[i].reqDate);
	    		
	        	var tr = document.createElement('tr');
	        	tr.appendChild(tdChkbox);
	        	tr.appendChild(tdId);
	        	tr.appendChild(tdName);
	        	tr.appendChild(tdAge);
	        	tr.appendChild(tdGender);
	        	tr.appendChild(tdAreaSido);
	        	tr.appendChild(tdReqDate);
	        
	        	tbody.appendChild(tr);
			}
    	};
		listRequest.send("query="+query+"&updown="+updown+"&min="+min+"&max="+max+"&crowdId="+crowdId);	
	}
	
	
	approvalUlPaging.addEventListener("click",function(evt){
        if (evt.target.nodeName != "INPUT") return;  
    	
    	var page = approvalUlPaging.querySelectorAll(".btn");
        for (var i = 0; i < page.length; i++) {
        	page[i].classList.remove("now-page");
		}      
        evt.target.classList.add("now-page");
        indexNowPage = evt.target.value;
        setApprovalTable();
    });
	
	
    function setApprovalPaging(){	
    	var inputs = menu.querySelectorAll("input");
		var inputMember;
		var inputApproval;
		for (var i = 0; i < inputs.length; i++) {
			if(inputs[i].name=="member"){
				inputMember=inputs[i];
			}else if(inputs[i].name=="approval"){
				inputApproval=inputs[i];
			}
		}
		var realCnt = 0;
		var requestCnt = 0;
	
		var cntRequest = new XMLHttpRequest(); 
		cntRequest.open("POST", "/leader/get-request-member-cnt", true); 
		cntRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		cntRequest.onload = function () {	
			requestCnt = parseInt(cntRequest.responseText);
			approvalUlPaging.innerHTML="";
			for (var i = parseInt((indexNowPage-1)/5)*5+1; i < parseInt((indexNowPage-1)/5)*5+6; i++) {
				if(requestCnt/trMax+1<=i){
					break;
				}	
				var tempLi = document.createElement('li');
				var tempInput = document.createElement('input');
				tempInput.classList.add("btn");
				if(indexNowPage==i){
	    			tempInput.classList.add("now-page");
				}
				tempInput.type="button";
				tempInput.value=i;
				tempLi.appendChild(tempInput);
				approvalUlPaging.appendChild(tempLi);
			}
			
    	    var btnPrev = approvalPaging.querySelector(".prev");
    	    var btnNext = approvalPaging.querySelector(".next");
    	    btnPrev.onclick = function(){
    	    	if(indexNowPage!=1){
    	    		indexNowPage--;
    	    	}
    	    	setApprovalPaging();
    	    	setApprovalTable();
    	    };
    	    
    	    btnNext.onclick = function(){
    	    	if(indexNowPage!=parseInt(requestCnt/trMax+1)){
    	    		indexNowPage++;
    	    	}
    	    	setApprovalPaging();
    	    	setApprovalTable();
    	    };
    	    
    	    
			var cntReal = new XMLHttpRequest(); 
			cntReal.open("POST", "/leader/get-real-member-cnt", true); 
	    	cntReal.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	    	cntReal.onload = function () {	
	    		realCnt = parseInt(cntReal.responseText);
	        	inputMember.value="회원 관리("+realCnt+")";
	    		inputApproval.value="가입 승인("+requestCnt+")";	
			}
	    	cntReal.send("crowdId="+crowdId);	
			}
		cntRequest.send("crowdId="+crowdId);
    }
    
    
	btnApproval.onclick = function() {
    	var tbody = divApproval.querySelector("tbody");
    	var trs = tbody.querySelectorAll("tr");
    	var chkboxs = tbody.querySelectorAll("input[type='checkbox']");
    	var ids ="";
    	var cnt = 0;
    	for (var i = 0; i < chkboxs.length; i++) {
    		if(chkboxs[i].checked){
    			cnt++;
    			if(ids!=""){
        			ids+=", ";
        		}
        		var tds = trs[i].children; 
        		ids+=tds[1].innerText;
    		}
		}
    	
    	if(cnt==0){
    		swal({
    		  title: "회원이 선택되지 않았습니다.",
    		  icon: "warning",
    		  button : "확인",
    		  dangerMode: true,
    		});
    		return;
    	}
    	
    	var canAddRequest = new XMLHttpRequest(); 
    	canAddRequest.open("POST", "/leader/can-add-crowd-member", true); 
    	canAddRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    	canAddRequest.onload = function () {	
			var result = canAddRequest.responseText;
			if(result == "false"){
				swal({
				  title: "정원 초과로 가입을 승인할 수 없습니다.",
				  text: "정원을 변경 후 가입을 승인하십시오.",
				  icon: "warning",
				  button : "확인",
				  dangerMode: true,
				});
	    		return;
			}else{
				swal({
  	    	      text: "["+ids+"]의 가입을 승인 하시겠습니까?",
  	    	      icon: "warning",
  	    	      buttons: [
  	    	    	  '취소',
  	    	    	  '확인'
  	    	      ],
  	    	      dangerMode: true,
  	    	    }).then(function(isConfirm) {
  	    	      if (isConfirm) {
					var updateRequest = new XMLHttpRequest(); 
					updateRequest.open("POST", "/leader/update-request-member", true); 
					updateRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
					updateRequest.onload = function () {	
						setApproval();
					}
					updateRequest.send("crowdId="+crowdId+"&memberIds="+ids);	
					setApproval();
				} else {
					setApproval();
					}
  	    	    })  
			}
		}
    	canAddRequest.send("crowdId="+crowdId+"&addCnt="+cnt);	

	};
	
	
	//////////////////////////////////////////////////////////////////////////////
	function setStatistic() {
    	var areaTable = divStatistic.querySelector(".area-table");
    	var thead = areaTable.querySelector("thead");
        thead.name="date/asc";
        
		thead.addEventListener("click",function(evt){

	    	var areaTable = divStatistic.querySelector(".area-table");
	    	var thead = areaTable.querySelector("thead");
	    	
	    	if (evt.target.nodeName != "SPAN") return; 
            var tempTheadName="";
            var td = thead.querySelectorAll("td");
            for (var i = 0; i < td.length; i++) {
    			var span = td[i].children;			
    			if(span[0]==evt.target){
    				var tempClassList = span[0].classList+"";
    				tempClassList = tempClassList.substring(4);
    				tempTheadName+=tempClassList+"/";
    				if(span[1].classList.contains("d-none")){
    					span[1].classList.remove("d-none");
    					span[2].classList.add("d-none");
    					tempTheadName+="asc"
    				}else if(span[2].classList.contains("d-none")){
    					span[1].classList.add("d-none");
    					span[2].classList.remove("d-none");
    					tempTheadName+="desc"
    				}else{
    					span[1].classList.remove("d-none");
    					span[2].classList.add("d-none");
    					tempTheadName+="asc"
    				}			
    			}else{
    				span[1].classList.add("d-none");
    				span[2].classList.add("d-none");
    			}
            }
            thead.name=tempTheadName;
            createData();
    	});	
		
		var today = new Date();
		inputEndDate.value = today.toISOString().substr(0, 10);
		today.setYear(today.getYear()-1+1900);
		today.setDate(today.getDate()+1);

		inputBeginDate.value = today.toISOString().substr(0, 10);
		chkDate();
	};
	
	radioMonth.onclick = function(){
        chkDate();
	}
	
	radioDay.onclick = function(){
        chkDate();
	}
	
    inputBeginDate.addEventListener("change", function (evt) {
        chkDate();
    });

    inputEndDate.addEventListener("change", function (evt) {
        chkDate();
    });
	
    function chkDate() {

    	var areaTable = divStatistic.querySelector(".area-table");
    	var thead = areaTable.querySelector("thead");
    	
    	if (inputBeginDate.value == "") return;
        if (inputEndDate.value == "") return;
        if (inputBeginDate.value > inputEndDate.value) return;
        

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if (dd < 10) dd = '0' + dd
        if (mm < 10) mm = '0' + mm
        today = yyyy + "-" + mm + "-" + dd;
        if (inputEndDate.value > today) return;
        if (inputBeginDate.value < "2018-01-01") return;
        
        
        var td = thead.querySelectorAll("td");
        for (var i = 0; i < td.length; i++) {
			var span = td[i].children;			
        	if(i==0){
				span[1].classList.remove("d-none");
				span[2].classList.add("d-none");        		
        	}else{
				span[1].classList.add("d-none");
				span[2].classList.add("d-none");
        	}
        }

        thead.name="date/asc";
        createData();
    };
    
    function createData() {

    	var areaTable = divStatistic.querySelector(".area-table");
    	var thead = areaTable.querySelector("thead");
    
    	var dataRequest = new XMLHttpRequest(); 
    	dataRequest.open("POST", "/leader/get-chart-data", true); 
    	dataRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    	dataRequest.onload = function () {
			var dataList = JSON.parse(dataRequest.responseText);
			var tempData = [];
	        var dataPart = [];
	        dataPart.push('');

	        var beginDate = new Date(inputBeginDate.value);
	        var endDate = new Date(inputEndDate.value);

	        var areaFilter = divStatistic.querySelector(".area-filter");
	        var term = areaFilter.querySelector('input[name="radio-period"]:checked').value;
	        
	        if (term == "month") {
	        	endDate = new Date(endDate.getFullYear(), endDate.getMonth()+1, 0);
	        	if(endDate>new Date()){
	        		endDate = new Date();
	        	}
	            beginDate.setDate(1);
	        }

	        var tempDate=[''];
	        var tempReg=['가입자수'];
	        var tempHit=['방문자수'];
	        
        	if (term == "month") {
        		 for (var date = beginDate; date <= endDate; date.setMonth(date.getMonth() + 1)) {
     	        	tempDate.push(dateMonthFormat(date));
     	        	var regCnt = 0;
     	        	var hitCnt = 0;
     	       
     	        	for (var i = 0; i < dataList.length; i++) {
     	        		 
     	        		var listDate = new Date(dataList[i].date);
     	        		 if(date.getYear() == listDate.getYear()
     	        				 && date.getMonth() == listDate.getMonth()){
     	        			regCnt += dataList[i].regCnt;
     	        			hitCnt += dataList[i].hitCnt;
     	        		 }
     	 			}
     	        	tempReg.push(regCnt);
	 	        	tempHit.push(hitCnt); 
     	        	 
     			}

     	        tempData.push(tempDate);
     	        tempData.push(tempReg);
     	        tempData.push(tempHit);
        	
        	}else if (term == "day") {
        		 for (var date = beginDate; date <= endDate; date.setDate(date.getDate() + 1)) {
     	        	tempDate.push(dateFormat(date));
     	        	var regCnt = 0;
     	        	var hitCnt = 0;
     	        	 for (var i = 0; i < dataList.length; i++) {
      	        		var listDate = new Date(dataList[i].date);
     	        		 if(date.getYear() == listDate.getYear()
     	        				&& date.getMonth() == listDate.getMonth()
     	        				&& date.getDate() == listDate.getDate()){
     	        			regCnt += dataList[i].regCnt;
     	        			hitCnt += dataList[i].hitCnt;
     	        		 }
     	 			}
     	        	tempReg.push(regCnt);
	 	        	tempHit.push(hitCnt); 
     			}
     	        tempData.push(tempDate);
     	        tempData.push(tempReg);
     	        tempData.push(tempHit);
        	}
	        
	        dataVal = [];
	        for (var i = 0; i < tempData[0].length; i++) {
	            dataPart = [];
	            for (var j = 0; j < tempData.length; j++) {
	                dataPart.push(tempData[j][i]);
	            }
	            dataVal.push(dataPart);
	        }

	        //google.charts.setOnLoadCallback(drawChart());
	        
	        drawChart();
	        drawTable();
	    }
		dataRequest.send("crowdId="+crowdId);
	};


    
    function drawTable() {
        var txt;
        var tbody = divStatistic.querySelector("tbody");
        tbody.innerHTML = "";

        for (var i = 1; i < dataVal.length; i++) {
            var tbtr = document.createElement("tr");

            for (var j = 0; j < dataVal[i].length; j++) {
                var td = document.createElement("td");
                txt = document.createTextNode(dataVal[i][j]);
                td.appendChild(txt);
                tbtr.appendChild(td);
            }
            tbody.append(tbtr);
        }
        
    	var areaTable = divStatistic.querySelector(".area-table");
    	var thead = areaTable.querySelector("thead");
    	var table, rows, switching, i, x, y, shouldSwitch;
    	
    	table = areaTable.querySelector("table");
    	switching = true;
    	var tdNum=0;
    	
    	
        var tempIndex = thead.name.indexOf("/");
    	var query = thead.name.substring(0,tempIndex);
    	var updown = thead.name.substring(tempIndex+1);
    	
    	
    	if(query =="regCnt") tdNum=1;
    	else if(query =="hitCnt") tdNum=2;
    	
	    var switching = true;
    	while (switching) {
    	    switching = false;
    	    var shouldSwitch = false;

    	    rows = table.rows;
    	    for (i = 1; i < (rows.length - 1); i++) {
    	      x = rows[i].getElementsByTagName("TD")[tdNum];
    	      y = rows[i + 1].getElementsByTagName("TD")[tdNum];
    	      if(query=="regCnt" || query=="hitCnt"){

        	      var numX = parseInt(x.innerHTML.toLowerCase());
        	      var numY = parseInt(y.innerHTML.toLowerCase());
        	      
    	    	  if(updown=="asc"){
            	      if (numX > numY) {
              	        shouldSwitch = true;
              	        break;
              	      }
        	    	  
        	      }else if(updown=="desc"){
            	      if (numX < numY) {
            	        shouldSwitch = true;
            	        break;
            	      }
        	      }
    	    	  
    	    	  
    	      }else{
    	    	  if(updown=="asc"){
            	      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              	        shouldSwitch = true;
              	        break;
              	      }
        	    	  
        	      }else if(updown=="desc"){
            	      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            	        shouldSwitch = true;
            	        break;
            	      }
        	      }
    	      }
    	     
    	    }
    	    
  	      console.log("after : "+shouldSwitch);

    	    if (shouldSwitch) {
    	    	console.log("shouldSwitch!");
    	        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    	        switching = true;
    	    }
    	  }
    }	
    
    function dateFormat(dateStr){
    	if(dateStr=="undefined" || dateStr=="" || dateStr==null) return "-";
    	var date = new Date(dateStr);
        var month = '' + (date.getMonth() + 1);
        var day = '' + date.getDate();
        var year = date.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return year+"."+month+"."+day;
    }
    
    function dateMonthFormat(dateStr){
    	if(dateStr=="undefined" || dateStr=="" || dateStr==null) return "-";
    	var date = new Date(dateStr);
        var month = '' + (date.getMonth() + 1);
        var year = date.getFullYear();
        if (month.length < 2) month = '0' + month;
        return year+"."+month;
    }
});