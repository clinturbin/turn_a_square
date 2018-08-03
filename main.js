var box = document.querySelector('.box');
var turnButton  = document.querySelector('.turn-button');
var sizeButton  = document.querySelector('.size-button');


turnButton.addEventListener('click', function() {
    if (box.classList.contains("rotate0")) {
        box.classList.remove("rotate0");
        box.classList.add("rotate45");
        console.log('rotate 45');
    }
    else if (box.classList.contains("rotate45")) {
        box.classList.remove("rotate45");
        box.classList.add("rotate90");
        console.log('rotate 90');
    }
    else if (box.classList.contains("rotate90")) {
        box.classList.remove("rotate90");
        box.classList.add("rotate135");
        console.log('rotate 135');
    }
    else if (box.classList.contains("rotate135")) {
        box.classList.remove("rotate135");
        box.classList.add("rotate0");
        console.log('rotate 0');
    }

});

sizeButton.addEventListener('click', function () {
    box.classList.toggle('increase-box-size');
})