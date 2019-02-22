//그룹의 회원들의 이미지들을 맵형식으로 가져와서 히든 시켜놓기 위해 만드는 function
function test1111(imgsMap)
{
//	alert("2");

//	alert("imgsMap : "+imgsMap);
	//var imgMap = new Map();
//	imgMap.push('chlwl','chlwl.img');
	imgsMap.clear();
	var getGroupimgs = new XMLHttpRequest();
    
	var wwllss = window.location.search;
	var ttgroupIdArray= wwllss.split('=');
	var groupIdSt = ttgroupIdArray[1];
	
    //  alert("open전");   
      
	getGroupimgs.open("POST","/crowd/get-groupImgs",true);
	getGroupimgs.setRequestHeader("Content-Type",
                              "application/x-www-form-urlencoded");
            
            //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
	getGroupimgs.onload = function()
         {
	//	alert(imgsMap);
         	
  //          alert("너의 아이디가 들려");
            
            var comeOnGroupImgs = JSON.parse(getGroupimgs.responseText); 
    //        alert(comeOnGroupImgs[0].memberId+"  "+comeOnGroupImgs[0].img);
   //      alert("comeOnGroupImgs.length : "+comeOnGroupImgs.length)
            
            for (var i = 0; i < comeOnGroupImgs.length; i++) 
            {
            	
            	console.log(comeOnGroupImgs[i].memberId + " / " + comeOnGroupImgs[i].img);
            	imgsMap.set(comeOnGroupImgs[i].memberId,comeOnGroupImgs[i].img);
    //        	console.log(imgsMap.get(comeOnGroupImgs[i].memberId));
            	
			}
            
  //          alert("imgsMap.size : " + imgsMap.size);
            
            
         }
         
	getGroupimgs.send("groupIdSt="+groupIdSt);
	
	
}


$(function()
{
	document.querySelector(".group-chat-textarea").addEventListener('keydown',function(event)
			{
					if(event.keyCode==13)
					{
						event.preventDefault();
						document.querySelector(".group-chat-send-button").click();
					}
			})
})


//그룹채팅 을 클릭하면 그 그룹에 대한 대화를 받아온다.

$(function()
		{
//	alert("3");

	
		//$(".group-chat-window-main").empty();
	//	alert("윈로케이션 : "+window.location.search);
		var wwllss = window.location.search;
		var ttgroupIdArray= wwllss.split('=');
		var groupIdSt = ttgroupIdArray[1];

//		alert("그룹아이디:"+groupId);
//		alert("내 아이디 : "+$(".thisMyId").val());

		var getGroupChattingList = new XMLHttpRequest();

		getGroupChattingList.open("POST","/crowd/get-groupChattingList",true);
		getGroupChattingList.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");

		//그룹채팅을 누르자마자 ajax가 실행되며  DB에 있는 그룹의 대화목록을 가져올 것
		getGroupChattingList.onload = function()
		{
			var getGroupChatListData = JSON.parse(getGroupChattingList.responseText);

			//오늘 년,월,일,시,분,초 다 가져오기
			var today = new Date();

			// 그중에서 오늘의 년,월,일 만 간추려서 만들기위해 변수 선언
			var tyear = today.getFullYear();
			var tmonth = today.getMonth()+1;
			var tday = today.getDate();


			// 월, 일을 이쁘게 꾸미기위한 if 문들
			if(tmonth<10)
			{
				tmonth = "0"+tmonth;
			}
			if(tday < 10)
			{
				tday = "0"+tday;
			}

			var todayDay = tyear+"."+tmonth+"."+tday;


			var groupMyTpl = document.querySelector("#group-chat-my-tpl");
			var groupFrTpl = document.querySelector("#group-chat-you-tpl");
			var groupChatArea = document.querySelector(".group-chat-window-main");

			for (var i = 0; i < getGroupChatListData.length; i++) 
			{

//				alert("채팅을 쓴 id : "+getmemberChattingList[i].id);

				if(getGroupChatListData[i].senderId==$(".thisMyId").val())
				{

					//테스트용으로 확인한 날짜 계산용 년,월,일,시,분,초
					var testd = new Date(getGroupChatListData[i].regDate);
//					alert(testd);

					//화면에 뿌리기위해 사용 할 변수 년,월,일,시,분
					var year = testd.getFullYear();
					var month = testd.getMonth()+1;
					var day = testd.getDate();
					var hour = testd.getHours();
					var minutes = testd.getMinutes();

					//월 일 이쁘게 꾸미기
					if(month<10)
					{
						month = "0"+month;
					}
					if(day < 10)
					{
						day = "0"+day;
					}

					// 시간 PM , AM 으로 나누기위한 if 문
					if(hour <12 && hour >=1)
					{

						if(hour<10)
						{
							hour = "오전 "+"0"+hour;
						}
						else
						{
							hour = "오전 "+hour;
						}
					}
					else if(hour >=12 && hour <= 24)
					{
						hour = (hour-12);

						if(hour<10)
						{
							hour = "오후 "+"0"+hour;
						}
						else
						{
							hour = "오후 "+hour;
						}

					}
					// 분 이쁘게 꾸미기
					if(minutes<10)
					{
						minutes = "0"+minutes;
					}

					//테스트용으로 해본 쳌쳌ㅋ
					var chatCheck = year+"."+month+"."+day;
					var chatDate = year+"."+month+"."+day+" "+hour+":"+minutes;


					if(todayDay==chatCheck)

					{
						chatDate ="오늘 "+" "+hour+":"+minutes;
					}
					else
					{
						chatDate = year+"."+month+"."+day+" "+hour+":"+minutes;
					}


					var groupmtpl = document.importNode(groupMyTpl.content,true);
					//		var myId = mtpl.querySelector(".my-chat-id");
					//		var myImg = mtpl.querySelector(".my-chat-img");
					var groupmyTxta = groupmtpl.querySelector(".group-me-txt");
					var groupmyDate = groupmtpl.querySelector(".group-me-date");

					//		myId.innerText = getmemberChattingList[i].id;
					//		myImg.style.backgroundImage = getmemberChattingList[i].img;
					groupmyTxta.innerText = getGroupChatListData[i].content;
					groupmyDate.innerText = chatDate;

					groupChatArea.append(groupmtpl);

				}
				else
				{
					//테스트용으로 확인한 날짜 계산용 년,월,일,시,분,초
					var testd = new Date(getGroupChatListData[i].regDate);
					//				alert(testd);

					//화면에 뿌리기위해 사용 할 변수 년,월,일,시,분
					var year = testd.getFullYear();
					var month = testd.getMonth()+1;
					var day = testd.getDate();
					var hour = testd.getHours();
					var minutes = testd.getMinutes();

					//월 일 이쁘게 꾸미기
					if(month<10)
					{
						month = "0"+month;
					}
					if(day < 10)
					{
						day = "0"+day;
					}

					// 시간 PM , AM 으로 나누기위한 if 문
					if(hour <12 && hour >=1)
					{

						if(hour<10)
						{
							hour = "오전 "+"0"+hour;
						}
						else
						{
							hour = "오전 "+hour;
						}
					}
					else if(hour >=12 && hour <= 24)
					{
						hour = (hour-12);

						if(hour<10)
						{
							hour = "오후 "+"0"+hour;
						}
						else
						{
							hour = "오후 "+hour;
						}

					}
					// 분 이쁘게 꾸미기
					if(minutes<10)
					{
						minutes = "0"+minutes;
					}

					//테스트용으로 해본 쳌쳌ㅋ
					var chatCheck = year+"."+month+"."+day;
					var chatDate = year+"."+month+"."+day+" "+hour+":"+minutes;


					if(todayDay==chatCheck)

					{
						chatDate ="오늘 "+" "+hour+":"+minutes;
					}
					else
					{
						chatDate = year+"."+month+"."+day+" "+hour+":"+minutes;
					}



					var groupftpl = document.importNode(groupFrTpl.content,true);
					var groupfrId = groupftpl.querySelector(".group-you-id");
					var groupfrImg = groupftpl.querySelector(".group-you-img");
					var groupfrTxta = groupftpl.querySelector(".group-you-txt");
					var groupfrDate = groupftpl.querySelector(".group-chat-you-date");

					groupfrId.innerText = getGroupChatListData[i].senderId;
					// 그룹채팅에서 이미지를 눌렀을때 신고 하려고 만든 onclick   START
					groupfrImg.onclick=function(e)
					{
						var targetting = e.target;
				//		alert(targetting.className);
						var targetParent = targetting.parentNode;
				//		alert(targetParent.className);
						var memberId = targetParent.querySelector(".group-you-id").innerText;
				//		alert("memberId확인용 알터 : "+memberId);
						
						
						
						$(".click-profile-container").css({"display":"block"});
						$(".click-friend-profile").css({"background":"rgb(231, 205, 211)"});
			   			
			   			//////////////신고 했는지 안했는지//////////////////////////////////////////////
			   			
			   			var groupChkRprt = new XMLHttpRequest();
				        
				        //  alert("open전");   
				          
			   			groupChkRprt.open("POST","/member/chk-rprtId",true);
			   			groupChkRprt.setRequestHeader("Content-Type",
				                                  "application/x-www-form-urlencoded");
				                
				                //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
			   			groupChkRprt.onload = function()
			             {
			             
			      //          alert("너의 아이디가 들려");
			                
			  //              var comeonmyid = JSON.parse(gomyid.responseText); 
			          
			  //             $(".thisMyId").val(comeonmyid);
			               $(".click-chat-rprt-button").text(groupChkRprt.responseText);
			                
			                
			             }
				             
			   			groupChkRprt.send("rprtId="+memberId);
			   			
			   			
			   			///////////////친구 인지 아닌지/////////////////////////////////////////
			   			var groupChkFriend = new XMLHttpRequest();
			   	        
			   	        //  alert("open전");   
			   	          
			   			var selectMemberId =null;
			   			
			   			groupChkFriend.open("POST","/member/chk-friend",true);
			   			groupChkFriend.setRequestHeader("Content-Type",
			   	                                  "application/x-www-form-urlencoded");
			   	                
			   	        //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
			   			groupChkFriend.onload = function()
			   	             {
			   	             
			   	      //          alert("너의 아이디가 들려");
			   				//	alert(chkFriendData[0].length)
			   					var jsontest = groupChkFriend.responseText;
			   				
			   	                var groupChkFriendData = JSON.parse(groupChkFriend.responseText); 
			   					console.log(groupChkFriendData);
			   				//	alert(chkFriendData.isNull("regDate"));
			   				//	alert("1 : "+ chkFriendData.hasOwnProperty('regDate') );
			   				//	alert("2 : "+ jsontest.hasOwnProperty('regDate') );
			   				//	alert( $.inArray("regDate",chkFriendData) );
			   					
			   	          
			   	                // 친구가 아닐 시
			  	                if( groupChkFriendData.hasOwnProperty('regDate') )
			   	                {
			  	                	selectMemberId =groupChkFriendData.id;
			  	                	
			  	                	selectMemberId =groupChkFriendData.id;
			   	                	
			   	                	$(".click-chat-profile-id").text(groupChkFriendData.id);
			   	                	$(".click-chat-profile-msg").text(groupChkFriendData.msg);
			   	                	var fImg = document.querySelector(".click-chat-profile-img");
			   	                	
			   	                	fImg.style.backgroundImage =
				                        "url(/get-img?folder=member-profile&file="+groupChkFriendData.img+")";
			   	                	
			   	                	$(".click-box-F-noF").text('친구추가');
			   	                	
			   	                	
			   	                	
			   	                }
			   	                else
			   	                {
			   	                	$(".click-chat-profile-id").text(groupChkFriendData.id);
			   	                	$(".click-chat-profile-msg").text(groupChkFriendData.msg);
			   	                	var nofImg = document.querySelector(".click-chat-profile-img");
			   	                	nofImg.style.backgroundImage =
				                        "url(/get-img?folder=member-profile&file="+groupChkFriendData.img+")";
			   	                	
//			   	                	$(".click-chat-profile-img").style.backgroundImage =
//				                        "url(/get-img?folder=member-profile&file="+chkFriendData.img+")";
			   	                	
			   	                	
			   	                	
			   	                	$(".click-box-F-noF").text('친구삭제');
			   	                //	reChattingOn();
			   	                	
			   	                }
			   	               
			  	                
			  	                
			   	                
			   	                
			   	             }
			   	             
			   			groupChkFriend.send("memberId="+memberId);
			   			
			   			
						
						
						
						
						
						
					};
					
					// 그룹채팅에서 이미지를 눌렀을때 신고 하려고 만든 onclick   END
					
					
					
//					groupfrImg.replaceWith("<div class='group-you-img' onclick='groupchatImgClick();'></div>");
//					editbtn.replaceWith("<input class='comment-add-btn' type='button' value='수정' onclick='commentedit();'/>");
					groupfrImg.style.backgroundImage =
						"url(/get-img?folder=member-profile&file="+getGroupChatListData[i].img+")";

					groupfrTxta.innerText = getGroupChatListData[i].content;
					groupfrDate.innerText=chatDate;

					groupChatArea.append(groupftpl);

					
					
				}



			}
			$(".group-chat-window-main").scrollTop($(".group-chat-window-main").height()+9999999);

		//	test1111();
		}


	//	alert("groupId나가기 전"+groupIdSt)
		getGroupChattingList.send("groupIdSt="+groupIdSt);


			})

			









//			var testDiv = document.querySelector(".friend-list-container");
//			testDiv.addEventListener("click", function(evt)
//			{

//			if(!evt.target.classList.contains("member-detail")) return;

