<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<main> 
	<script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script> 
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<link href="/resources/css/rprtBox.css" type="text/css" rel="stylesheet" />
	<script src="/resources/js/groupboardreg.js"></script>
	<link href="/resources/css/groupboardreg.css" type="text/css" rel="stylesheet" />

<form role="form" method="post" action="boardreg">

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
		<section class="reg-head">	
			<section class="select-box">
				<div class="board-list" style="width: 100%;">
					<c:if test="${groupRole lt 2}">
						<select id="select1">
							<option value="${boardType0.id}">공지사항</option>	
							<option>게시판</option>
							<option value="${boardType2.id}">사진첩</option>
						</select>
						<hr class="hr" style="margin: 0;" />
						<select class="d-none" id="select2">
							<c:forEach var="b" items="${blist}">
								<option value="${b.id}">${b.name}</option>
							</c:forEach>
						</select>
					</c:if>
					
					<c:if test="${groupRole eq 2}">
						<select id="select1">
							<option>게시판</option>
							<option value="${boardType2.id}">사진첩</option>
						</select>
						<hr class="hr" style="margin: 0;" />
						<select id="select2">
							<c:forEach var="b" items="${blist}">
								<option value="${b.id}">${b.name}</option>
							</c:forEach>
						</select>
					</c:if>
					</div>
			</section>
			<input id="title" name="title" type="text" autocomplete="off" placeholder="제목" />
		</section>

		<section class="text-content" id="sortable">

			<template id="text-template">
			<div class="tpl-div tpl-div-text ui-state-default">
				<textarea class="content-text" placeholder="내용"></textarea>
				<div class="hamburger-div">
					<img class="hamburger" src="/resources/images/bighamburger.png" />
				</div>
			</div>
			</template>

			<template id="img-template">
			<div class="tpl-div tpl-div-img ui-state-default">
				<div class="img-div">
					<img class="content-img" src="/resources/images/test.jpg" />
				</div>
				<div class="hamburger-div">
					<img class="hamburger" src="/resources/images/bighamburger.png" />
				</div>
			</div>
			</template>
		</section>

		<div class="reg-btn">
			<input class='file' style="display: none" type="file"
				accept=".jpg, .jpeg, .png" multiple /> <img class="img-btn btn"
				src="/resources/images/camera.png" /> <input class="btn btn-submit"
				value="등록하기"></input>
		</div>
	</div>

	<div class="content-img-alert content-alert d-none">
		<h1>옵션 선택</h1>
		<hr />
		<span class="btn btn-main">대표 이미지로 지정</span>
		<hr />
		<span class="btn btn-del">삭제하기</span>
		<hr />
		<input class="btn btn-cancel" type="button" value="취소">
	</div>

	<section class="rprt-box">
		<div class="rprt d-none">
			<h1>신고하기</h1>
			<div class="clear"> 
				<img class="clear-btn" src="/resources/images/clearbtn.png" />
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
</form>
</main>