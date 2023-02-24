const buttonOn = document.getElementById("buttonOn")
const buttonOff = document.getElementById("buttonOff")
const light = document.getElementById("myImage")

function islightBroken() {
  return light.src.indexOf ("quebrada") > -1
}

function lightOn() {
  if (!islightBroken ()) {
    light.src = "./img/ligada.jpg"
  }
  
}

function lightOff() {
  if (!islightBroken()) {
    light.src = "./img/desligada.jpg"
  }
}

function lightBroken() {
  light.src = "./img/quebrada.jpg"
}

buttonOn.addEventListener("click",lightOn)
buttonOff.addEventListener("click",lightOff)
light.addEventListener("mouseover",lightOn)
light.addEventListener("mouseleave",lightOff)
light.addEventListener("dblclick",lightBroken)

//function changeImage() {
//  var image = document.getElementById('myImage');
//  if (image.src.match("desligada")) {
//    image.src = "./img/ligada.jpg"
//  } else {
//    image.src = "./img/desligada.jpg";
//  }
//  console.log(image)
//}
