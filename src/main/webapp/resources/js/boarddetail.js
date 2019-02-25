function commentadd(){

	var content = $(".comment-input").val();
	var postsid = $(".pi").val();
	var cid = $("#cid").val();
	var img = $("#img").val();
	var role = $("#role").val();
	var writer = $("#writerid").val();
	var uid = $("#uid").val();
	var cmtwriter = $(".name").val();
	var cmtimg = $(".myimg").val();
	var tcmtid = document.querySelector(".cmtid");
	var commentsum = $(".cmtCnt").text();
	var csum = parseInt(commentsum);
	
	if(content == null || content == ''){
		return;
	}
	$.ajax({
		url: '/crowd/detail-comment',
		type: "post",
		dataType: "json",
		data:{"postsId":postsid, "content":content},
		success : function(json) {
			csum++;
			$(".cmtCnt").text(csum);
			var ajxcmt = JSON.stringify(json)
			var ttt = JSON.parse(ajxcmt);
			console.log("cmtid"+ttt.id);

			var tcmt = document.querySelector(".temp-cmt");
			var temp = document.querySelector("#tem2");
			var temple = document.importNode(temp.content, true);
			var writerId = temple.querySelector(".name");
			var content = temple.querySelector(".cc-box p");
			var regDate = temple.querySelector(".cc-box div");
			var profile = temple.querySelector(".comment-photo");
			var editbtn = temple.querySelector(".edit-btn");
			var tempcmtid = temple.querySelector(".cmtid");
			var cd = temple.querySelector(".comment-del");
			writerId.innerText = json.writerId;
			content.innerText = json.content;

			tempcmtid.value = ttt.id;
			profile.style.backgroundImage = "url('/get-img?folder=member-profile&file="+cmtimg+"')";
			profile.style.backgroundRepeat = "no-repeat center";
			profile.style.backgroundSize = "cover";
			console.log("작성자"+cmtwriter);
			console.log(uid);
			if(uid){
				editbtn.innerHTML = "<input class='comment-edit' type='button' value='수정' />"
					+"<input class='comment-del' type='button' value='삭제' style='margin-left: 5px;'/>";
			}else if(writer == uid && role <= 1){
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
			//location.reload();

		},
		error : function(request,status,error) {
			console.log("실패"+status);
		}

	})
}


$(document).on("click",".comment-edit",function(){
	var commentinput = $(".comment-input");
	var editbtn = $(".comment-add-btn");

	var cmtid = $(this).parents(".comment-content").children(".cmtid");
	var hiddencmtid = $(".cmtid");
	hiddencmtid.val(cmtid.val());
	var edittext =  $(this).parent().parent().parent().find(".cc-box").children("p").text();
	$(this).parent().parent().parent().find(".cc-box").children("p").attr("id","editp");
	commentinput.val(edittext);
	editbtn.replaceWith("<input class='comment-edit-btn' type='button' value='수정' />");
	commentinput.focus();
})

$(document).on("click",".comment-edit-btn",function(){
	var editbtn = $(".comment-edit-btn");
	var commentinput = $(".comment-input").val();
	var uid = $(".cmtid").val();
	var pi = $(".pi").val();
	var p = $("#editp");
	var cmtwriter = $(".profile-info span:nth-child(1)");
	console.log("uid"+uid);
	console.log(p.text());
	console.log(cmtwriter.text())
	$.ajax({
		url: '/crowd/editcomment',
		type: "post",
		dataType: "json",
		data:{"id":uid, "content":commentinput, "postsId":pi},
		success : function(json) {
			var ajxcmt = JSON.stringify(json)
			var ttt = JSON.parse(ajxcmt);

			p.text($(".comment-input").val());
			p.removeAttr("id","editp")
			$(".comment-input").val("");
			editbtn.replaceWith("<input class='comment-add-btn' type='button' value='등록' onclick='commentadd();'/>");
			console.log("연결");

		}
	});

})

$(document).on("click",".comment-del",function(){
	var thisid = $(this).parents(".comment-content").children(".cmtid");
	var commentsum = $(".cmtCnt").text();
	var csum = parseInt(commentsum);
	var removecomt = $(this).parents(".cmt-box");
	console.log("delid"+thisid.val());
	swal({
		text: "정말 삭제 하시겠습니까?",
		icon: "warning",
		buttons: [
			'취소',
			'확인'
			],
			dangerMode: true,
	}).then(function(isConfirm) {
		if (isConfirm) {
			removecomt.remove();
			$.ajax({
				url: '/crowd/delcomment',
				type: "post",
				dataType: "json",
				data:{"id":thisid.val()},
				success : function(json) {
					csum--;
					$(".cmtCnt").text(csum);
					console.log("연결");
				}
			})
		} 
	})  



	/*	if(swal("정말 삭제하시겠습니까?")){
		$(this).parents(".cmt-box").remove();
		$.ajax({
			url: '/crowd/delcomment',
			type: "post",
			dataType: "json",
			data:{"id":thisid.val()},
			success : function(json) {
				console.log("연결");
			}

		})
	}*/
})


$(document).ready(function(){

	var uid = $("#uid");
	var pid = $(".pi");
	var goodcnt = $(".goodcnt").text();
	var pasegood = parseInt(goodcnt);
	console.log("pasegood"+pasegood)
	$(document).on("click",".comment-sum", function(){

		var like = $(".likecnt").data("id");

		if(like == 0){
			pasegood++;
			$(".goodcnt").text(pasegood);
			$(".likecnt").text("♥");
			$(".likecnt").data("id",1);
			$.ajax({
				url: '/crowd/boardGood',
				type: "post",
				dataType: "json",
				data:{"memberId":uid.val(), "postsId":pid.val()},
				success : function(json) {


				}
			});
		}else if(like == 1){
			$(".likecnt").text("♡");
			$(".likecnt").data("id",0);
			pasegood--;
			$(".goodcnt").text(pasegood);
			$.ajax({
				url: '/crowd/boarddelGood',
				type: "post",
				dataType: "json",
				data:{"memberId":uid.val(), "postsId":pid.val()},
				success : function(json) {


				}
			});
		}
	})

})



