window.addEventListener("load",function(){
    
	
    var main = document.querySelector("main");
    var btnMore = main.querySelector(".btn-more");
    var ulIcon = main.querySelector(".main-icon-list");
    var areaGroup = main.querySelector(".area-group");
    var groupListUl = areaGroup.querySelector(".group-list-flex");
    var carousel = document.querySelector(".carousel");
    var carouselUl = carousel.querySelector("ul");
    
    var categoryRequest = new XMLHttpRequest(); 
    categoryRequest.open("POST", "/get-categorylist", true); 
    categoryRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    categoryRequest.onload = function () {	
    	var categoryList = JSON.parse(categoryRequest.responseText);
    	 for (var i = 0; i < categoryList.length; i++) { 
    	    	var li = document.createElement('li');
    	        var div = document.createElement('div');
    	        var img = document.createElement('img');
    	        var br = document.createElement('br');
    	        var span = document.createElement('span');
    	        
    	        span.innerText=categoryList[i].name; 
    	        switch(span.innerText){
    	        	case "아웃도어/여행" : img.src="/resources/images/mainIcon/backpack.png"
    	        		break;
    	        	case "운동/스포츠" : img.src="/resources/images/mainIcon/balls.png"
    	        		break;
    	        	case "인문학/책/글" : img.src="/resources/images/mainIcon/books.png"
    	        		break;
    	        	case "외국/언어" : img.src="/resources/images/mainIcon/cubes.png"
    	        		break;
    	        	case "문화/공연/축제" : img.src="/resources/images/mainIcon/tickets.png"
    	        		break;
    	        	case "음악/악기" : img.src="/resources/images/mainIcon/piano.png"
    	        		break;
    	        	case "공예/만들기" : img.src="/resources/images/mainIcon/yarn.png"
    	        		break;
    	        	case "댄스/무용" : img.src="/resources/images/mainIcon/ballerina.png"
    	        		break;
    	        	case "봉사활동" : img.src="/resources/images/mainIcon/heart.png"
    	        		break;
    	        	case "차/오토바이" : img.src="/resources/images/mainIcon/car.png"
    	        		break;
    	        	case "사진/영상" : img.src="/resources/images/mainIcon/photo-camera.png"
    	        		break;
    	        	case "야구관람" : img.src="/resources/images/mainIcon/baseball-field.png"
    	        		break;
    	        	case "게임/오락" : img.src="/resources/images/mainIcon/game-controller.png"
    	        		break;
    	        	case "요리/제조" : img.src="/resources/images/mainIcon/cooking.png"
    	        		break;
    	        	case "반려동물" : img.src="/resources/images/mainIcon/dog.png"
    	        		break;
    	        	case "가족/결혼" : img.src="/resources/images/mainIcon/family.png"
    	        		break;
    	        	case "사교/인맥" : img.src="/resources/images/mainIcon/small-talk.png"
    	        		break;
    	        	case "자유주제" : img.src="/resources/images/mainIcon/puzzle.png"
    	        		break;
    	        }

    	        div.appendChild(img);
    	        div.appendChild(br);
    	        div.appendChild(span);
    	        li.appendChild(div);
    	        ulIcon.appendChild(li);
    		}
	}
    categoryRequest.send();	
	
    var crowdRequest = new XMLHttpRequest(); 
    crowdRequest.open("POST", "/get-simplecrowdlist", true); 
    crowdRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    crowdRequest.onload = function () {	
    	var crowdList = JSON.parse(crowdRequest.responseText);
    	for (var i = 0; i < crowdList.length; i++) { 
    		var li = document.createElement('li');
    	 	li.classList.add("group-list-flex-li") 	 	 	
    	 	var img = document.createElement('img');
    	 	img.src= "/get-img?folder=crowd-banner&file="+crowdList[i].img;
    	 	var divContainer = document.createElement('div');
    	 	divContainer.classList.add("group-list-flex-content");
    	 	divContainer.classList.add("ellipsis");	 	
    	 	var divTitle = document.createElement('div');
    	 	divTitle.classList.add("fs14");
    	 	divTitle.classList.add("fwb");
    	 	divTitle.classList.add("left");
    	 	divTitle.innerText=crowdList[i].name; 
    	 	var divContent = document.createElement('div');
    	 	divContent.classList.add("ellipsis");
    	 	divContent.innerText=crowdList[i].content; 
    	 	var divFilter = document.createElement('div');
    	 	divFilter.classList.add("left");
    	 	divFilter.classList.add("fwb");
    	 	divFilter.innerText="가입조건";
    	 	var divFilterAge = document.createElement('div');
    	 	divFilterAge.classList.add("left");
    	 	divFilterAge.innerText="- 나이 : " + crowdList[i].ageMin + " ~ " + crowdList[i].ageMax; 
    	 	var divFilterGender = document.createElement('div');
    	 	divFilterGender.classList.add("left");
    	 	switch(crowdList[i].gender){
    	 	case 0:
    	 		divFilterGender.innerText="- 성별 : 남자";
    	 		break;
    	 	case 1:
    	 		divFilterGender.innerText="- 성별 : 여자";
    	 		break;
    	 	case 2:
    	 		divFilterGender.innerText="- 성별 : 모두";
    	 		break;
    	 	}	 	
    	 	var divFilterLocation = document.createElement('div');
    	 	divFilterLocation.classList.add("left");
    	 	divFilterLocation.innerText="- 지역 : " + crowdList[i].areaSido +" " + crowdList[i].areaSigungu; 
    	 	var divMaxperson = document.createElement('div');
    	 	divMaxperson.innerText="최원수 "+crowdList[i].nowPerson+" / "+crowdList[i].maxPerson+"명";
    	    var br = document.createElement('br');

    	 	divContainer.appendChild(divTitle);
    	 	divContainer.appendChild(divContent);
    	 	divContainer.appendChild(br);
    	 	divContainer.appendChild(divFilter);
    	 	divContainer.appendChild(divFilterAge);
    	 	divContainer.appendChild(divFilterGender);
    	 	divContainer.appendChild(divFilterLocation);
    	 	divContainer.appendChild(divMaxperson);
    		 
    	 	li.appendChild(img);
    	 	li.appendChild(divContainer);

    	 	groupListUl.appendChild(li);
    	}
    };
    crowdRequest.send();	
	
	
    for(var i = 0; i < 4; i++){//추후 가져온 배너이미지의 length 만큼 for문
		var li = document.createElement('li');
	    var img = document.createElement('img');
	    img.classList.add("img-banner");
	    img.src="/resources/images/tempImg"+i+".jpg"; //추후 가져온 배너이미지 주소
	    li.appendChild(img);
	    carouselUl.appendChild(li);
    }

	areaGroup.style.width = document.body.clientWidth+"px";
	$(window).resize(function (){
		areaGroup.style.width = document.body.clientWidth+"px";
		$(".carousel").height($(".carousel").width()*0.4);
	 })
	 
   
    
	
 	
    btnMore.onclick = function(){
    	if(btnMore.value=="more"){
    		ulIcon.style.height="auto";
            btnMore.value="less";
        }
        else{
    		ulIcon.style.height="80px";
            btnMore.value="more";
        }   
    };    
    
    /////////////////carousel //////////////////////////////////////////////////
    var prevBtn = document.querySelector(".carousel-control-prev");
    var nextBtn = document.querySelector(".carousel-control-next");

    var lis = carouselUl.querySelectorAll("li");
    var currentIdx = 2;
    lis[currentIdx].style.zIndex=2;
    var canChange = true;

    carouselUl.addEventListener("transitionend", function(evt){
		for (var i = 0; i < lis.length; i++) {
			if(i!=currentIdx){
				lis[i].classList.add("transition-none");
				lis[i].style.zIndex=0;
				lis[i].style.left="0%";
				}
		canChange=true;
		}
    });

    prevBtn.onclick = function(){
	      if(!canChange) return;
	      canChange=false;     
	      var prevIdx = (currentIdx+lis.length-1)%lis.length;
	      var currentLi = lis[currentIdx];
	      var prevLi = lis[prevIdx];
	      currentLi.classList.add("transition-none");
	      currentLi.style.left="0%";
	      currentLi.style.zIndex=1;	
	      prevLi.classList.add("transition-none");
	      prevLi.style.left="-100%";
	      prevLi.style.zIndex=2;	      
	      setTimeout(function(evt){
		        currentIdx = (currentIdx+lis.length-1)%lis.length;
		        currentLi.classList.remove("transition-none");
		        currentLi.style.left="100%";	        
		        prevLi.classList.remove("transition-none");
		        prevLi.style.left="0%"
	      },0);
    };

    nextBtn.onclick = function(){   
	      if(!canChange) return;  
	      canChange=false;     
	      var nextIdx = (currentIdx+1)%lis.length;
	      var currentLi = lis[currentIdx];
	      var nextLi = lis[nextIdx];
	      currentLi.classList.add("transition-none");
	      currentLi.style.left="0%";
	      currentLi.style.zIndex=1;
	      nextLi.classList.add("transition-none");
	      nextLi.style.left="100%";
	      nextLi.style.zIndex=2;
	      setTimeout(function(evt){
		        currentIdx = (currentIdx+1)%lis.length;
		        currentLi.classList.remove("transition-none");
		        currentLi.style.left="-100%";
		
		        nextLi.classList.remove("transition-none");
		        nextLi.style.left="0%"
	      },0);  
    };

   
});

