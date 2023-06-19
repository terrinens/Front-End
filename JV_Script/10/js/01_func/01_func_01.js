let text1 = "함수 선언전 호출";
let text2 = "함수 선언후 호출";

// 함수 선언전에 호출
printMsg(text1);

// 기본 함수
function printMsg(msg) {
    document.write("함수 호출 메세지" + msg + "<br />");
}

// 함수 선언후 호출
printMsg(text2);