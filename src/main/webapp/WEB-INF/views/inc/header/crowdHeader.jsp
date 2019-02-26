<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<header>
	<link href="/resources/css/rprtBox.css" type="text/css" rel="stylesheet" />
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<link href="/resources/css/groupHeader.css" type="text/css" rel="stylesheet" />
	<script src="/resources/js/header.js"></script>
    <script src="/resources/js/groupHeader.js"> </script>
	
	<h1 class="logo"><a href="/index">MOIDA</a></h1>
    <a href="main?crowd=${crowd.id}"><div class="crowdName">${crowd.name}</div></a>
    <div class="sirenedit">
       	<a class="btn-setting d-none" href="/leader/manage?crowd=${crowd.id}"><img src="/resources/images/settings.png" /></a>
  		<a class="btn-siren d-none" href="#"><img src="/resources/images/siren.png" /></a>
       	<a class="btn-reg d-none" href="boardreg?crowd=${crowd.id}"><img src="/resources/images/edit.png" /></a>     
    </div>
     <input class="myid" type="hidden"  value=""/>
     <input class="myimg" type="hidden"  value=""/>
     <input class="mymsg" type="hidden"  value=""/>
</header>
