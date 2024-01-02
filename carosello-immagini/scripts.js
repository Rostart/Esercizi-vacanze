let lungh = 0
let img = document.querySelectorAll(".Immagini img")
let TotaleImg = img.length;
let prec = document.getElementById("Img-Prec");
let pros = document.getElementById("Img-Pros");


  
function showImage() {
  img.forEach(img => {
    img.style.transform = `translateX(-${lungh * 100}%)`;
  });
}

function showPrecImage() {
  lungh = (lungh - 1 + TotaleImg) % TotaleImg;
  showImage();
}

function showProsImage() {
  lungh = (lungh + 1) % TotaleImg;
  showImage();
}

prec.addEventListener('click', showPrecImage);

pros.addEventListener('click', showProsImage);

showImage();

