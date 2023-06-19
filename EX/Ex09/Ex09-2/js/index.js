var small = document.getElementsByClassName("small");
var imgPopUp = document.getElementById("imgPopUp");
var imgCase = document.getElementById("imgCase");
// class 는 작동이 안되고 id는 작동이 왜 가능할까? 

for (let i = 0; i < small.length; i++) {
    small[i].addEventListener("click", focusImg);
}

function focusImg() {
    var callImg = this.getAttribute("data-src");

    imgCase.setAttribute("src", callImg);

    imgPopUp.style.display="block";
}

imgPopUp.onclick = function () {
    imgPopUp.style.display="none";
}