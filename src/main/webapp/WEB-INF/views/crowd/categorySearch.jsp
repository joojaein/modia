<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<main>
    <link rel="stylesheet" type="text/css" media="screen" href="/resources/css/categorySearch.css" />
        <section class="category-list">
           	<c:forEach var="category" items="${list}">
            <div>
            	<div><a href="search?categoryId=${category.id}"></a></div>
                <span><a href="search?categoryId=${category.id}">${category.name}</a></span>
                <c:forEach var="cvl" items="${cvl}">
                <c:if test="${cvl.categoryId==category.id}">
                <aside class="tag-aside"><a href="search?categoryId=${cvl.categoryId}&tagId=${cvl.id}"><span>${cvl.name}</span></a></aside>
                </c:if>
                </c:forEach>
            </div>
            </c:forEach>
            <!-- <div>
                <div class="sport"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>운동/스포츠</span>
            </div>
            <div>
                <div class="book"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>인문학/책/글</span>
            </div>
            <div>
                <div class="language"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>외국/언어</span>
            </div>
            <div>
                <div class="festival"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>문화/공연/축제</span>
            </div>
            <div>
                <div class="music"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>음악/악기</span>
            </div>
            <div>
                <div class="making"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>공예/만들기</span>
            </div>
            <div>
                <div class="dance"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>댄스/무용</span>
            </div>
            <div>
                <div class="volunteer"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>봉사활동</span>
            </div>
            <div>
                <div class="sociality"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>사교/인맥</span>
            </div>
            <div>
                <div class="car"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>차/오토바이</span>
            </div>
            <div>
                <div class="picture"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>사진/영상</span>
            </div>
            <div>
                <div class="baseball"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>야구관람</span>
            </div>
            <div>
                <div class="game"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>게임/오락</span>
            </div>
            <div>
                <div class="cooking"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>요리/제조</span>
            </div>
            <div>
                <div class="dog"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>반려동물</span>
            </div>
            <div>
                <div class="familiy"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>가족/결혼</span>
            </div>
            <div>
                <div class="free"></div>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <aside><span>아웃도어태그</span></aside>
                <span>자유주제</span>
            </div> -->
  
        </section>
    </main>