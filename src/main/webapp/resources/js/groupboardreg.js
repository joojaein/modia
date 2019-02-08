window.addEventListener("load", function () {
//	var board = document.SelectorAll('#select2');
	var selectItem = document.querySelector("#select1");
	var select2 = document.querySelector("#select2");
	var hr = document.querySelector(".hr");
//	for (var i = 0; i < board.length; i++) {
//	var option = $("<option>" + board[i] + "</option>");
////	$("#select2").append(option);
//	}
	selectItem.onchange = function () {
		if (selectItem.value == "게시판") {
			select2.classList.remove("d-none");
			hr.classList.remove("d-none");
			console.log(selectItem.value);
		} else if (selectItem.value == "사진첩") {
			console.log(selectItem.value);
			select2.classList.add("d-none");
			hr.classList.add("d-none");
		}
	}


	var divContent = document.querySelector(".content");
	divContent.addEventListener("click", function(evt){
		if(evt.target.nodeName!="TEXTAREA") return;
		evt.target.focus();

	});
});

$(function() {
	var textarea =  $(".text-content div");
	var textinputdiv = $(".post-content:nth-child(3)");
	var textinput = $(".text-input");
	$(".content").sortable({
		placeholder:"itemBoxHighlight",
		start: function(event, ui) {
			ui.item.data('start_pos', ui.item.index());
		},
		stop: function(event, ui) {
			var spos = ui.item.data('start_pos');
			var epos = ui.item.index();
			reorder();
		}
	})

});

/** 아이템 추가 */
function createItem() {
	$(createBox())
	.appendTo(".content")
	.append("<div class='deleteBox'><img src='/resources/images/trash.png'></img><div>")
	.find(".deleteBox").click(function() {
		var valueCheck = false;
		$(this).parent().find('textarea').each(function() {
			if($(this).attr("name") != "type" && $(this).val() != '') {
				valueCheck = true;
			}
		});

		if(valueCheck) {
			var delCheck = confirm('입력하신 내8용이 있습니다.\n삭제하시겠습니까?');
		}
		if(!valueCheck || delCheck == true) {
			$(this).parent().remove();
			reorder();
		}
	});
	// 숫자를 다시 붙인다.
	reorder();



}


function createBox(){
	if($('.post-content .text-input').length < 2){
		var contents ="<div name='item' class='post-content'>"
			+"<textarea name='content' class='text-input' autofocus></textarea>"
			+"<img src='../../../resources/images/bighamburger.png' />"
			+"<span class='itemNum d-none'></span>"
			+"</div>";
	}
	return contents;

}

$(function(){
	var imgbtn= document.querySelector(".img-btn");
	var fileDnone = document.querySelector("input[type='file']");
	var file;
	var imagefile;
	var source;
	imgbtn.onclick=function(){
		var evt = new MouseEvent("click", {
			"view":window,
			"bubbles":true,
			"cancelable":true
		});
		fileDnone.dispatchEvent(evt);


	}
	fileDnone.addEventListener('change', function(evt){
		var curFiles = fileDnone.files;
		file = curFiles[0];
		source = window.URL.createObjectURL(file);

		imagefile ="<div name='item' class='post-content'>"
			+"<img name='content' class='post-img' src="+source+">"
			+"<img src='../../../resources/images/bighamburger.png' />"
			+"<span class='itemNum d-none'></span>"
			+"</div>";
		$(imagefile).appendTo(".content")
		.append("<div class='deleteBox'><img src='/resources/images/trash.png'></img><div>")
		.find(".deleteBox").click(function() {
			var valueCheck = false;
			$(this).parent().find('textarea').each(function() {
				if($(this).attr("name") != "type" && $(this).val() != '') {
					valueCheck = true;
				}
			});

			if(valueCheck) {
				var delCheck = confirm('입력하신 내8용이 있습니다.\n삭제하시겠습니까?');
			}
			if(!valueCheck || delCheck == true) {
				$(this).parent().remove();
				reorder();
			}
		});
		reorder();
	});


});

function imgupload(){
	var profileFile = $(".file").val();

	alert(profileFile);
	var fd = new FormData();
	fd.append("file", profileFile);  
	fd.append("id", "test2");   //파일 이름
	fd.append("root", "posts-img");  
	$.ajax({
		url: "/file-upload",
		data: fd,
		dataType: 'text',
		processData: false,
		contentType: false,
		type: 'POST',
		success : function(data) {
			//업로드 완료 후 할 동작들
		}   
	});
};


function reorder() {
	$(".post-content").each(function(i) {
		$(this).find(".itemNum").html(i + 1);
	});
}

function boardreg() {
	var selected1 = $('#select1');
	var items = $('[name="item"]');
	var concon = "";
	if(selected1.val() == '게시판'){
					console.log($('#select1').val());
					var boardId = $('#select2').val();
					alert(boardId);
					var title = $('#title').val();
		for(var i = 0; i < items.length; i++ ){
			if(items[i].firstChild.classList == 'post-img'){
				concon += items[i].firstChild.src;
			}
			else if(items[i].firstChild.classList == 'text-input'){
				concon += items[i].firstChild.value;
			}
		}
	}else if (selected1.val() == '사진첩'){
		console.log(tab_one = $('#select1').val());
		for(var i = 0; i < items.length; i++ ){
			if(items[i].firstChild.classList == 'post-img'){
				concon += items[i].firstChild.src;
			}
			else if(items[i].firstChild.classList == 'text-input'){
				concon += items[i].firstChild.value;
			}
		}
	}
	
}
