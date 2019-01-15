<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>
	title
</title>
</head>
<body>
<!--헤더 -->
<tiles:insertAttribute name="header" />

<!--메인 -->
<tiles:insertAttribute name="main" />

<!--푸터 -->
<tiles:insertAttribute name="footer" />

</body>
</html>