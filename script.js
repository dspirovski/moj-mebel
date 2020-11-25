/*var slideIndex = 1; // ova podocna kje go koristime vo funkcijata
showSlides(slideIndex);

function plusSlides(n) {
  //ova go povrzumame so prev i next buttons
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  //ova go povrzuvame so tockite
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setInterval(showSlides, 1000);
}*/
