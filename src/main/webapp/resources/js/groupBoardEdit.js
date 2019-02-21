window.addEventListener("load", function () {
   var select1 = document.querySelector("#select1");
   var select2 = document.querySelector("#select2");
   var hr = document.querySelector("hr");
   var postsId = document.querySelector("#hd-postsid").value;

   var fileMap = new Map();
   var secContent = document.querySelector(".text-content");

   var textareas = document.querySelectorAll(".content-text");
   for (var i = 0; i < textareas.length; i++) {
	   resize(textareas[i]);
	   textareas[i].onkeyup=function(){
		      resize(this);
	   };
   }

   function getDataUri(img, callback) {
       var canvas = document.createElement('canvas');
       canvas.width = img.naturalWidth; // or 'width' if you want a special/scaled size
       canvas.height = img.naturalHeight; // or 'height' if you want a special/scaled size
       canvas.getContext('2d').drawImage(img, 0, 0);
       callback(canvas.toDataURL('image/png'));
	}

  function dataURLtoBlob( dataUrl, callback )
  {
      var req = new XMLHttpRequest;
      req.open( 'GET', dataUrl );
      req.responseType = 'arraybuffer'; // Can't use blob directly because of https://crbug.com/412752
      req.onload = function fileLoaded(e)
      {
          var mime = this.getResponseHeader('content-type');
          callback( new Blob([this.response], {type:mime}) );
      };
      req.send();
  }
  function createImgFile(imgName, img, callback){
	   getDataUri(img, function(dataUri) {
		   dataURLtoBlob(dataUri, function( blob ){
			      var extName = imgName.substring(imgName.lastIndexOf(".")+1, imgName.length);
			      var imgType = "image/"+extName;
			   		var resultFile = new File([blob], imgName, { type: imgType, lastModified: Date.now()});
			       callback(resultFile);
			});
		});
  }
  
   function settingEdit(){
	   var boardId = document.querySelector("#hd-boardid").value;
	  
	   var opts1 = select1.querySelectorAll("option");
	   var selectChk = false;
	   for (var i = 0; i < opts1.length; i++) {
		   if(opts1[i].value == boardId){
			   select1.value=boardId;
			   selectChk = true;
		   }
	   }
	   if(!selectChk){
		   select1.value = "게시판";
	       select2.classList.remove("d-none");
		   var opts2 = select2.querySelectorAll("option");
		   for (var i = 0; i < opts2.length; i++) {
			   if(opts2[i].value == boardId){
				   select2.value=boardId;
			   }
		   }
	   }
	   
	   
	   /////////////////////////////////////////////////////////////////////////

	   var contentImgs = document.querySelectorAll(".content-img");
	   for (var i = 0; i < contentImgs.length; i++) {
		   createImgFile(contentImgs[i].name, contentImgs[i], function(resultFile){
				fileMap.set(resultFile.name, resultFile);  
		   });
	   }  
   }
   settingEdit();
   
   select1.onchange = function () {
	   
	   var selectedOpt = select1.options[select1.selectedIndex];

      if (selectedOpt.innerText=="게시판") {
         select2.classList.remove("d-none");
         hr.classList.remove("d-none");
      } else{
    	  select2.classList.add("d-none");
    	  hr.classList.add("d-none");
      } 
   }
   

   function getQuerystring(paramName){ 
      var _tempUrl = window.location.search.substring(1); 
      var _tempArray = _tempUrl.split('&');       
      for(var i = 0; _tempArray.length; i++) { 
         var _keyValuePair = _tempArray[i].split('='); 
         if(_keyValuePair[0] == paramName){ 
        	 return _keyValuePair[1]; 
         }
      }
   }
   
   var crowdId =  getQuerystring('crowd')
   
   document.onclick = function(evt){
      if(evt.target.nodeName!="TEXTAREA") return;
      evt.target.focus();
   };

   var textTpl = document.querySelector("#text-template");
   var imgTpl = document.querySelector("#img-template");
   
   var firstTextTpl = document.importNode(textTpl.content, true);
   var tempTextarea = firstTextTpl.querySelector("textarea");
   tempTextarea.onkeyup=function(){
      resize(tempTextarea);
   };
   secContent.append(firstTextTpl);
   tempTextarea.focus();

   var btnSubmit = document.querySelector(".btn-submit");
   var imgbtn= document.querySelector(".img-btn");
   var fileDnone = document.querySelector("input[type='file']");

    var clickIndex=-1;
    
   imgbtn.onclick=function(){
      var evt = new MouseEvent("click", {
         "view":window,
         "bubbles":true,
         "cancelable":true
      });
      fileDnone.dispatchEvent(evt);
   }
   
   fileDnone.addEventListener('change', function(evt){
      var curFiles = fileDnone.files;   
      for (var i = 0; i < curFiles.length; i++) {
         var tpl=document.importNode(imgTpl.content, true);
         var tempImg = tpl.querySelector(".img-div img");
         tempImg.src= window.URL.createObjectURL(curFiles[i]);  
         
         tempImg.name = curFiles[i].name;
            fileMap.set(tempImg.name, curFiles[i]);      
           secContent.append(tpl);
      }
      
      var tpl = document.importNode(textTpl.content, true);
      var tempTextarea = tpl.querySelector(".content-text");
      tempTextarea.onkeyup=function(){
         resize(tempTextarea);
      };

      secContent.append(tpl);
      tempTextarea.focus();
      
      var chkMain = secContent.querySelectorAll(".main-img");
      if(chkMain.length==0){
         var imgDivs = secContent.querySelectorAll(".img-div");
         imgDivs[0].classList.add("main-img");
      }
   });
   
   secContent.addEventListener("click",function(evt){
      if(!evt.target.classList.contains("content-img")) return;
      var contentImg = evt.target;
      var tplDiv = evt.target.parentNode.parentNode;
      var divAlert = document.querySelector(".content-img-alert");
      
      var clientWidth = document.body.clientWidth;
      divAlert.style.left = (clientWidth/2 - 160)+"px";
      divAlert.classList.remove("d-none");
      
      var btnMain = divAlert.querySelector(".btn-main");
      var btnDel = divAlert.querySelector(".btn-del");
      var btnCancel = divAlert.querySelector(".btn-cancel");
      
      btnMain.onclick=function(){
         divAlert.classList.add("d-none");
         var imgDivs = secContent.querySelectorAll(".img-div");
         for (var i = 0; i < imgDivs.length; i++) {
            imgDivs[i].classList.remove("main-img");
         }
         evt.target.parentNode.classList.add("main-img");
      };
      
      btnDel.onclick=function(){
         divAlert.classList.add("d-none");
         
         fileMap.delete(contentImg.name);
         
         if(tplDiv.children[0].classList.contains("main-img")){
            secContent.removeChild(tplDiv);
            var imgDivs = secContent.querySelectorAll(".img-div");
            if(imgDivs.length>0){
               imgDivs[0].classList.add("main-img");
            }
         }else{
            secContent.removeChild(tplDiv);
         }
         cleanUpTextarea();
      };
      
      btnCancel.onclick=function(){
         divAlert.classList.add("d-none");
      };
   });

   btnSubmit.onclick = function(){
      cleanUpTextarea();
       var tpls = secContent.querySelectorAll(".tpl-div");
       for (var i=0; i<tpls.length; i++) {
         if(tpls[i].classList.contains("tpl-div-text")){
            var nowTextarea = tpls[i].children[0];
            var nowText = nowTextarea.value;
            if(nowText==""){
               secContent.removeChild(tpls[i]);
            }
         }
      }     
       
       var title = document.querySelector("#title").value;

       if(title==""){
    	   swal({
				  title: "제목을 입력 해주세요",
				  icon: "warning",
				  button : "확인",
				  dangerMode: true,
			  	});	
    	   
    	   if(secContent.querySelectorAll(".tpl-div").length==0){
    		   var firstTextTpl = document.importNode(textTpl.content, true);
    		   var tempTextarea = firstTextTpl.querySelector("textarea");
    		   tempTextarea.onkeyup=function(){
    		      resize(tempTextarea);
    		   };
	    	   secContent.append(firstTextTpl);
    	   }
    	   return;
       }else if(secContent.querySelectorAll(".tpl-div-img").length==0 
    		   && select1.options[select1.selectedIndex].innerText=="사진첩"){
    	   swal({
				  title: "사진을 등록 해주세요",
				  icon: "warning",
				  button : "확인",
				  dangerMode: true,
			  	});		
    	   if(secContent.querySelectorAll(".tpl-div").length==0){
    		   var firstTextTpl = document.importNode(textTpl.content, true);
    		   var tempTextarea = firstTextTpl.querySelector("textarea");
    		   tempTextarea.onkeyup=function(){
    		      resize(tempTextarea);
    		   };
	    	   secContent.append(firstTextTpl);
	    	   tempTextarea.focus();
    	   }
    	   return;
       }else if(secContent.querySelectorAll(".tpl-div").length==0){
    	   swal({
				  title: "내용을 입력 해주세요",
				  icon: "warning",
				  button : "확인",
				  dangerMode: true,
			  	});		

		   var firstTextTpl = document.importNode(textTpl.content, true);
		   var tempTextarea = firstTextTpl.querySelector("textarea");
		   tempTextarea.onkeyup=function(){
		      resize(tempTextarea);
		   };
 	   secContent.append(firstTextTpl);
 	   tempTextarea.focus();
 	   return;
       }
     
      var mainImg="";
      var mainContent="";
      var tpls = secContent.querySelectorAll(".tpl-div");
      var imgCnt=0;
      var contentArr=[];
      
      for (var i = 0; i < tpls.length; i++) {
         var firstChild = tpls[i].children[0];
         if(firstChild.classList.contains("content-text")){
            var temp={text:encodeURIComponent(firstChild.value), ord:i}
            if(mainContent==""){
               mainContent=encodeURIComponent(firstChild.value);
            }
            contentArr.push(temp);
         }else{
            imgCnt++;
            var tempSrc = "_"+i;
            var img = firstChild.children[0];
            var file = fileMap.get(img.name);
            var filename = file.name;
             var _fileExt = filename.substring(filename.lastIndexOf('.'), filename.length).toLowerCase();
             tempSrc+=_fileExt;
            var temp={src:tempSrc, ord:i}
            contentArr.push(temp);
            
            if(firstChild.classList.contains("main-img")){
               mainImg = postsId+"_"+i+_fileExt;
            }
         }
      }
      var jsonContent = JSON.stringify(contentArr);
      
      var boardId = select2.value;
      var location = "board";
      var selectedOpt = select1.options[select1.selectedIndex];
      if (selectedOpt.innerText!="게시판") {
   	      boardId = select1.value;
   	      if(selectedOpt.innerText=="공지사항"){
   	    	  location = "notice";
   	      }else if(selectedOpt.innerText=="사진첩"){
   	    	  location = "album";
   		  }
      } 
      
      var postsRequest = new XMLHttpRequest(); 
      postsRequest.open("POST", "/crowd/boardedit", true); 
      postsRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
      postsRequest.onload = function () {
         
         if(imgCnt==0){
            window.location.href="/crowd/"+location+"?crowd="+crowdId;
         }else{
            var cnt=0;
            for (var i = 0; i < tpls.length; i++) {
               var firstChild = tpls[i].children[0];
               if(firstChild.classList.contains("img-div")){
                  var img = firstChild.children[0];
                  var file = fileMap.get(img.name);
                  var fd = new FormData();
                  fd.append("file", file);  
                  fd.append("id", postsId+"_"+i);  
                  fd.append("root", "crowd-postsImg");  
                  $.ajax({
                     url: '/file-upload',
                     data: fd,
                     dataType: 'text',
                     processData: false,
                     contentType: false,
                     type: 'POST',
                     success : function(data) {
                        cnt++;
                        if(cnt==imgCnt){                           
                           window.location.href="/crowd/"+location+"?crowd="+crowdId;
                        }
                     }   
                  });
               }   
            }
         }
         
      }
      postsRequest.send("postsId=" + postsId+
      		"&boardId="+boardId+
            "&title="+encodeURIComponent(title)+
            "&content="+mainContent+
            "&jsonContent="+jsonContent+
            "&mainImg="+mainImg);   
   };
   
    $( function() {
          $( "#sortable" ).sortable();
          $( "#sortable" ).disableSelection();
       } );
    
    function resize(obj) {
        obj.style.height = "1px";
        obj.style.height = (obj.scrollHeight)+"px";
      }
   
    function cleanUpTextarea(){
       var tpls = secContent.querySelectorAll(".tpl-div");
       for (var i = tpls.length-1; i >0; i--) {
         if(tpls[i].classList.contains("tpl-div-text")
               && tpls[i-1].classList.contains("tpl-div-text")){
            var prevTextarea = tpls[i-1].children[0];
            var nowTextarea = tpls[i].children[0];
            var prevText = prevTextarea.value;
            var nowText = nowTextarea.value;
            prevText+="\r"+nowText;
            prevText = prevText.trim();
            prevTextarea.value =prevText;
            resize(prevTextarea);
            secContent.removeChild(tpls[i]);
         }
      }
    }
});