function commentadd(){
	var content = $(".comment-input").val();
	var postsid = $(".pi").val();
	var cid = $("#cid").val();
	var img = $("#img").val();
	var role = $("#role").val();
	var writer = $("#writerid").val();
	var uid = $("#uid").val();
	var cmtwriter = $(".name").val();
	var cmtid =$(".cmtid").val();
	$.ajax({
		url: '/crowd/detail-comment',
		type: "post",
		dataType: "json",
		data:{"postsId":postsid, "content":content},
		success : function(json) {
			var tcmt = $(".temp-cmt");
			var temp = document.querySelector("#tem2");

			var temple = document.importNode(temp.content, true);
			var writerId = temple.querySelector(".name");
			var content = temple.querySelector(".cc-box p");
			var regDate = temple.querySelector(".cc-box div");
			var profile = temple.querySelector(".comment-photo");
			var editbtn = temple.querySelector(".edit-btn");
			writerId.innerText = json.writerId;
			content.innerText = json.content;
			profile.style.backgroundImage = "url('/get-img?folder=member-profile&file="+img+"')";
			profile.style.backgroundRepeat = "no-repeat center";
			profile.style.backgroundSize = "cover";
			if(writer == uid || uid != null){
				editbtn.innerHTML = "<inputclass='comment-edit' type='button' value='수정' />"
					+"<input class='comment-del' type='button' value='삭제'  style='margin-left: 5px;' />";
			}else if(role <= 1){
				editbtn.innerHTML = "<input class='comment-del' type='button' value='삭제' />";

			}

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
			$(".comment-input").val("");
			console.log("연결");
		},
		error : function(request,status,error) {

			console.log("실패"+status);
		}
	})
}

$(document).ready(function(){
	var commentinput = $(".comment-input");
	var editbtn = $(".comment-add-btn");
	$(".comment-edit").click(function(){
		var edittext =  $(this).parent().parent().parent().find(".cc-box").children("p").text();
		commentinput.val(edittext);
		editbtn.replaceWith("<input class='comment-add-btn' type='button' value='수정' onclick='commentedit();'/>");
		commentinput.focus();
	
	})
})

function commentedit(){
	var uid = $(".cmtid").val();
	var commentinput = $(".comment-input").val();
	$.ajax({
		url: '/crowd/editcomment',
		type: "post",
		dataType: "json",
		data:{"id":uid, "content":commentinput},
		success : function(json) {
			
			var box = document.querySelector(".temp-cmt");
			var boxs = box.querySelectorAll(".cmt-box")
			for (var i = 0; i < boxs.length; i++) {
				var conmentBox = boxs[i].querySelector(".comment-content");
				var uids = conmentBox.querySelector(".cmtid").value;
				if(uids == uid){
					var p = conmentBox.querySelector("p");
					p.innerText = commentinput;
					$(".comment-input").val("");
				}
			}
			console.log("연결");
	
		}
	});
}


$(document).ready(function(){
	$(".comment-del").click(function(){
		var uid = $(".cmtid").val();
		$(this).parent().parent().parent().remove();
		if(confirm("정말 삭제하시겠습니까?")){
			$.ajax({
				url: '/crowd/delcomment',
				type: "post",
				dataType: "json",
				data:{"id":uid},
				success : function(json) {
					console.log("연결");
					alert(json.content);
				}

			})
		}
	})
})