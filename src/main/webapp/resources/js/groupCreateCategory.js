window.addEventListener("load",function(){
    var main = document.querySelector("main");   
    var divCategory = main.querySelector(".createCategory");

    divCategory.addEventListener("click",function(evt){
    	if(evt.target.nodeName!="IMG") return;
    
    	var span = evt.target.nextSibling.nextSibling.nextSibling;    	
	    window.location = "create?t="+span.innerText;    	
    });
});

