import { Popup } from '../components/Popup.js';

//попап просмотра изображения
const popupWithImage = new Popup('.popup_main');
const mainImage = document.querySelector('.about-us__image');
mainImage.src = './src/images/prospekt.jpeg'
mainImage.addEventListener('click', () => {
    popupWithImage.open(mainImage.src)
})
popupWithImage.setEventListeners();
