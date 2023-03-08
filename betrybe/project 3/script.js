const val = document.querySelector("#value");

function onIncrement() {
    val.innerHTML = `${parseInt(val.innerText) + 1}`;
    console.log(val);
}

function onDecrement() {
    val.innerHTML = `${parseInt(val.innerText) - 1}`;
}
