$(document).ready(function(){
   var postimg = $(".post-img");

   if(postimg.attr("src") == "/get-img?folder=crowd-postsImg&file="){
      postimg.css("display","none");
   }

});


function changepostsList(){
   var seleclist = $("#select option:selected").val();
   var cid = $("#cid").val();
   var pid = $(".pid").val();
   $.ajax({
      url: '/crowd/board',
      type: "post",
      dataType: "json",
      data:{"boardId":seleclist, "crowd":cid},
      success : function(json) {
         var content = $(".content");
         content.empty();
         var cbid = JSON.stringify(json);
         var cbdId = JSON.parse(cbid);

         var temp = document.querySelector("#tem");
         for (var i = 0; i < cbdId.length; i++) {
            var temple = document.importNode(temp.content,true);
            var profile = temple.querySelector(".photo");
            var name = temple.querySelector(".name");
            var title = temple.querySelector(".content-title a");
            var lconten = temple.querySelector(".content-content a");
            var hit = temple.querySelector(".hit");
            var regdate = temple.querySelector(".reg-write a");
            var commentcnt = temple.querySelector(".comment-cnt");
            var postimg = temple.querySelector(".post-img");
            var atag = temple.querySelectorAll("a");
            for (var j = 0; j < atag.length; j++) {
               atag[j].href = "bdetail?crowd="+cid+"&id="+cbdId[i].id;
            }
            name.innerText = cbdId[i].writerId;
            title.innerText = cbdId[i].title;
            lconten.innerText = cbdId[i].content;
            hit.innerText = "["+cbdId[i].hit+"]";
            commentcnt.innerText ="["+cbdId[i].cmtCnt+"]";
            profile.style.backgroundImage = "url('/get-img?folder=member-profile&file="+cbdId[i].img+"')";
            profile.style.backgroundRepeat = "no-repeat center";
            profile.style.backgroundSize = "cover";
            if(cbdId[i].mainImg == "" || cbdId[i].mainImg == undefined){
               postimg.style.display ="none";
            }else {
               postimg.src = "/get-img?folder=crowd-postsImg&file="+cbdId[i].mainImg;
            }
            var dateTime = new Date(cbdId[i].regDate);
            var year = dateTime.getFullYear();
            var month = dateTime.getMonth()+1;

            var day = dateTime.getDate();
            if(day<10){
               day = '0'+day;
            }
            var hours = dateTime.getHours();
            if(hours<10){
               hours = '0'+hours;
            }
            var minutes = dateTime.getMinutes();
            //var seconds = dateTime.getSeconds();
            var apm="오전";
            if(hours>=12){
               apm="오후";
               hours=hours-12;
            }
            var result = year+"-"+month+"-"+day+" "+apm+" "+hours+":"+minutes;
            regdate.innerText = result;


            content.append(temple);

         }


         console.log("연결");
      },
      error : function(xhr, status, error) {

         console.log("실패"+xhr+status);
      }

   })
}


$(document).ready(function(){
   var cid = $("#cid").val();
   
   console.log("cid"+cid);
   $(document).keypress(function(event) {
   var keword = $(".keyword").val();
   var keycode = event.keyCode || event.which;
   if(keycode == '13') {
      var seleclist = $("#select option:selected").val();
      console.log("seleclist",seleclist);
      $.ajax({
         url: '/crowd/boardsearch',
         type: "post",
         dataType: "json",
         data:{"crowdId":cid, "boardId":seleclist, "keyword":keword},
         success : function(json) {
            var content = $(".content");
            content.empty();
            var cbid = JSON.stringify(json);
            var cbdId = JSON.parse(cbid);
            console.log('json.id'+json);
            console.log('cbdId.id'+cbdId.id);
            
            var temp = document.querySelector("#tem");
            for (var i = 0; i < cbdId.length; i++) {
               var temple = document.importNode(temp.content,true);
               var profile = temple.querySelector(".photo");
               var name = temple.querySelector(".name");
               var title = temple.querySelector(".content-title a");
               var lconten = temple.querySelector(".content-content a");
               var hit = temple.querySelector(".hit");
               var regdate = temple.querySelector(".reg-write a");
               var commentcnt = temple.querySelector(".comment-cnt");
               var postimg = temple.querySelector(".post-img");
               var atag = temple.querySelectorAll("a");
               for (var j = 0; j < atag.length; j++) {
                  atag[j].href = "bdetail?crowd="+cid+"&id="+cbdId[i].id;
               }
               name.innerText = cbdId[i].writerId;
               title.innerText = cbdId[i].title;
               lconten.innerText = cbdId[i].content;
               hit.innerText = "["+cbdId[i].hit+"]";
               commentcnt.innerText ="["+cbdId[i].cmtCnt+"]";
               profile.style.backgroundImage = "url('/get-img?folder=member-profile&file="+cbdId[i].img+"')";
               profile.style.backgroundRepeat = "no-repeat center";
               profile.style.backgroundSize = "cover";
               if(cbdId[i].mainImg == "" || cbdId[i].mainImg == undefined){
                  postimg.style.display ="none";
               }else {
                  postimg.src = "/get-img?folder=crowd-postsImg&file="+cbdId[i].mainImg;
               }
               var dateTime = new Date(cbdId[i].regDate);
               var year = dateTime.getFullYear();
               var month = dateTime.getMonth()+1;

               var day = dateTime.getDate();
               if(day<10){
                  day = '0'+day;
               }
               var hours = dateTime.getHours();
               if(hours<10){
                  hours = '0'+hours;
               }
               var minutes = dateTime.getMinutes();
               //var seconds = dateTime.getSeconds();
               var apm="오전";
               if(hours>=12){
                  apm="오후";
                  hours=hours-12;
               }
               var result = year+"-"+month+"-"+day+" "+apm+" "+hours+":"+minutes;
               regdate.innerText = result;


               content.append(temple);

            }


            console.log("연결");
         },
         error : function(xhr, status, error) {

            console.log("실패"+xhr+status);
         }

      })
   }
});
})