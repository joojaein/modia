$(function()
{
	
	var friendRequest = new XMLHttpRequest();
	
		
	friendRequest.open("POST","/member/get-friendList",true);
		friendRequest.setRequestHeader("Content-Type",
									"application/x-www-form-urlencoded");
			
			//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
		friendRequest.onload = function()
		{
			var getFriendDatas = JSON.parse(friendRequest.responseText);
			//alert(getFriendDatas[0][0].id);
			//alert(getFriendDatas[0][0].msg);
			//alert(getFriendDatas[0][0].img);
			//alert(getFriendDatas[1][0].id);
			
//			var friendList ='<div class="friend">';
//				friendList +='<div class="friend-img">';
//				friendList +='</div>';
//				friendList += '<div class="friend-detail">';
//				friendList += '<label>'+getFriendDatas[][0].id+'</label>';
//				friendList += '<h6>'+getFriendDatas[][0].Msg+'</h6>';
//				friendList += '</div>';
//				friendList += '<div class="friend-ballon">';
//				friendList += '<img src="'+getFriendDatas[][0].Img+'" alt="">';
//				friendList += '</div>';
//				friendList += '</div>';
				
			var friendCp = document.querySelector("#friend-cp");
			var friendList2 = document.querySelector(".friend-list");
			
			alert(getFriendDatas.length);
			
			for (var i = 0; i < getFriendDatas.length; i++) 
			{
				var tpl=document.importNode(friendCp.content, true);
				var tmpLabel=tpl.querySelector("label");
					tmpLabel.innerText=getFriendDatas[i][0].id;
				var tmph6 =tpl.querySelector("h6");
					tmph6.innerText=getFriendDatas[i][0].msg;
				var tmlImg =tpl.querySelector(".friend-img");
					tmlImg.style.backgroundImage = 
						"url(/get-img?folder=member-profile&file="+getFriendDatas[i][0].img+")";
					
					friendList2.append(tpl);
			}
			
			
			
		}
		
		friendRequest.send();
	
		
		
		
//		var memberRequest = new XMLHttpRequest();
//			memberRequest.setRequestHeader("Content-Type",
//			"application/x-www-form-urlencoded");
//			memberRequest.onload = function()
//			{
//				var getMemberList = JSON.parse(memberRequest.responseText);
//				alert(getMemberList[0].img.name);
//			}
//			
//			friendRequest.send();
//		
//		
//		
			
			
			
			
			
			
			
//		var img = document.querySelector(".friend-img");
//		var profileImg = document.querySelector(".profile-img");
//		
//			img.style.backgroundImage= "url(/get-img?folder=member-profile&file=jaein.png)"; 
//			profileImg.style.backgroundImage= "url(/get-img?folder=member-profile&file=jaein.png)";
//			
//			
//		
//		
})



