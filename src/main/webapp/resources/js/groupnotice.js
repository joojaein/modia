$(document).ready(function(){
	var postimg = $(".post-img");
	
	if(postimg.attr("src") == "/get-img?folder=crowd-postsImg&file=.png"){
		postimg.css("display","none");
	}
});