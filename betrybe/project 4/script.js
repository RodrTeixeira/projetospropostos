var slide = document.querySelector('.slideshow');
console.log(slide);
var images = [
    "./img/a.jpg",
    "./img/b.jpg",
    "./img/c.jpg",
    "./img/d.jpg",
    "./img/e.jpg"
]
var time = 2000;
var count = 0;

function moveSlideShow() {
    slide.src = images[count];
    console.log(slide);

    if (count < (images.length - 1)) {
        count++;
    } else {
        count = 0;
    }
    setTimeout("moveSlideShow()", time);
}
window.onload = moveSlideShow;