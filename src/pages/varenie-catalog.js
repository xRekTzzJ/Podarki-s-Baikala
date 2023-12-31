import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './sosnovoe-varenie-s-kedr-orehom.html',
    image: "./src/images/Сосновое варенье с кедровым орехом 120 гр 3.jpg",
    name: 'Сосновое варенье с кедровым орехом 120 гр'
    },
    {link: './varenie-iz-brusniki.html',
    image: "./src/images/Варенье-из-брусники 2.jpg",
    name: 'Варенье из брусники с кедровым орехом 125 гр'
    },
    {link: './kedrovoe-varenie.html',
    image: "./src/images/кедровое-варенье-с-кедровыми-орешками 2.jpg",
    name: 'Кедровое варенье с кедровым орехом 120 гр'
    },
    {link: './kedr-oreh-v-sosnovom-sirope.html',
    image: "./src/images/кедровые-орешки-в-сосновом-сиропе 2.jpg",
    name: 'Кедровый орех в сосновом сиропе 120 г'
    },
    {link: './varenie-iz-sosnovih-shishek.html',
    image: "./src/images/Сосновое-варенье-120-гр 2.jpg",
    name: 'Варенье из сосновых шишек 135 г'
    },
    {link: './varenie-iz-cherniki.html',
    image: "./src/images/варенье-из-черники-125-гр 2.jpg",
    name: 'Варенье из черники с кедровым орехом 125 гр'
    },
    {link: './varenie-iz-zhimolosti.html',
    image: "./src/images/Варенье-из-жимолости 1.jpg",
    name: 'Варенье из жимолости с кедровым орехом 125 гр'
    },
]
const productsList = new Section({
    items: products,
    renderer: (products) => {
        const product = new Product(products, '.product');
        productsList.addItem(product.generateProduct())
    }
}, '.main-catalog__items-container')
productsList.renderItems();