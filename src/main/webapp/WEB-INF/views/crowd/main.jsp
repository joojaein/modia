<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<main>
<link href="/resources/css/groupMain.css" type="text/css" rel="stylesheet" />
<script src="/resources/js/groupMain.js"> </script>
<script src="/resources/js/backpage.js"></script>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<link href="/resources/css/backpage.css" type="text/css" rel="stylesheet" />
<div class="wrapper">
	<section class="main-head">
	<div>
		<nav>
			<div>
				<a href="main?crowd=${crowd.id}">정보</a>
			</div>
			<div>
				<a href="notice?t=0&crowd=${crowd.id}">공지사항</a>
			</div>
			<div>
				<a href="calendar?crowd=${crowd.id}">일정</a>
			</div>
			<div>
				<a href="board?t=1&crowd=${crowd.id}">게시판</a>
			</div>
			<div>
				<a href="album?t=2&crowd=${crowd.id}">사진첩</a>
			</div>
			<div>
				<a class="groupChat" href="groupchat?crowd=${crowd.id}">단체채팅</a>
			</div>
		</nav>
	</div>
	</section>
	<article class="content-img">
		<div>
			<img src="/get-img?folder=crowd-banner&file=${crowd.img}">
		</div>
	</article>
	<section class="group-info">
		<div class="ginfo">
		<div class="info-box">
			<img class="group-logo" name="${crowd.categoryId}"/>
			<span>${crowd.name}</span>
		</div>
		<div class="info">
			<span>today ${views.hit}</span> <span>total ${total.hit}</span>
		</div>
		</div>
	</section>
	<article class="content">
		<div>
			<textarea disabled="disabled">
			${crowd.content}
			</textarea>
			<div class="join-condition">
				<span>가입조건:</span> 나이: ${crowd.ageMin} ~ ${crowd.ageMax}
				<c:choose>
					<c:when test="${crowd.gender == 0}">
			성별: 남성
			</c:when>
					<c:when test="${crowd.gender == 1}">
			성별: 남성
			</c:when>
					<c:otherwise>
			성별: 모두
			</c:otherwise>
				</c:choose>
				지역: ${crowd.areaSido}
			</div>
		</div>
	</article>
	<section class="content-comment">
	<div class="comment-box">
		<c:if test="${userCrowdAuthType eq -1 || userCrowdAuthType eq 3}">
			<input class="join" type="button" value="가입하기" />
		</c:if>
		<c:if test="${userCrowdAuthType ne -1 && userCrowdAuthType ne 3}">
			<input class="join d-none" type="button" value="가입하기" />
		</c:if>
		<div class="comment-sum">모임멤버 ${crowd.nowPerson}/ ${crowd.maxPerson}명</div>
		<hr />
		<c:forEach var="n" items="${milv}">
		<div class="profile-box">
		<sec:authorize access="isAnonymous()">
			<a href="/login"><div class="comment-photo" style="background: url('/get-img?folder=member-profile&file=${n.img}') no-repeat center; background-size: cover;"></div></a>
		</sec:authorize>
		<sec:authorize access="isAuthenticated()">
			<div class="comment-photo" onclick="imgClick('${n.id}');" style="background: url('/get-img?folder=member-profile&file=${n.img}') no-repeat center; background-size: cover;"></div>
		</sec:authorize>
			<div class="name-box">
				<span class="name">${n.id}</span> <span>${n.msg}</span>
			</div>
			<c:choose>
			<c:when test="${n.groupRole == 0}">
			<div class="grade">모임장</div>
			</c:when>
			<c:when test="${n.groupRole == 1}">
			<div class="grade">운영진</div>
			</c:when>
			</c:choose>
		</div>
		<hr />
	</c:forEach>
	</div>
	</section>
	</div>
	</main>
	<a id="MOVE_BACK_BTN">목록으로</a>
	<section class="rprt-box">
		<div class="rprt d-none">
			<h1>신고하기</h1>
			<div class="clear">
				<img class="clear-btn" src="../../../resources/images/clearbtn.png" />
			</div>
			<h3 class="rprt-title">신고사유</h3>
			<select>
				<option value="">사유 선택</option>
				<option value="욕설/반말/부적절한 언어">욕설/반말/부적절한 언어</option>
				<option value="회원 분란 유도">회원 분란 유도</option>
				<option value="음란성 게시물">음란성 게시물</option>
				<option value="광고성 게시물">광고성 게시물</option>
				<option value="회원 비방">회원 비방</option>
				<option value="지나친 정치/종교 논쟁">지나친 정치/종교 논쟁</option>
				<option value="명예훼손/저작권 침해">명예훼손/저작권 침해</option>
				<option value="초상권 침해/도촬">초상권 침해/도촬</option>
				<option value="도배성 게시물">도배성 게시물</option>
			</select>
			<h3 class="rprt-title">신고사유</h3>
			<textarea></textarea>
			<div class="rprt-btn">
				<input type="submit" value="신고하기" />
			</div>
		</div>
	</section>
	