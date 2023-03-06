const container = document.querySelector(".container");
const color = document.querySelector("input");
//console.log(container);
//console.log(color);

const defaultColor = "#fff";
container.style.backgroundColor = `${defaultColor}`;

function onChangeBg() {
    container.style.backgroundColor = `${color.value}`;
    //console.log(color.value)
}