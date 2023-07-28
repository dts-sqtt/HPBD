let contentLetterSrart_actived =
    "Bạn Lan Anh ơi… Chúc mừng sinh nhật bạn iu nhớ…! Thế là bằng tuổi mình rồi đó ^ ^"; //Lời mở đầu cho bức thư
let mainContentLetter =
    "Chúc bạn Lan Anh khum chỉ mỗi ngày sinh nhật vui vẻ, mà ngày nào cũng đều vui vẻ nhớ ^^ . Chúc bạn tuổi mới thật nhiều sức khỏe, khum bị ốm vặt nữa @@. Hi vọng những điều bạn mong muốn, đều sẽ đạt được. Mong rằng những điều tốt đẹp nhất thế giới sẽ đến với bạn ><. HAPPY BIRTHDAY BẠN IU ^^"; //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/chibi.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/S.jpg"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () {
    //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active");
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document
                            .querySelector(".recieve")
                            .setAttribute(
                                "style",
                                "opacity: 1; transition: .5s"
                            );
                    }, 1000);
                }
            }, 50 * index);
        });
    }, 1000);
});

document.querySelector("#mess").addEventListener("change", function () {
    //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived");
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document
                        .querySelector(".img1")
                        .setAttribute("style", "opacity: 1; transition: .5s");
                }
            }, 50 * index);
        });
    } else {
        document.querySelector(".content").classList.remove("actived");
        document
            .querySelector(".img1")
            .setAttribute("style", "opacity: 0; transition: .5s");
        document.querySelector(".mainContent").innerHTML = "";
    }
});

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document
                .querySelector(".startForm")
                .setAttribute("style", "bottom: 100%");

            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20);
            } else {
                createLight(40);
            }
        }, 500);
    }, 500);
});

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = [
        "red",
        "lime",
        "yellow",
        "orange",
        "blue",
        "green",
        "white",
    ];

    for (var i = 0; i < count; i++) {
        var randomLeft = 0;
        randomLeft = Math.floor(Math.random() * width);
        var randomTop = 0;
        randomTop = Math.floor((Math.random() * height) / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 7) + 5;
        var moveTime = Math.floor(Math.random() * 7) + 5;

        var div = document.createElement("div");
        div.classList.add = "snow";
        div.style.position = "absolute";
        div.style.backgroundColor =
            allDefaultColor[Math.floor(Math.random() * 7)];
        div.style.borderRadius =
            Math.floor(Math.random() * 10 + 10).toString() + "px";

        div.style.height = "0px";
        div.style.width = "0px";

        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px";
        div.style.marginTop = randomTop + "px";
        div.style.filter = "blur(" + blurLv[blur] + "px" + ")";
        div.style.animation =
            "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}
