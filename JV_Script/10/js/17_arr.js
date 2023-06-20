var arr = [10, 20, 30, 40, '50'];

// 배열의 각방의 값을 더하는 함수 생성
function sumArr() {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var arr2 = [10, 20, 30, 40, '50'];

function sumArr() {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


document.write ("배열의 값을 모두 더한 값은 : " + sumArr() + "<br />" )
document.write ("배열의 값을 모두 더한 값은 : " + sumArr2() + "<br />" )