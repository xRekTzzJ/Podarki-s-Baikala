import { Popup } from '../components/Popup.js';

//попап просмотра изображения
const popupWithImage = new Popup('.popup_main');
const mainImage = document.querySelector('.about-us__image');
const mainImageSrc = mainImage.src = './src/images/prospekt-2.jpeg'
mainImage.addEventListener('click', () => {
    popupWithImage.open(mainImageSrc)
})
popupWithImage.setEventListeners();