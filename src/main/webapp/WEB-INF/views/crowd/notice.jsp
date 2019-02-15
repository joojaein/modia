<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<main>
<link href="/resources/css/rprtBox.css" type="text/css" rel="stylesheet" />
<link href="/resources/css/groupnotice.css" type="text/css"
	rel="stylesheet" />
<script src=""></script>
<div class="wrapper">
	<section class="main-head">
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
				<a href="album">단체채팅</a>
			</div>
		</nav>
	</section>
	<input id="cid" type="hidden" value="${crowd.id}" />
	<article class="content">
		<c:forEach var="p" items="${list}">
			<div style="margin: 2px 0px 10px 0px; display: flex; justify-content: space-between;">
				<div class="etc-box">
					<div class="profile-box">
						<div class="photo"></div>
						<div class="profile-info">
							<span class="name">${p.writerId}</span> <span class="reg-write">${p.regDate}</span>
						</div>
					</div>
					<div class="content-title">${p.title}</div>
					<p style="margin: 0;">${p.content}</p>
				</div>
					
				<div class="img-box">
					<div style="display: flex; justify-content: space-between;">
						<span>조회수  ${p.hit}</span> <span>댓글수 0</span>
					</div>
					<div class="pi-box">
					<img class="post-img" src="/get-img?folder=crowd-postsImg&file=${p.mainImg}"/>
					</div>
				</div>
			</div>
			<hr />
		</c:forEach>
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

<a id="MOVE_BACK_BTN" href="#">목록으로</a>