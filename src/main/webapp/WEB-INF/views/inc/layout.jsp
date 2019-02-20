<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">	
	<link href="/resources/css/basic.css" type="text/css" rel="stylesheet" />
	<link href="/resources/css/memberchat.css"type="text/css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>    
    <script src="/resources/js/friend.js"></script>
    <script src="/resources/js/memberchat.js"></script>
</head>

<body>
	<div class="wrap-in-body">
	
		<!--헤더 -->
		<tiles:insertAttribute name="header" />
		
		<!--메인 -->
		<tiles:insertAttribute name="main" />
		
		<!--어사이드(메세지) -->
		<tiles:insertAttribute name="aside" />
			
		
		<!--푸터 -->
		<tiles:insertAttribute name="footer" />
		</div>
</body>
</html>

