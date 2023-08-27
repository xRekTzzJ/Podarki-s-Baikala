import { Popup } from '../components/Popup.js';
// import { Image } from './Image.js';
// import { ImageSection } from './ImageSection.js';
const imageList = [
    {src: '../images/brelok.jpg',
    },
    {src: '../images/leather-keychains 1.jpeg',
    },
    {src: '../images/leather-keychains 2.jpeg',
    },
    {src: '../images/leather-keychains 3.jpeg',
    },
    {src: '../images/leather-keychains 4.jpeg',
    },
    {src: '../images/leather-keychains 5.jpeg',
    },
    {src: '../images/leather-keychains 6.jpeg',
    },
    {src: '../images/leather-keychains 7.jpeg',
    },
    {src: '../images/leather-keychains 8.jpeg',
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
// const miniImageList = new ImageSection({
//     items: imageList,
//     renderer: (imageList) => {
//         const image = new Image(imageList, '.image');
//         miniImageList.addItem(image.generateProduct())
//     }
// }, '.product__mini-image-container')
// miniImageList.renderItems();
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