window.addEventListener("load",function(){
    
    var main = document.querySelector("main");
    var menu = main.querySelector(".menu");
    var divProfile = main.querySelector(".profile");
    var img = divProfile.querySelector("img");
    var id = divProfile.querySelector(".id");
    var groupUl = main.querySelector(".group-list-flex");
    var tplCrowdLi = groupUl.querySelector("#group-list-flex-li-template");
    var tplCrowdSchLi = groupUl.querySelector("#group-schedule-list-flex-li-template");

    img.src= "/get-img?folder=member-profile&file="+img.name;    	

    var bindGroup = function(tpl, group){
    	var tempLi = tpl.querySelector(".group-list-flex-li");
    	var tempImg = tpl.querySelector("img");
    	var tempName = tpl.querySelector(".tpl-name");
    	var tempContent = tpl.querySelector(".tpl-content");
    	var tempMinage = tpl.querySelector(".tpl-minage");
    	var tempMaxage = tpl.querySelector(".tpl-maxage");
    	var tempGen = tpl.querySelector(".tpl-gen");
    	var tempLocation = tpl.querySelector(".tpl-location");
    	var tempNowPerson = tpl.querySelector(".tpl-nowperson");
    	var tempMaxPerson = tpl.querySelector(".tpl-maxperson");
    	tempLi.value=group.id;
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
    
    var bindGroupSch = function(tpl, group, date){
    	var tempLi = tpl.querySelector(".group-list-flex-li");
    	var tempImg = tpl.querySelector("img");
    	var tempName = tpl.querySelector(".tpl-name");
    	var tempContent = tpl.querySelector(".tpl-content");
    	var tempSchedule = tpl.querySelector(".tpl-sch");
    	var tempNowPerson = tpl.querySelector(".tpl-nowperson");
    	var tempMaxPerson = tpl.querySelector(".tpl-maxperson");
    	tempLi.value=group.id;
    	tempImg.src= "../get-img?folder=crowd-banner&file="+group.img;    	
    	tempName.innerText=group.name;
    	tempContent.innerText=group.content;
    	tempSchedule.innerText=date;
    	tempNowPerson.innerText=group.nowPerson;
    	tempMaxPerson.innerText=group.maxPerson;
    };
    
    
    function myGroup(){
        var crowdRequest = new XMLHttpRequest(); 
        crowdRequest.open("POST", "../get-simplecrowdlist", true); 
        crowdRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        crowdRequest.onload = function () {	
        	var crowdList = JSON.parse(crowdRequest.responseText);
            synchronizationGetSchedule(crowdList,0);
        };
        crowdRequest.send("type=1&id="+id.innerText);       
	 }
    
    function synchronizationGetSchedule(crowdList, index){
    	var i = index;
		var scheduleRequest = new XMLHttpRequest(); 
		scheduleRequest.open("POST", "/member/get-recently-schedule", true); 
		scheduleRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		scheduleRequest.onload = function () {	
        	var schedule = JSON.parse(scheduleRequest.responseText);
        	var crowdId = schedule.crowdId;   
    		var dateMent="다가오는 모임 일정이 없습니다."
        	if(schedule.startDate==null || schedule.startDate==""){
                var tpl=document.importNode(tplCrowdSchLi.content, true);
                bindGroupSch(tpl, crowdList[i], dateMent);	
                groupUl.append(tpl);
        	}else{
        		dateMent = schedule.title;	
            	var date = new Date(schedule.startDate);
            	var tempDay=999;
            	for (var j=0; j < 8; j++) {
                	var today = new Date();
                	today = today.addDays(j);
					if(today.getYear()==date.getYear()
							&&today.getMonth()==date.getMonth()
							&&today.getDate()==date.getDate()){
						tempDay=j;
						break;
					}
				}
            	if(tempDay!=999){
            		if(tempDay==0){
                		dateMent += "(D-DAY)";
            		}else{
                		dateMent += "(D-"+tempDay+")";
            		}
            	}else{
                    var month = '' + (date.getMonth() + 1);
                    var day = '' + date.getDate();
                    var year = date.getFullYear();
                    if (month.length < 2) month = '0' + month;
                    if (day.length < 2) day = '0' + day;
                    dateMent += "("+year+"."+month+"."+day+")";
            	}

                var tpl=document.importNode(tplCrowdSchLi.content, true);
                bindGroupSch(tpl, crowdList[i], dateMent);	
                groupUl.append(tpl);
        	}		
        	i++;
        	if(i<crowdList.length){
        		synchronizationGetSchedule(crowdList, i)
        	}else{
        		return;
        	}
		};
		scheduleRequest.send("crowdId="+crowdList[i].id);	
    }
    
    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    function reqGroup(){
        var crowdRequest = new XMLHttpRequest(); 
        crowdRequest.open("POST", "../get-simplecrowdlist", true); 
        crowdRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        crowdRequest.onload = function () {	
        	var crowdList = JSON.parse(crowdRequest.responseText);
        	for (var i = 0; i < crowdList.length; i++) {
                var tpl=document.importNode(tplCrowdLi.content, true);
                bindGroup(tpl, crowdList[i]);	
                groupUl.append(tpl);  
			}
        };
        crowdRequest.send("type=2&id="+id.innerText);
	 }
    
    function hitGroup(){
        var crowdRequest = new XMLHttpRequest(); 
        crowdRequest.open("POST", "../get-simplecrowdlist", true); 
        crowdRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        crowdRequest.onload = function () {	
        	var crowdList = JSON.parse(crowdRequest.responseText);
        	for (var i = 0; i < crowdList.length; i++) {
                var tpl=document.importNode(tplCrowdLi.content, true);
                bindGroup(tpl, crowdList[i]);	
                groupUl.append(tpl);  
			}
        };
        crowdRequest.send("type=3&id="+id.innerText);		 
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

    areaGroup.addEventListener("click",function(evt){
		var chapturingUl = areaGroup.querySelector(".group-list-flex");
		chapturingUl.addEventListener("click",function(evt){
			var chapturingLi = chapturingUl.querySelectorAll(".group-list-flex-li");
		    chapturingLi.forEach(function(funcLi){
		    	funcLi.addEventListener("click", function(evt){
		    		var targetLi = evt.currentTarget; 
		    		window.location.href="/crowd/main?crowd="+targetLi.value;
		    	},true);
		    });    
		}, true);
    }, true);
	

});

