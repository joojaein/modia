<!-- <%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> -->

<link rel="stylesheet" type="text/css" media="screen" href="/resources/css/search.css" />
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>


<script>
	$(function() {
/* 		$(window).mousemove(function(e){
            $(".pointer").css({visibility:"visible"});
            $(".pointer").css({left:e.pageX,top:e.pageY});
    })
            $(".content-image").mouseleave(function(e){
            $(".pointer").css({visibility:"hidden"});
    }) */
		var calist = $(".calist");
		var alllist = $(".alllist");
		var sebu = $(".sebu");
		var indicator = $(".indicator");
		var cacontainer = $(".category-list-container");
		var decontainer = $(".detail-list-container");
		var mainul = $(".category-main-ul");
		var chk = false;
		var tagname = $(".tag-name");
		var contentbox = $(".content-box");
		var jsContainer = document.querySelector(".category-content-container");
		var temp = document.querySelector(".temp");
		var cUrl = "categoryList";
		var tUrl = "tagList";
		var cQuery = "categoryId=";
		var tQuery = "tagId=";

/* 		var setTagId = document.querySelectorAll(".tag-name");
		for (var i = 0; i < setTagId.length; i++) {
			console.log("뭐냐"+setTagId[i].getAttribute("data-tid")+"/////"+tagname.index(i)+"장난하냐");
		}
		 */
			alllist.on("click", function(e){
				e.stopPropagation();
				alllist.addClass("selectca");
				window.location.href="/crowd/search";
			}); 
		var autoBox = document.querySelector(".autoBox");
		var autoUl = autoBox.querySelector(".autoUl");
		var searchText = document.querySelector("input[type=text]");
		var preId = "";
		
		calist.click(function(e){
			var as = document.querySelectorAll(".calist")
			for (var i = 0; i < as.length; i++) {
				as[i].classList.remove("selectca");
			}
			e.target.classList.add("selectca");
			/*
			
			if($(this).parent().find("ul").attr("visibility","visible")){
				var target = e.target.getAttribute("data-id");
				var tempThis;
				var jsUl =document.querySelector(".category-main-ul");
				var ulChildren = jsUl.querySelectorAll(".calist");
				for (var i = 0; i < ulChildren.length; i++) {
					if(ulChildren[i].getAttribute("data-id")==target){
						tempThis = ulChildren[i];
					}
				} 
					calist.removeClass("selectca");
					$(tempThis).addClass("selectca");
					alert("눌려있는"+target+"현재"+$(tempThis).data("id"));
					if((cacontainer.hasClass("height"))&&(target==$(tempThis).data("id"))){
						calist.removeClass("selectca");
					}


			}*/
			var id = $(this).data("id");
			if(!chk){
			jsContainer.innerHTML = "";
			var cListRequest = new XMLHttpRequest();
			cListRequest.open("POST", "/crowd/"+cUrl, true);
			cListRequest.setRequestHeader("Content-Type",
					"application/x-www-form-urlencoded");
			cListRequest.onload = function() {
				var crowdCategoryList = JSON.parse(cListRequest.responseText);
				//카테고리 아이디만 받았을 경우
				for (var i = 0; i < crowdCategoryList.length; i++) {
					var tBox = document.importNode(temp.content, true);

					var tempH4 = tBox.querySelector("h4");
					tempH4.innerText = crowdCategoryList[i].name;
 					var tempSpan1 = tBox.querySelector("span:nth-child(1)");
					var tempSpan2 = tBox.querySelector("span:nth-child(2)");
					var tempSpan3 = tBox.querySelector("span:nth-child(3)");
					var tempSpan4 = tBox.querySelector("span:nth-child(4)");
					var tempSpan5 = tBox.querySelector(".member-cnt span");
					var tempImg = tBox.querySelector(".content-image img");
					var tempA = tBox.querySelector(".content-image a");
					tempSpan1.innerText = crowdCategoryList[i].content;
 					tempSpan2.innerHTML = "가입조건"+'<br/>- 나이 : '+crowdCategoryList[i].ageMin+" ~ "+crowdCategoryList[i].ageMax;
 					if(crowdCategoryList[i].gender==0)
 						tempSpan3.innerText = "- 성별 : 무관";
 	 				if(crowdCategoryList[i].gender==1)
 	 					tempSpan3.innerText = "- 성별 : 남자";
 	 	 			if(crowdCategoryList[i].gender==2) 	
 	 					tempSpan3.innerText = "- 성별 : 여자";
					tempSpan4.innerText = "- 지역 : "+crowdCategoryList[i].areaSido+" "+crowdCategoryList[i].areaSigungu; 
					tempSpan5.innerText = "정원 "+crowdCategoryList[i].nowPerson+" / "+crowdCategoryList[i].maxPerson;
					tempImg.src = "/get-img?folder=crowd-banner&file="+crowdCategoryList[i].img+")";
					tempA.href = "main?crowd="+crowdCategoryList[i].id;
					jsContainer.append(tBox);
				}
			}
			
			cListRequest.send(cQuery + id + "&word="+searchText.value);
			}
			if(chk && preId!=id){
				var as = document.querySelectorAll(".calist")
				for (var i = 0; i < as.length; i++) {
					as[i].classList.remove("selectca");
				}
				e.target.classList.add("selectca");
				jsContainer.innerHTML = "";
				var cListRequest = new XMLHttpRequest();
				cListRequest.open("POST", "/crowd/"+cUrl, true);
				cListRequest.setRequestHeader("Content-Type",
						"application/x-www-form-urlencoded");
				cListRequest.onload = function() {
					var crowdCategoryList = JSON.parse(cListRequest.responseText);
					//카테고리 아이디만 받았을 경우
					for (var i = 0; i < crowdCategoryList.length; i++) {
						var tBox = document.importNode(temp.content, true);

						var tempH4 = tBox.querySelector("h4");
						tempH4.innerText = crowdCategoryList[i].name;
	 					var tempSpan1 = tBox.querySelector("span:nth-child(1)");
						var tempSpan2 = tBox.querySelector("span:nth-child(2)");
						var tempSpan3 = tBox.querySelector("span:nth-child(3)");
						var tempSpan4 = tBox.querySelector("span:nth-child(4)");
						var tempSpan5 = tBox.querySelector(".member-cnt span");
						var tempImg = tBox.querySelector(".content-image img");
						var tempA = tBox.querySelector(".content-image a");
						tempSpan1.innerText = crowdCategoryList[i].content;
	 					tempSpan2.innerHTML = "가입조건"+'<br/>- 나이 : '+crowdCategoryList[i].ageMin+" ~ "+crowdCategoryList[i].ageMax;
	 					if(crowdCategoryList[i].gender==0)
	 						tempSpan3.innerText = "- 성별 : 무관";
	 	 				if(crowdCategoryList[i].gender==1)
	 	 					tempSpan3.innerText = "- 성별 : 남자";
	 	 	 			if(crowdCategoryList[i].gender==2) 	
	 	 					tempSpan3.innerText = "- 성별 : 여자";
						tempSpan4.innerText = "- 지역 : "+crowdCategoryList[i].areaSido+" "+crowdCategoryList[i].areaSigungu; 
						tempSpan5.innerText = "정원 "+crowdCategoryList[i].nowPerson+" / "+crowdCategoryList[i].maxPerson;
						tempImg.src = "/get-img?folder=crowd-banner&file="+crowdCategoryList[i].img+")";
						tempA.href = "main?crowd="+crowdCategoryList[i].id;
						jsContainer.append(tBox);
					}
				}
				
				cListRequest.send(cQuery + id + "&word="+searchText.value);
			}
			chk!=chk;
			preId = id;
			
		})
 		if(${tagId}!=0){
			jsContainer.innerHTML = "";
			var categoryTarget = ${categoryId};
			var tagTarget = ${tagId};
			var tempThis;
			var jsUl =document.querySelector(".category-main-ul");
			var liChildren = jsUl.querySelectorAll(".tag-name");
			for (var i = 0; i < liChildren.length; i++) {
				if(liChildren[i].getAttribute("data-tid")==tagTarget){
					if(liChildren[i].getAttribute("data-cid")==categoryTarget){
						tempThis = liChildren[i].parentNode.parentNode.parentNode;
					}
				}
			} 
				mainul.find("li").find("ul").css({
					"visibility" : "hidden"
				});
				$(tempThis).find("ul").css({
					"visibility" : "visible"
				});
				calist.removeClass("selectca");
				$(tempThis).find(".calist").addClass("selectca");
				cacontainer.addClass("height");
				chk=!chk;
			var chkRequest = new XMLHttpRequest();
			chkRequest.open("POST","/crowd/search?categoryId="+${categoryId},true);
			chkRequest.setRequestHeader("Content-Type",
					"application/x-www-form-urlencoded");
			chkRequest.onload = function(){
				//태그아이디를 받았을 경우
				var crowdCategoryList = ${chkCategoryTag};
	 			for (var i = 0; i < crowdCategoryList.length; i++) {
					var tBox = document.importNode(temp.content, true);
					var tempH4 = tBox.querySelector("h4");
					tempH4.innerText = crowdCategoryList[i].name;
 					var tempSpan1 = tBox.querySelector("span:nth-child(1)");
					var tempSpan2 = tBox.querySelector("span:nth-child(2)");
					var tempSpan3 = tBox.querySelector("span:nth-child(3)");
					var tempSpan4 = tBox.querySelector("span:nth-child(4)");
					var tempSpan5 = tBox.querySelector(".member-cnt span");
					var tempImg = tBox.querySelector(".content-image img");
					var tempA = tBox.querySelector(".content-image a");
					tempSpan1.innerText = crowdCategoryList[i].content;
 					tempSpan2.innerHTML = "가입조건"+'<br/>- 나이 : '+crowdCategoryList[i].ageMin+" ~ "+crowdCategoryList[i].ageMax;
 					if(crowdCategoryList[i].gender==0)
 						tempSpan3.innerText = "- 성별 : 무관";
 	 				if(crowdCategoryList[i].gender==1)
 	 					tempSpan3.innerText = "- 성별 : 남자";
 	 	 			if(crowdCategoryList[i].gender==2) 	
 	 					tempSpan3.innerText = "- 성별 : 여자";
					tempSpan4.innerText = "- 지역 : "+crowdCategoryList[i].areaSido+" "+crowdCategoryList[i].areaSigungu; 
					tempSpan5.innerText = "정원 "+crowdCategoryList[i].nowPerson+" / "+crowdCategoryList[i].maxPerson;
					tempImg.src = "/get-img?folder=crowd-banner&file="+crowdCategoryList[i].img+")";
					tempA.href = "main?crowd="+crowdCategoryList[i].id;
					jsContainer.append(tBox);

				}
				
			}
			
			chkRequest.send("tagId="+${tagId}+"&word="+searchText.value);
			event(cUrl,tUrl,cQuery,tQuery);
		}
		else if((${categoryId}!=0)){
		jsContainer.innerHTML = "";

		var target = ${categoryId};
		var tempThis;
		var jsUl =document.querySelector(".category-main-ul");
		var ulChildren = jsUl.querySelectorAll(".calist");
		for (var i = 0; i < ulChildren.length; i++) {
			if(ulChildren[i].getAttribute("data-id")==target){
				tempThis = ulChildren[i].parentNode;
			}
		} 
			mainul.find("li").find("ul").css({
				"visibility" : "hidden"
			});
			$(tempThis).find("ul").css({
				"visibility" : "visible"
			});
			calist.removeClass("selectca");
			$(tempThis).find(".calist").addClass("selectca");
			cacontainer.addClass("height");
			chk=!chk;

		var chkRequest = new XMLHttpRequest();
		chkRequest.open("POST","/crowd/search",true);
		chkRequest.setRequestHeader("Content-Type",
				"application/x-www-form-urlencoded");
		chkRequest.onload = function(){
			//태그아이디를 받았을 경우
			var crowdCategoryList = ${chkCategory};
 			for (var i = 0; i < crowdCategoryList.length; i++) {
				var tBox = document.importNode(temp.content, true);

				var tempH4 = tBox.querySelector("h4");
				tempH4.innerText = crowdCategoryList[i].name;
				var tempSpan1 = tBox.querySelector("span:nth-child(1)");
				var tempSpan2 = tBox.querySelector("span:nth-child(2)");
				var tempSpan3 = tBox.querySelector("span:nth-child(3)");
				var tempSpan4 = tBox.querySelector("span:nth-child(4)");
				var tempSpan5 = tBox.querySelector(".member-cnt span");
				var tempImg = tBox.querySelector(".content-image img");
				var tempA = tBox.querySelector(".content-image a");
				tempSpan1.innerText = crowdCategoryList[i].content;
				tempSpan2.innerHTML = "가입조건"+'<br/>- 나이 : '+crowdCategoryList[i].ageMin+" ~ "+crowdCategoryList[i].ageMax;
				if(crowdCategoryList[i].gender==0)
 					tempSpan3.innerText = "- 성별 : 무관";
 	 			if(crowdCategoryList[i].gender==1)
 	 				tempSpan3.innerText = "- 성별 : 남자";
 	 	 		if(crowdCategoryList[i].gender==2) 	
 	 				tempSpan3.innerText = "- 성별 : 여자";
				tempSpan4.innerText = "- 지역 : "+crowdCategoryList[i].areaSido+" "+crowdCategoryList[i].areaSigungu; 
				tempSpan5.innerText = "정원 "+crowdCategoryList[i].nowPerson+" / "+crowdCategoryList[i].maxPerson;
				tempImg.src = "/get-img?folder=crowd-banner&file="+crowdCategoryList[i].img+")";
				tempA.href = "main?crowd="+crowdCategoryList[i].id;
				jsContainer.append(tBox);
			}
			
 		}
		
		chkRequest.send("categoryId="+${categoryId}+"&word="+searchText.value);

			event(cUrl,tUrl,cQuery,tQuery);
		
		}else{
			
			event(cUrl,tUrl,cQuery,tQuery);
		}

		function event(cUrl,tUrl,cQuery,tQuery){
		
		tagname.click(function(evt) {
			var sebuchk = $(this).hasClass("category-name");
			var cid = $(this).data("cid");
			var tid = $(this).data("tid");
			jsContainer.innerHTML = "";

			if(tid==undefined){
				if(sebuchk){
					$(".calist").removeClass("selectca");
/* 					var as = document.querySelectorAll(".calist")
					for (var i = 0; i < as.length; i++) {
						as[i].classList.remove("selectca");
					e.target.classList.add("selectca");
					} */
					var target = evt.target;
					var tempThis;
					var tempselect;
					var jsUl =document.querySelector(".category-main-ul");
					var ulChildren = jsUl.querySelectorAll(".calist");
					for (var i = 0; i < ulChildren.length; i++) {
						if(ulChildren[i].getAttribute("data-id") == target.getAttribute("data-cid")){
							tempselect = ulChildren[i];
						}
						if(ulChildren[i].innerText == target.innerText){
							tempThis = ulChildren[i].parentNode;
						}
					}
					
					if (!chk) {
						mainul.find("li").find("ul").css({
							"visibility" : "hidden"
						});
						$(tempThis).find("ul").css({
							"visibility" : "visible"
						});
						cacontainer.addClass("height");
						$(tempselect).addClass("selectca");
					} else {
						if (cacontainer.hasClass("height")
								&& ($(tempThis).find("ul")
										.css("visibility") == "hidden")) {
							mainul.find("li").find("ul").css({
								"visibility" : "hidden"
							});
							$(tempThis).find("ul").css({
								"visibility" : "visible"
							});
							return chk;
						} else if (cacontainer.hasClass("height")
								&& ($(tempThis).find("ul")
										.css("visibility") == "visible")) {

							mainul.find("li").find("ul").css({
								"visibility" : "hidden"
							});
							$(tempThis).find("ul").css({
								"visibility" : "visible"
							});
							cacontainer.removeClass("height");
						}

					}

					chk = !chk;

					cacontainer.addClass("height");
					calist.removeClass("hide-calist");
					sebu.removeClass("active");
					indicator.removeClass("rotate");
					decontainer.animate({
						opacity : 0
					},100);
					
				}
				var cListRequest = new XMLHttpRequest();
				cListRequest.open("POST", "/crowd/"+cUrl, true);
				cListRequest.setRequestHeader("Content-Type",
						"application/x-www-form-urlencoded");
				cListRequest.onload = function() {
					var crowdCategoryList = JSON.parse(cListRequest.responseText);
					//카테고리 아이디만 받았을 경우
					for (var i = 0; i < crowdCategoryList.length; i++) {
						var tBox = document.importNode(temp.content, true);
	
						var tempH4 = tBox.querySelector("h4");
						tempH4.innerText = crowdCategoryList[i].name;
	 					var tempSpan1 = tBox.querySelector("span:nth-child(1)");
						var tempSpan2 = tBox.querySelector("span:nth-child(2)");
						var tempSpan3 = tBox.querySelector("span:nth-child(3)");
						var tempSpan4 = tBox.querySelector("span:nth-child(4)");
						var tempSpan5 = tBox.querySelector(".member-cnt span");
						var tempImg = tBox.querySelector(".content-image img");
						var tempA = tBox.querySelector(".content-image a");
						tempSpan1.innerText = crowdCategoryList[i].content;
	 					tempSpan2.innerHTML = "가입조건"+'<br/>- 나이 : '+crowdCategoryList[i].ageMin+" ~ "+crowdCategoryList[i].ageMax;
	 					if(crowdCategoryList[i].gender==0)
	 						tempSpan3.innerText = "- 성별 : 무관";
	 	 				if(crowdCategoryList[i].gender==1)
	 	 					tempSpan3.innerText = "- 성별 : 남자";
	 	 	 			if(crowdCategoryList[i].gender==2) 	
	 	 					tempSpan3.innerText = "- 성별 : 여자";
						tempSpan4.innerText = "- 지역 : "+crowdCategoryList[i].areaSido+" "+crowdCategoryList[i].areaSigungu; 
						tempSpan5.innerText = "정원 "+crowdCategoryList[i].nowPerson+" / "+crowdCategoryList[i].maxPerson;
						tempImg.src = "/get-img?folder=crowd-banner&file="+crowdCategoryList[i].img+")";
						tempA.href = "main?crowd="+crowdCategoryList[i].id;
						jsContainer.append(tBox);
					}
				}
				
				cListRequest.send(cQuery + cid + "&word="+searchText.value);
				
			}else{
				var tListRequest = new XMLHttpRequest();
				tListRequest.open("POST","/crowd/"+tUrl,true);
				tListRequest.setRequestHeader("Content-Type",
						"application/x-www-form-urlencoded");
				tListRequest.onload = function(){
					//태그아이디를 받았을 경우
					var crowdTagList = JSON.parse(tListRequest.responseText);
					for (var i = 0; i < crowdTagList.length; i++) {
						var tBox = document.importNode(temp.content, true);
	
						var tempH4 = tBox.querySelector("h4");
						tempH4.innerText = crowdTagList[i].name;
	 					var tempSpan1 = tBox.querySelector("span:nth-child(1)");
						var tempSpan2 = tBox.querySelector("span:nth-child(2)");
						var tempSpan3 = tBox.querySelector("span:nth-child(3)");
						var tempSpan4 = tBox.querySelector("span:nth-child(4)");
						var tempSpan5 = tBox.querySelector(".member-cnt span");
						var tempImg = tBox.querySelector(".content-image img");
						var tempA = tBox.querySelector(".content-image a");
						tempSpan1.innerText = crowdTagList[i].content;
	 					tempSpan2.innerHTML = "가입조건"+'<br/>- 나이 : '+crowdTagList[i].ageMin+" ~ "+crowdTagList[i].ageMax;
	 					if(crowdTagList[i].gender==0)
	 						tempSpan3.innerText = "- 성별 : 무관";
	 	 				if(crowdTagList[i].gender==1)
	 	 					tempSpan3.innerText = "- 성별 : 남자";
	 	 	 			if(crowdTagList[i].gender==2) 	
	 	 					tempSpan3.innerText = "- 성별 : 여자";
						tempSpan4.innerText = "- 지역 : "+crowdTagList[i].areaSido+" "+crowdTagList[i].areaSigungu; 
						tempSpan5.innerText = "정원 "+crowdTagList[i].nowPerson+" / "+crowdTagList[i].maxPerson;
						tempImg.src = "/get-img?folder=crowd-banner&file="+crowdTagList[i].img+")";
						tempA.href = "main?crowd="+crowdTagList[i].id;
						jsContainer.append(tBox);
					}
					
				}
				
				tListRequest.send(tQuery + tid +"&word="+searchText.value);
			
			}
		})

		mainul.find("li").click(function() {
							if (!chk) {
								mainul.find("li").find("ul").css({
									"visibility" : "hidden"
								});
								$(this).find("ul").css({
									"visibility" : "visible"
								});
								cacontainer.removeClass("height");
								if(!$(this).find("a").hasClass("alllist")){
								cacontainer.addClass("height");
								}
							} else {
								if (cacontainer.hasClass("height")
										&& ($(this).find("ul")
												.css("visibility") == "hidden")) {
									mainul.find("li").find("ul").css({
										"visibility" : "hidden"
									});
									$(this).find("ul").css({
										"visibility" : "visible"
									});
									return chk;
								} else if (cacontainer.hasClass("height")
										&& ($(this).find("ul")
												.css("visibility") == "visible")) {

									mainul.find("li").find("ul").css({
										"visibility" : "hidden"
									});
									$(this).find("ul").css({
										"visibility" : "visible"
									});
									cacontainer.removeClass("height");
								}

							}

							chk = !chk;

						})

		$("#bar").click(function(e) {
			calist.toggleClass("hide-calist");
			sebu.toggleClass("active");
			indicator.toggleClass("rotate");
			
			if (indicator.hasClass("rotate")) {
				decontainer.animate({
					opacity : 1
				}).css({"visibility": "visible"});
			} else {
				decontainer.animate({
					opacity : 0
				}).css({"visibility": "hidden"});
			}
			if (cacontainer.hasClass("height")) {
				cacontainer.removeClass("height");
				mainul.find("li").find("ul").css({
					"visibility" : "hidden"
				});
				chk = !chk;
				decontainer.animate({
					opacity : 1
				});
			}
		})
		$(".category-content-container").click(function() {
			sebu.removeClass("active");
			calist.removeClass("hide-calist");
			indicator.removeClass("rotate");
			decontainer.animate({
				opacity : 0
			});
		});
		}
		//index에서 입력후 들어올 시
		if(searchText.value!=""){
			
			jsContainer.innerHTML = "";
			
			var resultRequest = new XMLHttpRequest();
			resultRequest.open("GET","/crowd/searchResultList?word="+searchText.value,true);
			resultRequest.onload = function(){

				var resultList = JSON.parse(resultRequest.responseText);
				for (var i = 0; i < resultList.length; i++) {
					var tBox = document.importNode(temp.content, true);
					
					var tempH4 = tBox.querySelector("h4");
					tempH4.innerText = resultList[i].name;
 					var tempSpan1 = tBox.querySelector("span:nth-child(1)");
					var tempSpan2 = tBox.querySelector("span:nth-child(2)");
					var tempSpan3 = tBox.querySelector("span:nth-child(3)");
					var tempSpan4 = tBox.querySelector("span:nth-child(4)");
					var tempSpan5 = tBox.querySelector(".member-cnt span");
					var tempImg = tBox.querySelector(".content-image img");
					var tempA = tBox.querySelector(".content-image a");
					tempSpan1.innerText = resultList[i].content;
 					tempSpan2.innerHTML = "가입조건"+'<br/>- 나이 : '+resultList[i].ageMin+" ~ "+resultList[i].ageMax;
 					if(resultList[i].gender==0)
					tempSpan3.innerText = "- 성별 : 무관";
 					if(resultList[i].gender==1)
 					tempSpan3.innerText = "- 성별 : 남자";
 	 				if(resultList[i].gender==2) 	
 					tempSpan3.innerText = "- 성별 : 여자";
					tempSpan4.innerText = "- 지역 : "+resultList[i].areaSido+" "+resultList[i].areaSigungu; 
					tempSpan5.innerText = "정원 "+resultList[i].nowPerson+" / "+resultList[i].maxPerson;
					tempImg.src = "/get-img?folder=crowd-banner&file="+resultList[i].img;
					tempA.href = "main?crowd="+resultList[i].id;
					jsContainer.append(tBox);
				}
			}
			resultRequest.send();
//----------------------------------------------------

		}


		searchText.onkeyup = function(e){
			console.log("keyup");

			autoBox.innerHTML="";
			if(searchText.value!=""){
				alllist.off("click");
				chk = false;
				alllist.on("click", function(){
					if(chk = true){
						chk = true;
					}
					jsContainer.innerHTML = "";

					calist.removeClass("selectca");
					alllist.addClass("selectca");
					cacontainer.removeClass("height");
					mainul.find("li").find("ul").css({
						"visibility" : "hidden"
					});
					var resultRequest = new XMLHttpRequest();
					resultRequest.open("GET","/crowd/searchResultList?word="+e.target.value,true);
					resultRequest.onload = function(){

						var resultList = JSON.parse(resultRequest.responseText);
						for (var i = 0; i < resultList.length; i++) {
							
							var tBox = document.importNode(temp.content, true);
							var tempH4 = tBox.querySelector("h4");
							
							tempH4.innerText = resultList[i].name;
		 					var tempSpan1 = tBox.querySelector("span:nth-child(1)");
							var tempSpan2 = tBox.querySelector("span:nth-child(2)");
							var tempSpan3 = tBox.querySelector("span:nth-child(3)");
							var tempSpan4 = tBox.querySelector("span:nth-child(4)");
							var tempSpan5 = tBox.querySelector(".member-cnt span");
							var tempImg = tBox.querySelector(".content-image img");
							var tempA = tBox.querySelector(".content-image a");
							tempSpan1.innerText = resultList[i].content;
		 					tempSpan2.innerHTML = "가입조건"+'<br/>- 나이 : '+resultList[i].ageMin+" ~ "+resultList[i].ageMax;
		 					if(resultList[i].gender==0)
		 						tempSpan3.innerText = "- 성별 : 무관";
		 	 				if(resultList[i].gender==1)
		 	 					tempSpan3.innerText = "- 성별 : 남자";
		 	 	 			if(resultList[i].gender==2) 	
		 	 					tempSpan3.innerText = "- 성별 : 여자";
							tempSpan4.innerText = "- 지역 : "+resultList[i].areaSido+" "+resultList[i].areaSigungu; 
							tempSpan5.innerText = "정원 "+resultList[i].nowPerson+" / "+resultList[i].maxPerson;
	 						tempImg.src = "/get-img?folder=crowd-banner&file="+resultList[i].img;
	 						/*						tempA.href = "main?crowd="+resultList[i].id; */
							jsContainer.append(tBox);
						}
					}
					resultRequest.send();

				});
			var autoRequest = new XMLHttpRequest();
			autoRequest.open("GET","/crowd/searchResultList?word="+e.target.value,true); 
			autoRequest.onload = function(){
				var nameList = JSON.parse(autoRequest.responseText);

				for (var i = 0; i < nameList.length; i++) {
					var li = document.createElement("LI");
					li.setAttribute("data-id",nameList[i].id);
					li.onclick = function(e){
						window.location.href="/crowd/main?crowd="+li.getAttribute("data-id");
					}
					li.innerText = "제목 : "+nameList[i].name+" / 내용 : "+nameList[i].content.substring(1,5)+" / 카테고리 : " + nameList[i].categoryId;
					autoBox.append(li);					
				}
				if(e.keyCode==13)
				enter();
			}
			autoRequest.send();
			}else{
				autoBox.innerHTML="";
				if(e.keyCode==13)
					enter();
			}
/* 			if((e.keyCode==8)&&(searchText.value=="")){
 				alert("나좀봐");
				autoBox.innerHTML="";
			}else{
				var autoRequest = new XMLHttpRequest();
				autoRequest.open("GET","/crowd/searchResultList?word="+e.target.value,true); 
				autoRequest.onload = function(){
					var nameList = JSON.parse(autoRequest.responseText);

					for (var i = 0; i < nameList.length; i++) {
						var li = document.createElement("LI");
						li.setAttribute("data-id",nameList[i].id);
						li.onclick = function(e){
							window.location.href="/crowd/main?crowd="+li.getAttribute("data-id");
						}
						li.innerText = "제목 : "+nameList[i].name+" / 내용 : "+nameList[i].content.substring(1,5)+" / 카테고리 : " + nameList[i].categoryId;
						autoBox.append(li);					
					}

				}
				autoRequest.send();
			} */
			
			console.log("들와라");
			function enter(){
				autoBox.innerHTML="";
				jsContainer.innerHTML = "";
				calist.removeClass("selectca");
				alllist.addClass("selectca");
				cacontainer.removeClass("height");
				mainul.find("li").find("ul").css({
					"visibility" : "hidden"
				});

				var resultRequest = new XMLHttpRequest();
				resultRequest.open("GET","/crowd/searchResultList?word="+e.target.value,true);
				resultRequest.onload = function(){

					var resultList = JSON.parse(resultRequest.responseText);
					for (var i = 0; i < resultList.length; i++) {
						
						var tBox = document.importNode(temp.content, true);
						var tempH4 = tBox.querySelector("h4");
						
						tempH4.innerText = resultList[i].name;
	 					var tempSpan1 = tBox.querySelector("span:nth-child(1)");
						var tempSpan2 = tBox.querySelector("span:nth-child(2)");
						var tempSpan3 = tBox.querySelector("span:nth-child(3)");
						var tempSpan4 = tBox.querySelector("span:nth-child(4)");
						var tempSpan5 = tBox.querySelector(".member-cnt span");
						var tempImg = tBox.querySelector(".content-image img");
						var tempA = tBox.querySelector(".content-image a");
						tempSpan1.innerText = resultList[i].content;
	 					tempSpan2.innerHTML = "가입조건"+'<br/>- 나이 : '+resultList[i].ageMin+" ~ "+resultList[i].ageMax;
	 					if(resultList[i].gender==0)
	 						tempSpan3.innerText = "- 성별 : 무관";
	 	 				if(resultList[i].gender==1)
	 	 					tempSpan3.innerText = "- 성별 : 남자";
	 	 	 			if(resultList[i].gender==2) 	
	 	 					tempSpan3.innerText = "- 성별 : 여자";
						tempSpan4.innerText = "- 지역 : "+resultList[i].areaSido+" "+resultList[i].areaSigungu; 
						tempSpan5.innerText = "정원 "+resultList[i].nowPerson+" / "+resultList[i].maxPerson;
 						tempImg.src = "/get-img?folder=crowd-banner&file="+resultList[i].img;
 						/*						tempA.href = "main?crowd="+resultList[i].id; */
						jsContainer.append(tBox);
					}
				}
				resultRequest.send();
//----------------------------------------------------
			 
			 return;
			}
/*  			searchText.onchange = function(){
 				alert("dd");
				autoBox.innerHTML = "";
				return;
			}  */
		}
	})
/* 			 $(window).scroll(function () {
             var scroll = $(window).scrollTop();
             console.log(scroll);
             $(".content-box").css({
                 opacity: 1-(scroll/100),
                 transform:"perspective(600px) translate3d(0px,"+(-scroll*0.1)+"0px,"+(-scroll)+"px)"
             })
         }) */
</script>
        <div id="particles-js">
        <script link="text/javascript" src="/resources/js/particles.js-master/particles.js"></script>
<script link="text/javascript" src="/resources/js/particles.js-master/demo/js/app.js"></script>
        </div>
<main>
<section>
<template class="temp">
<div class="pointer"><label>View</label></div>
		<div class="content-box" data-cid="${simple.categoryId}" data-tid="${crowdTag.tagId}">
		<div class="content-image">
			<a href="main?crowd="></a> <img src="/resources/images/tempImg.png"alt="">
		</div>
		<div class="content-detail">
			<h4></h4>
			<div>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="member-cnt">
				<span></span>
			</div>
		</div>
	</div>
	</template>
	<nav class="category-list-container">
		<div class="category-list">
			<ul class="category-main-ul">
				<li><a href="#" class="calist alllist selectca">전체</a>
				<c:forEach var="category" items="${list}">
					<li><a href="#" data-id="${category.id}" class="calist">${category.name}</a>
						<ul data-id="${category.id}">
							<li><a class="tag-name" data-cid="${category.id}" href="#">전체</a></li>
							<c:forEach var="tag" items="${tlist}">
								<c:if test="${category.id == tag.categoryId}">
									<li><a class="tag-name" data-cid="${tag.categoryId}" data-tid="${tag.id}" href="#">${tag.name}</a></li>
								</c:if>
								
							</c:forEach>
						</ul>
					</li>
				</c:forEach>
			</ul>
			<div class="indicator" id="bar"></div>
			<div class="sebu">
				<span>세부 카테고리</span>
			</div>
		</div>
	</nav>
</section>
<section class="detail-list-section">
	<div class="detail-list-container">
		<div class="grid-header">
			<div><a href="#" class="alllist">전체</a></div>
		</div>
		<div class="grid-category">

			<c:forEach var="category" items="${list}">
				<div><a class="tag-name category-name" data-cid="${category.id}" href="#">${category.name}</a></div>
			</c:forEach>
			
		</div>
	</div>
	<nav>
		<div class="calist-detail-list"></div>
	</nav>
</section>
<section class="category-content-container">
<c:forEach var="simple" items="${simpleDataList}">
<%-- <c:forEach var="crowdTag" items="${crowdTagList}"> --%>
<%-- <c:forEach var="tag" items="${tlist}"> --%>
	<div class="content-box" data-cid="${simple.categoryId}" data-tid="${crowdTag.tagId}">
	<div class="pointer"><label>View</label></div>
		<div class="content-image">
			 <img src="/get-img?folder=crowd-banner&file=${simple.img}"alt="">
		</div>
		<div class="content-detail">
			<h4>${simple.name}</h4>
			<div>
				<span>${simple.content}</span>
				<span>가입조건 <br/> - 나이 : ${simple.ageMin} ~ ${simple.ageMax}</span>
				<c:choose>
				<c:when test="${simple.gender==0}">
					<span>- 성별 : 남자</span>
				</c:when>
				<c:when test="${simple.gender==1}">
					<span>- 성별 : 여자</span>
				</c:when>
				<c:when test="${simple.gender==2}">
					<span>- 성별 : 모두</span>
				</c:when>
				</c:choose>
				<span>- 지역 : ${simple.areaSido}</span>
			</div>
			<div class="member-cnt">
				<span>정원 ${simple.nowPerson} / ${simple.maxPerson}명</span>
			</div>
		</div>
	</div>
	
	
</c:forEach>
<%-- </c:forEach> --%>
<%-- </c:forEach> --%>
</section>
</main>
