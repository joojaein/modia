<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<main>
<link href="/resources/css/rprtBox.css" type="text/css" rel="stylesheet" />
<link href="/resources/css/groupnotice.css" type="text/css" rel="stylesheet" />
<link href="/resources/css/backpage.css" type="text/css" rel="stylesheet" />
<script src="/resources/js/groupnotice.js"></script>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/js/backpage.js"></script>
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
	<input id="cid" type="hidden" value="${crowd.id}" />
		<article class="content">
		<div class="content-width">
		<c:forEach var="p" items="${plist}">
			<c:url value="ndetail" var="url">
				<c:param name="crowd" value="${p.crowdId}" />
				<c:param name="id" value="${p.id}" />
			</c:url>
			<div class="content-box">
				<div class="etc-box">
					<div class="profile-box">
						<div class="photo" style="background: url('/get-img?folder=member-profile&file=${p.img}') no-repeat center; background-size: cover;"></div>
						<div class="profile-info">
							<span class="name">${p.writerId}</span>
						</div>
					</div>
					<div class="content-title">
						<a href="${url}">${p.title}</a>
					</div>
					<p class="content-content" style="margin: 0;">
						<a href="${url}">${p.content}</a>
					</p>
				</div>
				<div class="img-box">
					<div class="pi-box">
					<c:choose>
					<c:when test="${empty p.mainImg}">
						<img style="display:none;" class="post-img" src="/get-img?folder=crowd-postsImg&file=${p.mainImg}" />
					</c:when>
					<c:otherwise>
					<a href="${url}"><img class="post-img" src="/get-img?folder=crowd-postsImg&file=${p.mainImg}" /></a>
					</c:otherwise>
					</c:choose>
					</div>
				</div>
			</div>
			<div class="timeview">
				<span class="reg-write"><a href="${url}"> 
				<fmt:formatDate value="${p.regDate}" pattern="yyyy-MM-dd a HH:mm" /></a></span>
				<a href="${url}"><span>조회수 <span class="hit" style="color: red;">[${p.hit}]</span></span></a> 
				<a href="${url}"><span>댓글수<span class="comment-cnt" style="color: red;">[${p.cmtCnt}]</span></span></a>
			</div>
			<hr />
			<input class="pid" type="hidden" value="p.id" />
		</c:forEach>
		</div>
	</article>
</div>
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
</main>
<a id="MOVE_BACK_BTN">목록으로</a>