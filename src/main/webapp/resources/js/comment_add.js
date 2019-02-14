$(function(){
//  var addbtn = $("input[type='button']");
 var addbtn = document.querySelector(".comment-reg input:nth-child(2)");
 addbtn.onclick = function(){
     alert("댓글추가");
     $(".content-comment").clone(".content-comment");
}

});