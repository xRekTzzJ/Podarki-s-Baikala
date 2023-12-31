import { Popup } from "../components/Popup.js";
import { Footer } from "../components/Footer.js";
const footerInfo = new Footer();
footerInfo.text();
const popupWithImage = new Popup(".popup_main");
const images = [
  "./src/images/prospekt-9.jpg",
  "./src/images/prospekt-3.jpg",
  "./src/images/prospekt-4.jpg",
  "./src/images/prospekt-5.jpg",
  "./src/images/prospekt-6.jpg",
  "./src/images/prospekt-7.jpg",
  "./src/images/prospekt-8.jpg",
  "./src/images/команда.jpeg",
];
let mainImage = document.querySelector(".main__image");
const popupImage = document.querySelector(".popup__image");
let numberOfMainImage = 0;
mainImage.src = images[0];
popupImage.src = images[0];
mainImage.addEventListener("click", () => {
  popupWithImage.open(mainImage.src);
});
function nextImage() {
  if (numberOfMainImage < images.length - 1) {
    numberOfMainImage++;
  }
  if (numberOfMainImage !== 0) {
    leftExpand.classList.remove("hidden");
    leftPopupExpand.classList.remove("hidden");
  }
  if (numberOfMainImage === images.length - 1) {
    rightExpand.classList.add("hidden");
    rightPopupExpand.classList.add("hidden");
  }
  popupImage.src = images[numberOfMainImage];
  mainImage.src = images[numberOfMainImage];
}
function prevImage() {
  if (numberOfMainImage > 0) {
    numberOfMainImage--;
  }
  if (numberOfMainImage === 0) {
    leftExpand.classList.add("hidden");
    leftPopupExpand.classList.add("hidden");
  }
  rightExpand.classList.remove("hidden");
  rightPopupExpand.classList.remove("hidden");
  popupImage.src = images[numberOfMainImage];
  mainImage.src = images[numberOfMainImage];
}
const rightExpand = document.querySelector(".main__image-expand_right");
const leftExpand = document.querySelector(".main__image-expand_left");
const leftPopupExpand = document.querySelector(".popup__expand_left");
const rightPopupExpand = document.querySelector(".popup__expand_right");
rightExpand.addEventListener("click", nextImage);
leftExpand.addEventListener("click", prevImage);
leftPopupExpand.addEventListener("click", prevImage);
rightPopupExpand.addEventListener("click", nextImage);
if (numberOfMainImage === 0) {
  leftExpand.classList.add("hidden");
  leftPopupExpand.classList.add("hidden");
}
rightExpand.addEventListener("click", nextImage);
leftExpand.addEventListener("click", prevImage);
leftPopupExpand.addEventListener("click", prevImage);
rightPopupExpand.addEventListener("click", nextImage);
if (numberOfMainImage === 0) {
  leftExpand.classList.add("hidden");
  leftPopupExpand.classList.add("hidden");
}
popupWithImage.setEventListeners();
document.addEventListener("keydown", (evt) => {
  if (evt.key === "ArrowRight") {
    nextImage();
  } else if (evt.key === "ArrowLeft") {
    prevImage();
  }
});
