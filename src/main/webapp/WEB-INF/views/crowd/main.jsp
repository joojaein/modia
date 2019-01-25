<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
    
<main>
	<link href="/resources/css/groupMain.css" type="text/css" rel="stylesheet" />
    <script src="/resources/js/groupMain.js"> </script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
        
	<div class="wrapper">
            <section class="main-head">
                <nav>
                    <div><a href="#">정보</a></div>
                    <div><a href="#">공지사항</a></div>
                    <div><a href="#">일정</a></div>
                    <div><a href="#">게시판</a></div>
                    <div><a href="#">사진첩</a></div>
                </nav>
            </section>

            <article class="content-img">
                <div><img src="/resources/images/test.jpg"></div>
            </article>

            <section class="group-info">
                <div class="info-box">
                    <img class="group-logo" src="/resources/images/mainIcon/backpack.png" />
                    <span>모임명</span>
                </div>
                <div class="info">
                    <span>today 1</span>
                    <span>total 1</span>
                </div>
            </section>
            <article class="content">
                <p>캠핑캠핑에 오신것을 환영합니다<br>
                    블라블라~~~<br>
                    공지를 필독 해주세요!<br><br>
                    <span>가입조건:</span> 나이: 20 성별: 모두 지역: 서울 전체</p>
            </article>
            <section class="content-comment">
                <input class="join" type="button" value="가입하기" />
                <hr />
                <div class="comment-sum">모임멤버 10/20명</div>
                <hr />
                <div class="profile-box">
                    <div class="comment-photo"></div>
                    <div class="profile-info">
                        <span class="name">이름</span>
                        <span class="name">가입인사</span>
                    </div>
                    <div class="grade">계급</div>
                </div>
                <hr />
                <div class="profile-box">
                    <div class="comment-photo"></div>
                    <div class="profile-info">
                        <span class="name">이름</span>
                        <span class="name">가입인사</span>
                    </div>
                    <div class="grade">계급</div>
                </div>
                <hr />
                <div class="profile-box">
                    <div class="comment-photo"></div>
                    <div class="profile-info">
                        <span class="name">이름</span>
                        <span class="name">가입인사</span>
                    </div>
                    <div class="grade">계급</div>
                </div>
                <hr />
                <div class="profile-box">
                    <div class="comment-photo"></div>
                    <div class="profile-info">
                        <span class="name">이름</span>
                        <span class="name">가입인사</span>
                    </div>
                    <div class="grade">계급</div>
                </div>
                <hr />
                <div class="profile-box">
                    <div class="comment-photo"></div>
                    <div class="profile-info">
                        <span class="name">이름</span>
                        <span class="name">가입인사</span>
                    </div>
                    <div class="grade">계급</div>
                </div>
                <hr />
                <div class="profile-box">
                    <div class="comment-photo"></div>
                    <div class="profile-info">
                        <span class="name">이름</span>
                        <span class="name">가입인사</span>
                    </div>
                    <div class="grade">계급</div>
                </div>
                <hr />
                <div class="profile-box">
                    <div class="comment-photo"></div>
                    <div class="profile-info">
                        <span class="name">이름</span>
                        <span class="name">가입인사</span>
                    </div>
                    <div class="grade">계급</div>
                </div>
                <hr />

            </section>

    <a id="MOVE_BACK_BTN" href="#">목록으로</a>
    
    
    
   	<link href="/resources/css/rprtBox.css" type="text/css" rel="stylesheet" /> 
    <section class="rprt-box">
        <div class="rprt d-none">
            <h1>신고하기</h1>
            <div class="clear">
                <img class="clear-btn" src="/resources/images/clearbtn.png" />
            </div>
            <h3 class="rprt-title">신고사유</h3>
            <select>
                <option value="">사유 선택</option>
                <option value="욕설/반말/부적절한 언어">욕설/반말/부적절한 언어</option>
                <option value="회원 분란 유도">회원 분란 유도</option>
                <option value="음란성 게시물">음란성 게시물</option>
                <option value="광고성 게시물">광고성 게시물</option>
                <option value="회원 비방">회원 비방</option>
                <option value="지나친 정치/종교 논쟁">지나친 정치/종교 논쟁</option>
                <option value="명예훼손/저작권 침해">명예훼손/저작권 침해</option>
                <option value="초상권 침해/도촬">초상권 침해/도촬</option>
                <option value="도배성 게시물">도배성 게시물</option>
            </select>
            <h3 class="rprt-title">신고사유</h3>
            <textarea></textarea>
            <div class="rprt-btn">
                <input type="submit" value="신고하기" />
            </div>
        </div>
    </section>
</main>