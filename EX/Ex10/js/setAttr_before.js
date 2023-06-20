var cup = document.getElementById("cup");
var small = document.getElementsByClassName("small");

for (let i = 0; i < small.length; i++) {
    small[i].addEventListener("click", change);
}

function change() {
    var imgC = this.getAttribute("src");
    cup.setAttribute("src", imgC);
}

var view = document.getElementById("view");
var viewHide = document.getElementById("viewHide")
var detail = document.getElementById("detail");

view.onclick = function () {
    if (detail.style.display !== "block") {

        view.innerText = "상세 설명 숨기기";
        detail.style.display = "block";

    } else {

        view.innerText = "상세 설명 보기";
        detail.style.display = "none";
    }
    //     detail.style.display="block";
    //     view.style.display="none";
    //     viewHide.style.display="inline";
}

// viewHide.onclick = function () {
//     detail.style.display="none";
//     view.style.display="inline";
//     viewHide.style.display="none";
// }
