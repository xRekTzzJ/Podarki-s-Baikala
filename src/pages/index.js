import { Popup } from '../components/Popup.js';

//попап просмотра изображения
const popupWithImage = new Popup('.popup_main');
const mainImage = document.querySelector('.about-us__image');
mainImage.addEventListener('click', () => {
    popupWithImage.open('./src/images/logo.svg')
})
popupWithImage.setEventListeners();
