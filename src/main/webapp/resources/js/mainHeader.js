window.addEventListener("load",function(){
    
    var header = document.querySelector("header");
    var inputSearch = header.querySelector("#headerSearch input");
    var hamburger = header.querySelector("#headerMenu input");
    var back = header.querySelector(".back");
    var modal = header.querySelector(".modal");
   
    inputSearch.value="";
    
    var modalShow = function(){
        modal.classList.add("show")
        back.removeEventListener("transitionend",modalShow);
    };

    hamburger.onclick = function(){
        back.classList.add("show")
        back.addEventListener("transitionend", modalShow);
        setTimeout(function(evt){
            back.style.opacity="0.7";
        },0);
    };
    
    modal.addEventListener("click",function(evt){
        if (evt.target.nodeName != "INPUT") return;  
        var btnName = $(evt.target).attr("name");
        back.style.opacity="0.0";
        back.classList.remove("show");

        setTimeout(function(evt){
            modal.classList.remove("show")
        },0);
        
        modal.addEventListener("transitionend", function() {
        	// //input의 이름을 통해 동작하는 부분 입력
            if(btnName=="search"){
            	window.location.href = "/crowd/categorySearch";
            }else if(btnName=="question"){
            	
            }else if(btnName=="qna"){
            	
            }else{
            	window.location.href = "/"+btnName;
            }
            // /////////////////////////////////////
            modal.removeEventListener("transitionend",this);
		});
    });  
    
	back.onclick = function(){
		 back.style.opacity="0.0";
	     back.classList.remove("show");
	
	     setTimeout(function(evt){
	         modal.classList.remove("show")
	     },0);
	     modal.addEventListener("transitionend", function() {
	         modal.removeEventListener("transitionend",this);
	     });
	};
	
/*	var searchText = document.querySelector("input[type=text]");
	var autoBox = document.querySelector(".autoBox");
	var autoUl = autoBox.querySelector(".autoUl");
	searchText.onkeyup = function(e){
		if(e.keyCode == 13){
			
		}
	}*/
});

