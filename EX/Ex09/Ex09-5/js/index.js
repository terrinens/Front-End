var smallImg = document.getElementsByClassName("smallImg");
var incImgBox = document.getElementById("incImgBox");
var incImg = document.getElementById("incImg");

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].addEventListener("click", focusImg);
}

function focusImg () {
    var originImg = this.getAttribute("data-origin");

    incImg.setAttribute("src", originImg);

    incImgBox.style.display="block";
}

incImgBox.onclick = function () {
    incImgBox.style.display="none";
}