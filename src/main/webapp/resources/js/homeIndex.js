window.addEventListener("load",function(){
    
    var main = document.querySelector("main");
    var btnMore = main.querySelector(".btn-more");
    var ulIcon = main.querySelector(".main-icon-list");
    var areaGroup = main.querySelector(".area-group");
    var groupListUl = areaGroup.querySelector(".group-list-flex");
    
	areaGroup.style.width = document.body.clientWidth+"px";

	 $(window).resize(function (){
			areaGroup.style.width = document.body.clientWidth+"px";
	 })
    for (var i = 0; i < 18; i++) { //추후 가져온 카테고리의 length 만큼 for문
    	var li = document.createElement('li');
        var div = document.createElement('div');
        var img = document.createElement('img');
        var br = document.createElement('br');
        var span = document.createElement('span');
        
        span.innerText="댄스/무용"; // 추후 카테고리의 이름을 입력
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
    
	for (var i = 0; i < 5; i++) { //추후 가져온 모임의 length 만큼 for문
		var li = document.createElement('li');
	 	li.classList.add("group-list-flex-li")
	 	 	
	 	var img = document.createElement('img');
	 	img.src="/resources/images/test.jpg"
	 		
	 	var divContainer = document.createElement('div');
	 	divContainer.classList.add("group-list-flex-content");
	 	divContainer.classList.add("ellipsis");
	 	
	 	var divTitle = document.createElement('div');
	 	divTitle.classList.add("fs14");
	 	divTitle.classList.add("fwb");
	 	divTitle.classList.add("left");
	 	divTitle.innerText="캠핑캠핑"; //추후 모임명
	 	var divContent = document.createElement('div');
	 	divContent.classList.add("ellipsis");
	 	divContent.innerText="다 같이 모여서 캠핑가는 즐거운 모임입니다. 남녀노소 모두모두 모여요~"; //추후 모임소개
	 	var divFilter = document.createElement('div');
	 	divFilter.classList.add("left");
	 	divFilter.classList.add("fwb");
	 	divFilter.innerText="가입조건";
	 	var divFilterAge = document.createElement('div');
	 	divFilterAge.classList.add("left");
	 	divFilterAge.innerText="- 나이 : " + "ageMin" + " ~ " + "ageMax"; //추후 모임 나이조건
	 	var divFilterGender = document.createElement('div');
	 	divFilterGender.classList.add("left");
	 	divFilterGender.innerText="- 성별 : " + "gender"; //추후 모임 성별조건
	 	var divFilterLocation = document.createElement('div');
	 	divFilterLocation.classList.add("left");
	 	divFilterLocation.innerText="- 지역 : " + "location"; //추후 모임 지역조건
	 	var divMaxperson = document.createElement('div');
	 	divMaxperson.innerText="최원수 "+"nowCnt"+" / "+"maxCnt"+"명"; //추후 모임 정원
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
    


   
});

