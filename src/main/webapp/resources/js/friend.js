$(function()
{
	// 내가 로그인을 했는지 알기 위해 homecontroller에 있는 /chk-login 이 
	// POST 요청으로 anonymousUser = 없는유저 / loggined = 로그인 성공 을
	// 보내주기 위해 사용하는 Ajax 이다.
	
	var idRequest = new XMLHttpRequest(); 
    idRequest.open("POST", "/chk-login", true); 
    idRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
   
    idRequest.onload = function () 
    {   
    	//alert("변수지정 ㄴㄴ :"+idRequest.responseText);
    	$(".thisMyId").val(idRequest.responseText);
    	
    	//alert("변수지정 ㅇㅇ :"+$(".thisMyId").val());
    	
       if(idRequest.responseText != "anonymousUser")
       {
    	   
    	   
    	   if(idRequest.responseText !="admin")
    	   {
	          chattingOn();
	          
	       //   getMyId();
	          
	          
	          
	          messageList();
	          getAdminImg();
	          admintalk();
	          soketchatting();
	          
	          $("#aside-div").css({"display":"block"});
 	          var memberdiv = document.querySelector("#aside-div");
 	          memberdiv.style.zIndex=100;
 	          
 	          $("#adminchat").css({"display":"none"});
 	         var admindiv = document.querySelector("#adminchat");
 	        admindiv.style.zIndex=0;
	       }
    	   else if(idRequest.responseText =="admin")
    	   {
//    		  chattingOn();
// 	          getMyId();
 	          
// 	          getAdminImg();
 	         adminMemberLimit();
 	         soketchatting();
 	         adminMemberChat(); 
 	        
 	          $("#aside-div").css({"display":"none"});
 	         var memberdiv = document.querySelector("#aside-div");
	          memberdiv.style.zIndex=100;
	          
 	          $("#adminchat").css({"display":"block"});
 	         var admindiv = document.querySelector("#adminchat");
 	        admindiv.style.zIndex=0;
 	          
    	   }
       }
    };
    idRequest.send();
    
    
    $(function()
	{
//    	var myid= $(".thisMyId").val();
//        alert("지금 접속한 아이디 확인용 :: "+myid);
	})
    
    ////////////////////////////////////////////////////////////////////
    
    function chattingOn()
    {
       
    	$(".friend-list").empty();
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
    
//    function reChattingOn()
//    {
//       
//    	$(".friend-list").empty();
//       var getReFriendDatas = new XMLHttpRequest();
//       
//     //  alert("open전");   
//       
//       getReFriendDatas.open("POST","/member/get-friendList",true);
//       getReFriendDatas.setRequestHeader("Content-Type",
//                               "application/x-www-form-urlencoded");
//             
//             //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
//       getReFriendDatas.onload = function()
//          {
//       //      alert("여기까진 오나??");
//             
//             var getReFriendDataList = JSON.parse(getReFriendDatas.responseText); 
//        //     alert("json 파세"+getFriendDataList);
//             var friendCp = document.querySelector("#friend-cp");
//             var friendList2 = document.querySelector(".friend-list");
//       //      alert(friendCp);
//       //      alert(getFriendDataList.length);
//        //     alert("id : "+getFriendDataList[0][0].id);
//             
//             for (var i = 0; i < getReFriendDataList.length; i++) 
//             {
//                var tpl=document.importNode(friendCp.content, true);
//                var tmpLabel=tpl.querySelector("label");
//                   tmpLabel.innerText=getReFriendDataList[i][0].id;
//                   
//                var tmph6 =tpl.querySelector("h6");
//                   tmph6.innerText=getReFriendDataList[i][0].msg;
//                   
//                var tmlImg =tpl.querySelector(".friend-img");
//                   tmlImg.style.backgroundImage = 
//                      "url(/get-img?folder=member-profile&file="+getReFriendDataList[i][0].img+")";
//                   
//                   friendList2.append(tpl);
//             }
//             
//             
//          }
//          
//       getReFriendDatas.send();
//       
//       
//        
//    };
    
    function messageList()
    {
    	// ------------------------메시지 리스트에서의 마지막 대화 내용을 가져오기 위한 ajax  START------------------------------
        
        var getLastTalkData = new XMLHttpRequest();
        
        //  alert("open전");   
          
        getLastTalkData.open("POST","/member/get-lastTalkData",true);
        getLastTalkData.setRequestHeader("Content-Type",
                                  "application/x-www-form-urlencoded");
                
                //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
        getLastTalkData.onload = function()
             {
          //      alert("여기까진 오나??");
                
     	   var ftalktplC = document.querySelector("#message-list-tpl");
     	   var messagelist = document.querySelector(".message-list");
     	   
     	   var totoday = new Date();
     	// 그중에서 오늘의 년,월,일 만 간추려서 만들기위해 변수 선언
 				var ttyear = totoday.getFullYear();
 				var ttmonth = totoday.getMonth()+1;
 				var ttday = totoday.getDate();
 				
 				
 				// 월, 일을 이쁘게 꾸미기위한 if 문들
 				if(ttmonth<10)
 				{
 					ttmonth = "0"+ttmonth;
 				}
 				if(ttday < 10)
 				{
 					ttday = "0"+ttday;
 				}
 				
 				var totodayDay = ttyear+"."+ttmonth+"."+ttday;
     	   
                var getFriendTalkDataList = JSON.parse(getLastTalkData.responseText); 

                
                
                for (var i = 0; i < getFriendTalkDataList.length; i++) 
                {

             	  if(getFriendTalkDataList[i] !=null && getFriendTalkDataList[i] !="") 
             	 {
             	  var ftalktplV = document.importNode(ftalktplC.content,true);
             	  var ftalktplIMG = ftalktplV.querySelector(".message-list-img");
             	  var ftalktplID = ftalktplV.querySelector(".message-list-id");
             	  var ftalktplDate = ftalktplV.querySelector(".message-list-date");
             	  var ftalktplContent = ftalktplV.querySelector(".message-list-limitContent");
             	  
             	  
             	  var ftalkDate = new Date(getFriendTalkDataList[i][0].regDate);
             	  
             	  //========  DATE 표기를 위한 코드 특징 좀 더럽다 START ======================
             	  
             	//화면에 뿌리기위해 사용 할 변수 년,월,일,시,분
  					var eyear = ftalkDate.getFullYear();
  					var emonth = ftalkDate.getMonth()+1;
  					var eday = ftalkDate.getDate();
  					var ehour = ftalkDate.getHours();
  					var eminutes = ftalkDate.getMinutes();
  					
  					//월 일 이쁘게 꾸미기
  					if(emonth<10)
  					{
  						emonth = "0"+emonth;
  					}
  					if(eday < 10)
  					{
  						eday = "0"+eday;
  					}
  					
  					// 시간 PM , AM 으로 나누기위한 if 문
  					if(ehour <12 && ehour >=1)
  					{
  						
  						if(ehour<10)
  						{
  							ehour = "오전 "+"0"+ehour;
  						}
  						else
  						{
  							ehour = "오전 "+ehour;
  						}
  					}
  					else if(ehour >=12 && ehour <= 24)
  					{
  						ehour = (ehour-12);
  						
  						if(ehour<10)
  						{
  							ehour = "오후 "+"0"+ehour;
  						}
  						else
  						{
  							ehour = "오후 "+ehour;
  						}
  						
  					}
  					// 분 이쁘게 꾸미기
  					if(eminutes<10)
  					{
  						eminutes = "0"+eminutes;
  					}
  					
  					//테스트용으로 해본 쳌쳌ㅋ
  					var echatCheck = eyear+"."+emonth+"."+eday;
  					var echatDate = eyear+"."+emonth+"."+eday+" "+ehour+":"+eminutes;
//  				
  					
  					if(totodayDay==echatCheck)
  						
  					{
  						echatDate ="오늘 "+" "+ehour+":"+eminutes;
  					}
  					else
  					{
  						echatDate = eyear+"."+emonth+"."+eday+" "+ehour+":"+eminutes;
  					}
             	  
  					
  					
  					
  					 //========  DATE 표기를 위한 코드 END ======================
             	  
             	  if($(".thisMyId").val() == getFriendTalkDataList[i][0].id)
             	  {
             		  ftalktplID.innerText = getFriendTalkDataList[i][0].receiverId;
             		 
             		  ftalktplIMG.style.backgroundImage = 
                           "url(/get-img?folder=member-profile&file="
             			  +getFriendTalkDataList[i][0].receiverImg+")";
             		 
             		  ftalktplContent.innerText = getFriendTalkDataList[i][0].content;
             		  ftalktplDate.innerText=echatDate;
             		  
             		  messagelist.append(ftalktplV);
             		  
             	  }
             	  else
             	  {
             		  ftalktplID.innerText=getFriendTalkDataList[i][0].id;
             		 
             		  ftalktplIMG.style.backgroundImage = 
                           "url(/get-img?folder=member-profile&file="
             			  +getFriendTalkDataList[i][0].img+")";
             		  
             		  ftalktplContent.innerText = getFriendTalkDataList[i][0].content;
             		  ftalktplDate.innerText=echatDate;
             		  
             		  messagelist.append(ftalktplV);
             	  }
             	  
             	  
             	  }
             	   
                }

                
             }
             
        getLastTalkData.send();
        

    }
	// ------------------------메시지 리스트에서의 마지막 대화 내용을 가져오기 위한 ajax  END------------------------------

    // --------------------  Admin의 IMG를 가져오기위한 FUNCTION Start --------------------------
    
    function getAdminImg()
    {
    	var getAdminImg = new XMLHttpRequest();
       
          
    	getAdminImg.open("POST","/member/get-adminImg",true);
    	getAdminImg.setRequestHeader("Content-Type",
                                  "application/x-www-form-urlencoded");
                
    	getAdminImg.onload = function()
             {
                var adminImg = JSON.parse(getAdminImg.responseText); 
                $(".adminImg").val(adminImg[0].img);
             }
             
    	getAdminImg.send();
    	
    }
    // --------------------  Admin의 IMG를 가져오기위한 FUNCTION End --------------------------

    
    
    // --------------------  1:1 문의 에서의 마지막 대화 내용을 가져오기 위한 FUNCTION START -------------------
    
    function admintalk()
    {
    	 var getadminTalkData = new XMLHttpRequest();
         
      //     alert("open전");   
           
    	 getadminTalkData.open("POST","/member/get-lastAdminTalkData",true);
    	 getadminTalkData.setRequestHeader("Content-Type",
                                   "application/x-www-form-urlencoded");
                 
                 //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
    	 getadminTalkData.onload = function()
              {
           //      alert("여기까진 오나??");
                 
    		 
      	   
      	   var adtoday = new Date();
      	// 그중에서 오늘의 년,월,일 만 간추려서 만들기위해 변수 선언
  				var adyear = adtoday.getFullYear();
  				var admonth = adtoday.getMonth()+1;
  				var adday = adtoday.getDate();
  				
  				
  				// 월, 일을 이쁘게 꾸미기위한 if 문들
  				if(admonth<10)
  				{
  					admonth = "0"+admonth;
  				}
  				if(adday < 10)
  				{
  					adday = "0"+adday;
  				}
  				
  				var adtodayDay = adyear+"."+admonth+"."+adday;
      	   
                 var getAdminTalkDataList = JSON.parse(getadminTalkData.responseText); 
                 
    //             alert(getAdminTalkDataList[0].content);
     //            alert(getAdminTalkDataList[0].regDate);
                 
                 
                 

              	  if(getAdminTalkDataList[0] !=null && getAdminTalkDataList[0] !="") 
              	 {
//              	  var ftalktplV = document.importNode(ftalktplC.content,true);
//              	  var ftalktplIMG = ftalktplV.querySelector(".message-list-img");
//              	  var ftalktplID = ftalktplV.querySelector(".message-list-id");
//              	  var ftalktplDate = ftalktplV.querySelector(".message-list-date");
//              	  var ftalktplContent = ftalktplV.querySelector(".message-list-limitContent");
              	  
              	  
              	  var adtalkDate = new Date(getAdminTalkDataList[0].regDate);
              	  
              	  //========  DATE 표기를 위한 코드 특징 좀 더럽다 START ======================
              	  
              	//화면에 뿌리기위해 사용 할 변수 년,월,일,시,분
   					var adyear = adtalkDate.getFullYear();
   					var admonth = adtalkDate.getMonth()+1;
   					var adday = adtalkDate.getDate();
   					var adhour = adtalkDate.getHours();
   					var adminutes = adtalkDate.getMinutes();
   					
   					//월 일 이쁘게 꾸미기
   					if(admonth<10)
   					{
   						admonth = "0"+admonth;
   					}
   					if(adday < 10)
   					{
   						adday = "0"+adday;
   					}
   					
   					// 시간 PM , AM 으로 나누기위한 if 문
   					if(adhour <12 && adhour >=1)
   					{
   						
   						if(adhour<10)
   						{
   							adhour = "오전 "+"0"+adhour;
   						}
   						else
   						{
   							adhour = "오전 "+adhour;
   						}
   					}
   					else if(adhour >=12 && adhour <= 24)
   					{
   						adhour = (adhour-12);
   						
   						if(adhour<10)
   						{
   							adhour = "오후 "+"0"+adhour;
   						}
   						else
   						{
   							adhour = "오후 "+adhour;
   						}
   						
   					}
   					// 분 이쁘게 꾸미기
   					if(adminutes<10)
   					{
   						adminutes = "0"+adminutes;
   					}
   					
   					//테스트용으로 해본 쳌쳌ㅋ
   					var adchatCheck = adyear+"."+admonth+"."+adday;
   					var adchatDate = adyear+"."+admonth+"."+adday+" "+adhour+":"+adminutes;
//   				
   					
   					if(adtodayDay==adchatCheck)
   						
   					{
   						adchatDate ="오늘 "+" "+adhour+":"+adminutes;
   					}
   					else
   					{
   						adchatDate = adyear+"."+admonth+"."+adday+" "+adhour+":"+adminutes;
   					}
              	  
   					
   					 //========  DATE 표기를 위한 코드 END ======================
              	  
   					var adcontent = document.querySelector(".admin-list-content");
   					var addate = document.querySelector(".admin-list-date");
   					var adimg = document.querySelector(".admin-list-img");
   					
   					adimg.style.backgroundImage = 
                        "url(/get-img?folder=member-profile&file="+$(".adminImg").val()+")";
   					adcontent.innerText = getAdminTalkDataList[0].content;
   					addate.innerText = adchatDate;
   					
   	//				alert(adcontent.innerText);
   	//				alert(addate.innerText);
   					
   					
   				
              	  
              	  
              	  }
              	   
                 }

                 
              
              
    	 getadminTalkData.send();
         
    }
    
//    function hihihi()
//    {
//    	alert("hi");
//    }
    
    // --------------------  1:1 문의 에서의 마지막 대화 내용을 가져오기 위한 FUNCTION END -------------------

    //------------------- 내가 ADMIN 일 경우 나와 대화한 멤버의 아이디를 가져오는 FUNCTION Start --------------
    
    
    function adminMemberLimit()
    {
    	 var getadminMemberLimit = new XMLHttpRequest();
         
      //     alert("open전");   
           
    	 getadminMemberLimit.open("POST","/admin/get-imAdminLimit",true);
    	 getadminMemberLimit.setRequestHeader("Content-Type",
                                   "application/x-www-form-urlencoded");
                 
                 //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
    	 getadminMemberLimit.onload = function()
              {
//                 alert("여기까진 오나??");
                 $(".adminadmin-list").empty();
               var adLimittplC = document.querySelector("#admin-Limit-Tpl");
           	   var admessagelist = document.querySelector(".adminadmin-list");
      	   
           	
//           	   alert(""+$(".adminchat-list").className);
//           	   alert("nvgnjh"+adLimittplC);
           	   
           	   
           	   var adtoday = new Date();
      	// 그중에서 오늘의 년,월,일 만 간추려서 만들기위해 변수 선언
  				var adyear = adtoday.getFullYear();
  				var admonth = adtoday.getMonth()+1;
  				var adday = adtoday.getDate();
  				
  				
  				// 월, 일을 이쁘게 꾸미기위한 if 문들
  				if(admonth<10)
  				{
  					admonth = "0"+admonth;
  				}
  				if(adday < 10)
  				{
  					adday = "0"+adday;
  				}
  				
  				var adtodayDay = adyear+"."+admonth+"."+adday;
      	   
                 var getAdminLimitDatas = JSON.parse(getadminMemberLimit.responseText); 
//                 alert(getAdminLimitDatas[0][0].id);
//                 alert(getAdminLimitDatas[0][0].content);
//                 alert(getAdminLimitDatas[0][0].regDate);
//                 alert(getAdminLimitDatas[1][0].id);
//                 alert(getAdminLimitDatas[1][0].content);
//                 alert(getAdminLimitDatas[1][0].regDate);
                 
                 
                 

              	
              	for (var i = 0; i < getAdminLimitDatas.length; i++) 
                 {
						
					
              	  var adLimitTplV = document.importNode(adLimittplC.content,true);
              	  var adLimitTplImg = adLimitTplV.querySelector(".adminfriend-img");
              	  var adLimitTplId = adLimitTplV.querySelector(".adminfriend-id");
              	  var adLimitTplDate = adLimitTplV.querySelector(".admin-limit-date");
              	  var adLimitTplContent = adLimitTplV.querySelector(".adminfriend-content");
              	  
              	  
              	  var adtalkDate = new Date(getAdminLimitDatas[i][0].regDate);
              	  
//              	  //========  DATE 표기를 위한 코드 특징 좀 더럽다 START ======================
              	  
//              	//화면에 뿌리기위해 사용 할 변수 년,월,일,시,분
   					var adyear = adtalkDate.getFullYear();
   					var admonth = adtalkDate.getMonth()+1;
   					var adday = adtalkDate.getDate();
   					var adhour = adtalkDate.getHours();
   					var adminutes = adtalkDate.getMinutes();
   					
   					//월 일 이쁘게 꾸미기
   					if(admonth<10)
   					{
   						admonth = "0"+admonth;
   					}
   					if(adday < 10)
   					{
   						adday = "0"+adday;
   					}
   					
   					// 시간 PM , AM 으로 나누기위한 if 문
   					if(adhour <12 && adhour >=1)
   					{
   						
   						if(adhour<10)
   						{
   							adhour = "오전 "+"0"+adhour;
   						}
   						else
   						{
   							adhour = "오전 "+adhour;
   						}
   					}
   					else if(adhour >=12 && adhour <= 24)
   					{
   						adhour = (adhour-12);
   						
   						if(adhour<10)
   						{
   							adhour = "오후 "+"0"+adhour;
   						}
   						else
   						{
   							adhour = "오후 "+adhour;
   						}
   						
   					}
   					// 분 이쁘게 꾸미기
   					if(adminutes<10)
   					{
   						adminutes = "0"+adminutes;
   					}
   					
   					//테스트용으로 해본 쳌쳌ㅋ
   					var adchatCheck = adyear+"."+admonth+"."+adday;
   					var adchatDate = adyear+"."+admonth+"."+adday+" "+adhour+":"+adminutes;
//   				
   					
   					if(adtodayDay==adchatCheck)
   						
   					{
   						adchatDate ="오늘 "+" "+adhour+":"+adminutes;
   					}
   					else
   					{
   						adchatDate = adyear+"."+admonth+"."+adday+" "+adhour+":"+adminutes;
   					}
              	  
   					
   					 //========  DATE 표기를 위한 코드 END ======================
              	  

             	 if('admin'==getAdminLimitDatas[i][0].id) 
                 {
    					adLimitTplId.innerText=getAdminLimitDatas[i][0].receiverId;
               		 
       					adLimitTplImg.style.backgroundImage = 
                             "url(/get-img?folder=member-profile&file="
               			  +getAdminLimitDatas[i][0].receiverImg+")";
               		  
       					adLimitTplContent.innerText = getAdminLimitDatas[i][0].content;
               		adLimitTplDate.innerText=adtodayDay;
               		  
               		admessagelist.append(adLimitTplV);
             		  
             	  }
             	  else
             	  {
     					adLimitTplId.innerText=getAdminLimitDatas[i][0].id;
               		 
       					adLimitTplImg.style.backgroundImage = 
                             "url(/get-img?folder=member-profile&file="
               			  +getAdminLimitDatas[i][0].img+")";
               		  
       					adLimitTplContent.innerText = getAdminLimitDatas[i][0].content;
               		adLimitTplDate.innerText=adtodayDay;
               		  
               		admessagelist.append(adLimitTplV);
             	  }
   					
//   					adLimitTplId.innerText=getAdminLimitDatas[i][0].id;
//            		 
//   					adLimitTplImg.style.backgroundImage = 
//                         "url(/get-img?folder=member-profile&file="
//           			  +getFriendTalkDataList[i][0].img+")";
//           		  
//   					adLimitTplContent.innerText = getAdminLimitDatas[i][0].content;
//           		adLimitTplDate.innerText=echatDate;
//           		  
//           		admessagelist.append(adLimitTplV);
              		  }    // for문 끝
   	//				alert(adcontent.innerText);
   	//				alert(addate.innerText);
   					
   					
   				
              	  
              	  
              	  }
              	   
                 

                 
              
              
    	 getadminMemberLimit.send();
         
    }
    
    
    
    //------------------- 내가 ADMIN 일 경우 나와 대화한 멤버의 아이디를 가져오는 FUNCTION End --------------

    
    
    
    
    
    
    
    
    
    
    function getMyId()
    {
    	var gomyid = new XMLHttpRequest();
        
        //  alert("open전");   
          
    	gomyid.open("POST","/member/get-myId",true);
    	gomyid.setRequestHeader("Content-Type",
                                  "application/x-www-form-urlencoded");
                
                //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
    	gomyid.onload = function()
             {
             
      //          alert("너의 아이디가 들려");
                
                var comeonmyid = JSON.parse(gomyid.responseText); 
          
               $(".thisMyId").val(comeonmyid);
               
                
                
             }
             
    	gomyid.send();
    	
    	
    	
    }



    ////////////////////////////////////////////////////////////////////
	
	
	
})


// ========   채팅 서버를 열어 보자 =============================================================

function reboot()
{
	
			if($(".thisMyId").val()=="admin")
			{
				readminMemberLimit();
				
			}
			else if($(".thisMyId").val()!="admin")
			{
				remessageList();
				readmintalk();
			}
		
	
	
}

//function gii()
//{
//	alert("gii");
//}





//////////////////// 테스트 구역////////////////////////////////////////////////////////////////

function remessageList()
{
	// ------------------------메시지 리스트에서의 마지막 대화 내용을 가져오기 위한 ajax  START------------------------------
    
    var getreLastTalkData = new XMLHttpRequest();
    
    //  alert("open전");   
      
    getreLastTalkData.open("POST","/member/get-lastTalkData",true);
    getreLastTalkData.setRequestHeader("Content-Type",
                              "application/x-www-form-urlencoded");
            
            //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
    getreLastTalkData.onload = function()
         {
      //      alert("여기까진 오나??");
            
 	   var ftalktplC = document.querySelector("#message-list-tpl");
 	   var messagelist = document.querySelector(".message-list");
 	   
 	   $(".message-list").empty();
 	   
 	   var totoday = new Date();
 	// 그중에서 오늘의 년,월,일 만 간추려서 만들기위해 변수 선언
				var ttyear = totoday.getFullYear();
				var ttmonth = totoday.getMonth()+1;
				var ttday = totoday.getDate();
				
				
				// 월, 일을 이쁘게 꾸미기위한 if 문들
				if(ttmonth<10)
				{
					ttmonth = "0"+ttmonth;
				}
				if(ttday < 10)
				{
					ttday = "0"+ttday;
				}
				
				var totodayDay = ttyear+"."+ttmonth+"."+ttday;
 	   
            var getFriendTalkDataList = JSON.parse(getreLastTalkData.responseText); 

            
            
            for (var i = 0; i < getFriendTalkDataList.length; i++) 
            {

         	  if(getFriendTalkDataList[i] !=null && getFriendTalkDataList[i] !="") 
         	 {
         	  var ftalktplV = document.importNode(ftalktplC.content,true);
         	  var ftalktplIMG = ftalktplV.querySelector(".message-list-img");
         	  var ftalktplID = ftalktplV.querySelector(".message-list-id");
         	  var ftalktplDate = ftalktplV.querySelector(".message-list-date");
         	  var ftalktplContent = ftalktplV.querySelector(".message-list-limitContent");
         	  
         	  
         	  var ftalkDate = new Date(getFriendTalkDataList[i][0].regDate);
         	  
         	  //========  DATE 표기를 위한 코드 특징 좀 더럽다 START ======================
         	  
         	//화면에 뿌리기위해 사용 할 변수 년,월,일,시,분
					var eyear = ftalkDate.getFullYear();
					var emonth = ftalkDate.getMonth()+1;
					var eday = ftalkDate.getDate();
					var ehour = ftalkDate.getHours();
					var eminutes = ftalkDate.getMinutes();
					
					//월 일 이쁘게 꾸미기
					if(emonth<10)
					{
						emonth = "0"+emonth;
					}
					if(eday < 10)
					{
						eday = "0"+eday;
					}
					
					// 시간 PM , AM 으로 나누기위한 if 문
					if(ehour <12 && ehour >=1)
					{
						
						if(ehour<10)
						{
							ehour = "오전 "+"0"+ehour;
						}
						else
						{
							ehour = "오전 "+ehour;
						}
					}
					else if(ehour >=12 && ehour <= 24)
					{
						ehour = (ehour-12);
						
						if(ehour<10)
						{
							ehour = "오후 "+"0"+ehour;
						}
						else
						{
							ehour = "오후 "+ehour;
						}
						
					}
					// 분 이쁘게 꾸미기
					if(eminutes<10)
					{
						eminutes = "0"+eminutes;
					}
					
					//테스트용으로 해본 쳌쳌ㅋ
					var echatCheck = eyear+"."+emonth+"."+eday;
					var echatDate = eyear+"."+emonth+"."+eday+" "+ehour+":"+eminutes;
//				
					
					if(totodayDay==echatCheck)
						
					{
						echatDate ="오늘 "+" "+ehour+":"+eminutes;
					}
					else
					{
						echatDate = eyear+"."+emonth+"."+eday+" "+ehour+":"+eminutes;
					}
         	  
					
					
					
					 //========  DATE 표기를 위한 코드 END ======================
         	  
         	  if($(".thisMyId").val() == getFriendTalkDataList[i][0].id)
         	  {
         		  ftalktplID.innerText = getFriendTalkDataList[i][0].receiverId;
         		 
         		  ftalktplIMG.style.backgroundImage = 
                       "url(/get-img?folder=member-profile&file="
         			  +getFriendTalkDataList[i][0].receiverImg+")";
         		 
         		  ftalktplContent.innerText = getFriendTalkDataList[i][0].content;
         		  ftalktplDate.innerText=echatDate;
         		  
         		  messagelist.append(ftalktplV);
         		  
         	  }
         	  else
         	  {
         		  ftalktplID.innerText=getFriendTalkDataList[i][0].id;
         		 
         		  ftalktplIMG.style.backgroundImage = 
                       "url(/get-img?folder=member-profile&file="
         			  +getFriendTalkDataList[i][0].img+")";
         		  
         		  ftalktplContent.innerText = getFriendTalkDataList[i][0].content;
         		  ftalktplDate.innerText=echatDate;
         		  
         		  messagelist.append(ftalktplV);
         	  }
         	  
         	  
         	  }
         	   
            }

            
         }
         
    getreLastTalkData.send();
    

}

function readmintalk()
{
	 var getadminTalkData = new XMLHttpRequest();
     
  //     alert("open전");   
       
	 getadminTalkData.open("POST","/member/get-lastAdminTalkData",true);
	 getadminTalkData.setRequestHeader("Content-Type",
                               "application/x-www-form-urlencoded");
             
             //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
	 getadminTalkData.onload = function()
          {
       //      alert("여기까진 오나??");
             
		 
  	   
  	   var adtoday = new Date();
  	// 그중에서 오늘의 년,월,일 만 간추려서 만들기위해 변수 선언
				var adyear = adtoday.getFullYear();
				var admonth = adtoday.getMonth()+1;
				var adday = adtoday.getDate();
				
				
				// 월, 일을 이쁘게 꾸미기위한 if 문들
				if(admonth<10)
				{
					admonth = "0"+admonth;
				}
				if(adday < 10)
				{
					adday = "0"+adday;
				}
				
				var adtodayDay = adyear+"."+admonth+"."+adday;
  	   
             var getAdminTalkDataList = JSON.parse(getadminTalkData.responseText); 
             
    //         alert(getAdminTalkDataList[0].content);
    //         alert(getAdminTalkDataList[0].regDate);
             
             
             

          	  if(getAdminTalkDataList[0] !=null && getAdminTalkDataList[0] !="") 
          	 {
//          	  var ftalktplV = document.importNode(ftalktplC.content,true);
//          	  var ftalktplIMG = ftalktplV.querySelector(".message-list-img");
//          	  var ftalktplID = ftalktplV.querySelector(".message-list-id");
//          	  var ftalktplDate = ftalktplV.querySelector(".message-list-date");
//          	  var ftalktplContent = ftalktplV.querySelector(".message-list-limitContent");
          	  
          	  
          	  var adtalkDate = new Date(getAdminTalkDataList[0].regDate);
          	  
          	  //========  DATE 표기를 위한 코드 특징 좀 더럽다 START ======================
          	  
          	//화면에 뿌리기위해 사용 할 변수 년,월,일,시,분
					var adyear = adtalkDate.getFullYear();
					var admonth = adtalkDate.getMonth()+1;
					var adday = adtalkDate.getDate();
					var adhour = adtalkDate.getHours();
					var adminutes = adtalkDate.getMinutes();
					
					//월 일 이쁘게 꾸미기
					if(admonth<10)
					{
						admonth = "0"+admonth;
					}
					if(adday < 10)
					{
						adday = "0"+adday;
					}
					
					// 시간 PM , AM 으로 나누기위한 if 문
					if(adhour <12 && adhour >=1)
					{
						
						if(adhour<10)
						{
							adhour = "오전 "+"0"+adhour;
						}
						else
						{
							adhour = "오전 "+adhour;
						}
					}
					else if(adhour >=12 && adhour <= 24)
					{
						adhour = (adhour-12);
						
						if(adhour<10)
						{
							adhour = "오후 "+"0"+adhour;
						}
						else
						{
							adhour = "오후 "+adhour;
						}
						
					}
					// 분 이쁘게 꾸미기
					if(adminutes<10)
					{
						adminutes = "0"+adminutes;
					}
					
					//테스트용으로 해본 쳌쳌ㅋ
					var adchatCheck = adyear+"."+admonth+"."+adday;
					var adchatDate = adyear+"."+admonth+"."+adday+" "+adhour+":"+adminutes;
//				
					
					if(adtodayDay==adchatCheck)
						
					{
						adchatDate ="오늘 "+" "+adhour+":"+adminutes;
					}
					else
					{
						adchatDate = adyear+"."+admonth+"."+adday+" "+adhour+":"+adminutes;
					}
          	  
					
					 //========  DATE 표기를 위한 코드 END ======================
          	  
					var adcontent = document.querySelector(".admin-list-content");
					var addate = document.querySelector(".admin-list-date");
					var adimg = document.querySelector(".admin-list-img");
					
					adimg.style.backgroundImage = 
                    "url(/get-img?folder=member-profile&file="+$(".adminImg").val()+")";
					adcontent.innerText = getAdminTalkDataList[0].content;
					addate.innerText = adchatDate;
					
	//				alert(adcontent.innerText);
	//				alert(addate.innerText);
					
					
				
          	  
          	  
          	  }
          	   
             }

             
          
          
	 getadminTalkData.send();
     
}




/// ADMIN 전용  rererererererererere
function readminMemberLimit()
{
	 var getreadminMemberLimit = new XMLHttpRequest();
     
  //     alert("open전");   
       
	 getreadminMemberLimit.open("POST","/admin/get-imAdminLimit",true);
	 getreadminMemberLimit.setRequestHeader("Content-Type",
                               "application/x-www-form-urlencoded");
             
             //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
	 getreadminMemberLimit.onload = function()
          {
//             alert("여기까진 오나??");
             
           var adLimittplC = document.querySelector("#admin-Limit-Tpl");
       	   var admessagelist = document.querySelector(".adminadmin-list");
       	   $(".adminadmin-list").empty();
       	   
//       	   alert(""+$(".adminchat-list").className);
//       	   alert("nvgnjh"+adLimittplC);
       	   
       	   
       	   var adtoday = new Date();
  	// 그중에서 오늘의 년,월,일 만 간추려서 만들기위해 변수 선언
				var adyear = adtoday.getFullYear();
				var admonth = adtoday.getMonth()+1;
				var adday = adtoday.getDate();
				
				
				// 월, 일을 이쁘게 꾸미기위한 if 문들
				if(admonth<10)
				{
					admonth = "0"+admonth;
				}
				if(adday < 10)
				{
					adday = "0"+adday;
				}
				
				var adtodayDay = adyear+"."+admonth+"."+adday;
  	   
             var getAdminLimitDatas = JSON.parse(getreadminMemberLimit.responseText); 
//             alert(getAdminLimitDatas[0][0].id);
//             alert(getAdminLimitDatas[0][0].content);
//             alert(getAdminLimitDatas[0][0].regDate);
//             alert(getAdminLimitDatas[1][0].id);
//             alert(getAdminLimitDatas[1][0].content);
//             alert(getAdminLimitDatas[1][0].regDate);
             
             
             

          	
          	for (var i = 0; i < getAdminLimitDatas.length; i++) 
             {
					
				
          	  var adLimitTplV = document.importNode(adLimittplC.content,true);
          	  var adLimitTplImg = adLimitTplV.querySelector(".adminfriend-img");
          	  var adLimitTplId = adLimitTplV.querySelector(".adminfriend-id");
          	  var adLimitTplDate = adLimitTplV.querySelector(".admin-limit-date");
          	  var adLimitTplContent = adLimitTplV.querySelector(".adminfriend-content");
          	  
          	  
          	  var adtalkDate = new Date(getAdminLimitDatas[i][0].regDate);
          	  
//          	  //========  DATE 표기를 위한 코드 특징 좀 더럽다 START ======================
          	  
//          	//화면에 뿌리기위해 사용 할 변수 년,월,일,시,분
					var adyear = adtalkDate.getFullYear();
					var admonth = adtalkDate.getMonth()+1;
					var adday = adtalkDate.getDate();
					var adhour = adtalkDate.getHours();
					var adminutes = adtalkDate.getMinutes();
					
					//월 일 이쁘게 꾸미기
					if(admonth<10)
					{
						admonth = "0"+admonth;
					}
					if(adday < 10)
					{
						adday = "0"+adday;
					}
					
					// 시간 PM , AM 으로 나누기위한 if 문
					if(adhour <12 && adhour >=1)
					{
						
						if(adhour<10)
						{
							adhour = "오전 "+"0"+adhour;
						}
						else
						{
							adhour = "오전 "+adhour;
						}
					}
					else if(adhour >=12 && adhour <= 24)
					{
						adhour = (adhour-12);
						
						if(adhour<10)
						{
							adhour = "오후 "+"0"+adhour;
						}
						else
						{
							adhour = "오후 "+adhour;
						}
						
					}
					// 분 이쁘게 꾸미기
					if(adminutes<10)
					{
						adminutes = "0"+adminutes;
					}
					
					//테스트용으로 해본 쳌쳌ㅋ
					var adchatCheck = adyear+"."+admonth+"."+adday;
					var adchatDate = adyear+"."+admonth+"."+adday+" "+adhour+":"+adminutes;
//				
					
					if(adtodayDay==adchatCheck)
						
					{
						adchatDate ="오늘 "+" "+adhour+":"+adminutes;
					}
					else
					{
						adchatDate = adyear+"."+admonth+"."+adday+" "+adhour+":"+adminutes;
					}
          	  
					
					 //========  DATE 표기를 위한 코드 END ======================
          	  

         	 if('admin'==getAdminLimitDatas[i][0].id) 
             {
					adLimitTplId.innerText=getAdminLimitDatas[i][0].receiverId;
           		 
   					adLimitTplImg.style.backgroundImage = 
                         "url(/get-img?folder=member-profile&file="
           			  +getAdminLimitDatas[i][0].receiverImg+")";
           		  
   					adLimitTplContent.innerText = getAdminLimitDatas[i][0].content;
           		adLimitTplDate.innerText=adtodayDay;
           		  
           		admessagelist.append(adLimitTplV);
         		  
         	  }
         	  else
         	  {
 					adLimitTplId.innerText=getAdminLimitDatas[i][0].id;
           		 
   					adLimitTplImg.style.backgroundImage = 
                         "url(/get-img?folder=member-profile&file="
           			  +getAdminLimitDatas[i][0].img+")";
           		  
   					adLimitTplContent.innerText = getAdminLimitDatas[i][0].content;
           		adLimitTplDate.innerText=adtodayDay;
           		  
           		admessagelist.append(adLimitTplV);
         	  }
					
//					adLimitTplId.innerText=getAdminLimitDatas[i][0].id;
//        		 
//					adLimitTplImg.style.backgroundImage = 
//                     "url(/get-img?folder=member-profile&file="
//       			  +getFriendTalkDataList[i][0].img+")";
//       		  
//					adLimitTplContent.innerText = getAdminLimitDatas[i][0].content;
//       		adLimitTplDate.innerText=echatDate;
//       		  
//       		admessagelist.append(adLimitTplV);
          		  }    // for문 끝
	//				alert(adcontent.innerText);
	//				alert(addate.innerText);
					
					
				
          	  
          	  
          	  }
          	   
             

             
          
          
	 getreadminMemberLimit.send();
     
}

////////////////////////////////////////////////////////////////////////////////////////////


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

