import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './mini-ethno.html',
    image: "./src/images/этно-панно.jpeg",
    name: 'Мини-панно'
    }, 
    {link: './ethno.html',
    image: "./src/images/этно.jpeg",
    name: 'Этно-панно'
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