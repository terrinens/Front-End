var listImgs = document.getElementsByClassName("listImgs");
var increaseImgBox = document.getElementById("increaseImgBox");
var increaseImg = document.getElementById("increaseImg");

for (let i = 0; i < listImgs.length; i++) {
    listImgs[i] = addEventListener("click", increase);
}

function increase () {
    var listImgsdata = this.getAttribute("data-origin");

    increaseImg.setAttribute("src", listImgsdata);

    increaseImgBox.style.display="inline";
}

increaseImgBox.onclick = function () {
    increaseImgBox.style.display="none";
}