<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
    
<main>
	<link href="/resources/css/groupCreate.css" type="text/css" rel="stylesheet" />
	<!--<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script> -->
    <script src="/resources/js/groupCreate.js"> </script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	
    <div id="layer"></div>
	<div class="create">
		<div class="div-tag">
		<input style="display:none" class="categoryId" type="button" value="${categoryId}"> 
		<c:forEach var="tagName" items="${tagName}">
			<input class="btn" data-tid="${tagName.id}" type="button" value="${tagName.name}">
		</c:forEach>
		</div>
		<div class="div-input">
		
			<!-- <input id="roadAddress" class="btn location" type="button" value="지역"> -->
			
			<div class="div-location">
				<select class="sido">				
				</select>
				<select class="sigungu">
					<option>시군구</option>
				</select>
			</div>
			<div class="div-text">
				<input type="text" placeholder="모임이름을 작성해 주세요">
				<textarea placeholder="모임을 소개해 주세요"></textarea>
			</div>
			<div class="div-age">
				<div class="left">
					<span>나이</span>
				</div>
				<select class="age-min">
					<option>10대</option>
					<option>20대</option>
					<option>30대</option>
					<option>40대</option>
					<option>50대</option>
					<option>60대</option>
					<option selected="selected">무관</option>
				</select>					
				<span class="etc-span">~</span>
				<select class="age-max">
					<option>10대</option>
					<option>20대</option>
					<option>30대</option>
					<option>40대</option>
					<option>50대</option>
					<option>60대</option>
					<option selected="selected">무관</option>
				</select>
			</div>
			<div class="div-gender">
				<div class="left">
					<span>성별</span>
				</div>
				<select class="gender">
					<option selected="selected">무관</option>
					<option>남자</option>
					<option>여자</option>
				</select>
			</div>
			<div class="div-maxperson">
				<div class="left">
					<span>정원</span></div>
				<input type="text" value="20">				
				<span class="etc-span">명</span>
			</div>
			<div class="div-photo">
				<div class="left">
					<span>대표사진</span>
				</div>
	 			<input style="display:none" type="file" />				
				<input class="btn" type="button">
			</div>
			<div class="div-img">
				<img style="max-height: 413px" />
			</div>
		</div>
		<input class="btn-create btn fs14 fwb" type="button" value="모임개설">
	</div>
</main>