<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<aside>
<div id="open-chat">
</div>
<div id="aside-div">
        <section class="chat-container">
            <div class="chat-header">
                <div data-id="friend-list" class="chat-list visited">친구 목록</div>
                <div data-id="message-list" class="chat-list">메시지 목록</div>
                <div data-id="admin-list" class="chat-list">1:1문의</div>
            </div>
            <form class="chat-search">
                <fieldset>
                    <input class="chat-search-icon" type="submit" value="" />
                    <input type="text" placeholder="Search">
                </fieldset>
            </form>
            <div class="friend-list-container">
                <div class="friend-list">
                <template id="friend-cp">
                    <div class="friend">
                    
                        <div class="friend-img">
                         
                        </div>
                        <div class="friend-detail">
                            <label class="friend-id"></label>
                            <h6 class="friend-msg"></h6>
                        </div>
                        <div class="friend-balloon">
                            <img src="/resources/images/chat/말풍선.png" alt="">
                        </div>
                    </div>
                    </template>
                </div>

                <div class="message-list">
                    <div class="friend">
                        <div class="friend-img">
                        </div>
                        <div class="friend-detail message-detail">
                            <label>노렉대장</label>
                            <p>야 오늘 뭐해??</p>
                        </div>
                        <div class="message-date">
                            <span>오늘 오후 02:00</span>
                        </div>
                    </div>
                </div>

                <div class="admin-list">
                    <div class="friend">
                        <div class="friend-img">
                        </div>
                        <div class="friend-detail message-detail">
                            <label>어드민</label>
                            <p>야 오늘 뭐해??</p>
                        </div>
                        <div class="message-date">
                            <span>오늘 오후 02:00</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="profile-container">
            <div class="friend-profile">
                <div class="profile-img">
                </div>
                <div class="profile-detail">
                    <label class="profile-id">지각대장</label>
                    <h5 class="profile-msg">나는 나는 캠핌캠핑</h5>
                    <div class="detail-box">
                        <div class="box-list">친구삭제</div>
                        <div class="box-list">차단</div>
                        <div class="box-list rprt-button">신고</div>
                    </div>
                    <div class="exit-button"></div>
                </div>
            </div>
        </section>
        <section class="rprt-container">
            <div class="rprt d-none">
                <div class="rprt-exit">
                    <img src="/resources/images/chat/KakaoTalk_20190118_090828190.png" alt="">
                </div>
                <h1>신고하기</h1>
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

        <div class="chat-window">
            <div class="chat-window-header">
                <span>하하하</span>
            </div>
            <div class="chat-window-main">
            <template id="friend-chat-txt">
                <div class="chat-you">
                    <div class="you-img friend-chat-img"></div>
                    <span class="friend-chat-id">하하하</span>
                    <div class="you-chatting">
                        <textarea class="friend-chat-txta" name="" id="" cols="35" rows="3">
                                여기는 채팅방
                            </textarea>
                    </div>
                    <div class="date-time-set friend-chat-date"><span>datetime</span></div>
                </div>
             </template>
             <template id="my-chat-txt">
                <div class="chat-me">
                    <div class="me-img my-chat-img"></div>
                    <span class="my-chat-id">하하하</span>
                    <div class="me-chatting">
                        <textarea class="my-chat-txtf" name="" id="" cols="35" rows="3">
                                    sdfsdlfsjdfldskfjdslf
                                </textarea>
                    </div>
                    <div class="date-time-set me-date my-chat-date"><span>datetime</span></div>
                </div>
               </template>
                
            </div>
            <div class="text-area">
                <div class="text-base">
                    <div class="text-area-btns-div">
                        <img class="text-area-btns" src="/resources/images/chat/plus-circle.png" alt="">
                        <textarea class="chat-textarea" rows="" cols="" name="msg"></textarea>
                         <input class="chat-send-button" type="button" name="send-button" value="전송" />
                    </div>
                    
                </div>
                <div class="btns-round">
                    <div>비고</div>
                    <div>비고</div>
                    <div>비고</div>
                    <div>비고</div>
                    <div>비고</div>
                    <div>비고</div>
                    <div>비고</div>
                    <div>비고</div>
                </div>
            </div>
            <div class="screen-w">
                
            </div>
           
        </div>

        <div class="close-chat">
            <span>집</span>
            <span>어</span>
            <span>넣</span>
            <span>기</span>
        </div>

        <!-- <div class="admin-chatting-list">
                <div class="admin-chatting-header">
                    <span>1:1문의</span>
                </div>
                <div class="admin">
                    <div class="admin-img">
                    </div>
                    <div class="admin-detail message-detail">
                        <label>노렉대장</label>
                        <p>야 오늘 뭐해??</p>
                    </div>
                    <div class="message-date">
                        <span>오늘 오후 02:00</span>
                    </div>
                </div>
            </div> -->
</div>
</aside>