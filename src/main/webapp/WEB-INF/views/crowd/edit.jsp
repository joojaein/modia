<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
    
<main>
	<link href="/resources/css/groupCreate.css" type="text/css" rel="stylesheet" />
    <script src="/resources/js/groupEdit.js"> </script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	
    <div id="layer"></div>
	<div class="create">
		<div class="div-tag">
		
		<c:forEach var="t" items="${tagList}">
			<c:set var="setSelected" value="false" />
			<c:forEach var="ct" items="${crowdTagIdList}">
				<c:set var="crowdTag" value="${ct}" />
			    <c:if test="${crowdTag eq t.id}">
					<input class="btn selected-tag" type="button" value="${t.name}" name="${t.id}">
					<c:set var="setSelected" value="true" />
				</c:if>
			</c:forEach>
			    <c:if test="${not setSelected}">
					<c:if test="${crowdTag ne t.id}">
						<input class="btn" type="button" value="${t.name}" name="${t.id}">
					</c:if>	
				</c:if>
		</c:forEach>
		
		</div>
		<div class="div-input">			
			<div class="div-location">
				<select class="sido">				
				</select>
				<select class="sigungu">
				</select>
			</div>
			<div class="div-text">
				<input class="input-name" type="text" placeholder="모임이름을 작성해 주세요" value="${crowd.name}">
				<textarea class="textarea-content" placeholder="모임을 소개해 주세요">${crowd.content}</textarea>
			</div>
			<div class="div-age">
				<div class="left">
					<span>나이</span>
				</div>
				<select class="age-min">
				</select>					
				<span class="etc-span">~</span>
				<select class="age-max">
				</select>
			</div>
			<div class="div-gender">
				<div class="left">
					<span>성별</span>
				</div>
				<select class="gender">
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
				<img style="max-height: 413px"/>
			</div>
		</div>
		<input class="btn-create btn fs14 fwb" type="button" value="수정하기">
	</div>									
</main>