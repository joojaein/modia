window.addEventListener("load",function(){
   
    var main = document.querySelector("main");
    var btnMore = main.querySelector(".btn-more");
    var ulIcon = main.querySelector(".main-icon-list");
    var areaGroup = main.querySelector(".area-group");
    var groupListUl = areaGroup.querySelector(".group-list-flex");
    var carousel = document.querySelector(".carousel");
    var carouselUl = carousel.querySelector("ul");
    
    var bannerRequest = new XMLHttpRequest(); 
    bannerRequest.open("POST", "/get-mainbannerlist", true); 
    bannerRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    bannerRequest.onload = function () {   
       var bannerList = JSON.parse(bannerRequest.responseText);
       for(var i = 0; i < bannerList.length; i++){
         var li = document.createElement('li');
          var img = document.createElement('img');
          img.classList.add("img-banner");
           img.src= "/get-img?folder=main-banner&file="+bannerList[i].src;       
          li.appendChild(img);
          if(i==0) li.style.zIndex=2;
          carouselUl.appendChild(li);
       }
       
       /////////////////carousel //////////////////////////////////////////////////
       var prevBtn = document.querySelector(".carousel-control-prev");
       var nextBtn = document.querySelector(".carousel-control-next");

       var lis = carouselUl.querySelectorAll("li");
       var currentIdx = 0;
       var canChange = true;
       for (var i = 0; i < lis.length; i++) {
           if(i!=currentIdx){
              lis[i].classList.add("d-none");
              lis[i].classList.add("transition-none");
              lis[i].style.zIndex=0;
              lis[i].style.left="0%";
            }
        }
       carouselUl.addEventListener("transitionend", function(evt){
         for (var i = 0; i < lis.length; i++) {
            if(i!=currentIdx){
               lis[i].classList.add("d-none");
               lis[i].classList.add("transition-none");
               lis[i].style.zIndex=0;
               lis[i].style.left="0%";
            }
         }
         canChange=true;
         autoCarousel();
       });

       prevBtn.onclick = function(){
            if(!canChange) return;
            canChange=false;     
            var prevIdx = (currentIdx+lis.length-1)%lis.length;
            for (var i = 0; i < lis.length; i++) {
				if(i==prevIdx || i==currentIdx){
					lis[i].classList.remove("d-none");
					lis[i].classList.add("transition-none");
				}else{
					lis[i].classList.add("d-none");
				}
			}
            var currentLi = lis[currentIdx];
            var prevLi = lis[prevIdx];
            currentLi.style.left="0%";
            currentLi.style.zIndex=1;   
            prevLi.style.left="-100%";
            prevLi.style.zIndex=2;      
            currentLi.classList.remove("transition-none");
            prevLi.classList.remove("transition-none");
            setTimeout(function(evt){
                 currentIdx = (currentIdx+lis.length-1)%lis.length;
                 currentLi.style.left="100%";           
                 prevLi.style.left="0%"
            },10);
       };

       nextBtn.onclick = function(){   
            if(!canChange) return;  
            canChange=false;     
            var nextIdx = (currentIdx+1)%lis.length;
            for (var i = 0; i < lis.length; i++) {
				if(i==nextIdx || i==currentIdx){
					lis[i].classList.remove("d-none");
					lis[i].classList.add("transition-none");
				}else{
					lis[i].classList.add("d-none");
				}
			}
            var currentLi = lis[currentIdx];
            var nextLi = lis[nextIdx];
            currentLi.style.left="0%";
            currentLi.style.zIndex=1;
            nextLi.style.left="100%";
            nextLi.style.zIndex=2;
            currentLi.classList.remove("transition-none");
            nextLi.classList.remove("transition-none");
            setTimeout(function(evt){
                 currentIdx = (currentIdx+1)%lis.length;
                 currentLi.style.left="-100%";
                 nextLi.style.left="0%"
            },10);  
       };
       autoCarousel();

       function autoCarousel(){ 
    	   setTimeout(function(evt){
	    	   if(!canChange) return;  
	           canChange=false;     
	           var nextIdx = (currentIdx+1)%lis.length;
	           for (var i = 0; i < lis.length; i++) {
					if(i==nextIdx || i==currentIdx){
						lis[i].classList.remove("d-none");
						lis[i].classList.add("transition-none");
					}else{
						lis[i].classList.add("d-none");
					}
				}
	           var currentLi = lis[currentIdx];
	           var nextLi = lis[nextIdx];
	           currentLi.style.left="0%";
	           currentLi.style.zIndex=1;
	           nextLi.style.left="100%";
	           nextLi.style.zIndex=2;
	           currentLi.classList.remove("transition-none");
	           nextLi.classList.remove("transition-none");
	           setTimeout(function(evt){
	                currentIdx = (currentIdx+1)%lis.length;
	                currentLi.style.left="-100%";
	                nextLi.style.left="0%"
	           },10);  
	      },4000);  
       }
    };
    bannerRequest.send();
    /////////////////////////////////////////////////////////////////////////////////////////////
    
    
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

               img.name = categoryList[i].id;
               div.appendChild(img);
               div.appendChild(br);
               div.appendChild(span);
               li.appendChild(div);
               ulIcon.appendChild(li);
          }

        var divAllCategory = main.querySelector(".all-category");
        var tempA = document.createElement('a');
        tempA.href = "crowd/categorySearch";
        tempA.innerText = "카테고리 상세 검색";
        tempA.classList.add("d-none");
        divAllCategory.appendChild(tempA);

    }
    categoryRequest.send();   
    
    
    ulIcon.addEventListener("click",function(evt){
    	if(evt.target.nodeName!="IMG") return;
    	var categoryId = evt.target.name;
    	
    	var query = "";
        var form = document.createElement('form');
        document.body.appendChild(form);
        form.method = 'post';
        form.action = "/crowd/search";
        var inputCategoryId = document.createElement('input');
        inputCategoryId.type = 'hidden';
        inputCategoryId.name = "categoryId";
        inputCategoryId.value = categoryId;
        form.appendChild(inputCategoryId);

        var inputQuery = document.createElement('input');
        inputQuery.type = 'hidden';
        inputQuery.name = "query";
        inputQuery.value = query;
        form.appendChild(inputQuery);
        form.submit();
    });
    
    
    var crowdRequest = new XMLHttpRequest(); 
    crowdRequest.open("POST", "/get-simplecrowdlist", true); 
    crowdRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    crowdRequest.onload = function () {   
       var crowdList = JSON.parse(crowdRequest.responseText);
       for (var i = 0; i < crowdList.length; i++) { 
          var li = document.createElement('li');
           li.classList.add("group-list-flex-li")    
           li.value=crowdList[i].id;
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
           var divContent = document.createElement('p');
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
    crowdRequest.send("type=4");   

   areaGroup.style.width = document.body.clientWidth+"px";
   $(window).resize(function (){
      areaGroup.style.width = document.body.clientWidth+"px";
      $(".carousel").height($(".carousel").width()*0.4);
    })

    btnMore.onclick = function(){
       if(btnMore.value=="more"){
          ulIcon.style.height="auto";
            btnMore.value="less";
            var tempA = main.querySelector(".all-category A");
            tempA.classList.remove("d-none");
        }
        else{
          ulIcon.style.height="80px";
            btnMore.value="more";
            var tempA = main.querySelector(".all-category A");
            tempA.classList.add("d-none");
        }   
    };    
    
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



















