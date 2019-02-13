 $(function () {
            var screen = document.createElement("div");
            var chatlist = $(".chat-list");
            var friendpro = $(".friend-profile");

            chatlist.click(function () {
                chatlist.removeClass("visited");
                $(this).addClass("visited");

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
    		
    				var profileImg = friendProfile.querySelector(".profile-img");
    				profileImg.style.backgroundImage = friendImg;
    
    				var profileId = friendProfile.querySelector(".profile-id");
    				profileId.innerText=friendId;
   
    				var profileMsg = friendProfile.querySelector(".profile-msg");
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
            
           
            $(function () 
            	{
	                $("#open-chat").click(function () {
	                    $("#aside-div").animate({
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
                $(".rprt").css({ "top": "-120%" });
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

        
        //  @@@@@@@@ 친구 목록에서 채팅버튼을 눌렀을 때 사용하는 함수   @@@@@@@@
        
        $(function()
        {
        	var testDiv = document.querySelector(".friend-list-container");
        	testDiv.addEventListener("click", function(evt){
        		
        		if(!evt.target.classList.contains("friend-balloon")) return;
        		
        		var target = evt.target;
        		var parent = target.parentNode;
        		var friendId = parent.querySelector(".friend-id").innerText;
        		//alert(friendId.innerText);
        		
        		
    //    		alert(friendId);
				
				var memberChattingList = new XMLHttpRequest();
	   			
				memberChattingList.open("POST","/member/get-memberChatting",true);
				memberChattingList.setRequestHeader("Content-Type",
	   										"application/x-www-form-urlencoded");
	   				
	   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
	   			memberChattingList.onload = function()
	   				{
	   					var getmemberChattingList = JSON.parse(memberChattingList.responseText);
	   						
	   	//				alert(getmemberChattingList[0].myid);
	   	//				alert(getmemberChattingList[0].regDate);
	   	//				alert(getmemberChattingList[0].myid)
	   					
	   					var today = new Date();
	   					
	   	//				alert(today);
	   					var tyear = today.getFullYear();
	   					var tmonth = today.getMonth()+1;
	   					var tday = today.getDate();
	   					
//	   					var thour = today.getHours();
//	   					var tminutes = today.getMinutes();
	   					
	   					
//	   					// 시간 PM , AM 으로 나누기위한 if 문
//	   					if(thour <=12 && thour >=1)
//	   					{
//	   						thour = "AM "+thour;
//	   					}
//	   					else if(thour >=12 && thour <= 24)
//	   					{
//	   						thour = (thour-12);
//	   						
//	   						if(thour<10)
//	   						{
//	   							thour = "PM "+"0"+thour;
//	   						}
//	   						else
//	   						{
//	   							thour = "PM "+thour;
//	   						}
//	   						
//	   					}
//	   					// 분 이쁘게 꾸미기
//	   					if(tminutes<10)
//	   					{
//	   						tminutes = "0"+tminutes;
//	   					}
	   					
	   					// 월, 일을 이쁘게 꾸미기위한 if 문들
	   					if(tmonth<10)
	   					{
	   						tmonth = "0"+tmonth;
	   					}
	   					if(tday < 10)
	   					{
	   						tday = "0"+tday;
	   					}
	   					
	   					var todaydd = tyear+"."+tmonth+"."+tday;
	   	//				alert("오늘 날짜 : "+todaydd);
	   					
	   					
	   					var testd = new Date(getmemberChattingList[0].regDate);
	   	//				alert(testd);
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
	   							hour = "AM "+"0"+hour;
	   						}
	   						else
	   						{
	   							hour = "AM "+hour;
	   						}
	   					}
	   					else if(hour >=12 && hour <= 24)
	   					{
	   						hour = (hour-12);
	   						
	   						if(hour<10)
	   						{
	   							hour = "PM "+"0"+hour;
	   						}
	   						else
	   						{
	   							hour = "PM "+hour;
	   						}
	   						
	   					}
	   					// 분 이쁘게 꾸미기
	   					if(minutes<10)
	   					{
	   						minutes = "0"+minutes;
	   					}
	   					
	   					var testdd = year+"."+month+"."+day+" "+hour+":"+minutes;
	   					
	   	//				alert(testdd);
	   					
	   					for (var i = 0; i < getmemberChattingList.length; i++) 
	   					{
							if(getmemberChattingList[i].myid='chlwl')
							{
								var mtpl = document.importNode("#my-chat-txt");
								var myId = mtpl.querySelector(".my-chat-id");
								var myImg = mtpl.querySelector(".my-chat-img");
								var myTxta = mtpl.querySelector(".my-chat-txtf");
								var myDate = mtpl.querySelector(".my-chat-date");
								
								myId.innerText = getmemberChattingList[i].myid;
								myImg.style.backgroundImage = getmemberChattingList[i].img;
								myTxta.value = getmemberChattingList[i].content;
								
								
							}
							
	   						
	   						
	   						
						}
	   					
	   					
	   				}
	   			
	   			memberChattingList.send("friendId="+friendId);
        		
        		
        		$(".chat-window").animate({
                    left: "0"
                })
        	});
        	
        	/*
            $(".friend-balloon").click(function () {
                $(".chat-window").animate({
                    left: "0"
                })
                
            })**/
        	
        	
        	
            $(".chat-window-header span").click(function () {
                $(".chat-window").animate({
                    left: "100%"
                })
                
            })
        })
        
        
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
                console.log("안:"+openchk);
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
        
        
       $(function()
	   {
	    	// localhost에 접속하고 싶은 ip를 쓰고 사이트는 내 ip로 접속 하면  상대방에게 채팅을 보낼 수 있다.
	   		var socket = new WebSocket("ws://localhost:80/chat-server");
	
	   		socket.onmessage = function(e)
	   		{
	   			console.log(e.data);
	   		}		
	   		
	   		
	   		$(".friend-balloon").click(function()
			{
	//   			alert($(this).parent().find("label").text());
	   			
	   				
			});

	   		
	   		
	   		
//	
//	   		$(".chat-send-button").click(function()
//	   		{
//	   			var friendId ="nolec";
//	   			
//	   			console.log( $(".chat-textarea").val() );
//	   			socket.send( $(".chat-textarea").val() );
//	   			
//	   			
//	   			var memberChattingList = new XMLhttpRequest();
//	   			
//	   			memberChattingList.open("POST","/member/get-memberChatting",true);
//	   			memberChattingList.setRequestHeader("Content-Type",
//	   										"application/x-www-form-urlencoded");
//	   				
//	   				//JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
//	   			memberChattingRequest.onload = function()
//	   				{
//	   					var getmemberChattingList = JSON.parse(memberChattingList.responseText);
//	   					
//	   				}
//	   			
//	   			memberChattingList.send("friendId="+friendId);
//	   			
//	   			
//	   		})
	   		
	   		
	   		
	   		
	   		
	   })

        