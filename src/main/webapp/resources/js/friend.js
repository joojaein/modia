$(function()
{
	// 내가 로그인을 했는지 알기 위해 homecontroller에 있는 /chk-login 이 
	// POST 요청으로 anonymousUser = 없는유저 / loggined = 로그인 성공 을
	// 보내주기 위해 사용하는 Ajax 이다.
	
	var idRequest = new XMLHttpRequest(); 
    idRequest.open("POST", "/chk-login", true); 
    idRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    idRequest.onload = function () {   
       if(idRequest.responseText != "anonymousUser")
       {
          chattingOn();
       }
    };
    idRequest.send();
    
    ////////////////////////////////////////////////////////////////////
    
    function chattingOn()
    {
       
       
       var getFriendDatas = new XMLHttpRequest();
       
     //  alert("open전");   
       
       getFriendDatas.open("POST","/member/get-friendList",true);
       getFriendDatas.setRequestHeader("Content-Type",
                               "application/x-www-form-urlencoded");
             
             //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
       getFriendDatas.onload = function()
          {
          
       //      alert("여기까진 오나??");
             
             var getFriendDataList = JSON.parse(getFriendDatas.responseText); 
        //     alert("json 파세"+getFriendDataList);
             var friendCp = document.querySelector("#friend-cp");
             var friendList2 = document.querySelector(".friend-list");
       //      alert(friendCp);
       //      alert(getFriendDataList.length);
        //     alert("id : "+getFriendDataList[0][0].id);
             
             for (var i = 0; i < getFriendDataList.length; i++) 
             {
                var tpl=document.importNode(friendCp.content, true);
                var tmpLabel=tpl.querySelector("label");
                   tmpLabel.innerText=getFriendDataList[i][0].id;
                var tmph6 =tpl.querySelector("h6");
                   tmph6.innerText=getFriendDataList[i][0].msg;
                var tmlImg =tpl.querySelector(".friend-img");
                   tmlImg.style.backgroundImage = 
                      "url(/get-img?folder=member-profile&file="+getFriendDataList[i][0].img+")";
                   
                   friendList2.append(tpl);
             }
             
             
             
          }
          
       getFriendDatas.send();
        
    };



    ////////////////////////////////////////////////////////////////////
	
	
	
})


// 아래는 그 이전 코드


//function chattingOn()
//{
//	
//	
//	var getFriendDatas = new XMLHttpRequest();
//	
//	alert("open전");	
//	
//	getFriendDatas.open("POST","/member/get-friendList",true);
//	getFriendDatas.setRequestHeader("Content-Type",
//									"application/x-www-form-urlencoded");
//			
//			//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
//	getFriendDatas.onload = function()
//		{
//		
//			alert("여기까진 오나??");
//			
//			var getFriendDataList = JSON.parse(getFriendDatas.responseText);
//			//alert(getFriendDatas[0][0].id);
//			//alert(getFriendDatas[0][0].msg);
//			//alert(getFriendDatas[0][0].img);
//			//alert(getFriendDatas[1][0].id);
//			
////			var friendList ='<div class="friend">';
////				friendList +='<div class="friend-img">';
////				friendList +='</div>';
////				friendList += '<div class="friend-detail">';
////				friendList += '<label>'+getFriendDatas[][0].id+'</label>';
////				friendList += '<h6>'+getFriendDatas[][0].Msg+'</h6>';
////				friendList += '</div>';
////				friendList += '<div class="friend-ballon">';
////				friendList += '<img src="'+getFriendDatas[][0].Img+'" alt="">';
////				friendList += '</div>';
////				friendList += '</div>';
//				
//			var friendCp = document.querySelector("#friend-cp");
//			var friendList2 = document.querySelector(".friend-list");
//			
//			alert(getFriendDataList.length);
//			
//			for (var i = 0; i < getFriendDataList.length; i++) 
//			{
//				var tpl=document.importNode(friendCp.content, true);
//				var tmpLabel=tpl.querySelector("label");
//					tmpLabel.innerText=getFriendDatas[i][0].id;
//				var tmph6 =tpl.querySelector("h6");
//					tmph6.innerText=getFriendDatas[i][0].msg;
//				var tmlImg =tpl.querySelector(".friend-img");
//					tmlImg.style.backgroundImage = 
//						"url(/get-img?folder=member-profile&file="+getFriendDataList[i][0].img+")";
//					
//					friendList2.append(tpl);
//			}
//			
//			
//			
//		}
//		
//	getFriendDatas.send();
//	
//		
//		
//		
////		var memberRequest = new XMLHttpRequest();
////			memberRequest.setRequestHeader("Content-Type",
////			"application/x-www-form-urlencoded");
////			memberRequest.onload = function()
////			{
////				var getMemberList = JSON.parse(memberRequest.responseText);
////				alert(getMemberList[0].img.name);
////			}
////			
////			friendRequest.send();
////		
////		
////		
//			
//			
//			
//			
//			
//			
//			
////		var img = document.querySelector(".friend-img");
////		var profileImg = document.querySelector(".profile-img");
////		
////			img.style.backgroundImage= "url(/get-img?folder=member-profile&file=jaein.png)"; 
////			profileImg.style.backgroundImage= "url(/get-img?folder=member-profile&file=jaein.png)";
////			
////			
////		
////		
//};
//
//

