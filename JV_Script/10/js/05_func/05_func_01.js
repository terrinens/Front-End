// 결과를 출력하는 변수
var result;
function add(name, n) {
    document.write(name + " 학생이 1 부터" + n + "까지 덧샘을 수행 <br/>")
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        // n 까지 1씩 증가하면서 더한값을 sum
        sum += i;
    }

    // 리턴값 : 함수 호출하는 곳으로 값을 던져줌
    return sum;
}

// 자바스크립트 블락 내에서 함수 호출 : 리턴 값을 변수에 저장후 출력
// result 변수에는 sum 값이 들어가 있다
result = add("홍길동", 10);
document.write("결과 : " + result + "<br/>");

result = add("이영희", 100);
document.write("결과 : " + result + "<br/>")

document.write("<hr> <br/>")

// 바로 출력
document.write("결과 : " + add('이순신', 1000) + "<br/>");
document.write("결과 : " + add('강감찬', 50) + "<br/>");