window.addEventListener("load",function() {
	var main = document.querySelector("main");
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
    
	var crowdId = getParameterByName('crowd');
	function getParameterByName(name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	
	setBoard();
	 
    menu.addEventListener("click",function(evt){
        if (evt.target.nodeName != "INPUT") return;  
    	
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
        	//게시판관리를 누른 경우
    		setBoard();
        	
        }else if(evt.target.name == "member"){
        	//회원관리를 누른 경우
        	setMember();

        }else if(evt.target.name == "approval"){
        	//가입승인을 누른 경우
        	setApproval();

        } else if(evt.target.name == "statistic"){
        	//통계를 누른 경우
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
    	
    	aAdd.onclick = function(){   
    		//db에 insert 진행 (게시판명 중복체크 필)
    		setBoard();
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
	    		var title = tdTitle.innerText;

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
	        	
	        	var tr = document.createElement('tr');
	        	tr.appendChild(tdTitle);
	        	tr.appendChild(tdEdit);
	        	tr.appendChild(tdDel);
	        	tr.value=boardList[i].id;
	        	tbody.appendChild(tr);
	        	
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
	            		var confirmEdit = confirm("["+title+"] 게시판을 수정 하시겠습니까?");
	            		if(confirmEdit){
	            			var updateRequest = new XMLHttpRequest(); 
	            			updateRequest.open("POST", "/leader/update-board", true); 
	            			updateRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	            			updateRequest.onload = function () {
	            				setBoard("boardId="+tr.value
	            						+"&name="+tempInput.value);
	            			};
	            			updateRequest.send();
            			}else{
	            			setBoard();
	            		}
	            		
	        			setBoard();
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
	        		var confirmDel = confirm("["+title.innerText+"] 게시판을 삭제 하시겠습니까?");
	        		if(confirmDel){
	        			//db에 delete 진행
	        			
	        			setBoard();
	        		}else{
	        			setBoard();
	        		}
	        	};
			}
		}
		boardRequest.send("crowdId="+crowdId);		
    };

    btnCut.onclick = function() {
    	var tbody = divMember.querySelector("tbody");
    	var trs = tbody.querySelectorAll("tr");
    	var chkboxs = tbody.querySelectorAll("input[type='checkbox']");
    	var ids ="";
    	for (var i = 0; i < chkboxs.length; i++) {
    		if(chkboxs[i].checked){
    			if(ids!=""){
        			ids+=", ";
        		}
        		var tds = trs[i].children; 
        		ids+=tds[1].innerText;
    		}
		}
    	
    	var confirmCut = confirm("["+ids+"]회원을 추방하시겠습니까?");
		if(confirmCut){
			//db에 delete 진행
			setMember();
		}else{
			setMember();
		}
	};
    
    function setMember(){
    	var tbody = divMember.querySelector("tbody");
    	tbody.innerHTML="";
    	
    	for (var i = 0; i < 3; i++) {
    		var tdChkbox = document.createElement('td');
    		{//모임장이 아닌 경우
    			var chkbox = document.createElement('input');
        		chkbox.type="checkbox";
        		tdChkbox.appendChild(chkbox);
    		}
    		
    		var tdId = document.createElement('td');
    		tdId.innerText="하하하"+i;

    		var tdRegDate = document.createElement('td');
    		tdRegDate.innerText="2018.01.01";
    		
    		var tdVisitDate = document.createElement('td');
    		tdVisitDate.innerText="2018.01.01";
    		
    		var tdLevel = document.createElement('td');
    		
    		{//모임장이 아닌 경우
    		var select = document.createElement('select');
    		var opt1 = document.createElement('option');
    		opt1.innerText="운영진";
    		var opt2 = document.createElement('option');
    		opt2.innerText="일반회원";
    		select.appendChild(opt1);
    		select.appendChild(opt2);
    		tdLevel.appendChild(select);
    		}
    		
    		/*모임장인 경우
    		{
    			tdLevel.innerText="모임장";
    		}
    		*/
    		
        	var tr = document.createElement('tr');
        	tr.appendChild(tdChkbox);
        	tr.appendChild(tdId);
        	tr.appendChild(tdRegDate);
        	tr.appendChild(tdVisitDate);
        	tr.appendChild(tdLevel);
        
        	tbody.appendChild(tr);
        	
        	select.onchange = function(){
        		var tdLevel = this.parentNode;
        		var tr = tdLevel.parentNode;
        		var tdChildren = tr.children;
        				
        		var confirmDel = confirm("["+tdChildren[1].innerText+"]회원의 등급을 [" 
        				+ this.value + "]로 변경하시겠습니까?");
        		if(confirmDel){
        			//db에 update 진행
        			setMember();
        		}else{
        			setMember();
        		}
        	};
		}
    }   
    
    btnApproval.onclick = function() {
    	var tbody = divApproval.querySelector("tbody");
    	var trs = tbody.querySelectorAll("tr");
    	var chkboxs = tbody.querySelectorAll("input[type='checkbox']");
    	var ids ="";
    	for (var i = 0; i < chkboxs.length; i++) {
    		if(chkboxs[i].checked){
    			if(ids!=""){
        			ids+=", ";
        		}
        		var tds = trs[i].children; 
        		ids+=tds[1].innerText;
    		}
		}
    	
    	var confirmApproval = confirm("["+ids+"]의 가입을 승인 하시겠습니까?");
		if(confirmApproval){
			//db에 update 진행
			setApproval();
		}else{
			setApproval();
		}
	};
	
    function setApproval() {
    	var tbody = divApproval.querySelector("tbody");
    	tbody.innerHTML="";
    	
    	for (var i = 0; i < 3; i++) {
    		var tdChkbox = document.createElement('td');
			var chkbox = document.createElement('input');
    		chkbox.type="checkbox";
    		tdChkbox.appendChild(chkbox);
    		
    		var tdId = document.createElement('td');
    		tdId.innerText="하하하"+i;

    		var tdReqDate = document.createElement('td');
    		tdReqDate.innerText="2018.01.01";
    		
        	var tr = document.createElement('tr');
        	tr.appendChild(tdChkbox);
        	tr.appendChild(tdId);
        	tr.appendChild(tdReqDate);
        
        	tbody.appendChild(tr);
		}
	};
	
	function setStatistic() {
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
        createData();
    };
    
    function createData() {
        var tempData = [];
        var dataPart = [];
        dataPart.push('');

        var beginDate = new Date(inputBeginDate.value);
        var endDate = new Date(inputEndDate.value);

        var areaFilter = divStatistic.querySelector(".area-filter");
        var term = areaFilter.querySelector('input[name="radio-period"]:checked').value;
        
        if (term == "month") {
            endDate.setMonth(endDate.getMonth() + 1);
            endDate.setDate(0);
        }

        while (true) {
        	if (term == "month") {
                var tempYear = beginDate.getYear();
                var tempYearStr = tempYear + "";
                tempYearStr = tempYearStr.substring(1, 3);
                var tempMonth = beginDate.getMonth() + 1;
                if (tempMonth < 10)
                    dataPart.push(tempYearStr + "년 0" + tempMonth + "월");
                else
                    dataPart.push(tempYearStr + "년 " + tempMonth + "월");
                beginDate.setMonth(tempMonth);
            }
            else if (term == "day") {
                var tempMonth = beginDate.getMonth() + 1;
                var tempDate = beginDate.getDate();
                if (tempMonth < 10) {
                    if (tempDate < 10)
                        dataPart.push("0" + tempMonth + "월 0" + tempDate + "일");
                    else
                        dataPart.push("0" + tempMonth + "월 " + tempDate + "일");
                }
                else {
                    if (tempDate < 10)
                        dataPart.push(tempMonth + "월 0" + tempDate + "일");
                    else
                        dataPart.push(tempMonth + "월 " + tempDate + "일");
                }
                beginDate.setDate(tempDate + 1);
            }
            else {
                break;
            }
            if (beginDate > endDate) {
                break;
            }
        }

        tempData.push(dataPart);
        
        dataPart = [];
        dataPart.push("가입자수");
        for (var j = 0; j < tempData[0].length; j++) {
            dataPart.push(j * 4);
        }
        tempData.push(dataPart);
        
        dataPart = [];
        dataPart.push("방문자수");
        for (var j = 0; j < tempData[0].length; j++) {
            dataPart.push(j * 7);
        }
        tempData.push(dataPart);
        
        
        dataVal = [];
        for (var i = 0; i < tempData[0].length; i++) {
            dataPart = [];
            for (var j = 0; j < tempData.length; j++) {
                dataPart.push(tempData[j][i]);
            }
            dataVal.push(dataPart);
        }

        google.charts.setOnLoadCallback(drawChart());
        drawTable();
    }
    
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
    }
    
	
	approvalUlPaging.addEventListener("click",function(evt){
        if (evt.target.nodeName != "INPUT") return;  
    	
    	var page = approvalUlPaging.querySelectorAll(".btn");
        for (var i = 0; i < page.length; i++) {
        	page[i].classList.remove("now-page");
		}      
        evt.target.classList.add("now-page");
    });
	
    memberUlPaging.addEventListener("click",function(evt){
        if (evt.target.nodeName != "INPUT") return;  
    	
    	var page = memberUlPaging.querySelectorAll(".btn");
        for (var i = 0; i < page.length; i++) {
        	page[i].classList.remove("now-page");
		}      
        evt.target.classList.add("now-page");
    });
});






















