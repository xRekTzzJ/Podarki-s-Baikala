import { Popup } from '../components/Popup.js';
import { Image } from './Image.js';
import { ImageSection } from './ImageSection.js';
const imageList = [
    {src: '../images/календарь.jpeg',
    },
    {src: '../images/календарь продукт.jpg',
    },
    {src: '../images/календарь продукт.jpg',
    },
    {src: '../images/календарь продукт.jpg',
    },
    {src: '../images/календарь продукт.jpg',
    },
    {src: '../images/календарь продукт.jpg',
    },
    {src: '../images/календарь продукт.jpg',
    },
    {src: '../images/календарь продукт.jpg',
    },
    {src: '../images/календарь продукт.jpg',
    },
    {src: '../images/календарь продукт.jpg',
    },
]
const popupWithImage = new Popup('.popup_main');
let mainImage = document.querySelector('.product__image')
mainImage.src = imageList[0].src;
mainImage.addEventListener('click', () => {
    popupWithImage.open(mainImage.src)
})
popupWithImage.setEventListeners();
const miniImageList = new ImageSection({
    items: imageList,
    renderer: (imageList) => {
        const image = new Image(imageList, '.image');
        miniImageList.addItem(image.generateProduct())
    }
}, '.product__mini-image-container')
miniImageList.renderItems();