<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
    
<main>
	<link href="/resources/css/memberPage.css" type="text/css" rel="stylesheet" />
    <script src="/resources/js/memberIndex.js"> </script>
    
    <div class="member-index">
	    <div class="profile">
			<div class="profile-img">	
		    	<img src="/resources/images/img404.png" name="${member.img}">
	    	</div>	    	
	    	<div class="id fs16 fwb">${member.id}</div>
	    	<div class="message">${member.msg}</div>	
	    </div>
	    <div class="group">
	   		<div class="right">
	    		<a href="edit">회원정보수정</a>
    		</div>
	    	<div class="menu">
	    		<input name="my-group" class="btn selected-tab" type="button" value="내 모임(5)">
	    		<input name="req-group" class="btn" type="button" value="가입 신청 목록(2)">
	    		<input name="hit-group" class="btn" type="button" value="최근 본 모임(21)">
	    	</div>
	    	
	    	<ul class="group-list-flex">	
				<template id="group-list-flex-li-template">
			    	<li class="group-list-flex-li">
			    		<img src="/resources/images/test.jpg">
						<div class="group-list-flex-content ellipsis">
							<div class="fs-m fwb left tpl-name">캠핑캠핑</div>
							<div class="ellipsis tpl-content">다 같이 모여서 캠핑가는 즐거운 모임입니다. 남녀노소 모두모두 모여요~</div>
							<br />
							<div class="left fwb">가입조건</div>
							<div class="left">- 나이 : <span class="tpl-minage">20대</span> ~ <span class="tpl-maxage">40대</span></div>
							<div class="left">- 성별 : <span class="tpl-gen">모두</span></div>
							<div class="left">- 지역 : <span class="tpl-location">서울 종로구</span></div>
							<div>회원수  <span class="tpl-nowperson">10</span> / <span class="tpl-maxperson">20명</span></div>
						</div>
					</li>
	    		</template>
		</ul>
	    </div>
   	</div>
</main>