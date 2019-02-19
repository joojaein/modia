<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<main>
<link href="resources/css/basic.css" type="text/css" rel="stylesheet" />
<link href="/resources/css/rprtBox.css" type="text/css" rel="stylesheet" />
<link href="/resources/css/groupboarddetail.css" type="text/css"
	rel="stylesheet" />
<script src="/resources/js/boarddetail.js"></script> <script
	src="/resources/js/backpage.js"></script> <script
	src="http://code.jquery.com/jquery-latest.min.js"></script>
<div class="wrapper">
	<section class="main-head">
		<nav>
			<div>
				<a href="/crowd/main?crowd=${crowd.id}">정보</a>
			</div>
			<div>
				<a href="/crowd/notice?t=0&crowd=${crowd.id}">공지사항</a>
			</div>
			<div>
				<a href="/crowd/calendar?crowd=${crowd.id}">일정</a>
			</div>
			<div>
				<a href="/crowd/board?t=1&crowd=${crowd.id}">게시판</a>
			</div>
			<div>
				<a href="/crowd/album?t=2&crowd=${crowd.id}">사진첩</a>
			</div>
			<div>
				<a href="/crowd/groupchat?crowd=${crowd.id}">단체채팅</a>
			</div>
		</nav>
	</section>
	<input id="cid" type="hidden" value="${crowd.id}" /> <input class="pi"
		type="hidden" value="${posts.id}" />
	<section class="content-title">
		<h3>${posts.title}</h3>
		<div class="profile-box">
			<div class="photo" style="background: url('/get-img?folder=crowd-postsImg&file=${posts.img}') no-repeat center; background-size: cover;"></div>
			<div class="profile-info">
				<span class="name">${posts.writerId}</span> <span class="reg-write">
					<fmt:formatDate value="${posts.regDate}"
						pattern="yyyy-MM-dd a HH:mm" />
				</span> <span>조회수<span class="hit" style="color: red;">[${posts.hit}]</span>
				</span>
			</div>
		</div>
		<hr />
	</section>
	<article class="content">
		<c:forEach var="pc" items="${pc}">
			<c:choose>
				<c:when test="${empty pc.text}">
					<img src="/get-img?folder=crowd-postsImg&file=${pc.src}" />
				</c:when>
				<c:otherwise>
					<p>${pc.text}</p>
				</c:otherwise>
			</c:choose>
		</c:forEach>
	</article>
	<section class="content-comment">
		<hr />

		<div class="comentlike">
			<div class="comment-sum">댓글 14</div>
			<div class="comment-sum like">
				좋아요<span>♡</span> 10
			</div>
		</div>
		<div class="comment-reg">
			<input class="comment-input" type="text" placeholder="댓글" /> <input
				type="button" value="등록" onclick="commentadd();" />
		</div>
		<hr />
		<template id="tem2">
		<div>
			<div class="profile-box">
				<div class="comment-photo">
						</div>
				<div class="profile-info">
					<span class="name"></span>
				</div>
			</div>
			<div class="comment-content">
				<p></p>
				<div></div>
			</div>
		</div>
		<hr />
		</template>
		<div class="temp-cmt">
			<c:forEach var="cmt" items="${cmt}">
				<div>
					<div class="profile-box">
						<div class="comment-photo"
							style="background: url('/get-img?folder=crowd-postsImg&file=${cmt.img}') no-repeat center; background-size: cover;">
						</div>
						<div class="profile-info">
							<span class="name">${cmt.writerId}</span>
						</div>
					</div>
					<div class="comment-content">
						<p>${cmt.content}</p>
						<div>
							<fmt:formatDate value="${cmt.regDate}"
								pattern="yyyy-MM-dd a HH:mm" />
						</div>
					</div>
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
