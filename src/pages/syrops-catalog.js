import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './geser.html',
    image: "./src/images/гэсэр.jpeg",
    name: 'Гэсэр'
    },
    {link: './talyn-burged.html',
    image: "./src/images/талые-бургэд.jpeg",
    name: 'Талын Бургэд'
    },
    {link: './amtatay.html',
    image: "./src/images/амтатай.jpeg",
    name: 'Амтатай'
    },
    {link: './naran-tuyaa.html',
    image: "./src/images/наран-туяа.jpeg",
    name: 'Наран Туяа'
    },
    {link: './altan-bulag.html',
    image: "./src/images/алтан-булаг.jpeg",
    name: 'Алтан Булаг'
    },
    {link: './altan-luu.html',
    image: "./src/images/алтан-луу.jpeg",
    name: 'Алтан Луу'
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