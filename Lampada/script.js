
// função que liga e desliga a lâmpada

function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("deslig")) {
    image.src = "./img/ligad.jpg";
  } else {
    image.src = "./img/deslig.jpg";
  };
  console.log(image);
};
