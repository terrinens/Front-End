// 엘리먼트의 class 이름을 불러와서 변수에 할당 : documnet.getElementByClassName("pic")
var pics = document.getElementsByClassName("pic");
var lightbox = document.getElementById("lightbox");
var lightboximage = document.getElementById("lightboxImage");

// for문을 돌려서 작은 이미지 클릭시 함수 호출
for (let i = 0; i < pics.length; i++) {
    pics[i].addEventListener("click", showLightBox);
}

// 작은 이미지를 클릭시 원본 이미지를 출력 하는 함수
function showLightBox() {
    // this <== 클릭한 pic[i]
    // 원본 이미지 속성이 들어간 // bigLocation 변수에는 원본 이미지 경로가 저장됨
    var bigLocation = this.getAttribute("data-src");

    lightboximage.setAttribute("src", bigLocation);

    // display속성을 none 에서 block으로 변경 : 화면에 출력
    lightbox.style.display="block"; 
}

// 원본 이미지를 클릭시 원본 이미지를 없애는 함수
lightbox.onclick = function () {
    lightbox.style.display="none";
}
