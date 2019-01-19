<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<main>
	<link href="/resources/css/homeEtc.css" type="text/css" rel="stylesheet" />
    <script src="/resources/js/homeIdpw.js"> </script>
    
	<h1 class="etc-logo"><a href="/index">MOIDA</a></h1>
	<div class="left idpw">
		<h1 class="id-title">ID 찾기</h1>
		<div class="id">
			<div class="email-auth">	
				<input class="txt email" type="text" placeholder="등록한 이메일">
				<input class="btn btn-send" type="button" value="인증번호 발송"><br/>
				<input class="txt authNum d-none" placeholder="인증번호" type="text">
				<input class="btn btn-auth d-none" type="button" value="인 증"><br/>	
				<p class="p-id fwb d-none">고객님의 ID : MOIDA</p>			
			</div>
		</div>
		<div class="pw">
			<h1 class="pw-title">비밀번호 찾기</h1>
			<input class="id" placeholder="ID" type="text"><br/>
			<div class="email-auth">	
				<input class="txt email" type="text" placeholder="등록한 이메일">
				<input class="btn btn-send" type="button" value="인증번호 발송"><br/>
				<input class="txt authNum d-none" placeholder="인증번호" type="text">
				<input class="btn btn-auth d-none" type="button" value="인 증"><br/>	
			</div>
			<input class="txtpw d-none" placeholder="새로운 비밀번호" type="password"><br/>
			<input class="txtrpw d-none" placeholder="비밀번호 재확인" type="password"><br/>
			<div class="center">
				<input class="btn btn-edit d-none" type="button" value="비밀번호 변경">
			</div>
		</div>
	</div>
</main>