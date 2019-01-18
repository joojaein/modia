window.addEventListener("load",function(){
    
    var main = document.querySelector("main");
    var btnMore = main.querySelector(".btn-more");
    var ulIcon = main.querySelector(".main-icon-list");
  
    btnMore.onclick = function(){
        var icons = ulIcon.querySelectorAll(".main-icon-li-more div");
        if(btnMore.value=="more"){
            for(var i=0; i<icons.length; i++){
                icons[i].style.display= "block";
            }
            btnMore.value="less";
        }
        else{
            for(var i=0; i<icons.length; i++){
                icons[i].style.display= "none";
            }
            btnMore.value="more";
        }   
    };
});

