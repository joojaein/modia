<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/security/tags" %> 

<header>
	<link href="/resources/css/mainHeader.css" type="text/css" rel="stylesheet" />
    <script src="/resources/js/mainHeader.js"> </script>
	
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
    <div id="headerMenu">
        <input type="button"></input>
    </div>
    <div id="headerMenus">
            <a class="fwb fs11" href="">Q&amp;A</a>
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
            	<input class="fwb fs18 btn" type="button" value="회원가입" name="join"><hr class="hr-dot"/>
			</s:authorize>
			<s:authorize access="isAuthenticated()">
				<s:authorize access="hasAnyRole('ADMIN')">
            	<input class="fwb fs18 btn" type="button" value="관리자페이지" name="admin/index"><hr class="hr-dot"/>
				</s:authorize>
				<s:authorize access="hasAnyRole('MEMBER')">
            	<input class="fwb fs18 btn" type="button" value="마이페이지" name="member/index"><hr class="hr-dot"/>
				</s:authorize>
				
				
			</s:authorize>
            
            
            
            
            
            
            
            
            
            
            
            
            <input class="fwb fs18 btn" type="button" value="홈" name="index"><br/>
            <input class="fwb fs18 btn" type="button" value="카테고리" name="search"><hr class="hr-dot"/>
            <input class="fwb fs18 btn" type="button" value="자주 묻는 질문" name="qna"><br/>
            <input class="fwb fs18 btn" type="button" value="1:1 문의" name="question"><br/>
    </div>
</header>
