var cup = document.getElementById("cup");
var small = document.getElementsByClassName("small");

for (let i = 0; i < small.length; i++) {
    small[i].addEventListener("click", changeImg);
}

function changeImg () {
    var chImg = this.getAttribute("src");

    cup.setAttribute("src", chImg);
}

var view = document.getElementById("view");
var detail = document.getElementById("detail");

view.onclick = function () {
    if (detail.style.display == "inline") {
        view.innerText="상세 설명 보기";
        detail.style.display="none";
    } else {
        view.innerText="상세 설명 숨기기";
        detail.style.display="inline";
    }
}