<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script>
searchText.addEventListener("keyup",function imfuck(e){
    console.log("keyusdasdasdasfsdp");

    autoBox.innerHTML="";
    if(searchText.value!=""){
       alllist.off("click");
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
                 /*                  tempA.href = "main?crowd="+resultList[i].id; */
                 var tempBox = tBox.querySelector(".content-box");
                 tempH4.setAttribute("data-crowd",resultList[i].id);
                 tempSpan1.setAttribute("data-crowd",resultList[i].id);
                 tempSpan2.setAttribute("data-crowd",resultList[i].id);
                 tempSpan3.setAttribute("data-crowd",resultList[i].id);
                 tempSpan4.setAttribute("data-crowd",resultList[i].id);
                 tempSpan5.setAttribute("data-crowd",resultList[i].id);
                 tempImg.setAttribute("data-crowd",resultList[i].id);
                 tempBox.setAttribute("data-crowd",resultList[i].id);
                 
                 tempBox.onclick = function(e){
                    location.href = "main?crowd="+e.target.getAttribute("data-crowd");
                 }
                jsContainer.append(tBox);
                popopo();
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
          li.onclick = function(e){
             window.location.href="/crowd/main?crowd="+e.target.getAttribute("data-id");
          }
          li.innerHTML = "<span><i class='fa fa-hand-o-right'></i></span>"+nameList[i].name + " : "+ nameList[i].content;
          li.setAttribute("data-id",nameList[i].id);
          autoBox.append(li);               
       }

       if(e.keyCode==13)

       enter();
    }
    autoRequest.send();
    }else{
       autoBox.innerHTML="";
        if(chk = true){
           chk = false;
        }
       if(e.keyCode==13)
          enter();
    }
 	   /*          if((e.keyCode==8)&&(searchText.value=="")){
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
              /*                  tempA.href = "main?crowd="+resultList[i].id; */
              var tempBox = tBox.querySelector(".content-box");
              tempH4.setAttribute("data-crowd",resultList[i].id);
              tempSpan1.setAttribute("data-crowd",resultList[i].id);
              tempSpan2.setAttribute("data-crowd",resultList[i].id);
              tempSpan3.setAttribute("data-crowd",resultList[i].id);
              tempSpan4.setAttribute("data-crowd",resultList[i].id);
              tempSpan5.setAttribute("data-crowd",resultList[i].id);
              tempImg.setAttribute("data-crowd",resultList[i].id);
              tempBox.setAttribute("data-crowd",resultList[i].id);
              
              tempBox.onclick = function(e){
                 location.href = "main?crowd="+e.target.getAttribute("data-crowd");
              }
             jsContainer.append(tBox);
             popopo();
          }
       }
       resultRequest.send();
//----------------------------------------------------
     
     return;
    }
 })
</script>
<main>
    <link rel="stylesheet" type="text/css" media="screen" href="/resources/css/categorySearch.css" />
        <section class="category-list">
           	<c:forEach var="category" items="${list}">
            <div>
            	<div><a href="search?categoryId=${category.id}"></a></div>
                <span><a href="search?categoryId=${category.id}">${category.name}</a></span>
                <c:forEach var="cvl" items="${cvl}">
                <c:if test="${cvl.categoryId==category.id}">
                <aside class="tag-aside"><a href="search?categoryId=${cvl.categoryId}&tagId=${cvl.id}"><span>${cvl.name}</span></a></aside>
                </c:if>
                </c:forEach>
            </div>
            </c:forEach>
            <!-- <div>
                <div class="sport"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>운동/스포츠</span>
            </div>
            <div>
                <div class="book"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>인문학/책/글</span>
            </div>
            <div>
                <div class="language"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>외국/언어</span>
            </div>
            <div>
                <div class="festival"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>문화/공연/축제</span>
            </div>
            <div>
                <div class="music"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>음악/악기</span>
            </div>
            <div>
                <div class="making"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>공예/만들기</span>
            </div>
            <div>
                <div class="dance"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>댄스/무용</span>
            </div>
            <div>
                <div class="volunteer"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>봉사활동</span>
            </div>
            <div>
                <div class="sociality"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>사교/인맥</span>
            </div>
            <div>
                <div class="car"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>차/오토바이</span>
            </div>
            <div>
                <div class="picture"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>사진/영상</span>
            </div>
            <div>
                <div class="baseball"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>야구관람</span>
            </div>
            <div>
                <div class="game"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>게임/오락</span>
            </div>
            <div>
                <div class="cooking"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>요리/제조</span>
            </div>
            <div>
                <div class="dog"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>반려동물</span>
            </div>
            <div>
                <div class="familiy"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>가족/결혼</span>
            </div>
            <div>
                <div class="free"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>자유주제</span>
            </div> -->
  
        </section>
    </main>