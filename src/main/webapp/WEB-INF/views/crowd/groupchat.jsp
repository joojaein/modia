<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<link href="/resources/css/groupchat.css" type="text/css" rel="stylesheet" />
<script src="/resources/js/groupchat.js">
<!--

//-->
</script>
<main>
      
        <div class="wrapper">
            <section class="main-head">
                <nav>
                    <div>
                        <a href="main?crowd=${crowd.id}">정보</a>
                    </div>
                    <div>
                        <a href="notice?t=0&crowd=${crowd.id}">공지사항</a>
                    </div>
                    <div>
                        <a href="calendar?crowd=${crowd.id}">일정</a>
                    </div>
                    <div>
                        <a href="board?t=1&crowd=${crowd.id}">게시판</a>
                    </div>
                    <div>
                        <a href="album?t=2&crowd=${crowd.id}">사진첩</a>
                    </div>
                    <div>
						<a class="groupChat" href="groupchat?crowd=${crowd.id}">단체채팅</a>
                    </div>
                </nav>
            </section>
            <div class="content-img">
            <input class="group-chat-myId" type="hidden" value="" />
            <input class="group-chat-groupId" type="hidden" value="" />
            <input class="gourp-chat-imgs" type="hidden" value="" />
            <template id="group-chat-my-tpl">
	            <div class="group-chat-me">
	                <div class="group-me-img"></div>
	                <span class="group-me-id"></span>
	                <div class="group-me-chatting">
	                    <div class="group-me-txt" name="" id="" cols="35" rows="3">
	                    </div>
	                    <span class="group-me-date"></span>
	                </div>
	                <div class="group-date-time-set"><span></span></div>
	            </div>
            </template>
            <template id="group-chat-you-tpl">
	            <div class="group-chat-you">
	                <div class="group-you-img"></div>
	                <span class="group-you-id"></span>
	                <div class="group-you-chatting">
	                    <div class="group-you-txt" name="" id="aaaa" cols="35" rows="3">
	                    </div>
	                    <span class="test"></span>
	                </div>
	                <div class="group-you-set group-date-time-set group-chat-you-date"><span></span></div>
	            </div>
            </template>
                    <div class="group-chat-window">
                            
                            <div class="group-chat-window-main">
                                
                                
                            </div>
                            <div class="group-text-area">
                                <div class="group-text-base">
                                    <div class="group-text-area-btns-div">
                                        <textarea class="group-chat-textarea" rows="" cols="" name="msg" ></textarea>
                                         <input class="group-chat-send-button" type="button" name="send-button" value="전송" />
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div class="group-screen-w">
                                
                            </div>
                           
                        </div>
            </div>
            
            </main>