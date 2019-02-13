<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<main>
<link href="resources/css/basic.css" type="text/css" rel="stylesheet" />
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<link href="/resources/css/rprtBox.css" type="text/css" rel="stylesheet" />
<link href="/resources/css/groupboarddetail.css" type="text/css" rel="stylesheet" />
<script src="/resources/js/boarddetail.js"></script>
<script src="/resources/js/backpage.js"></script>
<script src="/resources/js/comment_add.js"></script>
<div class="wrapper">
	<section class="main-head">
		<nav>
			<div>
				<a href="#">정보</a>
			</div>
			<div>
				<a href="#">공지사항</a>
			</div>
			<div>
				<a href="#">일정</a>
			</div>
			<div>
				<a href="#">게시판</a>
			</div>
			<div>
				<a href="#">사진첩</a>
			</div>
		</nav>
	</section>
	<section class="content-title">
		<h3>가입시 필독 해주세요!</h3>
		<div class="profile-box">
			<div class="photo"></div>
			<div class="profile-info">
				<span class="name">이름</span> <span class="reg-write">2019-01-19
					오후 14:21 l 조회수</span>
			</div>
		</div>
		<hr />
	</section>

	<article class="content">
		<p>
			가입시 자기소개 양식을 지켜 가입인사를 해주세요~<br> <br> 1. 이름 : 홍길동<br>
			2. 나이 :<br> 3. 성별<br> 4. 사는 곳 :<br> <br> 캠핑캠핑에 오신
			것을 환영합니다!
		</p>
	</article>
	<article class="content-img">
		<div>
			<img src="../../../resources/images/twice.jpg">
		</div>
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
			<input type="text" placeholder="댓글" /> <input type="button"
				value="등록" />
		</div>
		<hr />
		<div>
			<div class="profile-box">
				<div class="comment-photo"></div>
				<div class="profile-info">
					<span class="name">이름</span>
				</div>
			</div>
			<div class="comment-content">
				<p>반갑습니다!</p>
				<div>2019-01-09 오후 2:06</div>
			</div>
		</div>
		<hr />
	</section>
</div>
</main>
<a id="MOVE_BACK_BTN" href="#">목록으로</a>
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