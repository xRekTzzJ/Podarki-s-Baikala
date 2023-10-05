import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './цветы-байкала.html',
    image: "./src/images/свечи.jpeg",
    name: 'Цветы Байкала'
    },
    {link: './медовые-свечи.html',
    image: "./src/images/медовые.jpeg",
    name: 'Свечи медовые'
    },
    {link: './свечи-ароматизированные.html',
    image: "./src/images/ароматизированные.jpeg",
    name: 'Свечи ароматизированные'
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