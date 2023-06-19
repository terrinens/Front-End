function add(x, y, z) {
    document.write("x : " + x + ", y : " + y + " , z : " + z + "<br />")

    // 조건을 처리해서 인풋 1개일때 처리
    if ((y === undefined) && (z === undefined)) {
        sum = x;

        // 조건을 처리해서 인풋 2개일때 처리
    } else if (z === undefined) {
        sum = x + y;

        // 조건을 처리해서 인풋 3개일때 처리
    } else {
        sum = x + y + z;
    } return sum;
}

document.write("<hr> <br />")
var r0 = add(2);
var r1 = add(2, 3);
var r2 = add(2, 3, 4);

document.write("함수 인자 1 : " + r0 + "<br />")
document.write("함수 인자 2 : " + r1 + "<br />")
document.write("함수 인자 3 : " + r2 + "<br />")
/* 
add(1);
add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4); */
