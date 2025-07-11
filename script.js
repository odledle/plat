const images = ["bilder/bild1.jpg", "bilder/bild2.jpg", "bilder/bild3.jpg"];
let index = 0;

function showNextImage() {
  const img = document.getElementById("slideshow-image");
  index = (index + 1) % images.length;
  img.src = images[index];
}

setInterval(showNextImage, 3000);