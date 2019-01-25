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
			<img src="/resources/images/test.jpg">
		</article>
		
		<article class="area-name">
		    <img class="group-logo" src="/resources/images/mainIcon/backpack.png" />
		    <span class="fwb">모임명</span>
	    	<a href="edit">기본정보수정</a>
		</article>
		
		<article class="area-content">
			<p>캠핑캠핑에 오신것을 환영합니다
			   블라블라~~~
			   공지를 필독 해주세요!</p>
			<br/>
			<span>가입조건:</span> 
			나이: 20  / 성별: 모두  / 지역: 서울 전체
			<hr class="hr-bold"/>
		</article>
		<article class="area-etc">
			<div class="menu">
	    		<input name="board" class="btn selected-tab" type="button" value="게시판 관리">
	    		<input name="member" class="btn" type="button" value="회원 관리">
	    		<input name="approval" class="btn" type="button" value="가입 승인">
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
						<col width="34%" />
						<col width="20%" />
						<col width="20%" />
						<col width="20%" />
						</colgroup>
		    			<thead>
		    				<tr>
		    					<td colspan="2">
		    						<span class="btn id" >아이디</span>
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
	    						</td>
		    					<td>
		    						<span class="btn regdate">가입일</span>
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
	    						</td>
		    					<td>
		    						<span class="btn visitdate">최종접속일</span>
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
		    					</td>
		    					<td>
		    						<span class="btn level">등급</span>
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
		    					</td>
		    				</tr>
		    			</thead>
		    			<tbody>
		    				
		    			</tbody>
		    		</table>
	    			<div class="paging">
		    			<input class="btn" type="button" value="&#9664;">
		    			<ul>
		    				<li><input class="btn now-page" type="button" value="1"></li>
		    				<li><input class="btn" type="button" value="2"></li>
		    				<li><input class="btn" type="button" value="3"></li>
		    				<li><input class="btn" type="button" value="4"></li>
		    				<li><input class="btn" type="button" value="5"></li>
		    			</ul> 
		    			<input class="btn" type="button" value="&#9654;">	 
		    		</div>
	    		</div>
	    		<div class="approval d-none">
	    			<div class="right">
			    		<input class="btn btn-approval" type="button" value="가입승인"/>
		    		</div>
	    			<table>
			    		<colgroup>
						<col width="10%" />
						<col width="45%" />
						<col width="45%" />
						</colgroup>
		    			<thead>
		    				<tr>
		    					<td colspan="2">
		    						<span class="btn id" >아이디</span>
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
	    						</td>
		    					<td>
		    						<span class="btn reqdate">가입요청일</span>
		    						<span class="up d-none">&uarr;</span>
		    						<span class="down d-none">&darr;</span>
	    						</td>
	    					</tr>
		    			</thead>
		    			<tbody>
		    				
		    			</tbody>
		    		</table>
	    			<div class="paging">
		    			<input class="btn" type="button" value="&#9664;">
		    			<ul>
		    				<li><input class="btn now-page" type="button" value="1"></li>
		    				<li><input class="btn" type="button" value="2"></li>
		    				<li><input class="btn" type="button" value="3"></li>
		    				<li><input class="btn" type="button" value="4"></li>
		    				<li><input class="btn" type="button" value="5"></li>
		    			</ul> 
		    			<input class="btn" type="button" value="&#9654;">	 
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
				    						<span class="btn period">기간</span>
			    						</td>
				    					<td>
				    						<span class="btn join">가입자수</span>
			    						</td>
				    					<td>
				    						<span class="btn visit">방문자수</span>
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