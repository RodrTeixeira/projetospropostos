
// função que liga e desliga a lâmpada

function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("desligada")) {
    image.src = "./img/ligada.jpg";
  } else {
    image.src = "./img/desligada.jpg";
  };
  // console.log(image);
};
