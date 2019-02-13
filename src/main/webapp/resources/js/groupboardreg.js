window.addEventListener("load", function () {
   var select1 = document.querySelector("#select1");
   var select2 = document.querySelector("#select2");
   var hr = document.querySelector(".hr");
   var boardId = select2.value;
   var location = "board";
   select1.onchange = function () {
      if (select1.selectedIndex==0) {
         select2.classList.remove("d-none");
         hr.classList.remove("d-none");
      } else if (select1.selectedIndex==1) {
         select2.classList.add("d-none");
         hr.classList.add("d-none");
         boardId = select1.value;
         location = "album";
      }
   }
   
   select2.onchange = function () {
      boardId = select2.value;
      location = "board";
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

   var secContent = document.querySelector(".text-content");
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

    var fileMap = new Map();

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


      secContent.append(tpl);
      tempTextarea.focus();
      
      var chkMain = secContent.querySelectorAll(".main-img");
      if(chkMain.length==0){
         var imgDivs = secContent.querySelectorAll(".img-div");
         imgDivs[0].classList.add("main-img");
      }
   
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
		var mainImg="";
		var mainContent="";
		var tpls = secContent.querySelectorAll(".tpl-div");
		var imgCnt=0;
		var contentArr=[];
		
		for (var i = 0; i < tpls.length; i++) {
			var firstChild = tpls[i].children[0];
			if(firstChild.classList.contains("content-text")){
				var temp={text:firstChild.value, ord:i}
				if(mainContent==""){
					mainContent=firstChild.value;
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
					mainImg = "_"+i+_fileExt;
				}
			}
		}
		var jsonContent = JSON.stringify(contentArr);
		
		var postsRequest = new XMLHttpRequest(); 
		postsRequest.open("POST", "/crowd/boardreg", true); 
		postsRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		postsRequest.onload = function () {
			var postsId = postsRequest.responseText;
			
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
		postsRequest.send("boardId="+boardId+
				"&title="+title+
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
		  obj.style.height = (12+obj.scrollHeight)+"px";
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
				prevTextarea.value =prevText;
				resize(prevTextarea);
				secContent.removeChild(tpls[i]);
			}
		}
	 }
});	
