// add 매개변수가 없는 함수
function add () {
    var sum = 1;
    return sum;
}

// add 매개변수가 1개인 함수
function add (x) {
    var sum = x + 1;
    return sum;
}

// add 매개변수가 2개인 함수
function add (x, y) {
    var sum = x + y + 1;
    return sum;
}

// add 매개변수가 3개인 함수
function add (x, y, z) {
    var sum = x + y + z + 1;
    return sum;
}

// 함수 호출
var r0 = add(); /* 작동안됨 */
var r1 = add(1); /* 작동 안됨 */
var r2 = add(2, 3); /* 작동 안됨 */
var r3 = add(4, 5, 6);  /* 작동됨 */
/* 작동됨 : 7,8,9 그 뒤에 함수는 짤린다. */
var r4 = add(4, 5, 6, 7);

document.write ("함수 인자 없음 : " + r0 + "<br />");
document.write ("함수 인자 1 : " + r1 + "<br />");
document.write ("함수 인자 2 : " + r2 + "<br />");
document.write ("함수 인자 3 : " + r3 + "<br />");
document.write ("함수 인자 4 : " + r4 + "<br />");