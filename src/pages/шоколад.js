import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './шоколад-молочный-с-кедровым-орехом-и-шишками.html',
    image: ".././src/images/шоколад молочный с кедровым орехом и шишками.jpeg",
    name: 'Шоколад молочный с кедровым орехом и шишками'
    },
    {link: './шоколад-молочный-с-кедровым-орехом-и-ягодами.html',
    image: "./src/images/Шоколад молочный с кедровым орехом и ягодами.jpeg",
    name: 'Шоколад молочный с кедровым орехом и ягодами'
    },
    {link: './шишка.html',
    image: "./src/images/шишка.png",
    name: 'Шоколад молочный "Шишка"'
    },
    {link: './конфеты-пралине-молочные-с-кедровым-орехом.html',
    image: "./src/images/конфеты.jpeg",
    name: 'Конфеты пралине молочные с кедровым орехом"'
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