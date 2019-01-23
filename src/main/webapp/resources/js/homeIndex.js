window.addEventListener("load",function(){
    
    var main = document.querySelector("main");
    var btnMore = main.querySelector(".btn-more");
    var ulIcon = main.querySelector(".main-icon-list");
    
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
    

    var areaGroup = main.querySelector(".area-group");
	areaGroup.style.width = document.body.clientWidth+"px";

	 $(window).resize(function (){
			areaGroup.style.width = document.body.clientWidth+"px";
	 })
   
});

