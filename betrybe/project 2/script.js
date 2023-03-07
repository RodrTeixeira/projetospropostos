const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(getHour,1000);

//setInterval(() => {
//    let date = new Date;
//    let hours = date.getHours();
//    let minutes = date.getMinutes();
//    let seconds = date.getSeconds();

//    hour.innerHTML = `${formatTime(hours)}`;
//    min.innerHTML = `${formatTime(minutes)}`;
//    sec.innerHTML = `${formatTime(seconds)}`;

//}, 1000)

function getHour() {

    let date = new Date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hour.innerHTML = `${formatTime(hours)}`;
    min.innerHTML = `${formatTime(minutes)}`;
    sec.innerHTML = `${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time
}

