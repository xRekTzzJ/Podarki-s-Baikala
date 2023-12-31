import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './enamelled-cups.html',
    image: "./src/images/кружка.jpeg",
    name: 'Эмалированные кружки'
    },
    {link: './ceramic-cups.html',
    image: "./src/images/керамическая кружка.jpg",
    name: 'Керамические кружки'
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