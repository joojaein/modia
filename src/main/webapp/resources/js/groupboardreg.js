window.addEventListener("load", function () {
  var board = ['자유게시판', '정보 공유 게시판', '오늘 뭐 먹?'];
  var selectItem = document.querySelector("#select1");
  var select2 = document.querySelector("#select2");
 
  var hr = document.querySelector(".hr");
  
  for (var i = 0; i < board.length; i++) {
    
    var option = $("<option>" + board[i] + "</option>");
    
    $("#select2").append(option);
  }
  selectItem.onchange = function () {
  
    if (selectItem.value == "게시판") {
      select2.classList.remove("d-none");
      hr.classList.remove("d-none");
    console.log(selectItem.value);
    } else if (selectItem.value == "사진첩") {
      console.log(selectItem.value);
      // $("#select2").remove(option);
      select2.classList.add("d-none");
      hr.classList.add("d-none");
    }
  }
});
