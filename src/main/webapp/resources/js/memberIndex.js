window.addEventListener("load",function(){
    
    var main = document.querySelector("main");
    var menu = main.querySelector(".menu");
    var divProfile = main.querySelector(".profile");
    var img = divProfile.querySelector("img");
    var id = divProfile.querySelector(".id");
    var groupUl = main.querySelector(".group-list-flex");
    var tplCrowdLi = groupUl.querySelector("#group-list-flex-li-template");

    img.src= "/get-img?folder=member-profile&file="+img.name;    	

    var bindGroup = function(tpl, group){
    	var tempImg = tpl.querySelector("img");
    	var tempName = tpl.querySelector(".tpl-name");
    	var tempContent = tpl.querySelector(".tpl-content");
    	var tempMinage = tpl.querySelector(".tpl-minage");
    	var tempMaxage = tpl.querySelector(".tpl-maxage");
    	var tempGen = tpl.querySelector(".tpl-gen");
    	var tempLocation = tpl.querySelector(".tpl-location");
    	var tempNowPerson = tpl.querySelector(".tpl-nowperson");
    	var tempMaxPerson = tpl.querySelector(".tpl-maxperson");
    	
    	tempImg.src= "../get-img?folder=crowd-banner&file="+group.img;    	
    	tempName.innerText=group.name;
    	tempContent.innerText=group.content;
    	tempMinage.innerText=group.ageMin;
    	tempMaxage.innerText=group.ageMax;
    	switch(group.gender){
	 	case 0:
	 		tempGen.innerText="남자";
	 		break;
	 	case 1:
	 		tempGen.innerText="여자";
	 		break;
	 	case 2:
	 		tempGen.innerText="모두";
	 		break;
	 	}	 
    	tempLocation.innerText=group.areaSido+" "+group.areaSigungu;
    	tempNowPerson.innerText=group.nowPerson;
    	tempMaxPerson.innerText=group.maxPerson;
    };
    function myGroup(){
        var crowdRequest = new XMLHttpRequest(); 
        crowdRequest.open("POST", "../get-simplecrowdlist", true); 
        crowdRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        crowdRequest.onload = function () {	
        	var crowdList = JSON.parse(crowdRequest.responseText);
            var btn = menu.querySelector("input[name='my-group']");
            btn.value="내 모임("+crowdList.length+")";
        	for (var i = 0; i < crowdList.length; i++) {
                var tpl=document.importNode(tplCrowdLi.content, true);
                bindGroup(tpl, crowdList[i]);	
                groupUl.append(tpl);  
			}
        };
        crowdRequest.send("type=1&id="+id.innerText);       
	 }
    function reqGroup(){
        var crowdRequest = new XMLHttpRequest(); 
        crowdRequest.open("POST", "../get-simplecrowdlist", true); 
        crowdRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        crowdRequest.onload = function () {	
        	var crowdList = JSON.parse(crowdRequest.responseText);
            var btn = menu.querySelector("input[name='req-group']");
            btn.value="가입 신청 목록("+crowdList.length+")";
        	for (var i = 0; i < crowdList.length; i++) {
                var tpl=document.importNode(tplCrowdLi.content, true);
                bindGroup(tpl, groupUl, crowdList[i]);	
                groupUl.append(tpl);  
			}
        };
        crowdRequest.send("type=2&id="+id.innerText);
	 }
    function hitGroup(){
		 
	 } 	
    
 	myGroup();
 	
    menu.addEventListener("click",function(evt){
        if (evt.target.nodeName != "INPUT") return;  
        groupUl.innerHTML="";
    	var tab = menu.querySelectorAll(".btn");
        for (var i = 0; i < tab.length; i++) {
        	tab[i].classList.remove("selected-tab");
		}
        
        evt.target.classList.add("selected-tab");
        if(evt.target.name == "my-group"){
        	//내 모임 탭을 누른 경우
        	myGroup();
        }else if(evt.target.name == "req-group"){
        	//가입요청그룹 탭을 누른 경우
        	reqGroup();
        }else if(evt.target.name == "hit-group"){
        	//최근 본 그룹 탭을 누른 경우
        	hitGroup();
        } 
    });
    
    var areaGroup = main.querySelector(".group");
	areaGroup.style.width = document.body.clientWidth+"px";

	 $(window).resize(function (){
			areaGroup.style.width = document.body.clientWidth+"px";
	 })
    


});

