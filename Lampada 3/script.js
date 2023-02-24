const buttonOnOff = document.getElementById("buttonOnOff");
const light = document.getElementById("myImage");

function islightBroken() {
  return light.src.indexOf ("quebrada") > -1;
  
}

function lightOn() {
  if (!islightBroken ()) {
    light.src = "./img/ligada.jpg";
  }
}

function lightOff() {
  if (!islightBroken()) {
    light.src = "./img/desligada.jpg"
  }
}

function lightBroken() {
  light.src = "./img/quebrada.jpg";
}

function changeImage() {
  var image = document.getElementById('myImage');
  if (!islightBroken ()) {
    if (image.src.match("desligada")) {
      buttonOnOff.value = "DESLIGAR";
      image.src = "./img/ligada.jpg";
    } else {
      buttonOnOff.value = "LIGAR";
     image.src = "./img/desligada.jpg";
    };
  };
  console.log(buttonOnOff);
};

buttonOnOff.addEventListener("click",changeImage);
light.addEventListener("mouseover",lightOn);
light.addEventListener("mouseleave",lightOff);
light.addEventListener("dblclick",lightBroken);


