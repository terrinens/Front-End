// <!-- l배열에 값이 비어 있을 경우 연산이 되지 않음 -->
var com = [95, 88, , 72, 68,  , 99, 82, 78, 85];

function printArr () {
    var sum = 0;
    for (let i = 0; i < com.length; i++) {
        sum += com[i];
    }
    document.write ("배열에 저장된 총합은 : " + sum);
}

printArr()