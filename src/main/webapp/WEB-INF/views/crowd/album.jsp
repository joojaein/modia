<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<main>
<link href="/resources/css/rprtBox.css" type="text/css" rel="stylesheet" />
<link href="/resources/css/groupalbum.css" type="text/css" rel="stylesheet" />
<script src="/resources/js/groupalbum.js"></script>
<link href="/resources/css/groupsearch.css" type="text/css" rel="stylesheet" />
<script src="/resources/js/groupsearch.js"></script> 
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/js/backpage.js"></script>
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
				<a href="groupchat?crowd=${crowd.id}">단체채팅</a>
			</div>
		</nav>
	</section>
	<section class="sub-head">
		<div class="sub-head-box">
			<nav class="search-box"></nav>
			<div class="search">
				<div class="icon">
					<img src="../../../resources/images/Magnifying.png" />
				</div>
				<div class="field">
					<input type="search" placeholder="검색" />
				</div>
			</div>
		</div>
	</section>
	<div>
		<article class="content">
			<c:forEach var="a" items="${alist}">
				<c:url value="adetail" var="url">
				<c:param name="crowd" value="${a.crowdId}" />
				<c:param name="id" value="${a.id}" />
				</c:url>
				<div class="content-box" style="width: 45%;">
					<div style="width: 100%;">
						<div class="img-of">
							<a href="${url}"><img class="upload-img"
								src="/get-img?folder=crowd-postsImg&file=${a.mainImg}" alt="" /></a>
						</div>
						<div class="content-box-div">
							<div>
							<span class="album-title"><a href="${url}">${a.title}</a></span>
							<a href="${url}"><span style="color: red">[${a.cmtCnt}]</span></a>
							</div>
							<div class="wr">
							<p style="margin: 0"><a href="${url}">${a.writerId}</a></p>
							<p style="margin: 0"><a href="${url}">
							 <fmt:formatDate value="${a.regDate}" pattern="yyyy-MM-dd a HH:mm" />
							</a></p>
							</div>
						</div>
					</div>
				</div>
			</c:forEach>
		</article>
		<hr />
	</div>
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
