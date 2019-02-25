$(document).on("ready",function(){
	var conbox = $(".content-box");
	var windowWidth = $( window ).width();
	
	if(windowWidth < 500) {
	//창 가로 크기가 500 미만일 경우 
	if(conbox.length%2==1)
		conbox.last().css("margin-right", "45%");
		
	} else {
		if(conbox.length%2==1)
			conbox.last().css("margin-right", "53%");
	}

	
});


$(document).ready(function(){
	
	
	var cid = $("#cid").val();
	console.log("cid"+cid);
	$(document).keypress(function(event) {
	var windowWidth = $( window ).width();
	var keword = $(".keyword").val();
	var keycode = event.keyCode || event.which;
	if(keycode == '13') {
		$.ajax({
			url: '/crowd/albumsearch',
			type: "post",
			dataType: "json",
			data:{"crowdId":cid, "keyword":keword},
			success : function(json) {
				var content = $(".content");
				
				
				content.empty();
				var cbid = JSON.stringify(json);
				var cbdId = JSON.parse(cbid);
				var temp = document.querySelector("#tem");
				for (var i = 0; i < cbdId.length; i++) {
					
					
					var temple = document.importNode(temp.content,true);
					var postimg = temple.querySelector(".upload-img");
					var title = temple.querySelector(".album-title a");
					var writerid = temple.querySelector(".writerId a");
					var regdate = temple.querySelector(".regDate a");
					var goodcnt = temple.querySelector(".goodcnt a");
					
					postimg.src = "/get-img?folder=crowd-postsImg&file="+cbdId[i].mainImg;
					title.innerText = cbdId[i].title;
					writerid.innerText = cbdId[i].writerId;
					goodcnt.innerText = "["+cbdId[i].hit+"]";

					var dateTime = new Date(cbdId[i].regDate);
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
					regdate.innerText = result;

					content.append(temple);
					
				}
				var conbox = $(".content-box");
				console.log("conbox.length"+conbox.length);
				if(windowWidth < 500) {
					//창 가로 크기가 500 미만일 경우 
					if(conbox.length%2==1)
						conbox.last().css("margin-right", "45%");
					
				} else {
					if(conbox.length%2==1)
						conbox.last().css("margin-right", "53%");
				}


				console.log("연결");
			},
			error : function(xhr, status, error) {

				console.log("실패"+xhr+status);
			}

		})
	}
});
})
