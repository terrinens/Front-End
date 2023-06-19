var text1 = "함수 선언전 호출";
var text2 = "함수 선언후 호출";

// 함수 선언전에 호출시 오류난다.
// printMsg(text2);

// 무명 함수
var printMsg = function (msg) {
    document.write("함수 호출 메세지 : " + msg) + "<br/>";
}

//함수 선언후 호출
printMsg(text2);