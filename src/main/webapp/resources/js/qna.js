// 로그인이 되고 나서 가져오는 QnA List 데이터
function seesee()
{
	//alert($(".thisMyId").val());
	if($(".thisMyId").val()=='admin')
	{
		$(".jaju-option-list").css({"display":"block"});
		$(".jaju-create-list").css({"display":"block"});
	}
}

$(function () 
{
	var sidecheck = true;
    var topcheck = true;
    var isProgressing = false;

    var listchk = true;
    var createchk = true;
	
    var selectTitle = null;
    var selectcontent = null;
    
    
	var qnaOpenBtn = document.querySelector(".qnaButton");
	var smQnaOpenBtn = document.querySelector(".sm-qnaButton");
	
	
	
	$(".jaju-arrow").click(function()
		    {
		        if(isProgressing)
		            return;
		            
		            isProgressing=true;
		            var ppp = $(this).parent().parent();
		        if(topcheck)
		        {
		            $(this).css({"transform":"rotate(180deg)"});
		           // alert($(this).parent().parent());
		            
		            ppp.animate({ height:110+"px"});
		            ppp.children(".jaju-cat-menu").css("display","block");
		            
		            
		        }
		        else
		        {
		            $(this).css({"transform":"rotate(0deg)"});
		            ppp.animate({height:60+"px"},function()
		            {
		                ppp.children(".jaju-cat-menu").css("display","none");
		            });
		            
		            
		        }

		        topcheck=!topcheck;
		        isProgressing = !isProgressing;
		    });

	
	
	qnaOpenBtn.onclick=function()
	{
		$(".jaju-side-slider").animate({"right":"15px"});
	}
	smQnaOpenBtn.onclick=function()
	{
		$(".jaju-side-slider").animate({"right":"0px"});
	}
	
	$(".jaju-backbackback").click(function()
		    {
		 //                   alert("dfdf");
		        $(".jaju-side-slider").animate({"right":"-375px"});
		    })
	$(".jaju-create-list-cancel").click(function()
		    {
		        $(".jaju-create-list").css({"background":"white","color":"black"});
		        $(".jaju-option-list").css({"background":"white","color":"black"});
		        $(".jaju-line-delete").css({"display":"none"});
		        $(".jaju-line-setting").css({"display":"none"});
		        listchk=!listchk 
		        createchk=!createchk
		        
		        $(".jaju-create-list-container").css({"bottom":"-100%"})
		        $(".jaju-create-list-container").css({"display":"none"})
		    })
		    $(".jaju-create-list").click(function()
		    {
		        $(".jaju-create-list-container").css({"display":"flex"})
		        $(".jaju-create-list-container").css({"bottom":"135px"})
		        $(".jaju-create-list-title").val("");
		        $(".jaju-create-list-content").val("");
		    })
	
		    
	var chkchkchk = true;
		    
	$(".jaju-option-list").click(function()
			{
				if(chkchkchk)
				{
					$(".jaju-line-delete").css({"display":"block"});
				     $(".jaju-line-setting").css({"display":"block"});
				}
				else
				{
					$(".jaju-line-delete").css({"display":"none"});
				     $(".jaju-line-setting").css({"display":"none"});
				}
				chkchkchk = !chkchkchk;
			})
			   

			$(".jaju-create-list").click(function()
			{
				$(".jaju-create-list-add").val("추가");
			})
			
	var selectlist2 =null;
	var starttitle= null;
	var startcontent=null;
// 시험용 공간 START
//	alert("들어오긴하셨나요?")
	var getQnaList = new XMLHttpRequest();
    
	getQnaList.open("POST","/get-qna-list",true);
	getQnaList.setRequestHeader("Content-Type",
                              "application/x-www-form-urlencoded");
            
	getQnaList.onload = function()
         {
         
            var comeQnaList = JSON.parse(getQnaList.responseText); 
 //           alert(comeQnaList.length);
            
            for (var i = 0; i < comeQnaList.length; i++) 
            {
            	
            	var listTempl = document.querySelector("#jaju-muni-line-tpl");

                var appendUlPoint = document.querySelector(".jaju-big-category");
                var createLiTitle = document.querySelector(".jaju-create-list-title");
                var createLiContent = document.querySelector(".jaju-create-list-content");


                var listTempl = document.querySelector("#jaju-muni-line-tpl");

                var listTemplAp = document.importNode(listTempl.content,true);
                var listTempId = listTemplAp.querySelector(".jaju-li-id");
                var listTempTitle = listTemplAp.querySelector(".jaju-q-title-a");
                var listTempContent =listTemplAp.querySelector(".jaju-q-content");
                var listTempArrow = listTemplAp.querySelector(".jaju-arrow");
                var listTempLienSetting =listTemplAp.querySelector(".jaju-line-setting");
                var listTempLienDelete = listTemplAp.querySelector(".jaju-line-delete");

                var isProgressing=false;
     //                   alert(createLiTitle.value);
                listTempId.value = comeQnaList[i].id;
                listTempTitle.innerText=comeQnaList[i].title;
                listTempContent.innerText=comeQnaList[i].content;

  //              console.log("아이디 : "+listTempId.value);
  //              console.log("타이틀 : "+listTempTitle.innerText);
 //               console.log("컨텐트 : "+listTempContent.innerText);
                
                listTempArrow.onclick=function()
                {
                    if(isProgressing)
                    return;
                    
                    isProgressing=true;
                    var ppp = $(this).parent().parent();
                    if(topcheck)
                    {
                    $(this).css({"transform":"rotate(180deg)"});
                // alert($(this).parent().parent());
                    
                    ppp.animate({ height:110+"px"});
                    ppp.children(".jaju-cat-menu").css("display","block");
                    
                    
                    }
                    else
                    {
                    $(this).css({"transform":"rotate(0deg)"});
                    ppp.animate({height:60+"px"},function()
                    {
                        ppp.children(".jaju-cat-menu").css("display","none");
                    });
                    
                    
                }
                
                
                topcheck=!topcheck;
                isProgressing = !isProgressing;

                }
                
                listTempLienSetting.onclick=function()
                {
         //           alert("내가 누른 리스트 ID ;"+$(this).parent().children(".jaju-li-id").val());

                	var selectlist =$(this).parent().children(".jaju-li-id").val();
                    
                    var select= $(".jaju-select-li-id").val(selectlist);
                // $(".jaju-li-id").val()
                    $(".jaju-create-list-add").val("수정");

                    $(".jaju-create-list-container").css({"display":"flex"})
                    $(".jaju-create-list-container").css({"bottom":"135px"})



        //            alert($(this).parent().attr('class'));
        //            alert("수정타이틀 :"+$(this).parent().children(".q-title-a").text());
        //           alert("수정컨텐트 :"+$(this).parent().children(".sub-menu").children("li").children(".q-content").text());
                    
                     selectTitle = $(this).parent().children(".jaju-q-title-a");
                    selectContent= $(this).parent().children(".jaju-sub-menu").children("li").children(".jaju-q-content");
                    
                    
                    $(".jaju-create-list-title").val(selectTitle.text());
                    $(".jaju-create-list-content").val(selectContent.text());

                    
                }
                listTempLienDelete.onclick=function()
                {
        //        	alert("내가 누른 리스트 ID ;"+$(this).parent().children(".jaju-li-id").val());
                	
                	var idd =$(this).parent().children(".jaju-li-id").val();
        //        	alert("널이라고? : "+idd);
                	var deleteQnaList = new XMLHttpRequest();
                    
                    //  alert("open전");   
                      
                	deleteQnaList.open("POST","/delete-qna-list",true);
                	deleteQnaList.setRequestHeader("Content-Type",
                                              "application/x-www-form-urlencoded");
                            
                            //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
                	deleteQnaList.onload = function()
                         {
                        //    console.log("삭제완료");
                         }
                         
                	deleteQnaList.send("idd="+idd);
                	
                	
                    var lineParent = $(this).parent();
                    lineParent.remove();
                }
                    


     //                       alert(listTempTitle.innerText);
     //                       alert(listTempContent.innerText);

                appendUlPoint.append(listTemplAp);

                $(".jaju-create-list").css({"background":"white","color":"black"});
                $(".jaju-option-list").css({"background":"white","color":"black"});
                $(".jaju-line-delete").css({"display":"none"});
                $(".jaju-line-setting").css({"display":"none"});
//                                listchk=!listchk 
//                                createchk=!createchk

            
                
               
            	
            	
            	
			}
            
            
         }
         
	getQnaList.send();
	

///////  검색시 실행하는 function

	$(".jaju-search-input").keyup(function(e)
			{
		    	$.fn.setCursorPosition = function( pos )
				{
				    this.each( function( index, elem ) {
				        if( elem.setSelectionRange ) {
				            elem.setSelectionRange(pos, pos);
				        } else if( elem.createTextRange ) {
				            var range = elem.createTextRange();
				            range.collapse(true);
				            range.moveEnd('character', pos);
				            range.moveStart('character', pos);
				            range.select();
				        }
				    });
				    
				    return this;
				};
				
				var textlange = $(".jaju-search-input");
				
				var searchWord = $(".jaju-search-input").val();
//				alert("검색 단어"+searchWord);
				$(".jaju-search-input").focus().setCursorPosition(searchWord.length);
				
				$(".jaju-big-category").empty();
				
				var searchQnaList = new XMLHttpRequest();
			    
				  //  alert("open전");   
				    
					searchQnaList.open("POST","/search-qna-list",true);
					searchQnaList.setRequestHeader("Content-Type",
				                            "application/x-www-form-urlencoded");
				          
				          //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
					searchQnaList.onload = function()
				       {
				    //      alert("여기까진 오나??");
				          
				        	  var getSearchQnaList = JSON.parse(searchQnaList.responseText); 
				     	     //     alert("json 파세"+getFriendDataList);
				     	    //      alert(friendCp);
				     	    //      alert(getFriendDataList.length);
				     	     //     alert("id : "+getFriendDataList[0][0].id);
				     	          
				     	          for (var i = 0; i < getSearchQnaList.length; i++) 
				     	          {
				     	            	
				     	            	var listTempl = document.querySelector("#jaju-muni-line-tpl");

				     	                var appendUlPoint = document.querySelector(".jaju-big-category");
				     	                var createLiTitle = document.querySelector(".jaju-create-list-title");
				     	                var createLiContent = document.querySelector(".jaju-create-list-content");


				     	                var listTempl = document.querySelector("#jaju-muni-line-tpl");

				     	                var listTemplAp = document.importNode(listTempl.content,true);
				     	                var listTempId = listTemplAp.querySelector(".jaju-li-id");
				     	                var listTempTitle = listTemplAp.querySelector(".jaju-q-title-a");
				     	                var listTempContent =listTemplAp.querySelector(".jaju-q-content");
				     	                var listTempArrow = listTemplAp.querySelector(".jaju-arrow");
				     	                var listTempLienSetting =listTemplAp.querySelector(".jaju-line-setting");
				     	                var listTempLienDelete = listTemplAp.querySelector(".jaju-line-delete");

				     	                var isProgressing=false;
				     	     //                   alert(createLiTitle.value);
				     	                listTempId.value = getSearchQnaList[i].id;
				     	                listTempTitle.innerText=getSearchQnaList[i].title;
				     	                listTempContent.innerText=getSearchQnaList[i].content;

				     	  //              console.log("아이디 : "+listTempId.value);
				     	  //              console.log("타이틀 : "+listTempTitle.innerText);
				     	 //               console.log("컨텐트 : "+listTempContent.innerText);
				     	                
				     	                listTempArrow.onclick=function()
				     	                {
				     	                    if(isProgressing)
				     	                    return;
				     	                    
				     	                    isProgressing=true;
				     	                    var ppp = $(this).parent().parent();
				     	                    if(topcheck)
				     	                    {
				     	                    $(this).css({"transform":"rotate(180deg)"});
				     	                // alert($(this).parent().parent());
				     	                    
				     	                    ppp.animate({ height:110+"px"});
				     	                    ppp.children(".jaju-cat-menu").css("display","block");
				     	                    
				     	                    
				     	                    }
				     	                    else
				     	                    {
				     	                    $(this).css({"transform":"rotate(0deg)"});
				     	                    ppp.animate({height:60+"px"},function()
				     	                    {
				     	                        ppp.children(".jaju-cat-menu").css("display","none");
				     	                    });
				     	                    
				     	                    
				     	                }
				     	                
				     	                
				     	                topcheck=!topcheck;
				     	                isProgressing = !isProgressing;

				     	                }

				     	                listTempLienSetting.onclick=function()
				     	                {
				     	                	$(".jaju-create-list-title").val('');
							            	$(".jaju-create-list-content").val('');
							            	
							            	
						                	var selectlist =$(this).parent().children(".jaju-li-id").val();
						                    
						                    var select= $(".jaju-select-li-id").val(selectlist);
						                // $(".jaju-li-id").val()
						                    $(".jaju-create-list-add").val("수정");

						                    $(".jaju-create-list-container").css({"display":"flex"})
						                    $(".jaju-create-list-container").css({"bottom":"135px"})



						        //            alert($(this).parent().attr('class'));
						        //            alert("수정타이틀 :"+$(this).parent().children(".q-title-a").text());
						        //           alert("수정컨텐트 :"+$(this).parent().children(".sub-menu").children("li").children(".q-content").text());
						                    
						                     selectTitle = $(this).parent().children(".jaju-q-title-a");
						                    selectContent= $(this).parent().children(".jaju-sub-menu").children("li").children(".jaju-q-content");
						                    
						                    
						                    $(".jaju-create-list-title").val(selectTitle.text());
						                    $(".jaju-create-list-content").val(selectContent.text());


				     	                    
				     	                    
				     	                    
				     	                }
				     	                listTempLienDelete.onclick=function()
				     	                {
				     	        //        	alert("내가 누른 리스트 ID ;"+$(this).parent().children(".jaju-li-id").val());
				     	                	
				     	                	var idd =$(this).parent().children(".jaju-li-id").val();
				     	        //        	alert("널이라고? : "+idd);
				     	                	var deleteQnaList = new XMLHttpRequest();
				     	                    
				     	                    //  alert("open전");   
				     	                      
				     	                	deleteQnaListSS.open("POST","/delete-qna-list",true);
				     	                	deleteQnaListSS.setRequestHeader("Content-Type",
				     	                                              "application/x-www-form-urlencoded");
				     	                            
				     	                            //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
				     	                	deleteQnaListSS.onload = function()
				     	                         {
				     	                  //          console.log("삭제완료");
				     	                         }
				     	                         
				     	                	deleteQnaListSS.send("idd="+idd);
				     	                	
				     	                	
				     	                    var lineParent = $(this).parent();
				     	                    lineParent.remove();
				     	                }
				     	                    


				     	     //                       alert(listTempTitle.innerText);
				     	     //                       alert(listTempContent.innerText);

				     	                appendUlPoint.append(listTemplAp);

				     	                $(".jaju-create-list").css({"background":"white","color":"black"});
				     	                $(".jaju-option-list").css({"background":"white","color":"black"});
				     	                $(".jaju-line-delete").css({"display":"none"});
				     	                $(".jaju-line-setting").css({"display":"none"});
//				     	                                listchk=!listchk 
//				     	                                createchk=!createchk

				     	          }
			    		  
				       }
				       
					searchQnaList.send("searchWord="+$(".jaju-search-input").val());
				
				
			})	
	

	
	
//////////////////////  검색 끝
	
	

//////// 추가 버튼을 눌렀을때
	$(function()
			{
				$(".jaju-create-list-add").click(function()
			{
				
			    if( $(".jaju-create-list-add").val()=="추가" )
			    {
			   // 	alert("추가일때 들어온데 속닥속닥");
			    	
			   // 	alert("타이뜰 :"+$(".jaju-create-list-title").val());
			  //      alert("컨텐뜨 : "+$(".jaju-create-list-content").val());
			    	
			        var insertTitle= $(".jaju-create-list-title").val();
			        var insertContent=$(".jaju-create-list-content").val();
			        
			    	
			    	var insertQnaList = new XMLHttpRequest();
			        
			    	insertQnaList.open("POST","/insert-qna-list",true);
			    	insertQnaList.setRequestHeader("Content-Type",
			                                  "application/x-www-form-urlencoded");
			                
			    	insertQnaList.onload = function()
				     {
				     
				        var comeQnaLimit = JSON.parse(insertQnaList.responseText); 
				        
				       
				        	var listTempl = document.querySelector("#jaju-muni-line-tpl");
				
				            var appendUlPoint = document.querySelector(".jaju-big-category");
				            var createLiTitle = document.querySelector(".jaju-create-list-title");
				            var createLiContent = document.querySelector(".jaju-create-list-content");
				
				            var listTemplAp = document.importNode(listTempl.content,true);
				            var listTempId = listTemplAp.querySelector(".jaju-li-id");
				            var listTempTitle = listTemplAp.querySelector(".jaju-q-title-a");
				            var listTempContent =listTemplAp.querySelector(".jaju-q-content");
				            var listTempArrow = listTemplAp.querySelector(".jaju-arrow");
				            var listTempLienSetting =listTemplAp.querySelector(".jaju-line-setting");
				            var listTempLienDelete = listTemplAp.querySelector(".jaju-line-delete");
				
				            var isProgressing=false;
				 //                   alert(createLiTitle.value);
				            listTempId.value = comeQnaLimit.id;
				            listTempTitle.innerText=comeQnaLimit.title;
				            listTempContent.innerText=comeQnaLimit.content;
				
				  //          console.log("아이디 : "+listTempId.value);
				 //           console.log("타이틀 : "+listTempTitle.innerText);
				///            console.log("컨텐트 : "+listTempContent.innerText);
				            
				            listTempArrow.onclick=function()
				            {
					                if(isProgressing)
					                return;
					                
					                isProgressing=true;
					                var ppp = $(this).parent().parent();
					                if(topcheck)
					                {
						                $(this).css({"transform":"rotate(180deg)"});
						            // alert($(this).parent().parent());
						                
						                ppp.animate({ height:110+"px"});
						                ppp.children(".jaju-cat-menu").css("display","block");
					                
					                }
					                else
					                {
						                $(this).css({"transform":"rotate(0deg)"});
						                ppp.animate({height:60+"px"},function()
						                {
						                    ppp.children(".jaju-cat-menu").css("display","none");
						                });
					                
					                }
					            
					            
						            topcheck=!topcheck;
						            isProgressing = !isProgressing;
					
					            }
				
				            listTempLienSetting.onclick=function()
				            {
				            	$(".jaju-create-list-title").val('');
				            	$(".jaju-create-list-content").val('');
				            	
				            	
			                	var selectlist =$(this).parent().children(".jaju-li-id").val();
			                    
			                    var select= $(".jaju-select-li-id").val(selectlist);
			                // $(".jaju-li-id").val()
			                    $(".jaju-create-list-add").val("수정");

			                    $(".jaju-create-list-container").css({"display":"flex"})
			                    $(".jaju-create-list-container").css({"bottom":"135px"})



			        //            alert($(this).parent().attr('class'));
			        //            alert("수정타이틀 :"+$(this).parent().children(".q-title-a").text());
			        //           alert("수정컨텐트 :"+$(this).parent().children(".sub-menu").children("li").children(".q-content").text());
			                    
			                     selectTitle = $(this).parent().children(".jaju-q-title-a");
			                    selectContent= $(this).parent().children(".jaju-sub-menu").children("li").children(".jaju-q-content");
			                    
			                    
			                    $(".jaju-create-list-title").val(selectTitle.text());
			                    $(".jaju-create-list-content").val(selectContent.text());

				                
				            }
				            listTempLienDelete.onclick=function()
				            {
				    //        	alert("내가 누른 리스트 ID ;"+$(this).parent().children(".jaju-li-id").val());
				            	
				            	var idd =$(this).parent().children(".jaju-li-id").val();
				    //        	alert("널이라고? : "+idd);
				            	var AjdeleteQnaList = new XMLHttpRequest();
				                
				                //  alert("open전");   
				                  
				            	AjdeleteQnaList.open("POST","/delete-qna-list",true);
				            	AjdeleteQnaList.setRequestHeader("Content-Type",
				                                          "application/x-www-form-urlencoded");
				                        
				                        //JSP가 실행되자마자 onload가 실행되면서 DB에 있는 대화목록을 가져올 것
				            	AjdeleteQnaList.onload = function()
				                     {
				               //         console.log("삭제완료");
				                     }
				                     
				            	AjdeleteQnaList.send("idd="+idd);
				            	
				            	
				                var lineParent = $(this).parent();
				                lineParent.remove();
				            }
				                
				
				
				 //                       alert(listTempTitle.innerText);
				 //                       alert(listTempContent.innerText);
				
				            appendUlPoint.append(listTemplAp);
				
				            $(".jaju-create-list").css({"background":"white","color":"black"});
				            $(".jaju-option-list").css({"background":"white","color":"black"});
				            $(".jaju-line-delete").css({"display":"none"});
				            $(".jaju-line-setting").css({"display":"none"});
				//                                        listchk=!listchk 
				 //                                       createchk=!createchk
				
				        
				     }
			             
			    	insertQnaList.send("title="+insertTitle+"&content="+insertContent);
			    	
			    	
			    }
			    else if($(".jaju-create-list-add").val()=="수정")
			    {
			    	 var updateQnaList = new XMLHttpRequest();
      //                  alert("내가 선택한 클래스 : "+$(this).attr('class'));
   //                      alert("들어옴??");   
                          
                        var Nid = $(".jaju-select-li-id").val();
   //                     alert("여긴가 :"+Nid);
                        var Ntitle = $(".jaju-create-list-title").val();
                        var Ncontent = $(".jaju-create-list-content").val();
                        
     //                   alert(Ntitle);
      //                  alert(Ncontent);
                        
                        updateQnaList.open("POST","/update-qna-list",true);
                        updateQnaList.setRequestHeader("Content-Type",
                                                  "application/x-www-form-urlencoded");
                                
                        updateQnaList.onload = function()
                             {
                     //           console.log("수정완료");
                             }
                             
                        updateQnaList.send("idd="+Nid+"&title="+Ntitle+"&content="+Ncontent);
                        
                        
                        selectTitle.text($(".jaju-create-list-title").val());
                        selectContent.text($(".jaju-create-list-content").val());
        //                alert("값 바꾸기 성공");

                        $(".jaju-create-list").css({"background":"white","color":"black"});
                        $(".jaju-option-list").css({"background":"white","color":"black"});
                        $(".jaju-line-delete").css({"display":"none"});
                        $(".jaju-line-setting").css({"display":"none"});
                        listchk=!listchk 
                        createchk=!createchk
			    }
			    
			    
			    $(".jaju-create-list-container").css({"bottom":"-100%"})
			    $(".jaju-create-list-container").css({"display":"none"})


			})
				
				
				
			})
	

 
                
              //  
});
        