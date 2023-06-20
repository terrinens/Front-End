        // 1 ~ 100 까지 정수를 배열에 저장후, 합을 구해서 출력 :
        // 함수 내부에서 다른 함수를 호출

        // 배열 선언
        var arrdata = [];

        // 배열에 값을 저장 하는 함수
        function insertArr() {
            for (let i = 0; i < 100; i++) {
                arrdata[i] = i + 1;
            }
            selectArr();
        }

        // 배열의 저장된 값을 출력 하는 함수
        function selectArr() {
            for (var i = 0; i < arrdata.length; i++) {
                document.write(arrdata[i] + " ");
            }
            addArr();
        }

        // 배열의 각 방의 값을 더한 값을 출력 하는 함수
        function addArr() {
            var sum = 0;
            for (let i = 0; i < arrdata.length; i++) {
                sum += arrdata[i];
            }
            document.write("배열 방의 모든 값을 합한 값은 : " + sum);
        }