import { Popup } from '../components/Popup.js';
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const imageList = [
    {src: '../../src/images/талые-бургэд.jpeg',
    },
];
const popupWithImage = new Popup('.popup_main');
let mainImage = document.querySelector('.product__image')
mainImage.src = imageList[0].src;
mainImage.addEventListener('click', () => {
    popupWithImage.open(mainImage.src)
})
popupWithImage.setEventListeners();
const rightExpand = document.querySelector('.main__image-expand_right');
const leftExpand = document.querySelector('.main__image-expand_left');
const leftPopupExpand = document.querySelector('.popup__expand_left');
const rightPopupExpand = document.querySelector('.popup__expand_right');
rightExpand.classList.add('hidden');
leftExpand.classList.add('hidden');
leftPopupExpand.classList.add('hidden');
rightPopupExpand.classList.add('hidden');
let countOfItem = document.querySelector('.product__image-count');
let numberOfMainImage = 0;
countOfItem.textContent = `${numberOfMainImage + 1}/${imageList.length}`