import { Popup } from '../components/Popup.js';

//попап просмотра изображения
const popupWithImage = new Popup('.popup_main');
const mainImage = document.querySelector('.about-us__image');
const mainImageSrc = mainImage.src = './src/images/prospekt-2.jpeg'
mainImage.addEventListener('click', () => {
    popupWithImage.open(mainImageSrc)
})
popupWithImage.setEventListeners();
const headerButton = document.querySelector('.header__button');
const catalogTitle = document.querySelector('.catlog__title');
headerButton.addEventListener('click', () => catalogTitle.scrollIntoView({behavior: "smooth", block: "start", inline: "start"}));
const a = 11;