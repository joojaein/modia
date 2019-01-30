<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<main>
	<link href="/resources/css/homeEtc.css" type="text/css" rel="stylesheet" />
    
	<div>
		<h1 class="etc-logo"><a href="/index">MOIDA</a></h1>
		<div class="login">
			<form method="post">
				<input class="id" type="text" placeholder="ID" name="username"><br/>
				<input class="pw" type="password" placeholder="Password" name="password"><br/>
				<input class="btn fwb btn-login" type="submit" value="Login"><br/>
				<div class="etc">
					<a class="idpw" href="/idpw">ID/PW찾기</a>
					<span>|</span>
					<a class="join" href="/join">회원가입</a>
				</div>
			</form>
		</div>
	</div>
</main>