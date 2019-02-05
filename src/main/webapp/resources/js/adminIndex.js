window.addEventListener("load",function(){
    
    var main = document.querySelector("main");
    
    var divProfile = main.querySelector(".profile");
    var img = divProfile.querySelector("img");
    img.src= "/get-img?folder=member-profile&file="+img.name;    	

    var menu = main.querySelector(".menu"); 
    var btnSubmit = main.querySelector(".submit-btn");
    
    var table = main.querySelector("table");
    var thead = table.querySelector("thead");
    var tbody = table.querySelector("tbody");
    var tplCrowdTr = tbody.querySelector("#crowd-td-template");
    thead.name="rprtCnt/desc";

    var trMax = 10;
    
    var divPaging = main.querySelector(".paging");
    var ulPaging = divPaging.querySelector("ul");
    var btnPrev = divPaging.querySelector(".prev");
    var btnNext = divPaging.querySelector(".next");
    var indexNowPage = 1;
    var crowdCnt=0;
    divPaging.name="crowd";
    setPaging();
    setTable();
    
    
    //btnSubmit del 관련/////////////////////////////////////////////////////
    btnSubmit.onclick = function(){
    	var checkBoxs = tbody.querySelectorAll("input[type='checkbox']")
    	var chkedArr = [];
    	for (var i = 0; i < checkBoxs.length; i++) {
			if(checkBoxs[i].checked){
				chkedArr.push(checkBoxs[i].value);
			}
		}	
    	var ment = "선택된 ";
    	ment +=(chkedArr.length)
    	if(divPaging.name=="crowd"){
        	ment +="개의 모임을 정말 삭제 하시겠습니까?";
    	}else if(divPaging.name=="member"){
        	ment +="명의 회원을 정말 추방 하시겠습니까?";    		
    	}
    	
    	if(confirm(ment)){
    		
    		//var chkedJson = JSON.stringify(chkedArr);
    		console.log("chkedArr : "+chkedArr);
    		//console.log("chkedJson : "+chkedJson);
    		var delRequest = new XMLHttpRequest(); 
    		delRequest.open("POST", "/admin/del-mng", true); 
    		delRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    		delRequest.onload = function () {	
    			if(divPaging.name=="crowd"){
            		alert(chkedArr.length + "개의 모임이 삭제 되었습니다.");  		
            	}else if(divPaging.name=="member"){
            		alert(chkedArr.length + "명의 회원이 추방 되었습니다.");
            	}
                indexNowPage = 1;
                setPaging();
                setTable();  
    		}
    		delRequest.send("type="+divPaging.name+"&array="+chkedArr);	
        	
        	
        	    
    	}else{
        	if(divPaging.name=="crowd"){
        		alert("삭제가 취소 되었습니다.");
        	}else if(divPaging.name=="member"){
        		alert("추방이 취소 되었습니다.");
        	}
    	}
    };
    
    
    //menu 관련/////////////////////////////////////////////////////////////

    menu.addEventListener("click",function(evt){
        if (evt.target.nodeName != "INPUT") return;  
    	
        indexNowPage = 1;
    	var tab = menu.querySelectorAll(".btn");
        for (var i = 0; i < tab.length; i++) {
        	tab[i].classList.remove("selected-tab");
		}
        evt.target.classList.add("selected-tab");
        
        var td = thead.querySelectorAll("td");
        for (var i = 0; i < td.length; i++) {
			var span = td[i].children;
			span[1].classList.add("d-none");
			span[2].classList.add("d-none");
		}
        var rprtDown = main.querySelector(".td-rprt .down");
        rprtDown.classList.remove("d-none");
        thead.name="rprtCnt/desc";
        
        if(evt.target.name == "group"){
        	//모임관리 탭을 누른 경우      	
            var td = thead.querySelectorAll("td");
            for (var i = 0; i < td.length; i++) {
                var span = td[i].querySelector(".btn");
                if(span.classList.contains("name")){
                	span.innerText="모임명";
                }else if(span.classList.contains("regdate")){
                	span.innerText="개설일";
                }                
			}
            btnSubmit.value="모임삭제";
            divPaging.name="crowd";
            setPaging();
            setTable();
        }else if(evt.target.name == "member"){
        	//회원관리 탭을 누른 경우
        	var td = thead.querySelectorAll("td");
            for (var i = 0; i < td.length; i++) {
                var span = td[i].querySelector(".btn");
                if(span.classList.contains("name")){
                	span.innerText="회원 ID";
                }else if(span.classList.contains("regdate")){
                	span.innerText="가입일";
                }
			}
            btnSubmit.value="회원추방";
            divPaging.name="member";
            setPaging();
            setTable();
        }
    });

    //table 관련/////////////////////////////////////////////////////////////

    thead.addEventListener("click",function(evt){
        if (evt.target.nodeName != "SPAN") return; 
        indexNowPage = 1;
        var tempTheadName="";
        var td = thead.querySelectorAll("td");
        for (var i = 0; i < td.length; i++) {
			var span = td[i].children;			
			if(span[0]==evt.target){		
				
				switch(i){
				case 0:
					//모임명 or 아이디
					if(span[0].innerText=="모임명"){
						tempTheadName+="name/"
					}else if(span.innerText=="회원 ID"){
						tempTheadName+="id/"						
					}					
					break;
				case 1:
					//regdate
					tempTheadName+="regDate/"
					break;
				case 2:
					//rprtCnt
					tempTheadName+="rprtCnt/"
					break;
				}

				
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
        setPaging();
        setTable();
    });

    function setTable(){
        var tempIndex = thead.name.indexOf("/");
    	var query = thead.name.substring(0,tempIndex);
    	var updown = thead.name.substring(tempIndex+1);
    	var min = (indexNowPage-1)*trMax;
    	var max= trMax;

    	var listRequest = new XMLHttpRequest(); 
    	listRequest.open("POST", "/admin/get-"+divPaging.name+"-list", true); 
    	listRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    	listRequest.onload = function () {	
    		var list = JSON.parse(listRequest.responseText);
    		tbody.innerHTML="";
    		for (var i = 0; i < list.length; i++) {
                var tpl=document.importNode(tplCrowdTr.content, true);
            	var tempChkBox = tpl.querySelector("input[type='checkbox']");
            	var tempName = tpl.querySelector(".tpl-name");
            	var tempRegdate = tpl.querySelector(".tpl-regdate");
            	var tempRprt = tpl.querySelector(".tpl-rprt");
            	if(divPaging.name=="crowd"){
                	tempName.innerText=list[i].name;
            	}else if(divPaging.name=="member"){
                	tempName.innerText=list[i].id;
            	}
            	var date = new Date(list[i].regDate);
                var month = '' + (date.getMonth() + 1);
                var day = '' + date.getDate();
                var year = date.getFullYear();
		        if (month.length < 2) month = '0' + month;
		        if (day.length < 2) day = '0' + day;
		        tempRegdate.innerText= year+"."+month+"."+day;
            	tempRprt.innerText=list[i].rprtCnt;
            	tempChkBox.value=list[i].id;
            	tbody.append(tpl);  
			}
		}	
    	listRequest.send("query="+query+"&updown="+updown+"&min="+min+"&max="+max);	

    }
    //paging 관련/////////////////////////////////////////////////////////////

    ulPaging.addEventListener("click",function(evt){
        if (evt.target.nodeName != "INPUT") return;  
    	
    	var page = ulPaging.querySelectorAll(".btn");
        for (var i = 0; i < page.length; i++) {
        	page[i].classList.remove("now-page");
		}      
        evt.target.classList.add("now-page");
        indexNowPage = evt.target.value;
        setTable();
    });
    
    btnPrev.onclick = function(){
    	if(indexNowPage!=1){
    		indexNowPage--;
    	}
    	setPaging();
    	setTable();
    };
    
    btnNext.onclick = function(){
    	if(indexNowPage!=parseInt(crowdCnt/trMax+1)){
    		indexNowPage++;
    	}
    	setPaging();
    	setTable();
    };
    
    function setPaging(){	
    	var cntRequest = new XMLHttpRequest(); 
    	cntRequest.open("POST", "/admin/get-"+divPaging.name+"-cnt", true); 
    	cntRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    	cntRequest.onload = function () {	
    		crowdCnt = parseInt(cntRequest.responseText);
    		ulPaging.innerHTML="";
    		for (var i = parseInt((indexNowPage-1)/5)*5+1; i < parseInt((indexNowPage-1)/5)*5+6; i++) {
    			if(crowdCnt/trMax+1<=i){
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
    			ulPaging.appendChild(tempLi);
			}
		}
    	cntRequest.send();	
    }
    
});

