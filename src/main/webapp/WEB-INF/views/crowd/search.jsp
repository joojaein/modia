<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
    <link rel="stylesheet" type="text/css" media="screen" href="/resources/css/search.css" />
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="crossorigin="anonymous"></script>

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
                        <c:forEach var="category" items="${list}">
                        <li><a href="#" data-id="${category.id}" class="calist">${category.name}</a>
                            <ul data-id="${category.id}">
<%--                             	<c:if test="${category.id}">
                                	<li><a href="#">전체</a></li>
                                </c:if> --%>
                            </ul>
                        </li>
                        </c:forEach>
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
                  <c:forEach var="category" items="${list}">
                    <div>${category.name}</div>
                  </c:forEach>
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
    