<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<main> <script src="http://code.jquery.com/jquery-latest.min.js"></script>
<link href="/resources/fullcalendar-3.10.0/fullcalendar.min.css" type="text/css" rel="stylesheet" />
<script src="/resources/fullcalendar-3.10.0/lib/moment.min.js"> </script>
<script src="/resources/fullcalendar-3.10.0/lib/jquery.min.js"> </script>
<script src="/resources/fullcalendar-3.10.0/fullcalendar.min.js"> </script>
<script src="/resources/fullcalendar-3.10.0/gcal.js"> </script> 
<script src="/resources/fullcalendar-3.10.0/locale/ko.js"> </script>
<link href="/resources/css/groupcalendar.css" type="text/css" rel="stylesheet" />
<script src="/resources/js/rprtmodal.js"> </script> <script src="/resources/js/calendarmodal.js"> </script> 
<script type="text/javascript">
var dataset = [
    <c:forEach var="s" items="${schedule}" varStatus="status">
    <fmt:formatDate var="startDate" value="${s.startDate}" pattern="yyyy-MM-dd"/>
   	<fmt:formatDate var="endDate" value="${s.endDate}" pattern="yyyy-MM-dd"/>
            {
           	"id":'<c:out value="${s.id}" />',
            "title":'<c:out value="${s.title}" />',
            "data":'<c:out value="${s.content}"/>',
            "start":'<c:out value="${startDate}" />',
             "end":'<c:out value="${endDate}" />'
             }<c:if test="${!status.last}">,</c:if>
    </c:forEach>
];
$(document).ready(function() {
	
	$('#calendar').fullCalendar({
		header: {
			left: '',
			center: 'prev, title, next',
			right: 'addEventButton'
		},
		customButtons: {
			addEventButton: {
				text: '일정추가',
			}
		},
		lang: "ko",
		defaultDate: new Date(),
		selectable: true,
		selectHelper: true,
		googleCalendarApiKey: "AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE",
		eventSources:[ 
		{
			events:dataset
		},
			{
			googleCalendarId: "ko.south_korea#holiday@group.v.calendar.google.com",
			className: "koHolidays"
		}
		],
		eventClick: function (eventObj) {
			var eh = $(".eh");
			var tp = $('.tp');
			var p = $(".p");
			var title = $(".fc-title").text();
			
			var temp=eventObj.end.format();
			var tempdate = new Date(temp);
			tempdate.setDate(tempdate.getDate()-1);
			
			 var month = '' + (tempdate.getMonth() + 1);
	         var day = '' + tempdate.getDate();
	         var year = tempdate.getFullYear();
	         if (month.length < 2) month = '0' + month;
	         if (day.length < 2) day = '0' + day;
	         var temEnd = year+"-"+month+"-"+day;

	         if(eventObj.url && temEnd != eventObj.start.format()){
				p.empty();
				eh.text(eventObj.start.format()+" - "+temEnd);
				tp.text(eventObj.title);
				//p.text(eventObj.data).append("<p class='d-none'>"+eventObj.id+"</p>");
				p.text(eventObj.data).after("<div><p class='d-none calendar-id'>"+eventObj.id+"</p></div>");
				return false;
			}else if(eventObj.url && eventObj.start.format() == temEnd){
				p.empty();
				eh.text(eventObj.start.format());
				tp.text(eventObj.title);
				//p.text(eventObj.data).append("<p class='d-none'>"+eventObj.id+"</p>");
				p.text(eventObj.data).after("<div><p class='d-none calendar-id'>"+eventObj.id+"</p></div>");
				return false;
			}
		
			if(temEnd != eventObj.start.format()){
			p.empty();
			eh.text(eventObj.start.format()+" - "+ temEnd);
			tp.text(eventObj.title);
			p.text(eventObj.data).after("<div><p class='d-none calendar-id'>"+eventObj.id+"</p></div>");
			}else if(temEnd == eventObj.start.format()){
				p.empty();
				eh.text(eventObj.start.format());
				tp.text(eventObj.title);
				p.text(eventObj.data).after("<div><p class='d-none calendar-id'>"+eventObj.id+"</p></div>");
			}
			$(deleteBox()).appendTo(".eh");
		}
	});
});
function editbtn(){
	var cid = $(".calendar-id").text();
	var eh = $(".eh").text();
	var tp = $('.tp').text();
	var p = $(".p").text();
	var fdate = $('.from-date');
	var todate = $(".to-date");
	var tt = $(".title-text");
	var ct = $(".content-text");
	$(".add-btn").removeAttr("onclick");
	$(".add-btn").attr("onclick", "dataedit();");
	$(".add-btn").text("수정");
	$(".modal-title").text("일정 수정");
	tt.val(tp);
	ct.text(p);
	fdate.val(eh.substring(0,10));
	todate.val(eh.substring(13,23));
	modalopen();
	
	}

function dataedit(){
	var crowdId = window.location.search.split("=")[1];
	var modal = document.querySelector(".send-modal");
	var screen = document.createElement("div");
	var cid = $(".calendar-id").text();
	var fdate = $('.from-date').val();
	var todate = $(".to-date").val();
	var tt = $(".title-text").val();
	var ct = $(".content-text").text();
	var cListRequest = new XMLHttpRequest();
    cListRequest.open("POST", "/crowd/calendarlist-update", true);
    cListRequest.setRequestHeader("Content-Type",
          "application/x-www-form-urlencoded");


if(todate == ""){
	todate = fdate;
	
	cListRequest.send("crowdId="+crowdId+"&startDate="+fdate+"&endDate="+todate+"&title="+tt+"&content="+ct+"&id="+cid);
}else{
	cListRequest.send("crowdId="+crowdId+"&startDate="+fdate+"&endDate="+todate+"&title="+tt+"&content="+ct+"&id="+cid);	
}


modal.classList.remove("show");
modal.classList.remove("hide");
screen.remove();

cListRequest.onload = function() {

	window.location.href="";
	}

}

function delbtn(){
	
	var cid = $(".calendar-id").text();
	var cListRequest = new XMLHttpRequest();
    cListRequest.open("POST", "/crowd/calendarlist-delete", true);
    cListRequest.setRequestHeader("Content-Type",
          "application/x-www-form-urlencoded");
    cListRequest.send("id="+cid);
    cListRequest.onload = function() {
    	window.location.href="";
    	}
}
function deleteBox(){
	var deletebtn = "<input type='button' class='edit-btn r-35' value='수정' onclick='editbtn();'/>"
					+"<input type='button' class='delete-btn r-0' value='삭제' onclick='delbtn();'/>";
	return deletebtn;
}
window.addEventListener("load", function () {
	var addevntbtn = document.querySelector(".fc-addEventButton-button");
	addevntbtn.onclick = function (e) {
		e.preventDefault();
		modalopen();
	}
});

</script>
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
					<input class="crowdId" name="crowdId" type="hidden" value="${crowd.id}" />
						<div class="form-group form-date">
							<label class="control-label">기간</label>
							
							<div>
								<label>from</label> 
								<input name="startDate" type="date" class="form-control mb-10 from-date" pattern="yyyy-mm-dd" /> <label>to</label>
								<input name="endDate" type="date" class="form-control mb-10 to-date" pattern="yyyy-mm-dd" />
							</div>
						</div>
						<div class="form-group">
							<label class="control-label">제목</label> 
							<input name="title" type="text" class="form-control title-text" />
						</div>
						<div class="form-group">
							<label class="control-label">내용</label>
							<textarea name="content" class="form-control content-text"></textarea>
						</div>
				</div>
				<div class="modal-footer">
					<!-- <button type="button" class="btn-default btn closebtn">닫기</button> -->
					<button type="button" class="add-btn btn" onclick="dataadd();">추가</button>
				</div>
			</div>
		</div>
	</div>
</main>
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
<a id="MOVE_BACK_BTN">목록으로</a>