<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
    
<main>
	<link href="/resources/css/groupManage.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="/resources/js/chart.js"> </script>	
    <script src="/resources/js/groupManage.js"> </script>
	
	<div class="grid">
	
		<article class="area-banner">
		    	<img src="/resources/images/img404.png" name="${crowd.img}"> 
		</article>
		
		<article class="area-name">
		    <img class="group-logo" name="${crowd.categoryId}" src="/resources/images/img404.png" />
		    <span class="fwb">${crowd.name}</span>
	    	<a href="edit?crowd=${crowd.id}">기본정보수정</a>
		</article>
		
		<article class="area-content">
			<textarea>${crowd.content}</textarea>
			<br/>
			<span>가입조건:</span> 
			나이: ${crowd.ageMin} ~ ${crowd.ageMax}  / 성별: 
			<c:if test="${crowd.gender eq 0}">
				남자
			</c:if>
			<c:if test="${crowd.gender eq 1}">
				여자
			</c:if>
			<c:if test="${crowd.gender eq 2}">
				모두
			</c:if>
			  / 지역: ${crowd.areaSido} ${crowd.areaSigungu}
			<hr class="hr-bold"/>
		</article>
		<article class="area-etc">
			<div class="menu">
	    		<input name="board" class="btn selected-tab" type="button" value="게시판 관리">
	    		<input name="member" class="btn" type="button" value="회원 관리(${realCnt})">
	    		<input name="approval" class="btn" type="button" value="가입 승인(${requestCnt})">
	    		<input name="statistic" class="btn" type="button" value="통계">
	    	</div>
	    	<div class="div-etc">
	    		<div class="board">
	    			<table>
	    				<colgroup>
							<col width="80%" />
							<col width="10%" />
							<col width="10%" />
						</colgroup>
						<tbody>
						
						</tbody>
	    			</table>
	    			<div class="btn btn-add">
	    				<img src="/resources/images/plus.png">
	    				<span>게시판 추가</span>
	    			</div>
	    		</div>
	    		<div class="member d-none">
			   		<div class="right">
			    		<input class="btn btn-cut" type="button" value="강제탈퇴"/>
		    		</div>
	    			<table>
			    		<colgroup>
						<col width="6%" />
						<col width="24%" />
						<col width="25%" />
						<col width="25%" />
						<col width="20%" />
						</colgroup>
		    			<thead>
		    				<tr>
	    						<td style="border-right:none !important"></td>
		    					<td style="border-left:none !important">
		    						<span class="btn memberId" >아이디</span>
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
	    						</td>
		    					<td>
		    						<span class="btn regDate">가입일</span>
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
	    						</td>
		    					<td>
		    						<span class="btn recently">최종접속일</span>
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
		    					</td>
		    					<td>
		    						<span class="btn groupRole">등급</span>
		    						<span class="down">&darr;</span>
		    						<span class="up d-none">&uarr;</span>		    						
		    				</tr>
		    			</thead>
		    			<tbody>
		    				
		    			</tbody>
		    		</table>
	    			<div class="paging">
	    				<input class="btn prev" type="button" value="&#9664;">
		    			<ul>
		    			</ul> 
	    				<input class="btn next" type="button" value="&#9654;">
		    		</div>
	    		</div>
	    		<div class="approval d-none">
	    			<div class="right">
			    		<input class="btn btn-approval" type="button" value="가입승인"/>
		    		</div>
	    			<table>
			    		<colgroup>
						<col width="6%" />
						<col width="20%" />
						<col width="17%" />
						<col width="11%" />
						<col width="11%" />
						<col width="20%" />
						<col width="20%" />
						</colgroup>
		    			<thead>
		    				<tr>
	    						<td style="border-right:none !important"></td>
		    					<td style="border-left:none !important">
		    						<span class="btn memberId">아이디</span>		    						
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
	    						</td>
	    						<td>
		    						<span class="btn name">이름</span>
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
	    						</td>
	    						<td>
		    						<span class="btn age">나이</span>
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
	    						</td>
	    						<td>
		    						<span class="btn gender">성별</span>
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
	    						</td>
	    						<td>
		    						<span class="btn areaSido">지역</span>
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
	    						</td>
		    					<td>
		    						<span class="btn reqDate">가입요청일</span>
		    						<span class="up">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
	    						</td>
	    					</tr>
		    			</thead>
		    			<tbody>
		    				
		    			</tbody>
		    		</table>
	    			<div class="paging">
	    				<input class="btn prev" type="button" value="&#9664;">
		    			<ul>
		    			</ul> 
	    				<input class="btn next" type="button" value="&#9654;">
		    		</div>
	    		</div>
	    		<div class="statistic stat-grid d-none">
	    			<div class="area-filter">
	    				<span>월별</span><input value="month" type="radio" name="radio-period" checked/>
	    				<span>일별</span><input value="day" type="radio" name="radio-period"/>
	    				<div class="empty"></div>
	    				<input type="date" name="date_begin">
	    				<span style="margin: 0px 5px;">~</span>    			
		    			<input type="date" name="date_end">
	    				
	    			</div>
	    			<div class="area-chart">
						<div id="chart_div"></div>
	    			</div>
	    			<div class="area-table">
	    				<table>
	    					<colgroup>
								<col width="40%" />
								<col width="30%" />
								<col width="30%" />
							</colgroup>
								<thead>
				    				<tr>
				    					<td>
				    						<span class="btn date">기간</span>    						
		    								<span class="up">&uarr;</span>
		    								<span class="down d-none">&darr;</span>
			    						</td>
				    					<td>
				    						<span class="btn regCnt">가입자수</span>    						
				    						<span class="up d-none">&uarr;</span>
				    						<span class="down d-none">&darr;</span>
			    						</td>
				    					<td>
				    						<span class="btn hitCnt">방문자수</span>    						
				    						<span class="up d-none">&uarr;</span>
				    						<span class="down d-none">&darr;</span>
			    						</td>
			    					</tr>
				    			</thead>
				    			<tbody>		    				
				    			</tbody>
	    				</table>
	    			</div>
	    		</div>
	    	</div>
		</article>
	    
	</div>										
</main>