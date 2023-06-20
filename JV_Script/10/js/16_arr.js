var x = 5;
var y = "오늘"
// 배열에 다양한 타입을 저장 가능
var arr = [100, "Seoul", true, x, y];

// 배열에 값을 출력 하는 함수
function printArr () {
    for (let i = 0; i < arr.length; i++) {
        document.write ("배열에 저장된 값 [ " + i + " ] " + arr[i] + "<br />");
    }
}

printArr();