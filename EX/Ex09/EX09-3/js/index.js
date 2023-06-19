var inImg = document.getElementsByClassName("inImg");
var increaseImgs = document.getElementById("increaseImgs");
var focuseImg = document.getElementById ("focuseImg");

for (let i = 0; i < inImg.length; i++) {
    inImg[i].addEventListener("click", showIncreaseImgs);
}

function showIncreaseImgs () {
    var changeImg = this.getAttribute("data-change");

    focuseImg.setAttribute("src", changeImg);

    increaseImgs.style.display="block";
}

increaseImgs.onclick = function () {
    increaseImgs.style.display="none";
}

