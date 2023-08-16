import { Popup } from '../components/Popup.js';

const popupWithImage = new Popup('.popup_main');
const images =["../images/prospekt-2.jpeg", "../images/prospekt-from-door.jpeg", "../images/prospekt-shop.jpeg",];
let mainImage = document.querySelector('.main__image');
mainImage.src = images[0];
mainImage.addEventListener('click', () => {
    popupWithImage.open(mainImage.src)
})
let numberOfMainImage = 0;
const rightExpand = document.querySelector('.main__image-expand_right');
const leftExpand = document.querySelector('.main__image-expand_left');
rightExpand.addEventListener('click', () => {
    if(numberOfMainImage < images.length-1){
        numberOfMainImage++
    }
    if(numberOfMainImage !== 0){
        leftExpand.classList.remove('hidden')
    }
    if(numberOfMainImage === images.length-1){
        rightExpand.classList.add('hidden')
    }
    mainImage.src = images[numberOfMainImage]
})
leftExpand.addEventListener('click', () => {
    if(numberOfMainImage > 0){
        numberOfMainImage--
    }
    if(numberOfMainImage === 0){
        leftExpand.classList.add('hidden')
    }
    rightExpand.classList.remove('hidden')
    mainImage.src = images[numberOfMainImage]
})
if(numberOfMainImage === 0){
    leftExpand.classList.add('hidden')
}
popupWithImage.setEventListeners();