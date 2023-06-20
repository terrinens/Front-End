var arrdata = [];

function insertArr () {
    for (let i = 0; i < 100; i++) {
        arrdata[i] = i;

        document.write(arrdata[i] + " ");
    }
}

function delArr () {
    for (let i = 0; i < arrdata.length; i++) {
        if (i % 2 != 0) {
            arrdata[i] = 0;
        } 
        continue;
    }
    prtArr ();
}

function prtArr() {
    for (let i = 0; i < arrdata.length; i++) {
        document.write(arrdata[i] + " ");
    }
}

