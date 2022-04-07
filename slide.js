let num = 0;

function sliderImg() {
  let slide = document.getElementsByClassName("slide");
  let indicate = document.getElementsByClassName("indicate");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
    indicate[i].style.background = "yellow";
  }
  slide[num].style.display = "block";
  indicate[num].style.background = "red";
  num++;
  if (num === 10) {
    num = 0;
  }
}
setInterval(sliderImg, 1000);

