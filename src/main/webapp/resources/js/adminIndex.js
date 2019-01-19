window.addEventListener("load",function(){
    
    var main = document.querySelector("main");

    var menu = main.querySelector(".menu");
    var paging = main.querySelector(".paging");
    var ulPaging = paging.querySelector("ul");

    var table = main.querySelector("table");
    var thead = table.querySelector("thead");
    menu.addEventListener("click",function(evt){
        if (evt.target.nodeName != "INPUT") return;  
    	
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
        }
    });
    
    ulPaging.addEventListener("click",function(evt){
        if (evt.target.nodeName != "INPUT") return;  
    	
    	var page = ulPaging.querySelectorAll(".btn");
        for (var i = 0; i < page.length; i++) {
        	page[i].classList.remove("now-page");
		}      
        evt.target.classList.add("now-page");
        //evt.target.value
    });
    
    thead.addEventListener("click",function(evt){
        if (evt.target.nodeName != "SPAN") return;  

        var td = thead.querySelectorAll("td");
        for (var i = 0; i < td.length; i++) {
			var span = td[i].children;
			if(span[0]==evt.target){
				if(span[1].classList.contains("d-none")){
					span[1].classList.remove("d-none");
					span[2].classList.add("d-none");
				}else if(span[2].classList.contains("d-none")){
					span[1].classList.add("d-none");
					span[2].classList.remove("d-none");
				}else{
					span[1].classList.remove("d-none");
					span[2].classList.add("d-none");
				}			
			}else{
				span[1].classList.add("d-none");
				span[2].classList.add("d-none");
			}
		}
 
    });
    
});

