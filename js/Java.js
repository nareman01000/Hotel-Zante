var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
var slideIndex1 = 0;
showSlides1();

function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) { slideIndex1 = 1 }
  slides[slideIndex1 - 1].style.display = "block";
  setTimeout(showSlides1, 4000); // Change image every 4 seconds
}
var elements = document.getElementsByClassName("photocolumn");


// Two images side by side
function two() {
for (i = 0; i < elements.length; i++) {
elements[i].style.msFlex = "30%";  // IE10
elements[i].style.flex = "30%";
}
}