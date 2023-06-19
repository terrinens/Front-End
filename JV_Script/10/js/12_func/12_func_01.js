// city 배열 변수 선언
var city=[];

// 배열에 값 할당.
city[0] = "Seoul"
city[1] = "Pusan"
city[2] = "Incheon"
city[3] = "Mokpo"
city[4] = "Sejeong"

// 함수 호출시 배열의 값을 출력
function printArr() {
    for (var i = 0 ; i < city.length; i++) {
        document.write ("배열 데이터 ["+i+"] : " + city[i] + "<br />");
    }
}

printArr();