import { Popup } from '../components/Popup.js';
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const imageList = [
    {src: './src/images/этно.jpeg',
    },
    {src: './src/images/этно 1.jpeg',
    },
    {src: './src/images/этно 2.jpeg',
    },
];
const popupImage = document.querySelector('.popup__image');
let numberOfMainImage = 0;
const popupWithImage = new Popup('.popup_main');
let mainImage = document.querySelector('.product__image')
mainImage.src = imageList[0].src;
mainImage.addEventListener('click', () => {
    popupWithImage.open(mainImage.src)
})
popupWithImage.setEventListeners();
function nextImage(){
    if(numberOfMainImage < imageList.length-1){
        numberOfMainImage++
    }
    if(numberOfMainImage !== 0){
        leftExpand.classList.remove('hidden')
        leftPopupExpand.classList.remove('hidden')
    }
    if(numberOfMainImage === imageList.length-1){
        rightExpand.classList.add('hidden')
        rightPopupExpand.classList.add('hidden')
    }
    countOfItem.textContent = `${numberOfMainImage+1}/${imageList.length}`
    popupImage.src = imageList[numberOfMainImage].src
    mainImage.src = imageList[numberOfMainImage].src
}
function prevImage(){
    if(numberOfMainImage > 0){
        numberOfMainImage--;
    }
    if(numberOfMainImage === 0){
        leftExpand.classList.add('hidden');
        leftPopupExpand.classList.add('hidden');
    }
    countOfItem.textContent = `${numberOfMainImage+1}/${imageList.length}`;
    rightExpand.classList.remove('hidden');
    rightPopupExpand.classList.remove('hidden');
    popupImage.src = imageList[numberOfMainImage].src;
    mainImage.src = imageList[numberOfMainImage].src;
}
const rightExpand = document.querySelector('.main__image-expand_right');
const leftExpand = document.querySelector('.main__image-expand_left');
const leftPopupExpand = document.querySelector('.popup__expand_left');
const rightPopupExpand = document.querySelector('.popup__expand_right');
rightExpand.addEventListener('click', nextImage);
leftExpand.addEventListener('click', prevImage);
leftPopupExpand.addEventListener('click', prevImage);
rightPopupExpand.addEventListener('click', nextImage);
if(numberOfMainImage === 0){
    leftExpand.classList.add('hidden');
    leftPopupExpand.classList.add('hidden');
}
let countOfItem = document.querySelector('.product__image-count');
countOfItem.textContent = `${numberOfMainImage + 1}/${imageList.length}`

document.addEventListener('keydown', (evt) => {
    if(evt.key === 'ArrowRight'){
        nextImage();
    } else if(evt.key === 'ArrowLeft'){
        prevImage();
    }
})