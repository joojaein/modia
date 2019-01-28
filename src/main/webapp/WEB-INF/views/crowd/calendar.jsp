<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<main> 
<link href="/resources/fullcalendar-3.10.0/fullcalendar.min.css" type="text/css" rel="stylesheet" />
<!-- <link href="/resources/fullcalendar-3.10.0/fullcalendar.print.min.css" type="text/css" rel="stylesheet" /> -->
<script src="/resources/fullcalendar-3.10.0/lib/moment.min.js"> </script>
<script src="/resources/fullcalendar-3.10.0/lib/jquery.min.js"> </script>
<script src="/resources/fullcalendar-3.10.0/fullcalendar.min.js"> </script>
<script src="/resources/fullcalendar-3.10.0/gcal.js"> </script>
<script src="/resources/fullcalendar-3.10.0/locale/ko.js"> </script>
<link href="/resources/css/groupcalendar.css" type="text/css" rel="stylesheet" />
<script src="/resources/js/groupcalendar.js"> </script>
<script src="/resources/js/rprtmodal.js"> </script>
<script src="/resources/js/calendarmodal.js"> </script>
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
			<div>
				<a href="">단체채팅</a>
			</div>
			
		</nav>
	</section>
	<article class="content">
		<div id="calendar"></div>
	</article>
	<section class="days-info">
		<table class="event-info">
			<th class="eh"></th>
			<tr>
				<td><p class="tp"></p></td>
			</tr>
			<td><p class="p"></p></td>
		</table>
	</section>
	<div class="send-modal d-none">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" onclick="close();">
						<span>&times;</span>
					</button>
					<h4 class="modal-title">일정 등록</h4>
				</div>
				
				
				<div class="modal-body">
					<form>
						<div class="form-group form-date">
							<label class="control-label">기간</label>
							<div>
								<label>from</label> <input type="date"
									class="form-control mb-10 from-date" /> <label>to</label> <input
									type="date" class="form-control mb-10 to-date" />
							</div>
						</div>
						<div class="form-group">
							<label class="control-label">제목</label> <input type="text"
								class="form-control title-text">
						</div>
						<div class="form-group">
							<label class="control-label">내용</label>
							<textarea class="form-control content-text"></textarea>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<!-- <button type="button" class="btn-default btn closebtn">닫기</button> -->
					<button type="button" class="add-btn btn" onclick="dataadd();">추가</button>
				</div>
			</div>
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