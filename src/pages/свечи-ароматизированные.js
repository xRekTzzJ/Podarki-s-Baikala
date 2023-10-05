import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './свечи-50мл.html',
    image: "./src/images/табак-и-ваниль-50мл.jpeg",
    name: 'Свечи 50мл.'
    },
    {link: './свечи-100мл.html',
    image: "./src/images/ароматизированные 100.jpeg",
    name: 'Свечи 100мл.'
    },
    {link: './свечи-200мл.html',
    image: "./src/images/ароматизированные 200.jpeg",
    name: 'Свечи 200мл.'
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