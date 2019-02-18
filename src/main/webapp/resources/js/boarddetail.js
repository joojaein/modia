window.addEventListener("load", function () {
    var siren = document.querySelector(".siren");
    var clear = document.querySelector(".clear-btn");
    siren.onclick = function (e) {
        e.preventDefault();
        var rprt = document.querySelector(".rprt");
        rprt.classList.remove("d-none");
    }

    clear.onclick = function (e) {
        e.preventDefault();
        var rprt = document.querySelector(".rprt");
        rprt.classList.add("d-none");
    }
});

function commentadd(){
  var content = $(".comment-input").val();
  var postsid = $(".pi").val();
  var cid = $("#cid").val();
 
  $.ajax({
		url: '/crowd/board/detail-comment',
		type: "post",
		dataType: "json",
		data:{"postsId":postsid, "content":content},
		success : function(json) {
			var tcmt = $(".temp-cmt");
			
			var temp = document.querySelector("#tem2");

			var temple = document.importNode(temp.content, true);
			var writerId = temple.querySelector(".name");
			var content = temple.querySelector(".comment-content p");
			var regDate = temple.querySelector(".comment-content div");
			var profile = temple.querySelector(".comment-photo");
			writerId.innerText = json.writerId;
			content.innerText = json.content;
			profile.style.backgroundImage = "url('/get-img?folder=crowd-postsImg&file="+json.img+"')";
			profile.style.backgroundRepeat = "no-repeat center";
			profile.style.backgroundSize = "cover";

				

			var dateTime = new Date(json.regDate);
			var year = dateTime.getFullYear();
			var month = dateTime.getMonth()+1;
			
			var day = dateTime.getDate();
			if(day<10){
				day = '0'+day;
			}
			var hours = dateTime.getHours();
			if(hours<10){
				hours = '0'+hours;
			}
			var minutes = dateTime.getMinutes();
			//var seconds = dateTime.getSeconds();
			var apm="오전";
			if(hours>=12){
				apm="오후";
				hours=hours-12;
			}

			var result = year+"-"+month+"-"+day+" "+apm+" "+hours+":"+minutes;
			regDate.innerText = result;
			tcmt.append(temple);
			console.log("연결");
		},
		error : function(request,status,error) {
			
			console.log("실패"+xhr+status);
			 alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);}


	})
}
