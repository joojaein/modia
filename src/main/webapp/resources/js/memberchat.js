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
            	testDiv.addEventListener("click", function(evt)
    			{
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
            	//alert("111");
    		})

    		
    

            $(function () 
            {
         //   	alert("뭐라고 뜨니 ? : "+ $(".thisMyId").val() );
            	
            	if( $(".thisMyId").val() != "anonymousUser" )
            	{
            	
	                $(".close-chat").click(function () {
	                	$("#open-chat").css({"animation":"none"});
	                    $("#aside-div").animate({
	                        left: "-100%"
	                    }, false)
	                })
	                $("#open-chat").click(function () {
	                	$("#open-chat").css({"animation":"none"});
		                    $("#aside-div").animate({
		                        left: "0%"
		                    }, false)
		                });
	                
	                $(".adminclose-chat").click(function () {
	                	$("#open-chat").css({"animation":"none"});
	                    $("#adminchat").animate({
	                        left: "-100%"
	                    }, false)
	                })
	                $("#open-chat").click(function () {
	                	$("#open-chat").css({"animation":"none"});
	                    $("#adminchat").animate({
	                        left: "0%"
	                    }, false)
	               
	                });
	                
            	}
            	
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
     screenrprt.style.zIndex = "101";
     screenrprt.classList.add("screen");
     $(".chat-rprt-button").click(function () {
         $("#aside-div").append(screenrprt);
         $(".chat-rprt").css({ "bottom": "120px" });

     });
     $(".chat-rprt-exit").click(function () {
         $(".chat-rprt").css({ "bottom": "-120%" });
         screenrprt.remove();
     });
     if( matchMedia("screen and (min-width:361px)").matches )
     {
    	 $(".chat-rprt-button").click(function () {
             $("#aside-div").append(screenrprt);
             $(".chat-rprt").css({ "bottom": "150px" });

         });
     }
     else
     {
    	 $(".chat-rprt-button").click(function () {
             $("#aside-div").append(screenrprt);
             $(".chat-rprt").css({ "bottom": "120px" });

         });
     }
     $(".click-chat-rprt-button").click(function () {
        // $("#aside-div").append(screenrprt);
         $(".click-chat-rprt").css({ "bottom": "150px" });

     });
     $(".click-chat-rprt-exit").click(function () {
         $(".click-chat-rprt").css({ "bottom": "-120%" });
      //   screenrprt.remove();
     });

 });
 
        $(function () {
            var screenrprt = document.createElement("div");
            screenrprt.style.zIndex = "2";
            screenrprt.classList.add("screen");
            $(".rprt-button").click(function () {
                $("#aside-div").append(screenrprt);
                $(".rprt").css({ "bottom": "20%" });

            });
            $(".rprt-exit").click(function () {
                $(".chat-rprt").css({ "bottom": "-120%" });
                screenrprt.remove();
            });

        });

        $(function () {
            $(".member-detail").click(function () {
            	
            	$(".chat-window-main").empty();
            	
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
            	$(".chat-window-main").empty();
            	
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
								myTxta.innerText = getmemberChattingList[i].content;
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
									
									
								frTxta.innerText = getmemberChattingList[i].content;
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
									myTxta.innerText = getmemberChattingList2[i].content;
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
										
									frTxta.innerText = getmemberChattingList2[i].content;
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
        		
   //     		alert("관리자 사진이나와야함 : "+$(".adminImg").val());
        		
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
								myTxta.innerText = getmemberAdminChattingList[i].content;
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
									"url(/get-img?folder=member-profile&file="+friendImg+")";
								frTxta.innerText = getmemberAdminChattingList[i].content;
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
    		
    	//	alert("들어오긴하니?");
    		
    		if(!evt.target.classList.contains("adminmessage-detail")) return;
    		$(".admin-chat-window-main").empty();
    	//	alert("들어오긴하니?");
    		
    		
    		var target = evt.target;
    		
    	//	alert("내가 누른아이의 className :"+target.className);
    //		alert("친구아이디인데 어디민 떠ㅑ함ㅁ"+target.querySelector(".adminfriend-id").innerText);
 //   		var parent = target.parentNode.parentNode;
    		var friendId = target.querySelector(".adminfriend-id").innerText;
//    		alert("친구아이디인데 어디민 떠ㅑ함ㅁ"+friendId);

    		var friendImg = target.parentNode.querySelector(".adminfriend-img").style.backgroundImage;
    	//	alert(friendImg);
    		
    		
    		$(".admin-chat-fr-img").val(friendImg);
    //		alert(friendId.innerText);
    		
    		// 내가 선택한 대화상대의 ID 를 보기 위한 alert 이다.
//    		alert(friendId);
   //     		alert(friendImg);
			var friendChattingRoomName = document.querySelector(".admin-chatting-roomname");
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
							
						
							var mtpl = document.importNode(mytpl.content,true);
					//		var myId = mtpl.querySelector(".my-chat-id");
					//		var myImg = mtpl.querySelector(".my-chat-img");
							var myTxta = mtpl.querySelector(".admin-my-chat-txta");
							var myDate = mtpl.querySelector(".admin-my-chat-date");
							
					//		myId.innerText = getmemberChattingList[i].id;
					//		myImg.style.backgroundImage = getmemberChattingList[i].img;
							myTxta.innerText = getmemberChattingList2[i].content;
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
								
							frTxta.innerText = getmemberChattingList2[i].content;
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
        //	alert("11111");
       	 var imgsMap = new Map();
       	// alert("이게 윈도우로케이션"+window.location);
       	 var groupchkchksp = ''+window.location;
       	 
       	 var groupchatchk= groupchkchksp.includes("groupchat");
       	 
       	 if(groupchatchk)
       	 {
   //    		 alert("hihihi")
       		test1111(imgsMap);
       	 }
       	 
       	 
        	
	    	// localhost에 접속하고 싶은 ip를 쓰고 사이트는 내 ip로 접속 하면  상대방에게 채팅을 보낼 수 있다.

	   		var socket = new WebSocket("ws://192.168.0.14:80/chat-server");
	
	   		// WebsocketEndPonint가 메시지를 보내주면 오는 onmessage
	   		socket.onmessage = function(e)
	   		{
//	   			alert("사이즈 4612262414162: "+imgsMap.size);
//	   			alert("이미지chlwl : "+imgsMap.get('chlwl'));
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
	   			
	   			
	//   			alert("onmessage 출입구:"+$(".thisMyId").val())
	   			
	   			var spliteChat = e.data;
	   			
	   			var strArray = spliteChat.split('!^@%SPSP%@^!');
	   			
	   //			alert(strArray.length);
	   			
	   			if(strArray.length==3)
	   			{
	   			
	   			var senderId = strArray[0];
	   			var receiverId = strArray[1];
	   			var chatcontent = strArray[2];
	   			
//	   			console.log("보낸이 : "+senderId+" / "
//	   					+"받는이 : "+receiverId+" / "
//	   					+"내용 : "+chatcontent);
	   			
	   			if(receiverId == $(".thisMyId").val())
	   			{
	   				$("#open-chat").css({"animation":"1s shiny infinite"});
	   			}
	   			
	   			
	   			if( (chatcontent!=null && chatcontent!="") || chatcontent!=="undefined")
	   			{
	   		//		gii();
	   				reboot();
	   				remessageList();
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
   					if(ajxthour <12 && ajxthour >=1)
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
   					
   					
					
					var ajxtodayDay = "오늘 "+ ajxthour+" : "+ajxtminutes;
	//				alert("채팅을 입력하자 마자 들어갈 append용 시간: : "+ajxtodayDay);
					
					
					
					
					
					if($(".thisMyId").val()!='admin')
					{
						var ajxmytpl = document.querySelector("#my-chat-txt");
						var ajxfrtpl = document.querySelector("#friend-chat-txt");
						var ajxchatarea = document.querySelector(".chat-window-main");
				   			
				//		alert("여기는 어드민이 아닐때"+$(".thisMyId").val());
						
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
								if(senderId!="admin")
								{
									ajxfrImg.style.backgroundImage = $(".chat-fr-img").val();
								}
								else
								{
									ajxfrImg.style.backgroundImage ="url(/get-img?folder=member-profile&file="+$(".adminImg").val()+")";
								}
								ajxfrTxta.innerText = chatcontent;
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
								ajxmyTxta.innerText = chatcontent;
								ajxmyDate.innerText = "오늘 "+ajxtodayDay;
								
								ajxchatarea.append(ajxmtpl);
								
								
				   			}
				   			
				   			
				   		// 그룹채팅을 위해 준비한 if 문  	
				   		//	if(strArray[0]==$(".thisMyId").val() && strArry[2]==$(".friend-chatting-roomname").text())
				   			
				   			
				   			
				   			// 날짜와 이미지도 필요... ㄷㄷ?
				   			// 날짜는 가능 이미지는???? 전에있던 데이터를 가져온다? 그럼 채팅을 처음 한다면...?
				   			
								$(".chat-window-main").scrollTop($(".chat-window-main").height()+9999999);
								var resetTextArea = document.querySelector(".chat-textarea").value;
								
							//	alert($(".chat-textarea").val());
								
							//	$(".chat-textarea").val('');
								
			//					alert($(".chat-textarea").val());
			//					resetTextArea="";
								

						   		
						   		
					   		
					   		
								
								
								
					}
					else if($(".thisMyId").val()=='admin')
					{
					//	alert("어드민인 경우 들어옴 : "+$(".thisMyId").val());
						
			   			
						  // 			alert("내가 선택한 친구의 이미지 경로 : "+$(".admin-chat-fr-img").val());
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
						   			if( ( senderId==$(".admin-chatting-roomname").text() ) && ( receiverId==$(".thisMyId").val() ) )
						   			{
						   //				alert("회원이 보냄");
						  // 				alert("회원 아이디가 나와야함 : "+$(".admin-chatting-roomname").text());
						   	//			alert("소켓에 울린 보낸아이디 : "+senderId)
						   				
						   	//			alert("이거 뭐임 ????? : "+$(".admin-chat-fr-img").val())
							   			var adajxftpl = document.importNode(adajxfrtpl.content,true);
										var adajxfrId = adajxftpl.querySelector(".admin-friend-chat-id");
										var adajxfrImg = adajxftpl.querySelector(".admin-friend-chat-img");
										var adajxfrTxta = adajxftpl.querySelector(".admin-friend-chat-txta");
										var adajxfrDate = adajxftpl.querySelector(".admin-friend-chat-date");
										
										
										adajxfrId.innerText = senderId;
										adajxfrImg.style.backgroundImage = $(".admin-chat-fr-img").val();
										adajxfrTxta.innerText = chatcontent;
										adajxfrDate.innerText= ajxtodayDay;
										
										adajxchatarea.append(adajxftpl);
										
										
							   		}
						   			else if( ( senderId==$(".thisMyId").val() ) && ( receiverId== $(".admin-chatting-roomname").text() ) )
						   			{
						  // 				alert("관리자가 보냄");
						   //				alert("receiverId : "+receiverId);
						   //				alert(".admin-chatting-roomname :"+$(".admin-chatting-roomname").text() );
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
										adajxmyTxta.innerText = chatcontent;
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
										
							//			$(".admin-chat-textarea").val('');
										
					//					alert($(".chat-textarea").val());
					//					resetTextArea="";
									
										
							
						
						   			
						
					}
	   			} // 일반 채팅 , 1:1 채팅일 경우의 if 끝나는 지점
	   			else if(strArray.length==4)
	   			{

		   			
		   			var senderId = strArray[0];
		   			var receiverId = strArray[1];
		   			var chatcontent = strArray[2];
		   			
//		   			console.log("보낸이 : "+senderId+" / "
//		   					+"받는이 : "+receiverId+" / "
//		   					+"내용 : "+chatcontent);
		   			
		   			
		   			if( (chatcontent!=null && chatcontent!="") || chatcontent!=="undefined")
		   			{
		   		//		gii();
		   				
		   			}
		   			
		   			
		   			
		   			//오늘 날짜와 시간을 채워넣기 위해 만든 변수들 
		   			
		   		//오늘 년,월,일,시,분,초 다 가져오기
						var ggajxtoday = new Date();
						
						
						var ggajxthour = ggajxtoday.getHours();
	   					var ggajxtminutes = ggajxtoday.getMinutes();
	   		//			alert("시간만 "+ggajxthour);
	   					
	   					// 시간 PM , AM 으로 나누기위한 if 문
	   					if(ggajxthour <12 && ggajxthour >=1)
	   					{
	   						
	   						if(ggajxthour<10)
	   						{
	   							ggajxthour = "오전 "+"0"+ggajxthour;
	   						}
	   						else
	   						{
	   							ggajxthour = "오전 "+ggajxthour;
	   						}
	   					}
	   					else if(ggajxthour >=12 && ggajxthour <= 24)
	   					{
	   	//					alert("지금이 이시간인데?:"+ggajxthour)
	   						ggajxthour = (ggajxthour-12);
	   	//					alert("지금이 이시간인데?:"+ggajxthour)
	   						
	   						if(ggajxthour<10)
	   						{
	   							ggajxthour = "오후 "+"0"+ggajxthour;
	   						}
	   						else
	   						{
	   							ggajxthour = "오후 "+ggajxthour;
	   						}
	   						
	   					}
	   					// 분 이쁘게 꾸미기
	   					if(ggajxtminutes<10)
	   					{
	   						ggajxtminutes = "0"+ggajxtminutes;
	   					}
	   					
	   					
						
						var ggajxtodayDay = "오늘 "+ ggajxthour+" : "+ggajxtminutes;
		//				alert("입력 시간 :"+ggajxtodayDay)
						
						
						
						if($(".thisMyId").val()!='admin')
						{
							
							var wwllss = window.location.search;
							var ttgroupIdArray= wwllss.split('=');
							var groupIdSt = ttgroupIdArray[1];
							
							var groupAjxMyTpl = document.querySelector("#group-chat-my-tpl");
							var groupAjxFrTpl = document.querySelector("#group-chat-you-tpl");
							var groupAjxChatArea = document.querySelector(".group-chat-window-main");
					   			
					   			if( ( senderId!=$(".thisMyId").val() ) && ( receiverId==groupIdSt ) )
					   			{
					   				
					  // 				alert("보낸게 내가 아니다");
								
						   			var groupAjxFTpl = document.importNode(groupAjxFrTpl.content,true);
									var groupAjxFrId = groupAjxFTpl.querySelector(".group-you-id");
									var groupAjxFrImg = groupAjxFTpl.querySelector(".group-you-img");
									var groupAjxFrTxta = groupAjxFTpl.querySelector(".group-you-txt");
									var groupAjxFrDate = groupAjxFTpl.querySelector(".group-chat-you-date");
									
									
									groupAjxFrId.innerText = senderId;
									
									groupAjxFrImg.onclick=function(e)
									{
										var targetting = e.target;
								//		alert(targetting.className);
										var targetParent = targetting.parentNode;
								//		alert(targetParent.className);
										var memberId = targetParent.querySelector(".group-you-id").innerText;
							//			alert("memberId확인용 알터 : "+memberId);
										
										
										
										$(".click-profile-container").css({"display":"block"});
										$(".click-friend-profile").css({"background":"rgb(231, 205, 211)"});
							   			
										
							///////////////친구 인지 아닌지/////////////////////////////////////////
							   			var apGroupChkFriend = new XMLHttpRequest();
							   	        
							   	        //  alert("open전");   
							   	          
							   			var selectMemberId =null;
							   			
							   			apGroupChkFriend.open("POST","/member/chk-friend",true);
							   			apGroupChkFriend.setRequestHeader("Content-Type",
							   	                                  "application/x-www-form-urlencoded");
							   	                
							   	        //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
							   			apGroupChkFriend.onload = function()
							   	             {
							   	             
							   	    //           alert("너의 아이디가 들려");
							   				//	alert(chkFriendData[0].length)
							   					var jsontest = apGroupChkFriend.responseText;
							   				
							   	                var apGroupChkFriendData = JSON.parse(apGroupChkFriend.responseText); 
							   					console.log(apGroupChkFriendData);
							   				//	alert(chkFriendData.isNull("regDate"));
							   				//	alert("1 : "+ chkFriendData.hasOwnProperty('regDate') );
							   				//	alert("2 : "+ jsontest.hasOwnProperty('regDate') );
							   				//	alert( $.inArray("regDate",chkFriendData) );
							   					
							   	          
							   	                // 친구가 아닐 시
							  	                if( apGroupChkFriendData.hasOwnProperty('regDate') )
							   	                {
							//  	                	alert("이프 apGroupChkFriendData.id : "+apGroupChkFriendData.id);
							  	                	selectMemberId =apGroupChkFriendData.id;
							  	                	
							   	                	
							   	                	$(".click-chat-profile-id").text(apGroupChkFriendData.id);
							   	                	$(".click-chat-profile-msg").text(apGroupChkFriendData.msg);
							   	                	var fImg = document.querySelector(".click-chat-profile-img");
							   	                	
							   	                	fImg.style.backgroundImage =
								                        "url(/get-img?folder=member-profile&file="+apGroupChkFriendData.img+")";
							   	                	
							   	                	$(".click-box-F-noF").text('친구추가');
							   	                	
							   	                	
							   	                	
							   	                }
							   	                else
							   	                {
							   	 //               	alert("엘즈 apGroupChkFriendData.id : "+apGroupChkFriendData.id);
							   	                	$(".click-chat-profile-id").text(apGroupChkFriendData.id);
							   	                	$(".click-chat-profile-msg").text(apGroupChkFriendData.msg);
							   	                	var nofImg = document.querySelector(".click-chat-profile-img");
							   	                	nofImg.style.backgroundImage =
								                        "url(/get-img?folder=member-profile&file="+apGroupChkFriendData.img+")";
							   	                	
//							   	                	$(".click-chat-profile-img").style.backgroundImage =
//								                        "url(/get-img?folder=member-profile&file="+chkFriendData.img+")";
							   	                	
							   	                	
							   	                	
							   	                	$(".click-box-F-noF").text('친구삭제');
							   	                //	reChattingOn();
							   	                	
							   	                }
							   	               
							  	                
							  	                
							   	                
							   	                
							   	             }
							   	             
							   			apGroupChkFriend.send("memberId="+memberId);
										
										
										
										
							   			//////////////신고 했는지 안했는지//////////////////////////////////////////////
							   			
							   			var apGroupChkRprt = new XMLHttpRequest();
								        
								        //  alert("open전");   
								          
							   			apGroupChkRprt.open("POST","/member/chk-rprtId",true);
							   			apGroupChkRprt.setRequestHeader("Content-Type",
								                                  "application/x-www-form-urlencoded");
								                
								                //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
							   			apGroupChkRprt.onload = function()
							             {
							             
							      //          alert("너의 아이디가 들려");
							                
							  //              var comeonmyid = JSON.parse(gomyid.responseText); 
							          
							  //             $(".thisMyId").val(comeonmyid);
							               $(".click-chat-rprt-button").text(apGroupChkRprt.responseText);
							                
							                
							             }
								             
							   			apGroupChkRprt.send("rprtId="+memberId);
							   			
							   			
							   			
							   			
							   			
										
										
										
										
										
										
									};
									
									
									groupAjxFrImg.style.backgroundImage = 
										"url(/get-img?folder=member-profile&file="+imgsMap.get(senderId)+")";
									groupAjxFrTxta.innerText = chatcontent;
									groupAjxFrDate.innerText= ggajxtodayDay;
									
									groupAjxChatArea.append(groupAjxFTpl);
									
									$(".group-chat-window-main").scrollTop($(".group-chat-window-main").height()+9999999);
									var resetTextArea = document.querySelector(".group-chat-textarea").value;
									
									
								//	$(".group-chat-textarea").val('');
									
									
						   		}
					   			else if( ( senderId==$(".thisMyId").val() ) && ( receiverId==groupIdSt ) )
					   			{
					   				
					   			
									var groupAjxMTpl = document.importNode(groupAjxMyTpl.content,true);
									
									var groupAjxMyTxta = groupAjxMTpl.querySelector(".group-me-txt");
									var groupAjxMyDate = groupAjxMTpl.querySelector(".group-me-date");
						
									groupAjxMyTxta.innerText = chatcontent;
									groupAjxMyDate.innerText = ggajxtodayDay;
									
									groupAjxChatArea.append(groupAjxMTpl);
									
									
					   			
					   			
					   			
					   			
									$(".group-chat-window-main").scrollTop($(".group-chat-window-main").height()+9999999);
									var resetTextArea = document.querySelector(".group-chat-textarea").value;
									
									
							//		$(".group-chat-textarea").val('');
									
									
					   			}
							   		
	   				
						}
	   				
						}

	   		}
	   		
	   		$(function()
			{
	   			//alert("윈도우로케이션"+window.location.search);
	   			var crowd = window.location.search;
	   			//alert("dddddd:"+crowd);
	   			var windowlocation = crowd.split('=');
	   	//		var testtest1 = "aaaaaaaaaaaaaaaaaa!^@%SPSP%@^!bbbbbbbbbbbbbbbbbbbbbbb!^@%SPSP%@^!cccccccccccccccccc";
	   	//		var testsp = testtest1.split('!^@%SPSP%@^!');
	   	//		alert("에이에이 : "+testsp[0]+" 비비비 : "+testsp[1]+" 씨씨씨:"+testsp[2]);
	   			var groupId=windowlocation[1];
	   			//alert("그룹아이디"+groupId);
	   			$(".group-chat-groupId").val(groupId);
	   			
	   			
	   			var getGroupMyId = new XMLHttpRequest();
	   	        
	   	        //  alert("open전");   
	   	          
	   			getGroupMyId.open("POST","/crowd/get-groupMyId",true);
	   			getGroupMyId.setRequestHeader("Content-Type",
	   	                                  "application/x-www-form-urlencoded");
	   	                
	   	                //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
	   			getGroupMyId.onload = function()
	   	             {
	   	             
	   	      //          alert("너의 아이디가 들려");
	   	                
	   	                var comeongroupmyid = JSON.parse(getGroupMyId.responseText); 
	   	          
	   	               $(".group-chat-myId").val(comeongroupmyid);
	   	             //  alert("이게뜨는거냐???"+ $(".group-chat-myId").val());
	   	               
	   	                
	   	                
	   	             }
	   	             
	   			getGroupMyId.send();
	   			
			})
	   		$(function()
			{
	   			
	   			
	   			
	   			
	   			if($(".thisMyId").val()!="admin")
	   			{
	   				document.querySelector(".chat-textarea").addEventListener('keydown',function(event)
					{
	   					if(event.keyCode==13)
	   					{
	   						event.preventDefault();
	   						document.querySelector(".chat-send-button").click();
	   					}
					})
	   				
					
					
					$(".chat-send-button").click(function()
					   		{
					   			//var friendId ="nolec";
					   			//alert($(".friend-chatting-roomname").text());
			//		   			console.log( $(".chat-textarea").val() );
					   			socket.send($(".thisMyId").val()+"!^@%SPSP%@^!"+$(".friend-chatting-roomname").text()+"!^@%SPSP%@^!"+ $(".chat-textarea").val());
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
					   			
					   			$(".chat-textarea").val('');
					   		})
					   		
//			   		document.querySelector(".group-chat-textarea").addEventListener('keydown',function(event)
//					{
//	   					if(event.keyCode==13)
//	   					{
//	   						event.preventDefault();
//	   						document.querySelector(".group-chat-send-button").click();
//	   					}
//					})
					   		
					   		
					   	$(".group-chat-send-button").click(function()
			   			{
					   		//alert($(".group-chat-myId").val()+$(".group-chat-groupId").val()+$(".group-chat-textarea").val() );
					   		socket.send($(".group-chat-myId").val()+"!^@%SPSP%@^!"+$(".group-chat-groupId").val()+"!^@%SPSP%@^!"+ $(".group-chat-textarea").val()+"!^@%SPSP%@^!"+"groupchatting");
				   			var groupmyId = $(".group-chat-myId").val();
				   			var groupId =$(".group-chat-groupId").val();
				   			var content = $(".group-chat-textarea").val();
				   			
				   			var insertGroupChattingList = new XMLHttpRequest();
				   			
				   			insertGroupChattingList.open("POST","/crowd/insert-groupChatting",true);
				   			insertGroupChattingList.setRequestHeader("Content-Type",
				   										"application/x-www-form-urlencoded");
				   				
				   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
				   			insertGroupChattingList.onload = function()
			   				{
			   					
			   				}
				   			
				   			insertGroupChattingList.send("myId="+groupmyId+"&groupId="+groupId+"&content="+content);
				   			
				   			$(".group-chat-textarea").val('');
			   			})
					}
					else if($(".thisMyId").val()=="admin")
					{
						document.querySelector(".admin-chat-textarea").addEventListener('keydown',function(event)
								{
				   					if(event.keyCode==13)
				   					{
				   						event.preventDefault();
				   						document.querySelector(".admin-chat-send-button").click();
				   					}
								})
						
						$(".admin-chat-send-button").click(function()
	   			   		{
							
							//alert("여기를 많이 들어오니?");
			   			   			//var friendId ="nolec";
			   			   			//alert($(".friend-chatting-roomname").text());
			//   			   			console.log( $(".admin-chat-textarea").val() );
			   			   			socket.send($(".thisMyId").val()+"!^@%SPSP%@^!"+$(".admin-chatting-roomname").text()+"!^@%SPSP%@^!"+ $(".admin-chat-textarea").val());
			   			   			var myId = $(".thisMyId").val();
			   			   			var friendId =$(".admin-chatting-roomname").text();
			   			   			var content = $(".admin-chat-textarea").val();
			   			   			
			   			   	//		alert("myId : "+myId);
			   			   	//		alert("friendId : "+friendId);
			   			   	//		alert("content : "+content);
			   			   			
			   			   			var insertChattingList2 = new XMLHttpRequest();
			   			   			
			   			   		insertChattingList2.open("POST","/admin/insert-admin-memberChatting",true);
			   			   	insertChattingList2.setRequestHeader("Content-Type",
			   			   										"application/x-www-form-urlencoded");
			   			   				
			   			   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
			   			 insertChattingList2.onload = function()
			   			   				{
			   			   					
			   			   				}
			   			   			
			   			insertChattingList2.send("myId="+myId+"&friendId="+friendId+"&content="+content);
			   			   			
			   			   			
			   			
						$(".admin-chat-textarea").val('');
	   			   		})
					}
	   			
	   			
			})

	   		// 회원의 이미지를 클릭시 나오는 친구 추가 or 삭제 css
			
	   		
	   		
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
        
        function reChattingOn()
        {
           
        	$(".friend-list").empty();
           var getReFriendDatas = new XMLHttpRequest();
           
         //  alert("open전");   
           
           getReFriendDatas.open("POST","/member/get-friendList",true);
           getReFriendDatas.setRequestHeader("Content-Type",
                                   "application/x-www-form-urlencoded");
                 
                 //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
           getReFriendDatas.onload = function()
              {
           //      alert("여기까진 오나??");
                 
                 var getReFriendDataList = JSON.parse(getReFriendDatas.responseText); 
            //     alert("json 파세"+getFriendDataList);
                 var friendCp = document.querySelector("#friend-cp");
                 var friendList2 = document.querySelector(".friend-list");
           //      alert(friendCp);
           //      alert(getFriendDataList.length);
            //     alert("id : "+getFriendDataList[0][0].id);
                 
                 for (var i = 0; i < getReFriendDataList.length; i++) 
                 {
                    var tpl=document.importNode(friendCp.content, true);
                    var tmpLabel=tpl.querySelector("label");
                       tmpLabel.innerText=getReFriendDataList[i][0].id;
                       
                    var tmph6 =tpl.querySelector("h6");
                       tmph6.innerText=getReFriendDataList[i][0].msg;
                       
                    var tmlImg =tpl.querySelector(".friend-img");
                       tmlImg.style.backgroundImage = 
                          "url(/get-img?folder=member-profile&file="+getReFriendDataList[i][0].img+")";
                       
                       friendList2.append(tpl);
                 }
                 
                 
              }
              
           getReFriendDatas.send();
           
           
            
        };
        
        
        function imgClick(memberId)
   		{

        	//alert("dd"+memberId);
        	if( ($(".thisMyId").val()=='admin') || ($(".thisMyId").val()==memberId)  )
        		return;
        	
   			$(".click-profile-container").css({"display":"block"});
   			
   			//////////////신고 했는지 안했는지//////////////////////////////////////////////
   			
   			var clickChkRprt = new XMLHttpRequest();
	        
	        //  alert("open전");   
	          
   			clickChkRprt.open("POST","/member/chk-rprtId",true);
   			clickChkRprt.setRequestHeader("Content-Type",
	                                  "application/x-www-form-urlencoded");
	                
	                //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
   			clickChkRprt.onload = function()
             {
             
      //          alert("너의 아이디가 들려");
                
  //              var comeonmyid = JSON.parse(gomyid.responseText); 
          
  //             $(".thisMyId").val(comeonmyid);
               $(".click-chat-rprt-button").text(clickChkRprt.responseText);
                
                
             }
	             
   			clickChkRprt.send("rprtId="+memberId);
   			
   			
   			///////////////친구 인지 아닌지/////////////////////////////////////////
   			var chkFriend = new XMLHttpRequest();
   	        
   	        //  alert("open전");   
   	          
   			var selectMemberId =null;
   			
   			chkFriend.open("POST","/member/chk-friend",true);
   			chkFriend.setRequestHeader("Content-Type",
   	                                  "application/x-www-form-urlencoded");
   	                
   	        //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
   			chkFriend.onload = function()
   	             {
   	             
   	      //          alert("너의 아이디가 들려");
   				//	alert(chkFriendData[0].length)
   					var jsontest = chkFriend.responseText;
   				
   	                var chkFriendData = JSON.parse(chkFriend.responseText); 
   					console.log(chkFriendData);
   				//	alert(chkFriendData.isNull("regDate"));
   				//	alert("1 : "+ chkFriendData.hasOwnProperty('regDate') );
   				//	alert("2 : "+ jsontest.hasOwnProperty('regDate') );
   				//	alert( $.inArray("regDate",chkFriendData) );
   					
   	          
   	                // 친구가 아닐 시
  	                if( chkFriendData.hasOwnProperty('regDate') )
   	                {
  	                	selectMemberId =chkFriendData.id;
  	                	
  	                	selectMemberId =chkFriendData.id;
   	                	
   	                	$(".click-chat-profile-id").text(chkFriendData.id);
   	                	$(".click-chat-profile-msg").text(chkFriendData.msg);
   	                	var fImg = document.querySelector(".click-chat-profile-img");
   	                	
   	                	fImg.style.backgroundImage =
	                        "url(/get-img?folder=member-profile&file="+chkFriendData.img+")";
   	                	
   	                	$(".click-box-F-noF").text('친구추가');
   	                	
   	                	
   	                	
   	                }
   	                else
   	                {
   	                	$(".click-chat-profile-id").text(chkFriendData.id);
   	                	$(".click-chat-profile-msg").text(chkFriendData.msg);
   	                	var nofImg = document.querySelector(".click-chat-profile-img");
   	                	nofImg.style.backgroundImage =
	                        "url(/get-img?folder=member-profile&file="+chkFriendData.img+")";
   	                	
//   	                	$(".click-chat-profile-img").style.backgroundImage =
//	                        "url(/get-img?folder=member-profile&file="+chkFriendData.img+")";
   	                	
   	                	
   	                	
   	                	$(".click-box-F-noF").text('친구삭제');
   	                //	reChattingOn();
   	                	
   	                }
   	               
  	                
  	                
   	                
   	                
   	             }
   	             
   			chkFriend.send("memberId="+memberId);
   			
   			
   		
   		}
        
        
        $(function()
		{
        	$(".click-box-F-noF").click(function()
			{
		
//           				if($(".click-box-F-noF").text() == '친구추가')
//           				{
//           					alert("이거 되면 끄팅다");
//           				}
				var selectMemberId = $(".click-chat-profile-id").text();
		
   	//			alert("내가 선택한 아이디 :"+selectMemberId)
   	//			alert("뭐지 : "+$(".click-box-F-noF").text());
   				
   				if( $(".click-box-F-noF").text() == '친구추가' )
   				{
   					var aselectMemberId = $(".click-chat-profile-id").text();
   					
            		var addMyFriend = new XMLHttpRequest();
                 
                 
            		addMyFriend.open("POST","/member/add-myFriend",true);
            		addMyFriend.setRequestHeader("Content-Type",
                                           "application/x-www-form-urlencoded");
                         
                         //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
            		addMyFriend.onload = function()
                      {
                      
               //          alert("너의 아이디가 들려");
                         
                     //    var addMyFriendData = JSON.parse(addMyFriend.responseText); 
            			$(".click-box-F-noF").text('친구삭제');
            			return;
                      }
                      
            		addMyFriend.send("selectMemberId="+selectMemberId);
            		
            		reChattingOn();
   				}
   				else if( $(".click-box-F-noF").text() == '친구삭제' )
   				{
   					
    				var dselectMemberId = $(".click-chat-profile-id").text();

   					
   					var delMyFriend = new XMLHttpRequest();
                    
                    
   					delMyFriend.open("POST","/member/del-myFriend",true);
   					delMyFriend.setRequestHeader("Content-Type",
                                           "application/x-www-form-urlencoded");
                         
                         //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
   					delMyFriend.onload = function()
                      {
                      
               //          alert("너의 아이디가 들려");
                         
                     //    var addMyFriendData = JSON.parse(addMyFriend.responseText); 
   						$(".click-box-F-noF").text('친구추가');
   						return;
                        
                      }
                      
   					delMyFriend.send("selectMemberId="+selectMemberId);
   					
   					reChattingOn();
   				}
			})
		})
		
		// 친구 채팅 창에서 신고 function
        $(function()
		{
        	var rprtDetailContent =null;
        	var rprtId = null;
        	var rprtText = null;
        	var rprtTitle = null;
        	
        	$(".chat-rprt-button").click(function()
				{
	        		
	       // 		alert("신고 버튼을 눌렀다 : "+$(".chat-profile-id").text());
	        		rprtId = $(".chat-profile-id").text(); 
	        		rprtText = $(".chat-rprt-button").text();
	        		
	        		if(rprtText=='신고 추가')
	        		{
	        			//alert("신기하네");
	        			
	        			
		        		var chatSelects = document.querySelector("#chat-rprt-select");
		        		rprtTitle = null;
		        		
		        		$("#chat-rprt-select").on('change',function()
						{
		        //			alert(chatSelects.options[chatSelects.selectedIndex].value);
		        			rprtTitle = chatSelects.options[chatSelects.selectedIndex].value;
						})
						
						
	
	        		}
	        		else if(rprtText=='신고 해제')
	        		{
	        			$(".chat-rprt").css({ "bottom": "-120%" });
				         
	        			var rprtDelete = new XMLHttpRequest();
				        
				        // alert("open전");   
				          
	        			rprtDelete.open("POST","/member/delete-rprtId",true);
	        			rprtDelete.setRequestHeader("Content-Type",
				                                  "application/x-www-form-urlencoded");
				                
				                //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
	        			rprtDelete.onload = function()
				             {
				             
	        				
					         $(".chat-rprt-button").text('신고 추가')
					         $(".chat-rprt").css({ "bottom": "-120%" });
					         $(".screen").remove();
				      //          alert("너의 아이디가 들려");
				                
				       //         var rprtSuccess = JSON.parse(rprtInsert.responseText); 
				          
				          //     $(".thisMyId").val(comeonmyid);
				               
				                
				                
				             }
				             
	        			rprtDelete.send("rprtId="+rprtId);
	        			
	        			
	        		}
	        		
				}) ///
        	
			
	        		$(".chat-rprt-input").click(function()
							{
					//			alert("상세내용 : "+$(".chat-rprt-detailContent").val());
								rprtDetailContent = $(".chat-rprt-detailContent").val();
								
								var rprtInsert = new XMLHttpRequest();
						        
						        //  alert("open전");   
						          
								rprtInsert.open("POST","/member/insert-rprtId",true);
								rprtInsert.setRequestHeader("Content-Type",
						                                  "application/x-www-form-urlencoded");
						                
						                //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
								rprtInsert.onload = function()
						             {
						             
									 $(".chat-rprt").css({ "bottom": "-120%" });
									 $(".chat-rprt-detailContent").val('');
							         $("#chat-rprt-select option:eq(0)").prop("selected",true);
							         $(".screen").remove();
							         $(".chat-rprt-button").text('신고 해제')
							         
						      //          alert("너의 아이디가 들려");
						                
						       //         var rprtSuccess = JSON.parse(rprtInsert.responseText); 
						          
						          //     $(".thisMyId").val(comeonmyid);
						               
						                
						                
						             }
						             
								rprtInsert.send("rprtId="+rprtId+"&rprtTitle="+rprtTitle+"&rprtDetailContent="+rprtDetailContent);
								
								
								
							})
			
			
			
		}) // @@
		
		//그냥 사이트 상에서 이미지를 눌렀을 때 신고
		$(function()
		{
			
		//	var rprtId = $(".click-chat-profile-id").text();
    		
    		
			var rprtId=null;
			var rprtTitle = null;
			var rprtDetailContent =null;
				$(".click-chat-rprt-button").click(function()
				{
					rprtId = $(".click-chat-profile-id").text();
					if($(".click-chat-rprt-button").text()=='신고 추가')
		    		{
		//				alert("dddddddd");
		//				$(".click-chat-rprt").css({ "bottom": "150px" });
		//				alert($(".click-chat-rprt-button").text());
						
				//		alert("click 신고");
						
						//var rprtId = $(".click-chat-profile-id").text();
		        		var chatSelects = document.querySelector("#click-chat-rprt-select");
		//        		alert(rprtId);
		        		 rprtTitle = null;
		        		
		        		$("#click-chat-rprt-select").on('change',function()
						{
		        //			alert(chatSelects.options[chatSelects.selectedIndex].value);
		        			rprtTitle = chatSelects.options[chatSelects.selectedIndex].value;
						})
						
						 rprtDetailContent =null;
						
						
		    		}
					else if($(".click-chat-rprt-button").text()=='신고 해제')
		    		{
		//				alert($(".click-chat-rprt-button").text());
		//				alert(rprtId);
		    			var clickRprtDelete = new XMLHttpRequest();
				        
		//		          alert("신고 해제 클릭 전");   
				          
		    			clickRprtDelete.open("POST","/member/delete-rprtId",true);
		    			clickRprtDelete.setRequestHeader("Content-Type",
				                                  "application/x-www-form-urlencoded");
				                
				                //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
		    			clickRprtDelete.onload = function()
				             {
					             
						         $(".click-chat-rprt-button").text('신고 추가')
						         $(".click-chat-rprt").css({ "bottom": "-120%" });
						         $(".screen").remove();
					      //          alert("너의 아이디가 들려");
					                
					       //         var rprtSuccess = JSON.parse(rprtInsert.responseText); 
					          
					          //     $(".thisMyId").val(comeonmyid);
					               
				             }
				             
		    			clickRprtDelete.send("rprtId="+rprtId);
		    			
		    		}
					
					
					////////////////////////////////////////////////////////////
					
					
					
					
					//////////////////////////////////////////////////////////
				})
    		
    		
    		$(".click-chat-rprt-input").click(function()
							{
				//				alert("2만");
					//			alert("상세내용 : "+$(".click-chat-rprt-detailContent").val());
								rprtDetailContent = $(".click-chat-rprt-detailContent").val();
								
								var clickRprtInsert = new XMLHttpRequest();
						        
						        //  alert("open전");   
						          
								clickRprtInsert.open("POST","/member/insert-rprtId",true);
								clickRprtInsert.setRequestHeader("Content-Type",
						                                  "application/x-www-form-urlencoded");
						                
						                //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
								clickRprtInsert.onload = function()
						             {
										$(".click-chat-rprt-button").text('신고 해제');
								         $(".click-chat-rprt").css({ "bottom": "-120%" });
								         $(".click-chat-rprt-detailContent").val('');
								         $("#click-chat-rprt-select option:eq(0)").prop("selected",true);
								       //  screenrprt.remove();
								         
								         
						      //          alert("너의 아이디가 들려");
						                
						    //            var rprtSuccess = JSON.parse(clickRprtInsert.responseText); 
						          
						          //     $(".thisMyId").val(comeonmyid);
						               
						                
						                
						             }
						             
								clickRprtInsert.send("rprtId="+rprtId+"&rprtTitle="+rprtTitle+"&rprtDetailContent="+rprtDetailContent);
								
								
							})
    		
    		
		});
		
		
		$(function() 
		{
			$(".chat-friend-del").click(function()
			{
				//alert($(".chat-profile-id").text());
				var selectMemberId = $(".chat-profile-id").text();
				var deleteFriend = new XMLHttpRequest();
		        
		        //  alert("open전");   
		          
				deleteFriend.open("POST","/member/del-myFriend",true);
				deleteFriend.setRequestHeader("Content-Type",
		                                  "application/x-www-form-urlencoded");
		                
		                //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
				deleteFriend.onload = function()
		             {
						reChattingOn();
						remessageList();
						
						var friendpro = $(".friend-profile");
						
				            friendpro.animate(
				                		{
				                            bottom: "-160px"
				                		});
			                 $(".screen").remove();
			                    
						
		      //          alert("너의 아이디가 들려");
		                
		             //   var deleteFriend = JSON.parse(gomyid.responseText); 
		          
		           //    $(".thisMyId").val(comeonmyid);
		               
		             }
		             
				deleteFriend.send("selectMemberId="+selectMemberId);
			})
		})

		//채팅에서 친구 이미지를 눌렀을때 내가 신고를 했는지 안했는지를 가져오는 function
            $(function()
    		{
            	
            	var testDiv = document.querySelector(".friend-list-container");
            	testDiv.addEventListener("click", function(evt){
            		if(!evt.target.classList.contains("friend-img")) return;
            	
            		
            		var chatimg = evt.target;
            		
    //        		alert("눌렀다.")
    //        		alert(chatimg.parentNode.className); //friend
     //       		alert(chatimg.parentNode.querySelector('.friend-id').innerText);
    		    	
            		var rprtId=chatimg.parentNode.querySelector('.friend-id').innerText;
            		
            		var chkRprt = new XMLHttpRequest();
    		        
    		        //  alert("open전");   
    		          
            		chkRprt.open("POST","/member/chk-rprtId",true);
            		chkRprt.setRequestHeader("Content-Type",
    		                                  "application/x-www-form-urlencoded");
    		                
    		                //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
            		chkRprt.onload = function()
		             {
		             
		      //          alert("너의 아이디가 들려");
		                
		  //              var comeonmyid = JSON.parse(gomyid.responseText); 
		          
		  //             $(".thisMyId").val(comeonmyid);
		               $(".chat-rprt-button").text(chkRprt.responseText);
		                
		                
		             }
    		             
            		chkRprt.send("rprtId="+rprtId);
            		
    			})
    		})
		
		
		

		
        $(function()
		{
   			$(".click-exit-button").click(function()
   			{
   		//		alert("bye");
   				$(".click-profile-container").css({"display":"none"});
   				$(".click-profile-container").removeAttr('imgClick');
   				
   			})
		})

		//승래꺼
		window.addEventListener("load", function() {
			
			
			var abtn = document.querySelector('#open-chat');
			abtn.onclick = function(e) {
				e.preventDefault();
				var chkRequest = new XMLHttpRequest();
				chkRequest.open("POST", "/chk-login", true);
				chkRequest.onload = function() {
					var chkturn = chkRequest.responseText;
					if (chkturn == "anonymousUser") {
						swal({
							  title: "로그인 하시겠습니까?",
							  text: "채팅을 사용하기 위해선 로그인이 필요합니다.",
							  icon: "warning",
							  buttons: ["싫어","가자"],
							  dangerMode: true,
							})
							.then((willDelete) => {
							  if (willDelete) {
								 window.location.href = '/login';
							  }
							});
					} /*else {
						window.location.href = '/crowd/createCategory';
					}*/

				}
				chkRequest.send();
			}
		})
        