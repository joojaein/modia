<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<main>
	<link href="/resources/css/adminPage.css" type="text/css" rel="stylesheet" />
    <script src="/resources/js/adminIndex.js"> </script>
    
    <div class="admin-index">
	    <div class="profile">
			<div class="profile-img">	
		    	<img src="/resources/images/img404.png" name="${member.img}">
	    	</div>	    	
	    	<div class="id fs16 fwb">${member.id}</div>
	    	<div class="message">${member.msg}</div> 
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
		    		<input class="submit-btn btn" type="button" value="모임삭제"/>
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
	    					<td colspan="2" class="td-name">
	    						<span class="btn name" >모임명</span>
	    						<span class="up d-none">&uarr;</span>
	    						<span class="down d-none">&darr;</span>
    						</td>
	    					<td class="td-regdate">
	    						<span class="btn regdate">개설일</span>
	    						<span class="up d-none">&uarr;</span>
	    						<span class="down d-none">&darr;</span>
    						</td>
	    					<td class="td-rprt">
	    						<span class="btn rprt">신고횟수</span>
	    						<span class="up d-none">&uarr;</span>
	    						<span class="down">&darr;</span>
	    					</td>
	    				</tr>
	    			</thead>
	    			<tbody>
						<template id="crowd-td-template">
							<tr>
		    					<td><input type="checkbox"></td>
		    					<td class="tpl-name"></td>
		    					<td class="tpl-regdate"></td>
		    					<td class="tpl-rprt"></td>
		    				</tr>  
	    				</template>  
	    			</tbody>
	    		</table>
	    		
	    		<div class="paging">
	    			<input class="btn prev" type="button" value="&#9664;">
	    			<ul>
	    			</ul> 
	    			<input class="btn next" type="button" value="&#9654;">
	    		</div>
	    	</div>
	    </div>
   	</div>
</main>