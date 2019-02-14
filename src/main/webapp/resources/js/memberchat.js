 $(function () 
		 {
            var screen = document.createElement("div");
            var chatlist = $(".chat-list");
            var friendpro = $(".friend-profile");

            chatlist.click(function () {
                chatlist.removeClass("chat-visited");
                $(this).addClass("chat-visited");

                if ($(".friend-list-container").find("." + $(this).data("id")).attr("class")) {
                    $(".friend-list-container > div").css({ "display": "none" });
                    $("." + $(this).data("id")).css({ "display": "block" });
                }
            })
            
            
            //  이미지를 눌렀을때 프로필에 사진과 내용이 박히게 만드는 함수
            
            $(function()
    		{
            	
            	var testDiv = document.querySelector(".friend-list-container");
            	testDiv.addEventListener("click", function(evt){
            		if(!evt.target.classList.contains("friend-img")) return;
            		
            		
            	var friendProfile = document.querySelector(".friend-profile");
            	
            	var target = evt.target;
        		var parent = target.parentNode;
        		var friendId = parent.querySelector(".friend-id")
        		
        		
        		var friendId = parent.querySelector(".friend-detail").querySelector("label").innerText;
      
            	var friendImg = parent.querySelector(".friend-img").style.backgroundImage;
           		
            	var friendMsg = parent.querySelector(".friend-msg").innerText;
           		
    				
    				var friendProfile = document.querySelector(".friend-profile");
    		
    				var profileImg = friendProfile.querySelector(".chat-profile-img");
    				profileImg.style.backgroundImage = friendImg;
    
    				var profileId = friendProfile.querySelector(".chat-profile-id");
    				profileId.innerText=friendId;
   
    				var profileMsg = friendProfile.querySelector(".chat-profile-msg");
    				profileMsg.innerText=friendMsg;
   
    				
    				
                    screen.classList.add("screen");
                    $("#aside-div").append(screen);
                    
                    
                    friendpro.animate({
                        bottom: "0"
                    });

                    $(".exit-button").click(function (e) 
                    {
	                        friendpro.animate(
	                		{
	                            bottom: "-160px"
	                		});
                    $(".screen").remove();
                    });
		                    $(".screen").click(function () 
		            		{
				                        friendpro.animate(
		                        		{
				                            bottom: "-160px"
		                        		});
				                        $(".screen").remove();
		                    });

                	
            	});
    		})

            
            

            $(function () {
                $(".close-chat").click(function () {
                    $("#aside-div").animate({
                        left: "-100%"
                    }, false)
                })
            })
            $(function () {
                $(".adminclose-chat").click(function () {
                    $("#adminchat").animate({
                        left: "-100%"
                    }, false)
                })
            })
           
            $(function () 
            	{
	                $("#open-chat").click(function () {
	                    $("#aside-div").animate({
	                        left: "0%"
	                    }, false)
	                });
            	
            	
            	})
            	
        	$(function () 
        	{
                $("#open-chat").click(function () {
                    $("#adminchat").animate({
                        left: "0%"
                    }, false)
                });
        	
        	
        	})
 

            // alert($(".friend-profile").css("bottom"));

            // $("aside").click(function () {
            //     if ($(".friend-profile").css("bottom") == "0px") {
            //         $(".friend-profile").animate({
            //             bottom: "-160px",display:"fixed"
            //         })
            //     }
            // })
        });
        $(function () {
            var screenrprt = document.createElement("div");
            screenrprt.style.zIndex = "2";
            screenrprt.classList.add("screen");
            $(".rprt-button").click(function () {
                $("#aside-div").append(screenrprt);
                $(".rprt").css({ "top": "20%" });

            });
            $(".rprt-exit").click(function () {
                $(".chat-rprt").css({ "top": "-120%" });
                screenrprt.remove();
            });

        });

        $(function () {
            $(".message-detail").click(function () {
                $(".chat-window").animate({
                    left: "0"
                })
            })
            $(".chat-window-header span").click(function () {
                $(".chat-window").animate({
                    left: "100%"
                })
            })

        })

        $(function () {
            $(".adminmessage-detail").click(function () {
                $(".admin-chat-window").animate({
                    left: "0"
                })
            })
            $(".admin-chat-window-header span").click(function () {
                $(".admin-chat-window").animate({
                    left: "100%"
                })
            })

        })
        
        //  @@@@@@@@ 친구 목록에서 채팅버튼을 눌렀을 때 사용하는 함수   @@@@@@@@
        
        $(function()
        {
        	var testDiv = document.querySelector(".friend-list-container");
        	testDiv.addEventListener("click", function(evt)
        	{
        		
        		if(!evt.target.classList.contains("friend-balloon-img")) return;
        		$(".chat-window-main").empty();
        		
        		
        		var target = evt.target;
        		var parent = target.parentNode.parentNode;
        		var friendId = parent.querySelector(".friend-id").innerText;
        		var friendImg = parent.querySelector(".friend-img").style.backgroundImage;
        		$(".chat-fr-img").val(friendImg);
        //		alert(friendId.innerText);
        		
        		// 내가 선택한 대화상대의 ID 를 보기 위한 alert 이다.
    //    		alert(friendId);
   //     		alert(friendImg);
				var friendChattingRoomName = document.querySelector(".friend-chatting-roomname");
				friendChattingRoomName.innerText=friendId;
				
        		
				var memberChattingList = new XMLHttpRequest();
	   			
				memberChattingList.open("POST","/member/get-memberChatting",true);
				memberChattingList.setRequestHeader("Content-Type",
	   										"application/x-www-form-urlencoded");
	   				
	   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
	   			memberChattingList.onload = function()
	   				{
	   					var getmemberChattingList = JSON.parse(memberChattingList.responseText);
	   						
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
	
	   					
	   					var mytpl = document.querySelector("#my-chat-txt");
	   					var frtpl = document.querySelector("#friend-chat-txt");
	   					var chatarea = document.querySelector(".chat-window-main");
	   					
	   					for (var i = 0; i < getmemberChattingList.length; i++) 
	   					{
	   						
	   		//				alert("채팅을 쓴 id : "+getmemberChattingList[i].id);
	   						
							if(getmemberChattingList[i].id==$(".thisMyId").val())
							{
								
								
						//테스트용으로 확인한 날짜 계산용 년,월,일,시,분,초
	   					var testd = new Date(getmemberChattingList[i].regDate);
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
	   					if(hour <=12 && hour >=1)
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
//	   				
	   					
	   					if(todayDay==chatCheck)
	   						
	   					{
	   						chatDate ="오늘 "+" "+hour+":"+minutes;
	   					}
	   					else
	   					{
	   						chatDate = year+"."+month+"."+day+" "+hour+":"+minutes;
	   					}
								
							
								var mtpl = document.importNode(mytpl.content,true);
						//		var myId = mtpl.querySelector(".my-chat-id");
						//		var myImg = mtpl.querySelector(".my-chat-img");
								var myTxta = mtpl.querySelector(".my-chat-txta");
								var myDate = mtpl.querySelector(".my-chat-date");
								
						//		myId.innerText = getmemberChattingList[i].id;
						//		myImg.style.backgroundImage = getmemberChattingList[i].img;
								myTxta.value = getmemberChattingList[i].content;
								myDate.innerText = chatDate;
								
								chatarea.append(mtpl);
								
							}
							else
							{
								//테스트용으로 확인한 날짜 계산용 년,월,일,시,분,초
			   					var testd = new Date(getmemberChattingList[i].regDate);
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
			   					if(hour <=12 && hour >=1)
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
//			   				
			   					
			   					if(todayDay==chatCheck)
			   						
			   					{
			   						chatDate ="오늘 "+" "+hour+":"+minutes;
			   					}
			   					else
			   					{
			   						chatDate = year+"."+month+"."+day+" "+hour+":"+minutes;
			   					}
								
								
								
								var ftpl = document.importNode(frtpl.content,true);
								var frId = ftpl.querySelector(".friend-chat-id");
								var frImg = ftpl.querySelector(".friend-chat-img");
								var frTxta = ftpl.querySelector(".friend-chat-txta");
								var frDate = ftpl.querySelector(".friend-chat-date");
								
								frId.innerText = getmemberChattingList[i].id;
								frImg.style.backgroundImage =
			                        "url(/get-img?folder=member-profile&file="+getmemberChattingList[i].img+")";
									
									
								frTxta.value = getmemberChattingList[i].content;
								frDate.innerText=chatDate;
								
								chatarea.append(ftpl);
								
							}
							
							
							
						}
	   					$(".chat-window-main").scrollTop($(".chat-window-main").height()+9999999);
	   					
	   					
	   					$(".chat-window").delay(500).animate({
	   	                    left: "0"
	   	                })
	   			//		+9999999
	   				}
	   			
	   			
	   			memberChattingList.send("friendId="+friendId);
        		
        		
        		
        	});
        	
        	
        	
        	/*
            $(".friend-balloon").click(function () {
                $(".chat-window").animate({
                    left: "0"
                })
                
            })**/
        	
            $(".chat-window-header span").click(function () 
            		{
		                $(".chat-window").animate({
		                    left: "100%"
		                });
		                
		            });
        });
        
        
      //메시지 목록을 눌렀을때 채팅 하기
        $(function()
		{
	
        	if($(".thisMyId").val() != "admin")
        	{
	        	var testDiv = document.querySelector(".friend-list-container");
	        	testDiv.addEventListener("click", function(evt)
	        	{
	        		
	        		if(!evt.target.classList.contains("member-detail")) return;
	        		$(".chat-window-main").empty();
	        		
	        		
	        		
	        		var target = evt.target;
	        		
	        		
	        		var parent = target.parentNode.parentNode;
	        		var friendId = target.querySelector(".message-list-id").innerText;
	    //    		alert("친구아이디인데 어디민 떠ㅑ함ㅁ"+friendId);
	
	        		var friendImg = target.parentNode.querySelector(".message-list-img").style.backgroundImage;
	    //    		alert(friendImg);
	        		
	        		
	        		$(".chat-fr-img").val(friendImg);
	        //		alert(friendId.innerText);
	        		
	        		// 내가 선택한 대화상대의 ID 를 보기 위한 alert 이다.
	    //    		alert(friendId);
	   //     		alert(friendImg);
					var friendChattingRoomName = document.querySelector(".friend-chatting-roomname");
					friendChattingRoomName.innerText=friendId;
					
	        		
					var memberChattingList2 = new XMLHttpRequest();
		   			
					memberChattingList2.open("POST","/member/get-memberChatting2",true);
					memberChattingList2.setRequestHeader("Content-Type",
		   										"application/x-www-form-urlencoded");
		   				
		   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
					memberChattingList2.onload = function()
		   				{
		   					var getmemberChattingList2 = JSON.parse(memberChattingList2.responseText);
		   						
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
		
		   					
		   					var mytpl = document.querySelector("#my-chat-txt");
		   					var frtpl = document.querySelector("#friend-chat-txt");
		   					var chatarea = document.querySelector(".chat-window-main");
		   					
		   					for (var i = 0; i < getmemberChattingList2.length; i++) 
		   					{
		   						
		   		//				alert("채팅을 쓴 id : "+getmemberChattingList[i].id);
		   						
							if(getmemberChattingList2[i].id==$(".thisMyId").val())
							{
									
									
							//테스트용으로 확인한 날짜 계산용 년,월,일,시,분,초
		   					var testd = new Date(getmemberChattingList2[i].regDate);
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
		   					if(hour <=12 && hour >=1)
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
	//	   				
		   					
		   					if(todayDay==chatCheck)
		   						
		   					{
		   						chatDate ="오늘 "+" "+hour+":"+minutes;
		   					}
		   					else
		   					{
		   						chatDate = year+"."+month+"."+day+" "+hour+":"+minutes;
		   					}
									
								
									var mtpl = document.importNode(mytpl.content,true);
							//		var myId = mtpl.querySelector(".my-chat-id");
							//		var myImg = mtpl.querySelector(".my-chat-img");
									var myTxta = mtpl.querySelector(".my-chat-txta");
									var myDate = mtpl.querySelector(".my-chat-date");
									
							//		myId.innerText = getmemberChattingList[i].id;
							//		myImg.style.backgroundImage = getmemberChattingList[i].img;
									myTxta.value = getmemberChattingList2[i].content;
									myDate.innerText = chatDate;
									
									chatarea.append(mtpl);
									
								}
								else
								{
									//테스트용으로 확인한 날짜 계산용 년,월,일,시,분,초
				   					var testd = new Date(getmemberChattingList2[i].regDate);
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
	//			   				
				   					
				   					if(todayDay==chatCheck)
				   						
				   					{
				   						chatDate ="오늘 "+" "+hour+":"+minutes;
				   					}
				   					else
				   					{
				   						chatDate = year+"."+month+"."+day+" "+hour+":"+minutes;
				   					}
									
									
									
									var ftpl = document.importNode(frtpl.content,true);
									var frId = ftpl.querySelector(".friend-chat-id");
									var frImg = ftpl.querySelector(".friend-chat-img");
									var frTxta = ftpl.querySelector(".friend-chat-txta");
									var frDate = ftpl.querySelector(".friend-chat-date");
									
									frId.innerText = getmemberChattingList2[i].id;
									frImg.style.backgroundImage =
				                        "url(/get-img?folder=member-profile&file="+getmemberChattingList2[i].img+")";
										
									frTxta.value = getmemberChattingList2[i].content;
									frDate.innerText=chatDate;
									
									chatarea.append(ftpl);
									
								}
								
								
								
							}
		   					$(".chat-window-main").scrollTop($(".chat-window-main").height()+9999999);
		   					
		   					
		   					$(".chat-window").delay(500).animate({
		   	                    left: "0"
		   	                })
		   			//		+9999999
		   				}
		   			
		   			
		   			memberChattingList2.send("friendId="+friendId);
	        		
	        		
	        	});
        	}
        	
        	
		})

        // 1:1 문의에서 ADMIN을 눌렀을 때 관리자와의 대화를 가져오는 FUNCTION
         $(function()
		{
	
        	var testadDiv = document.querySelector(".friend-list-container");
        	testadDiv.addEventListener("click", function(evt)
        	{
        		
        		if(!evt.target.classList.contains("admin-list-detail")) return;
        		$(".chat-window-main").empty();
        		
       // 		alert($(".adminImg").val());
        		
        //		alert("여기는 admin 과의 대화를 하는 곳");
        		
        		var target = evt.target;
        		
        //		alert(target.className);
        		
        		var parent = target.parentNode.parentNode;
        		var friendId = target.querySelector(".admin-list-id").innerText;

        		var friendImg = $(".adminImg").val();
//        		alert(friendImg);
        		
        		
        		$(".chat-fr-img").val(friendImg);
        //		alert(friendId.innerText);
        		
        		// 내가 선택한 대화상대의 ID 를 보기 위한 alert 이다.
    //    		alert(friendId);
   //     		alert(friendImg);
				var friendChattingRoomName = document.querySelector(".friend-chatting-roomname");
				friendChattingRoomName.innerText=friendId;
				
        		
				var memberAdminChattingList = new XMLHttpRequest();
	   			
				memberAdminChattingList.open("POST","/member/get-memberAdminChatting",true);
				memberAdminChattingList.setRequestHeader("Content-Type",
	   										"application/x-www-form-urlencoded");
	   				
	   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
				memberAdminChattingList.onload = function()
	   				{
	   					var getmemberAdminChattingList = JSON.parse(memberAdminChattingList.responseText);
	   						
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
	
	   					
	   					var mytpl = document.querySelector("#my-chat-txt");
	   					var frtpl = document.querySelector("#friend-chat-txt");
	   					var chatarea = document.querySelector(".chat-window-main");
	   					
	   					for (var i = 0; i < getmemberAdminChattingList.length; i++) 
	   					{
	   						
	   		//				alert("채팅을 쓴 id : "+getmemberAdminChattingList[i].id);
	   						
						if(getmemberAdminChattingList[i].id==$(".thisMyId").val())
						{
								
								
						//테스트용으로 확인한 날짜 계산용 년,월,일,시,분,초
	   					var testd = new Date(getmemberAdminChattingList[i].regDate);
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
	   					if(hour <=12 && hour >=1)
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
//	   				
	   					
	   					if(todayDay==chatCheck)
	   						
	   					{
	   						chatDate ="오늘 "+" "+hour+":"+minutes;
	   					}
	   					else
	   					{
	   						chatDate = year+"."+month+"."+day+" "+hour+":"+minutes;
	   					}
								
							
								var mtpl = document.importNode(mytpl.content,true);
						//		var myId = mtpl.querySelector(".my-chat-id");
						//		var myImg = mtpl.querySelector(".my-chat-img");
								var myTxta = mtpl.querySelector(".my-chat-txta");
								var myDate = mtpl.querySelector(".my-chat-date");
								
						//		myId.innerText = getmemberAdminChattingList[i].id;
						//		myImg.style.backgroundImage = getmemberAdminChattingList[i].img;
								myTxta.value = getmemberAdminChattingList[i].content;
								myDate.innerText = chatDate;
								
								chatarea.append(mtpl);
								
							}
							else
							{
								//테스트용으로 확인한 날짜 계산용 년,월,일,시,분,초
			   					var testd = new Date(getmemberAdminChattingList[i].regDate);
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
			   					if(hour <=12 && hour >=1)
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
//			   				
			   					
			   					if(todayDay==chatCheck)
			   						
			   					{
			   						chatDate ="오늘 "+" "+hour+":"+minutes;
			   					}
			   					else
			   					{
			   						chatDate = year+"."+month+"."+day+" "+hour+":"+minutes;
			   					}
								
								
								
								var ftpl = document.importNode(frtpl.content,true);
								var frId = ftpl.querySelector(".friend-chat-id");
								var frImg = ftpl.querySelector(".friend-chat-img");
								var frTxta = ftpl.querySelector(".friend-chat-txta");
								var frDate = ftpl.querySelector(".friend-chat-date");
								
								frId.innerText = getmemberAdminChattingList[i].id;
								frImg.style.backgroundImage = 
									"url(/get-img?folder=member-profile&file="+getmemberAdminChattingList[i].img+")";
								frTxta.value = getmemberAdminChattingList[i].content;
								frDate.innerText=chatDate;
								
								chatarea.append(ftpl);
								
							}
							
							
							
						}
	   					$(".chat-window-main").scrollTop($(".chat-window-main").height()+9999999);
	   					
	   					
	   					$(".chat-window").delay(500).animate({
	   	                    left: "0"
	   	                })
//	   			//		+9999999
	   				}
	   			
	   			
				memberAdminChattingList.send();
        		
        		
        	});
	
        	
        	
		})
		
		
//////////////////////내가 ADMIN 일 경우 나에게 온 친구의 대화목록을 가져오는 함수/////////////////////////////////////////////////////
		
function adminMemberChat()
{
	
	
	if($(".thisMyId").val()=="admin")
	{
		
    	var ADMDiv = document.querySelector(".adminfriend-list-container");
    	ADMDiv.addEventListener("click", function(evt)
    	{
    		
    		//alert("들어오긴하니?");
    		
    		if(!evt.target.classList.contains("adminmessage-detail")) return;
    		$(".admin-chat-window-main").empty();
    	//	alert("들어오긴하니?");
    		
    		
    		var target = evt.target;
    		
    	//	alert("내가 누른아이의 className :"+target.className);
    		
 //   		var parent = target.parentNode.parentNode;
    		var friendId = target.querySelector(".adminfriend-id").innerText;
    	//	alert("친구아이디인데 어디민 떠ㅑ함ㅁ"+friendId);

    		var friendImg = target.parentNode.querySelector(".adminfriend-img").style.backgroundImage;
    	//	alert(friendImg);
    		
    		
    		$(".chat-fr-img").val(friendImg);
    //		alert(friendId.innerText);
    		
    		// 내가 선택한 대화상대의 ID 를 보기 위한 alert 이다.
//    		alert(friendId);
   //     		alert(friendImg);
			var friendChattingRoomName = document.querySelector(".admin-friend-chatting-roomname");
			friendChattingRoomName.innerText=friendId;
			
    		
			var adminMemberChattingList = new XMLHttpRequest();
   			
			adminMemberChattingList.open("POST","/admin/get-adminMember-Chatting",true);
			adminMemberChattingList.setRequestHeader("Content-Type",
   										"application/x-www-form-urlencoded");
   				
   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
			adminMemberChattingList.onload = function()
   				{
   					var getmemberChattingList2 = JSON.parse(adminMemberChattingList.responseText);
   						
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

   					
   					var mytpl = document.querySelector("#admin-my-chat-txt");
   					var frtpl = document.querySelector("#admin-friend-chat-txt");
   					var chatarea = document.querySelector(".admin-chat-window-main");
   					
   					for (var i = 0; i < getmemberChattingList2.length; i++) 
   					{
   						
   		//				alert("채팅을 쓴 id : "+getmemberChattingList[i].id);
   						
					if(getmemberChattingList2[i].id==$(".thisMyId").val())
					{
							
							
					//테스트용으로 확인한 날짜 계산용 년,월,일,시,분,초
   					var testd = new Date(getmemberChattingList2[i].regDate);
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
   					if(hour <=12 && hour >=1)
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
//	   				
   					
   					if(todayDay==chatCheck)
   						
   					{
   						chatDate ="오늘 "+" "+hour+":"+minutes;
   					}
   					else
   					{
   						chatDate = year+"."+month+"."+day+" "+hour+":"+minutes;
   					}
							
						
							var mtpl = document.importNode(mytpl.content,true);
					//		var myId = mtpl.querySelector(".my-chat-id");
					//		var myImg = mtpl.querySelector(".my-chat-img");
							var myTxta = mtpl.querySelector(".admin-my-chat-txta");
							var myDate = mtpl.querySelector(".admin-my-chat-date");
							
					//		myId.innerText = getmemberChattingList[i].id;
					//		myImg.style.backgroundImage = getmemberChattingList[i].img;
							myTxta.value = getmemberChattingList2[i].content;
							myDate.innerText = chatDate;
							
							chatarea.append(mtpl);
							
						}
						else
						{
							//테스트용으로 확인한 날짜 계산용 년,월,일,시,분,초
		   					var testd = new Date(getmemberChattingList2[i].regDate);
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
//			   				
		   					
		   					if(todayDay==chatCheck)
		   						
		   					{
		   						chatDate ="오늘 "+" "+hour+":"+minutes;
		   					}
		   					else
		   					{
		   						chatDate = year+"."+month+"."+day+" "+hour+":"+minutes;
		   					}
							
							
							
							var ftpl = document.importNode(frtpl.content,true);
							var frId = ftpl.querySelector(".admin-friend-chat-id");
							var frImg = ftpl.querySelector(".admin-friend-chat-img");
							var frTxta = ftpl.querySelector(".admin-friend-chat-txta");
							var frDate = ftpl.querySelector(".admin-friend-chat-date");
							
							frId.innerText = getmemberChattingList2[i].id;
							frImg.style.backgroundImage =
		                        "url(/get-img?folder=member-profile&file="+getmemberChattingList2[i].img+")";
								
							frTxta.value = getmemberChattingList2[i].content;
							frDate.innerText=chatDate;
							
							chatarea.append(ftpl);
							
						}
						
						
						
					}
   					$(".admin-chat-window-main").scrollTop($(".admin-chat-window-main").height()+9999999);
   					
   					
   					$(".admin-chat-window").delay(500).animate({
   	                    left: "0"
   	                })
   			//		+9999999
   				}
   			
   			
			adminMemberChattingList.send("friendId="+friendId);
    		
    		
    	});
	}
	
	
}
		
		
		
		
		
		
		
		
		
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $(function()
        {
            var btnschk= true;
            var openchk=false;

      //      console.log("밖 top:"+openchk);

            

            $(".text-area-btns").click(function()
            {
                 
                 openchk=true;

                if(btnschk)
                {
                    $(".screen-w").css({display:"block"})

                    $(".text-area").animate({height:"200px"}).css({gridTemplateRows:"15% 85%"})
                    $(".btns-round").animate({height:"100%"}).css({display:"grid"});
                     openchk = true;
                     
                     
                }
                
                else
                {
                    $(".screen-w").css({display:"none"})

                    $(".text-area").animate({height:"30px"}).css({gridTemplateRows:"100%"})
                    $(".btns-round").animate({height:"0%"}).css({display:"none"});
                     openchk = false;
                     
                }
                btnschk = !btnschk;
     //           console.log("안:"+openchk);
            })

   //         console.log("밖 bottom:"+openchk);

            $(".screen-w").click(function () 
                {
                    $(".text-area").animate({height:"30px"}).css({gridTemplateRows:"100%"})
                    $(".btns-round").animate({height:"0%"}).css({display:"none"});

                    $(".screen-w").css({display:"none"})
                    btnschk = !btnschk;
                });
                

            

            // $(".friend-img").click(function () {
            //     screenW.classList.add("screen-w");
            //     $("aside").append(screenW);
                

            //     $(".exit-button").click(function (e) {
                    
            //         $(".screenW").remove();
            //     });
            //     $(".screenW").click(function () {

            //         $(".text-area").animate({height:"30px"}).css({gridTemplateRows:"100%"})
            //         $(".btns-round").animate({height:"0%"}).css({display:"none"});


            //         $(".screenW").remove();
            //     });

            // });

        })
        
        
        
       function soketchatting() 
	   {
	    	// localhost에 접속하고 싶은 ip를 쓰고 사이트는 내 ip로 접속 하면  상대방에게 채팅을 보낼 수 있다.

	   		var socket = new WebSocket("ws://localhost:80/chat-server");
	
	   		// WebsocketEndPonint가 메시지를 보내주면 오는 onmessage
	   		socket.onmessage = function(e)
	   		{
	   			//alert($(".thisMyId").val());
	   			
	   			//reboot();
//	   			if($(".thisMyId").val()=="admin")
//	   			{
//	   				adminMemberLimit();
//	   				
//	   			}
//	   			else if($(".thisMyId").val()!="admin")
//	   			{
//	   				messageList();
//	   				admintalk();
//	   			}
//	   			console.log(e.data);
	   			
	   			
	   			
	   			
	   			var spliteChat = e.data;
	   			
	   			var strArray = spliteChat.split('.');
	   			
	   			var senderId = strArray[0];
	   			var receiverId = strArray[1];
	   			var chatcontent = strArray[2];
	   			
//	   			console.log("보낸이 : "+senderId+" / "
//	   					+"받는이 : "+receiverId+" / "
//	   					+"내용 : "+chatcontent);
	   			
	   			
	   			if( (chatcontent!=null && chatcontent!="") || chatcontent!=="undefined")
	   			{
	   		//		gii();
	   				reboot();
	   			}
	   			
	   			
	   			
	   			//오늘 날짜와 시간을 채워넣기 위해 만든 변수들 
	   			
	   		//오늘 년,월,일,시,분,초 다 가져오기
					var ajxtoday = new Date();
					
					// 그중에서 오늘의 년,월,일 만 간추려서 만들기위해 변수 선언
//					var ajxtyear = ajxtoday.getFullYear();
//					var ajxtmonth = ajxtoday.getMonth()+1;
//					var ajxtday = ajxtoday.getDate();
					
					
					var ajxthour = ajxtoday.getHours();
   					var ajxtminutes = ajxtoday.getMinutes();
   					
   					
   					// 시간 PM , AM 으로 나누기위한 if 문
   					if(ajxthour <=12 && ajxthour >=1)
   					{
   						
   						if(ajxthour<10)
   						{
   							ajxthour = "오전 "+"0"+ajxthour;
   						}
   						else
   						{
   							ajxthour = "오전 "+ajxthour;
   						}
   					}
   					else if(ajxthour >=12 && ajxthour <= 24)
   					{
   						ajxthour = (ajxthour-12);
   						
   						if(ajxthour<10)
   						{
   							ajxthour = "오후 "+"0"+ajxthour;
   						}
   						else
   						{
   							ajxthour = "오후 "+ajxthour;
   						}
   						
   					}
   					// 분 이쁘게 꾸미기
   					if(ajxtminutes<10)
   					{
   						ajxtminutes = "0"+ajxtminutes;
   					}
   					
   					
					
					var ajxtodayDay = ajxthour+" : "+ajxtminutes;
	//				alert("채팅을 입력하자 마자 들어갈 append용 시간: : "+ajxtodayDay);
					
					
					
					
					
					if($(".thisMyId").val()!='admin')
					{
						var ajxmytpl = document.querySelector("#my-chat-txt");
						var ajxfrtpl = document.querySelector("#friend-chat-txt");
						var ajxchatarea = document.querySelector(".chat-window-main");
				   			
				 //  			alert("내가 선택한 친구의 이미지 경로 : "+$(".chat-fr-img").val());
				   		// template 들과 채팅을 append 할 textarea
				   			
				   			
				   			
				   			// 메시지가 왔다는 것을 알자마자 우리는 작성자 , 받는이 , 대화내용 으로 잘라서 
				   			// template를 이용하여 채팅방에 넣어 주기로 하였다.
				   			// 내가 필요한 건 대화내용을 채울때와 마찬가지로 
				   			// 내 채팅 과 친구의 채팅을 구분 지을수 있는 각각의 template
				   			
				   			//우선 보낸사람이 친구 인 경우 쓰는 템플릿
				  // 			alert($(".thisMyId").val());
				  // 			alert($(".friend-chatting-roomname").text());
				   			if( ( senderId==$(".friend-chatting-roomname").text() ) && ( receiverId==$(".thisMyId").val() ) )
				   			{
							
					   			var ajxftpl = document.importNode(ajxfrtpl.content,true);
								var ajxfrId = ajxftpl.querySelector(".friend-chat-id");
								var ajxfrImg = ajxftpl.querySelector(".friend-chat-img");
								var ajxfrTxta = ajxftpl.querySelector(".friend-chat-txta");
								var ajxfrDate = ajxftpl.querySelector(".friend-chat-date");
								
								
								ajxfrId.innerText = senderId;
								ajxfrImg.style.backgroundImage = $(".chat-fr-img").val();
								ajxfrTxta.value = chatcontent;
								ajxfrDate.innerText= ajxtodayDay;
								
								ajxchatarea.append(ajxftpl);
								
					   			
					   		}
				   			else if( ( senderId==$(".thisMyId").val() ) && ( receiverId== $(".friend-chatting-roomname").text() ) )
				   			{
				   	//			alert("들어오긴하니?");
					   			//보낸 사람이 나 인 경우 쓰는 템플릿
								var ajxmtpl = document.importNode(ajxmytpl.content,true);
						//		var myId = mtpl.querySelector(".my-chat-id");
						//		var myImg = mtpl.querySelector(".my-chat-img");
								var ajxmyTxta = ajxmtpl.querySelector(".my-chat-txta");
								var ajxmyDate = ajxmtpl.querySelector(".my-chat-date");
								
					//			alert("내가쓴 내용확인 : "+chatcontent);
								
			//					myId.innerText = getmemberChattingList[i].id;
								//		myImg.style.backgroundImage = getmemberChattingList[i].img;
								
				//				alert(ajxmyTxta);
								ajxmyTxta.value = chatcontent;
								ajxmyDate.innerText = ajxtodayDay;
								
								ajxchatarea.append(ajxmtpl);
								
								
				   			}
				   			
				   			
				   		// 그룹채팅을 위해 준비한 if 문  	
				   		//	if(strArray[0]==$(".thisMyId").val() && strArry[2]==$(".friend-chatting-roomname").text())
				   			
				   			
				   			
				   			// 날짜와 이미지도 필요... ㄷㄷ?
				   			// 날짜는 가능 이미지는???? 전에있던 데이터를 가져온다? 그럼 채팅을 처음 한다면...?
				   			
								$(".chat-window-main").scrollTop($(".chat-window-main").height()+9999999);
								var resetTextArea = document.querySelector(".chat-textarea").value;
								
							//	alert($(".chat-textarea").val());
								$(".chat-textarea").val('');
			//					alert($(".chat-textarea").val());
			//					resetTextArea="";
								

						   		
						   		
					   		
					   		
								
								
								
					}
					if($(".thisMyId").val()=='admin')
					{
						
						
			   			
						 //  			alert("내가 선택한 친구의 이미지 경로 : "+$(".chat-fr-img").val());
						   		// template 들과 채팅을 append 할 textarea
						   			var adajxmytpl = document.querySelector("#admin-my-chat-txt");
									var adajxfrtpl = document.querySelector("#admin-friend-chat-txt");
									var adajxchatarea = document.querySelector(".admin-chat-window-main");
						   			
						   			
						   			// 메시지가 왔다는 것을 알자마자 우리는 작성자 , 받는이 , 대화내용 으로 잘라서 
						   			// template를 이용하여 채팅방에 넣어 주기로 하였다.
						   			// 내가 필요한 건 대화내용을 채울때와 마찬가지로 
						   			// 내 채팅 과 친구의 채팅을 구분 지을수 있는 각각의 template
						   			
						   			//우선 보낸사람이 친구 인 경우 쓰는 템플릿
						  // 			alert($(".thisMyId").val());
						  // 			alert($(".friend-chatting-roomname").text());
						   			if( ( senderId==$(".admin-friend-chatting-roomname").text() ) && ( receiverId==$(".thisMyId").val() ) )
						   			{
							   			var adajxftpl = document.importNode(ajxfrtpl.content,true);
										var adajxfrId = adajxftpl.querySelector(".admin-friend-chat-id");
										var adajxfrImg = adajxftpl.querySelector(".admin-friend-chat-img");
										var adajxfrTxta = adajxftpl.querySelector(".admin-friend-chat-txta");
										var adajxfrDate = adajxftpl.querySelector(".admin-friend-chat-date");
										
										
										adajxfrId.innerText = senderId;
										adajxfrImg.style.backgroundImage = $(".admin-chat-fr-img").val();
										adajxfrTxta.value = chatcontent;
										adajxfrDate.innerText= ajxtodayDay;
										
										adajxchatarea.append(adajxftpl);
										
							   			
							   		}
						   			else if( ( senderId==$(".thisMyId").val() ) && ( receiverId== $(".admin-friend-chatting-roomname").text() ) )
						   			{
	//					   				alert("이걸????");
							   			//보낸 사람이 나 인 경우 쓰는 템플릿
										var adajxmtpl = document.importNode(adajxmytpl.content,true);
								//		var myId = mtpl.querySelector(".my-chat-id");
								//		var myImg = mtpl.querySelector(".my-chat-img");
										var adajxmyTxta = adajxmtpl.querySelector(".admin-my-chat-txta");
										var adajxmyDate = adajxmtpl.querySelector(".admin-my-chat-date");
										
							//			alert("내가쓴 내용확인 : "+chatcontent);
										
					//					myId.innerText = getmemberChattingList[i].id;
										//		myImg.style.backgroundImage = getmemberChattingList[i].img;
										
						//				alert(ajxmyTxta);
										adajxmyTxta.value = chatcontent;
										adajxmyDate.innerText = ajxtodayDay;
										
										adajxchatarea.append(adajxmtpl);
										
										
						   			}
						   			
						   			
						   		// 그룹채팅을 위해 준비한 if 문  	
						   		//	if(strArray[0]==$(".thisMyId").val() && strArry[2]==$(".friend-chatting-roomname").text())
						   			
						   			
						   			
						   			// 날짜와 이미지도 필요... ㄷㄷ?
						   			// 날짜는 가능 이미지는???? 전에있던 데이터를 가져온다? 그럼 채팅을 처음 한다면...?
						   			
						   			
						   				$(".admin-chat-window-main").scrollTop($(".admin-chat-window-main").height()+9999999);
										var resetTextArea = document.querySelector(".admin-chat-textarea").value;
										
									//	alert($(".chat-textarea").val());
										$(".admin-chat-textarea").val('');
					//					alert($(".chat-textarea").val());
					//					resetTextArea="";
									
										
							
						
						   			
						
					}
					
//					if($(".thisMyId").val()!="admin"){
//					
//					$(".chat-send-button").click(function()
//					   		{
//					   			//var friendId ="nolec";
//					   			//alert($(".friend-chatting-roomname").text());
//					   			console.log( $(".chat-textarea").val() );
//					   			socket.send($(".thisMyId").val()+"."+$(".friend-chatting-roomname").text()+"."+ $(".chat-textarea").val());
//					   			var myId = $(".thisMyId").val();
//					   			var friendId =$(".friend-chatting-roomname").text();
//					   			var content = $(".chat-textarea").val();
//					   			
//					   			var insertChattingList1 = new XMLHttpRequest();
//					   			
//					   			insertChattingList1.open("POST","/member/insert-memberChatting",true);
//					   			insertChattingList1.setRequestHeader("Content-Type",
//					   										"application/x-www-form-urlencoded");
//					   				
//					   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
//					   			insertChattingList1.onload = function()
//					   				{
//					   					
//					   				}
//					   			
//					   			insertChattingList1.send("myId="+myId+"&friendId="+friendId+"&content="+content);
//					   			
//					   			
//					   		})
//					}
//					else if($(".thisMyId").val()=="admin"){
//					$(".admin-chat-send-button").click(function()
//		   			   		{
//						
//						alert("여기를 많이 들어오니?");
//		   			   			//var friendId ="nolec";
//		   			   			//alert($(".friend-chatting-roomname").text());
//		   			   			console.log( $(".admin-chat-textarea").val() );
//		   			   			socket.send($(".thisMyId").val()+"."+$(".admin-friend-chatting-roomname").text()+"."+ $(".admin-chat-textarea").val());
//		   			   			var myId = $(".thisMyId").val();
//		   			   			var friendId =$(".admin-friend-chatting-roomname").text();
//		   			   			var content = $(".admin-chat-textarea").val();
//		   			   			
//		   			   			var insertChattingList2 = new XMLHttpRequest();
//		   			   			
//		   			   		insertChattingList2.open("POST","/admin/insert-admin-memberChatting",true);
//		   			   	insertChattingList2.setRequestHeader("Content-Type",
//		   			   										"application/x-www-form-urlencoded");
//		   			   				
//		   			   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
//		   			 insertChattingList2.onload = function()
//		   			   				{
//		   			   					
//		   			   				}
//		   			   			
//		   			insertChattingList2.send("myId="+myId+"&friendId="+friendId+"&content="+content);
//		   			   			
//		   			   			
//		   			   			
//		   			   		})
//					}
	   		}
	   		
	   		
	   		$(function()
			{
	   			if($(".thisMyId").val()!="admin"){
					
					$(".chat-send-button").click(function()
					   		{
					   			//var friendId ="nolec";
					   			//alert($(".friend-chatting-roomname").text());
			//		   			console.log( $(".chat-textarea").val() );
					   			socket.send($(".thisMyId").val()+"."+$(".friend-chatting-roomname").text()+"."+ $(".chat-textarea").val());
					   			var myId = $(".thisMyId").val();
					   			var friendId =$(".friend-chatting-roomname").text();
					   			var content = $(".chat-textarea").val();
					   			
					   			var insertChattingList1 = new XMLHttpRequest();
					   			
					   			insertChattingList1.open("POST","/member/insert-memberChatting",true);
					   			insertChattingList1.setRequestHeader("Content-Type",
					   										"application/x-www-form-urlencoded");
					   				
					   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
					   			insertChattingList1.onload = function()
					   				{
					   					
					   				}
					   			
					   			insertChattingList1.send("myId="+myId+"&friendId="+friendId+"&content="+content);
					   			
					   			
					   		})
					}
					else if($(".thisMyId").val()=="admin"){
					$(".admin-chat-send-button").click(function()
		   			   		{
						
		//				alert("여기를 많이 들어오니?");
		   			   			//var friendId ="nolec";
		   			   			//alert($(".friend-chatting-roomname").text());
		//   			   			console.log( $(".admin-chat-textarea").val() );
		   			   			socket.send($(".thisMyId").val()+"."+$(".admin-friend-chatting-roomname").text()+"."+ $(".admin-chat-textarea").val());
		   			   			var myId = $(".thisMyId").val();
		   			   			var friendId =$(".admin-friend-chatting-roomname").text();
		   			   			var content = $(".admin-chat-textarea").val();
		   			   			
		   			   			var insertChattingList2 = new XMLHttpRequest();
		   			   			
		   			   		insertChattingList2.open("POST","/admin/insert-admin-memberChatting",true);
		   			   	insertChattingList2.setRequestHeader("Content-Type",
		   			   										"application/x-www-form-urlencoded");
		   			   				
		   			   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
		   			 insertChattingList2.onload = function()
		   			   				{
		   			   					
		   			   				}
		   			   			
		   			insertChattingList2.send("myId="+myId+"&friendId="+friendId+"&content="+content);
		   			   			
		   			   			
		   			   			
		   			   		})
					}
	   			
	   			
			})

	   		
	   		
	   		
	   		
//	   		$(".friend-balloon").click(function()
//			{
//	//   			alert($(this).parent().find("label").text());
//	   			
//	   				
//			});

	   		
	   		
	   		
	   		
//	   		if($("thisMyId").val()!="admin")
//	   		{
//		   		
//		   		$(".chat-send-button").click(function()
//		   		{
//		   			//var friendId ="nolec";
//		   			//alert($(".friend-chatting-roomname").text());
//		   			console.log( $(".chat-textarea").val() );
//		   			socket.send($(".thisMyId").val()+"."+$(".friend-chatting-roomname").text()+"."+ $(".chat-textarea").val());
//		   			var myId = $(".thisMyId").val();
//		   			var friendId =$(".friend-chatting-roomname").text();
//		   			var content = $(".chat-textarea").val();
//		   			
//		   			var insertChattingList = new XMLHttpRequest();
//		   			
//		   			insertChattingList.open("POST","/member/insert-memberChatting",true);
//		   			insertChattingList.setRequestHeader("Content-Type",
//		   										"application/x-www-form-urlencoded");
//		   				
//		   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
//		   			insertChattingList.onload = function()
//		   				{
//		   					
//		   				}
//		   			
//		   			insertChattingList.send("myId="+myId+"&friendId="+friendId+"&content="+content);
//		   			
//		   			
//		   		})
//	   		
//	   		}
//	   		else if($("thisMyId").val()=='admin')
//	   		{
//		   		$(".admin-chat-send-button").click(function()
//		   		{
//		   			//var friendId ="nolec";
//		   			//alert($(".friend-chatting-roomname").text());
//		   			console.log( $(".admin-chat-textarea").val() );
//		   			socket.send($(".thisMyId").val()+"."+$(".admin-friend-chatting-roomname").text()+"."+ $(".admin-chat-textarea").val());
//		   			var myId = $(".thisMyId").val();
//		   			var friendId =$(".admin-friend-chatting-roomname").text();
//		   			var content = $(".admin-chat-textarea").val();
//		   			
//		   			var insertChattingList = new XMLHttpRequest();
//		   			
//		   			insertChattingList.open("POST","/admin/insert-memberChatting",true);
//		   			insertChattingList.setRequestHeader("Content-Type",
//		   										"application/x-www-form-urlencoded");
//		   				
//		   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
//		   			insertChattingList.onload = function()
//		   				{
//		   					
//		   				}
//		   			
//		   			insertChattingList.send("myId="+myId+"&friendId="+friendId+"&content="+content);
//		   			
//		   			
//		   			
//		   		})
//	   		
//	   		}
	   		
	   }

        