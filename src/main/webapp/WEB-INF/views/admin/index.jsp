<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<main>
	<link href="/resources/css/adminPage.css" type="text/css" rel="stylesheet" />
    <script src="/resources/js/adminIndex.js"> </script>
    
    <div class="admin-index">
	    <div class="profile">
			<div class="profile-img">	
		    	<img src="/resources/images/profile.png">
	    	</div>	    	
	    	<div class="id fs16 fwb">관리자</div>
   	    	<div class="message">1:1 문의</div>	 
	    </div>
	    
	    <div class="div-mng">
	   		<div class="right">
	    		<a href="edit">관리자정보수정</a>
    		</div>
	    	<div class="menu">
	    		<input name="group" class="btn selected-tab" type="button" value="모임관리">
	    		<input name="member" class="btn" type="button" value="회원관리">
	    	</div>	
	    	
	    	<div class="table">
		   		<div class="right">
		    		<input class="btn" type="button" value="모임삭제"/>
	    		</div>
	    		<table>
		    		<colgroup>
					<col width="6%" />
					<col width="49%" />
					<col width="23%" />
					<col width="22%" />
					</colgroup>
	    			<thead>
	    				<tr>
	    					<td colspan="2">
	    						<span class="btn name" >모임명</span>
	    						<span class="up d-none">&uarr;</span>
	    						<span class="down d-none">&darr;</span>
    						</td>
	    					<td>
	    						<span class="btn regdate">개설일</span>
	    						<span class="up d-none">&uarr;</span>
	    						<span class="down d-none">&darr;</span>
    						</td>
	    					<td>
	    						<span class="btn rtrc">신고횟수</span>
	    						<span class="up d-none">&uarr;</span>
	    						<span class="down d-none">&darr;</span>
	    					</td>
	    				</tr>
	    			</thead>
	    			<tbody>
	    				<tr>
	    					<td><input type="checkbox"></td>
	    					<td>가가모임가가모임가가모임가가모임가가모임가가모임가가모임가가모임</td>
	    					<td>2018.01.01</td>
	    					<td>3</td>
	    				</tr>    
	    				<tr>
	    					<td><input type="checkbox"></td>
	    					<td>가가모임</td>
	    					<td>2018.01.01</td>
	    					<td>3</td>
	    				</tr>   
	    				<tr>
	    					<td><input type="checkbox"></td>
	    					<td>가가모임</td>
	    					<td>2018.01.01</td>
	    					<td>3</td>
	    				</tr>   
	    				<tr>
	    					<td><input type="checkbox"></td>
	    					<td>가가모임</td>
	    					<td>2018.01.01</td>
	    					<td>3</td>
	    				</tr>   
	    				<tr>
	    					<td><input type="checkbox"></td>
	    					<td>가가모임</td>
	    					<td>2018.01.01</td>
	    					<td>3</td>
	    				</tr>   
	    				<tr>
	    					<td><input type="checkbox"></td>
	    					<td>가가모임</td>
	    					<td>2018.01.01</td>
	    					<td>3</td>
	    				</tr>   
	    				<tr>
	    					<td><input type="checkbox"></td>
	    					<td>가가모임</td>
	    					<td>2018.01.01</td>
	    					<td>3</td>
	    				</tr>   
	    				<tr>
	    					<td><input type="checkbox"></td>
	    					<td>가가모임</td>
	    					<td>2018.01.01</td>
	    					<td>3</td>
	    				</tr>   
	    				<tr>
	    					<td><input type="checkbox"></td>
	    					<td>가가모임</td>
	    					<td>2018.01.01</td>
	    					<td>3</td>
	    				</tr>   
	    				<tr>
	    					<td><input type="checkbox"></td>
	    					<td>가가모임</td>
	    					<td>2018.01.01</td>
	    					<td>3</td>
	    				</tr>   
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
	    </div>
   	</div>
</main>