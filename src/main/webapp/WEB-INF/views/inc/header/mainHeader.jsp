<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/security/tags" %> 

<header>
	<link href="/resources/css/mainHeader.css" type="text/css" rel="stylesheet" />
	<link href="/resources/css/qna.css" type="text/css" rel="stylesheet" />
    <script src="/resources/js/mainHeader.js"> </script>
    <script src="/resources/js/qna.js"></script>
    
	
    <h1 class="logo"><a href="/index">MOIDA</a></h1>

    <div id="headerSearch">
	    <form method="POST" action="crowd/search">
		    <input type="text" placeholder="모임을 검색하세요" name="word" autocomplete="off"/>
		    <input type="hidden" name="categoryId" value="0" />
			 <!-- http://localhost/crowd/search?query=input.value-->
		</form>
   		<!-- 
        <input type="text" placeholder="모임을 검색하세요"/>
        -->
    </div>
    <div class="sm-qnaButton">
    </div>
    <div id="headerMenu">
        <input type="button"></input>
    </div>
    <div id="headerMenus">
            <a class="fwb btn fs11 qnaButton">Q&amp;A</a>
            <span class="fs11" >|</span>         
    		<s:authorize access="isAnonymous()">
           		<a class="fwb fs11" href="/join">회원가입</a>
			</s:authorize>
			<s:authorize access="isAuthenticated()">
				<s:authorize access="hasAnyRole('ADMIN')">
					<a class="fwb fs11" href="/admin/index">관리자페이지</a>
				</s:authorize>
				<s:authorize access="hasAnyRole('MEMBER')">
				    <a class="fwb fs11" href="/member/index">마이페이지</a>
				</s:authorize>
			</s:authorize>
            <span class="fs11">|</span>
            <s:authorize access="isAnonymous()">
            	<a class="fwb fs11" href="/login">로그인</a>
			</s:authorize>
			<s:authorize access="isAuthenticated()">
            	<a class="fwb fs11" href="/logout">로그아웃</a>
			</s:authorize>
    </div>
    
   	<div class="back"></div>
    <div class="modal">
            <s:authorize access="isAnonymous()">
            	<input class="fwb fs18 btn" type="button" value="로그인" name="login"><br/>
			</s:authorize>
			<s:authorize access="isAuthenticated()">
           		<input class="fwb fs18 btn" type="button" value="로그아웃" name="logout"><br/>
			</s:authorize>
			
            <s:authorize access="isAnonymous()">
            	<input class="fwb fs18 btn" type="button" value="회원가입" name="join">
			</s:authorize>
			<s:authorize access="isAuthenticated()">
				<s:authorize access="hasAnyRole('ADMIN')">
            	<input class="fwb fs18 btn" type="button" value="관리자페이지" name="admin/index">
				</s:authorize>
				<s:authorize access="hasAnyRole('MEMBER')">
            	<input class="fwb fs18 btn" type="button" value="마이페이지" name="member/index">
				</s:authorize>
				
				
			</s:authorize>
            
            
            
            
            
            
            
            
            
            
            
            
            <input class="fwb fs18 btn" type="button" value="홈" name="index"><br/>
            <input class="fwb fs18 btn" type="button" value="카테고리" name="search">
    </div>
</header>
<div class="jaju-side-slider">
                <div class="jaju-manu-list-div">
                    <div class="jaju-LJbox">
                        <div class="jaju-exit"><span class="jaju-backbackback"></span><p>자주 묻는 질문</p></div>
                    </div>
                    <div class="jaju-search-div">
                        <div class="jaju-search-text">
                            <div>
                                <h3>문의 전 확인</h3>
                                <p>아래 검색창을 통해 원하시는 답변을 빠르게 찾아 보실 수</br>
                                있습니다.</p>
                            </div>

                        </div>
                        <div class="jaju-search-bar">
                            <div><img src="image/search_icon.png" alt="">
                            <input class="jaju-search-input" type="text" placeholder="Search"></div>
                        </div>
                    </div>
                    <div class="jaju-slider-div">
                        <ul class="jaju-big-category">
                            
                            
                        
                        </ul>
                    </div>
                    <input class="jaju-option-list btn" type="submit" value="수정 및 삭제"/>
                    <input class="jaju-create-list btn" type="submit" value="추가"/>
                </div>
                <div class="jaju-create-list-container">
                    <input class="jaju-select-li-id" type="hidden" name="" value="">
                    <label >제목</label><input placeholder="20자 내외로 작성해주세요." maxlength="20" class="jaju-create-list-title" type="text">
                    <label>내용</label><input placeholder="35자 내외로 작성해주세요." type="text" maxlength="35" class="jaju-create-list-content" name="" id="" cols="30" rows="10"/>
                    <div  class="jaju-create-list-btns">
                        <input class="jaju-create-list-add btn" type="submit" value="추가">
                        <input class="jaju-create-list-cancel btn" type="submit" value="취소">

                    </div>

                </div>
                <template id="jaju-muni-line-tpl">
                    <li class="jaju-q-title">
                        <input class="jaju-li-id" type="hidden" name="" value="">
                        <a class="jaju-q-title-a"></a>
                        <img class="jaju-line-setting" src="/resources/images/muniSetting.png"/>
                        <img class="jaju-line-delete" src="/resources/images/muniClose.png"/>
                        <div class="jaju-title-down"><img class="jaju-arrow btn" src="/resources/images/nav-arrow.png" alt="" /></div>
                        <ul  class="jaju-cat-menu jaju-sub-menu">

                            <li><img src="/resources/images/arrow-circle-right.png" /><textarea class="jaju-q-content" readonly="readonly" ></textarea></li>
                            
                        </ul>
                    </li>

                </template>
            </div>

