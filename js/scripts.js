var imagecount = 1;
var total = 5;

function slide(x){
  var image = document.getElementsByClassName('img');
  imagecount = image + x;
  image.src = "img/img" +imagecount +".png";
}
