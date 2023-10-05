import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './tea-catalog.html',
    image: "./src/images/Чай-Клубничный-комплимент.jpg",
    name: 'Чай'
    },
    {link: './varenie-catalog.html',
    image: "./src/images/Варенье-из-брусники-с-кедровым-орехом-125-гр-100-мл.jpg",
    name: 'Варенье'
    },
    {link: './шоколад.html',
    image: "./src/images/шоколад молочный с кедровым орехом и шишками.jpeg",
    name: 'Шоколад'
    },
    {link: './syrops-catalog.html',
    image: "./src/images/сиропы.jpg",
    name: 'Сиропы'
    },
    {link: './кедровый-орех.html',
    image: "./src/images/ядро кедрового ореха.jpeg",
    name: 'Ядро кедрового ореха'
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