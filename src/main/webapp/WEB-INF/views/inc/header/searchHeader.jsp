<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/security/tags" %>
	<link href="/resources/css/searchHeader.css" type="text/css" rel="stylesheet" />
<script src="https://code.jquery.com/jquery-3.3.1.min.js"
	integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	crossorigin="anonymous"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<header>
	<div class="pre-page">
		<a href="/index">
			<img src="/resources/images/btnPrePage.png" />
		</a>
	</div>

	<div id="headerSearch">
		<input type="text" value="${indexWord}" placeholder="모임을 검색하세요" />
		<div class="autoBox">
			<ul class="autoUl">
			</ul>
		</div>
	</div>
	<div id="headerMake">
		<%--         <s:authorize access="isAnonymous()">
       		<a class="anonymous" href="/login">모임<br/>개설</a>         
        </s:authorize>
        <s:authorize access="isAuthenticated()">
       		<a href="crowd/createCategory">모임<br/>개설</a>         
        </s:authorize> --%>
		<a class="anonymous" href="/crowd/checkId">모임<br />개설
		</a>
		<!-- <input type="button" value="모임개설"></input> -->
	</div>
	<script>
		window.addEventListener("load", function() {
			var abtn = document.querySelector('.anonymous');
			abtn.onclick = function(e) {
				e.preventDefault();
				var chkRequest = new XMLHttpRequest();
				chkRequest.open("GET", "/crowd/checkId?url="+document.location.pathname, true);
				chkRequest.onload = function() {
					var chkturn = chkRequest.responseText;
					if (chkturn == "no") {
						swal({
							  title: "로그인 하시겠습니까?",
							  text: "모임을 만들기 위해선 로그인이 필요합니다.",
							  icon: "warning",
							  buttons: ["싫어","가자"],
							  dangerMode: true,
							})
							.then((willDelete) => {
							  if (willDelete) {
								 window.location.href = '/login';
							  }
							});
					} else {
						window.location.href = '/crowd/createCategory';
					}

				}
				chkRequest.send();
			}
		})
	
		
	</script>
</header>