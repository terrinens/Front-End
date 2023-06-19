function add() {
    document.write("첫번째 아규먼트 : " + arguments[0] + "<br />")
    document.write("두번째 아규먼트 : " + arguments[1] + "<br />")
    document.write("세번째 아규먼트 : " + arguments[2] + "<br />")

    document.write("<hr>");
}

add(2, 3);
add(2, 3, 4);

document.write("<hr>")

function add2() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }

    document.write("수행결과 : " + sum + "<br />");
}

add2(2, 3);
add2(2, 3, 4);
add2(2, 3, 4, 5);
add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);