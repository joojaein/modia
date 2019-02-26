$(function(){

	var myid = $(".myid");
	var myimg = $(".myimg");
	$.ajax({
		url: '/crowd/memberHead',
		type: "post",
		dataType: "json",
		success : function(json) {
			var test2 = JSON.stringify(json)
			var test = JSON.parse(test2);
			console.log("header연결");
				
			myid.val(test[0].id);
			myimg.val(test[0].img);
			
		}
	})
})

