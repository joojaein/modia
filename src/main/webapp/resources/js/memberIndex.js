window.addEventListener("load",function(){
    
    var main = document.querySelector("main");

    var menu = main.querySelector(".menu");
    
    menu.addEventListener("click",function(evt){
        if (evt.target.nodeName != "INPUT") return;  
    	
    	var tab = menu.querySelectorAll(".btn");
        for (var i = 0; i < tab.length; i++) {
        	tab[i].classList.remove("selected-tab");
		}
        
        evt.target.classList.add("selected-tab");
        if(evt.target.name == "my-group"){
        	//내 모임 탭을 누른 경우
        	
        }else if(evt.target.name == "req-group"){
        	//가입요청그룹 탭을 누른 경우
        	
        }else if(evt.target.name == "hit-group"){
        	//최근 본 그룹 탭을 누른 경우
        	
        } 
    });
    
    var areaGroup = main.querySelector(".group");
	areaGroup.style.width = document.body.clientWidth+"px";

	 $(window).resize(function (){
			areaGroup.style.width = document.body.clientWidth+"px";
	 })
    
    
});

