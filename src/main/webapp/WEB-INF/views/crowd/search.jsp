<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <link rel="stylesheet" type="text/css" media="screen" href="/resources/css/search.css" />
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>

    <script>
        $(function () {
            var calist = $(".calist");
            var sebu = $(".sebu");
            var indicator = $(".indicator");
            var cacontainer = $(".category-list-container");
            var decontainer = $(".detail-list-container");
            var mainul = $(".category-main-ul");
            var chk = false;

            mainul.find("li").click(function () {
                if (!chk) {
                    mainul.find("li").find("ul").css({ "visibility": "hidden" });
                    $(this).find("ul").css({ "visibility": "visible" });
                    cacontainer.addClass("height");
                } else {
                    if (cacontainer.hasClass("height") && ($(this).find("ul").css("visibility") == "hidden")) {
                        mainul.find("li").find("ul").css({ "visibility": "hidden" });
                        $(this).find("ul").css({ "visibility": "visible" });
                        return chk;
                    } else if (cacontainer.hasClass("height") && ($(this).find("ul").css("visibility") == "visible")) {

                        mainul.find("li").find("ul").css({ "visibility": "hidden" });
                        $(this).find("ul").css({ "visibility": "visible" });
                        cacontainer.removeClass("height");
                    }

                }
                chk = !chk;
            })
            $("#bar").click(function () {
                calist.toggleClass("hide-calist");
                sebu.toggleClass("active");
                indicator.toggleClass("rotate");

                if (indicator.hasClass("rotate")) {
                    decontainer.animate({ opacity: 1 });
                } else {
                    decontainer.animate({ opacity: 0 });
                }
                if (cacontainer.hasClass("height")) {
                    cacontainer.removeClass("height");

                    decontainer.animate({ opacity: 1 });
                }
            })

        })
    </script>
    
    <main>
        <section>
            <nav class="category-list-container">
                <div class="category-list">
                    <ul class="category-main-ul">
                        <li><a href="#" class="calist">전체</a></li>
                        <li><a href="#" data-id="outdoor" class="calist">아웃도어/여행</a>
                            <ul data-id="outdoor">
                                <li><a href="#">전체</a></li>
                                <li><a href="#">책/독서</a></li>
                                <li><a href="#">인문학</a></li>
                                <li><a href="#">심리학</a></li>
                                <li><a href="#">철학</a></li>
                                <li><a href="#">역사</a></li>
                                <li><a href="#">시사/경제</a></li>
                                <li><a href="#">작문/글쓰기</a></li>
                                <li><a href="#">기타</a></li>
                            </ul>
                        </li>
                        <li><a href="#" data-id="sport" class="calist">운동/스포츠</a>
                            <ul data-id="sport">
                                <li><a href="#">전체</a></li>
                                <li><a href="#">축구</a></li>
                                <li><a href="#">농구</a></li>
                                <li><a href="#">심리학</a></li>
                                <li><a href="#">철학</a></li>
                                <li><a href="#">역사</a></li>
                                <li><a href="#">시사/경제</a></li>
                                <li><a href="#">작문/글쓰기</a></li>
                                <li><a href="#">기타</a></li>
                            </ul>
                        </li>
                        <li><a href="#" data-id="book" class="calist">인문학/책/글</a>
                            <ul data-id="book">

                            </ul>
                        </li>
                        <li><a href="#" data-id="lang" class="calist">외국/언어</a>
                            <ul data-id="lang">

                            </ul>
                        </li>
                        <li><a href="#" class="calist">문화</a></li>
                        <li><a href="#" class="calist">문화</a></li>
                        <li><a href="#" class="calist">문화</a></li>
                        <li><a href="#" class="calist">문화</a></li>
                        <li><a href="#" class="calist">문화</a>

                        </li>
                    </ul>
                    <div class="indicator" id="bar"></div>
                    <div class="sebu">
                        <span>세부 카테고리</span>
                    </div>
                </div>
            </nav>
        </section>
        <section class="detail-list-section">
            <div class="detail-list-container">
                <div class="grid-header">
                    <div>전체</div>
                </div>
                <div class="grid-category">
                    <div>아웃도어/여행</div>
                    <div>운동/스포츠</div>
                    <div>인문학/책/글</div>
                    <div>외국/언어</div>
                    <div>문화/공연/축제</div>
                    <div>음악/악기</div>
                    <div>공예/만들기</div>
                    <div>댄스/무용</div>
                    <div>봉사활동</div>
                    <div>차/오토바이</div>
                    <div>사진/영상</div>
                    <div>야구관람</div>
                </div>
            </div>
            <nav>
                <div class="calist-detail-list">

                </div>
            </nav>
        </section>
        <section class="category-content-container">
            <div class="content-box">
                <div class="content-image">
                    <img src="/resources/images/tempImg.png" alt="">
                </div>
                <div class="content-detail">
                    <h4>캠핑캠핑</h4>
                    <div>
                        <span>서울 종로구 향수 만들기/</span>
                        <span>서울 광진구 향수 만들기/</span>
                        <span>20대 30대 40대 여자/</span>
                        <span>가입조건 : 나이 20 ~ 40/</span>
                        <span>성별 : 여자/</span>
                        <span>지역 : 서울 전체</span>
                    </div>
                    <div class="member-cnt">
                        <span>회원수 10/20명</span>
                    </div>
                </div>
            </div>
            <div class="content-box">
                <div class="content-image">
                    <img src="/resources/images/tempImg.png" alt="">
                </div>
                <div class="content-detail">
                    <h4>캠핑캠핑</h4>
                    <div>
                        <span>서울 종로구 향수 만들기/</span>
                        <span>서울 광진구 향수 만들기/</span>
                        <span>20대 30대 40대 여자/</span>
                        <span>가입조건 : 나이 20 ~ 40/</span>
                        <span>성별 : 여자/</span>
                        <span>지역 : 서울 전체</span>
                    </div>
                    <div class="member-cnt">
                        <span>회원수 10/20명</span>
                    </div>
                </div>

            </div>
        </section>
        
    </main>
    