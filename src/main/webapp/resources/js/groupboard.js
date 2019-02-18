function changepostsList(){
	var seleclist = $("#select option:selected").val();
	var cid = $("#cid").val();
	$.ajax({
		url: '/crowd/board',
		type: "post",
		dataType: "json",
		data:{"boardId":seleclist, "crowd":cid},
		success : function(json) {
			var content = $(".content");
			content.empty();
			var cbid = JSON.stringify(json);
			var cbdId = JSON.parse(cbid);
			var temp = document.querySelector("#tem");
			for (var i = 0; i < cbdId.length; i++) {
				var temple = document.importNode(temp.content,true);
				var name = temple.querySelector(".name");
				var title = temple.querySelector(".content-title");
				var lconten = temple.querySelector(".content-content");
				var hit = temple.querySelector(".hit");
				var regdate = temple.querySelector(".reg-write");
				name.innerText = cbdId[i].name;
				title.innerText = cbdId[i].title;
				lconten.innerText = cbdId[i].content;
				hit.innerText = "조회수 "+cbdId[i].hit;
				regdate.innerText = cbdId[i].regDate;
				
				content.append(temple);
				
			}
	
			
			console.log("연결");
		},
		error : function(xhr, status, error) {
			
			console.log("실패"+xhr+status);
      }

	})
}
