<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<header>
	<link href="/resources/css/mainHeader.css" type="text/css" rel="stylesheet" />
    <script src="/resources/js/mainHeader.js"> </script>
	
    <h1 class="logo"><a href="/index">MOIDA</a></h1>

    <div id="headerSearch">
            <input type="text" placeholder="모임을 검색하세요"/>
    </div>
    <div id="headerMenu">
        <input type="button"></input>
    </div>
    <div id="headerMenus">
            <a class="fwb fs11" href="">1:1문의</a>
            <span class="fs11" >|</span>
            <a class="fwb fs11" href="/join">회원가입</a>
            <span class="fs11">|</span>
            <a class="fwb fs11" href="/login">로그인</a>
    </div>
    
   	<div class="back"></div>
    <div class="modal">
            <input class="fwb fs18 btn" type="button" value="로그인" name="login"><br/>
            <input class="fwb fs18 btn" type="button" value="회원가입" name="join"><hr class="hr-dot"/>
            <input class="fwb fs18 btn" type="button" value="홈" name="index"><br/>
            <input class="fwb fs18 btn" type="button" value="카테고리" name="search"><hr class="hr-dot"/>
            <input class="fwb fs18 btn" type="button" value="1:1 문의" name="question"><br/>
    </div>
</header>
