import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './sosnovoe-varenie-s-kedr-orehom.html',
    image: "../images/Сосновое варенье с кедровым орехом 120 гр 3.jpg",
    name: 'Сосновое варенье с кедровым орехом 120 гр'
    },
    {link: './varenie-iz-brusniki.html',
    image: "../images/Варенье-из-брусники 2.jpg",
    name: 'Варенье из брусники с кедровым орехом 125 гр'
    },
    {link: './kedrovoe-varenie.html',
    image: "../images/кедровое-варенье-с-кедровыми-орешками 2.jpg",
    name: 'Кедровое варенье с кедровым орехом 120 гр'
    },
    {link: './kedr-oreh-v-sosnovom-sirope.html',
    image: "../images/кедровые-орешки-в-сосновом-сиропе 2.jpg",
    name: 'Кедровый орех в сосновом сиропе 120 г'
    },
    {link: './varenie-iz-sosnovih-shishek.html',
    image: "../images/Сосновое-варенье-120-гр 2.jpg",
    name: 'Варенье из сосновых шишек 135 г'
    },
    {link: './varenie-iz-cherniki.html',
    image: "../images/варенье-из-черники-125-гр 2.jpg",
    name: 'Варенье из черники с кедровым орехом 125 гр'
    },
    {link: './varenie-iz-zhimolosti.html',
    image: "../images/Варенье-из-жимолости 1.jpg",
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