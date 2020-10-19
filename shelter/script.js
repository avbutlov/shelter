/*
let arrowRight = document.querySelector(".arrow-right");
let arrowLeft = document.querySelector(".arrow-left");
let petPictures = document.querySelector(".pet-pictures");
let sliderPosition = 0;
arrowRight.addEventListener("click", () => {
  if (sliderPosition > -990) {
    sliderPosition -= 360;
    petPictures.style.transform = `translateX(${sliderPosition}px)`;
  }
});
arrowLeft.addEventListener("click", () => {
  if (sliderPosition < 0) {
    sliderPosition += 360;
    petPictures.style.transform = `translateX(${sliderPosition}px)`;
  }
});

*/