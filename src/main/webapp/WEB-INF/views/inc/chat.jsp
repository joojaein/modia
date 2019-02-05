<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/resources/css/memberchat.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <script>
        $(function () {
            var screen = document.createElement("div");
            var chatlist = $(".chat-list");
            var friendpro = $(".friend-profile");

            chatlist.click(function () {
                chatlist.removeClass("visited");
                $(this).addClass("visited");

                if ($(".friend-list-container").find("." + $(this).data("id")).attr("class")) {
                    $(".friend-list-container > div").css({ "display": "none" });
                    $("." + $(this).data("id")).css({ "display": "block" });
                }
            })
            $(".friend-img").click(function () {
                screen.classList.add("screen");
                $("aside").append(screen);
                friendpro.animate({
                    bottom: "0"
                });

                $(".exit-button").click(function (e) {
                    friendpro.animate({
                        bottom: "-160px"
                    });
                    $(".screen").remove();
                });
                $(".screen").click(function () {
                    friendpro.animate({
                        bottom: "-160px"
                    });
                    $(".screen").remove();
                });

            });

            $(function () {
                $(".close-chat").click(function () {
                    $("aside").animate({
                        left: "-100%"
                    }, false)
                })
            })


            // alert($(".friend-profile").css("bottom"));

            // $("aside").click(function () {
            //     if ($(".friend-profile").css("bottom") == "0px") {
            //         $(".friend-profile").animate({
            //             bottom: "-160px",display:"fixed"
            //         })
            //     }
            // })
        });
        $(function () {
            var screenrprt = document.createElement("div");
            screenrprt.style.zIndex = "2";
            screenrprt.classList.add("screen");
            $(".rprt-button").click(function () {
                $("aside").append(screenrprt);
                $(".rprt").css({ "top": "20%" });

            });
            $(".rprt-exit").click(function () {
                $(".rprt").css({ "top": "-120%" });
                screenrprt.remove();
            });

        });

        $(function () {
            $(".message-detail").click(function () {
                $(".chat-window").animate({
                    left: "0"
                })
            })
            $(".chat-window-header span").click(function () {
                $(".chat-window").animate({
                    left: "100%"
                })
            })

        })

        $(function()
        {
            $(".friend-balloon").click(function () {
                $(".chat-window").animate({
                    left: "0"
                })
                
            })
            $(".chat-window-header span").click(function () {
                $(".chat-window").animate({
                    left: "100%"
                })
                
            })
        })
        $(function()
        {
            var btnschk= true;
            var openchk=false;

            console.log("밖 top:"+openchk);

            

            $(".text-area-btns").click(function()
            {
                 
                 openchk=true;

                if(btnschk)
                {
                    $(".screen-w").css({display:"block"})

                    $(".text-area").animate({height:"200px"}).css({gridTemplateRows:"15% 85%"})
                    $(".btns-round").animate({height:"100%"}).css({display:"grid"});
                     openchk = true;
                     
                     
                }
                
                else
                {
                    $(".screen-w").css({display:"none"})

                    $(".text-area").animate({height:"30px"}).css({gridTemplateRows:"100%"})
                    $(".btns-round").animate({height:"0%"}).css({display:"none"});
                     openchk = false;
                     
                }
                btnschk = !btnschk;
                console.log("안:"+openchk);
            })

            console.log("밖 bottom:"+openchk);

            $(".screen-w").click(function () 
                {
                    $(".text-area").animate({height:"30px"}).css({gridTemplateRows:"100%"})
                    $(".btns-round").animate({height:"0%"}).css({display:"none"});

                    $(".screen-w").css({display:"none"})
                    btnschk = !btnschk;
                });
                

            

            // $(".friend-img").click(function () {
            //     screenW.classList.add("screen-w");
            //     $("aside").append(screenW);
                

            //     $(".exit-button").click(function (e) {
                    
            //         $(".screenW").remove();
            //     });
            //     $(".screenW").click(function () {

            //         $(".text-area").animate({height:"30px"}).css({gridTemplateRows:"100%"})
            //         $(".btns-round").animate({height:"0%"}).css({display:"none"});


            //         $(".screenW").remove();
            //     });

            // });

        })

        
        
    </script>
</head>

<body>
    <div class="circle"></div>
    <aside>
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
                    <div class="friend">
                        <div class="friend-img">
                        </div>
                        <div class="friend-detail">
                            <label>노렉대장</label>
                            <h6>나는 나는 캠핌캠핑</h6>
                        </div>
                        <div class="friend-balloon">
                            <img src="/resources/images/chat/말풍선.png" alt="">
                        </div>
                    </div>
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
                    <label>지각대장</label>
                    <h5>나는 나는 캠핌캠핑</h5>
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
                <div class="chat-you">
                    <div class="you-img"></div>
                    <span>하하하</span>
                    <div class="you-chatting">
                        <textarea name="" id="" cols="35" rows="3">
                                여기는 채팅방
                            </textarea>
                    </div>
                    <div class="date-time-set"><span>datetime</span></div>
                </div>
                <div class="chat-me">
                    <div class="me-img"></div>
                    <span>하하하</span>
                    <div class="me-chatting">
                        <textarea name="" id="" cols="35" rows="3">
                                    sdfsdlfsjdfldskfjdslf
                                </textarea>
                    </div>
                    <div class="date-time-set me-date"><span>datetime</span></div>
                </div>
                <div class="chat-you">
                    <div class="you-img"></div>
                    <span>하하하</span>
                    <div class="you-chatting">
                        <textarea name="" id="" cols="35" rows="3">
                                    sdfsdlfsjdfldskfjdslf
                                </textarea>
                    </div>
                    <div class="date-time-set"><span>datetime</span></div>
                </div>
                <div class="chat-you">
                    <div class="you-img"></div>
                    <span>하하하</span>
                    <div class="you-chatting">
                        <textarea name="" id="" cols="35" rows="3">
                                    sdfsdlfsjdfldskfjdslf
                                </textarea>
                    </div>
                    <div class="date-time-set"><span>datetime</span></div>
                </div>
                <div class="chat-you">
                    <div class="you-img"></div>
                    <span>하하하</span>
                    <div class="you-chatting">
                        <textarea name="" id="" cols="35" rows="3">
                                    sdfsdlfsjdfldskfjdslf
                                </textarea>
                    </div>
                    <div class="date-time-set"><span>datetime</span></div>
                </div>
                <div class="chat-you">
                    <div class="you-img"></div>
                    <span>하하하</span>
                    <div class="you-chatting">
                        <textarea name="" id="" cols="35" rows="3">
                                    sdfsdlfsjdfldskfjdslf
                                </textarea>
                    </div>
                    <div class="date-time-set"><span>datetime</span></div>
                </div>
                <div class="chat-me">
                    <div class="me-img"></div>
                    <span>하하하</span>
                    <div class="me-chatting">
                        <div class="image" name="" id="" >
                                    <img src="/resources/images/chat/muto2jpg.jpg" alt="">
                        </div>
                    </div>
                    <div class="date-time-set me-date"><span>datetime</span></div>
                </div>
            </div>
            <div class="text-area">
                <div class="text-base">
                    <div class="text-area-btns-div">
                        <img class="text-area-btns" src="/resources/images/chat/plus-circle.png" alt="">
                        <textarea rows="" cols="" name="msg"></textarea>
                         <input type="button" name="send-button" value="전송" />
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

    </aside>
</body>

</html>