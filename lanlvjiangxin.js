const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slides = document.querySelectorAll(".slide");
var coindex = 0;

next.addEventListener("click",handlenextclick);
prev.addEventListener("click",handleprevclick);

var autoplay=true;
var forward=true;
var interval=7000;

if(autoplay){
    setInterval(forward ? handlenextclick : handleprevclick,interval);
}

function handlenextclick(){
    let current = slides[coindex];
    current.classList.remove("current");
    coindex++;
    if(coindex >= slides.length){
        coindex=0;

    }
    slides[coindex].classList.add("current");
    resetAutoplay();

}
function handleprevclick(){
    let current = slides[coindex];
    current.classList.remove("current");
    coindex--;
    if(coindex < 0){
        coindex=slides.length-1;

    }
    slides[coindex].classList.add("current");
    resetAutoplay();
}

window.addEventListener('scroll', function () {
    let top = window.scrollY;
    if (top === 0) {
    $('header').css('top', '-100vh')
    $('body').css('top', '0')

    }
    else {
    $('header').css('top', '0px')
    $('body').css('top', '-100vh')
    }
    if (top > 680) {
    $('.第一部分 h3').css('opacity', '1')
    $('.第一部分 h3').css('transform', 'translateY(0px)')
    $('.第一部分 p').css('opacity', '1')
    $('.第一部分 p').css('transform', 'translateY(0px)')
    $('.第一部分 img').css('opacity', '1')
    $('.第一部分 img').css('transform', 'translateY(0px)')
    }
    else {
    $('.第一部分 h3').css('opacity', '0')
    $('.第一部分 h3').css('transform', 'translateY(480px)')
    $('.第一部分 p').css('opacity', '0')
    $('.第一部分 p').css('transform', 'translateY(480px)')
    $('.第一部分 img').css('opacity', '0')
    $('.第一部分 img').css('transform', 'translateY(480px)')
    }
    if(top > 1500) {
    $('.news h3').css('transform','translate(0px)')
    $('.news h4').css('transform','translate(0px)')
    $('.第二部分 div').css('opacity', '1')
    $('.第二部分 div').css('transform', 'translateY(0px)')
    }
    else {
    $('.news h3').css('transform','translate(520px)')
    $('.news h4').css('transform','translate(-600px)')
    $('.第二部分 div').css('opacity', '0')
    $('.第二部分 div').css('transform', 'translateY(480px)')
    }
});
