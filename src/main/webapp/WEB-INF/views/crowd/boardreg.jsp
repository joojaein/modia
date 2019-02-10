<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<main>
<link href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
	rel="stylesheet" type="text/css" />
<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script> <script
	type="text/javascript"
	src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script> <script
	src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>

<link href="/resources/css/rprtBox.css" type="text/css" rel="stylesheet" />
<script src="/resources/js/groupboardreg.js"></script>
<link href="/resources/css/groupboardreg.css" type="text/css"
	rel="stylesheet" />

<form role="form" method="post" action="boardreg">
<div class="wrapper">
	<section class="main-head">
		<nav>
			<div>
				<a href="main">정보</a>
			</div>
			<div>
				<a href="notice">공지사항</a>
			</div>
			<div>
				<a href="calendar">일정</a>
			</div>
			<div>
				<a href="board">게시판</a>
			</div>
			<div>
				<a href="album">사진첩</a>
			</div>
		</nav>
		<section class="select-box">
			<div class="board-list" style="width: 100%;">
				<select id="select1">
					<option value="게시판">게시판</option>
					<option value="사진첩">사진첩</option>
				</select>
				<hr class="hr" style="margin: 0;" />
				<select id="select2">
					<c:forEach var="b" items="${blist}">
						<option value="${b.name}">${b.name}</option>
					</c:forEach>
				</select>
			</div>
		</section>
		<input id="title" name="title" type="text" placeholder="제목" />
	</section>
	<div class="content"></div>


	<section class="text-content">
		<div>
			<div class="createitem" onclick="createItem();">내용</div>
		</div>
		<hr />
		<div class="reg-btn">
			<input class='file' style="display: none" type="file"
				accept=".jpg, .jpeg, .png" /> <img class="img-btn"
				src="/resources/images/camera.png" />
			<button id="btn" type="submit" onclick="boardreg();">등록하기</button>
		</div>
	</section>
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