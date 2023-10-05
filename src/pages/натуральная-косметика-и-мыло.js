import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './каталог-мыла.html',
    image: "./src/images/роза и сердечки.jpeg",
    name: 'Мыло ручной работы'
    },
    {link: './бальзам-для-губ.html',
    image: "./src/images/бальзамы.jpeg",
    name: 'Бальзам для губ'
    },
    {link: './аромосаше.html',
    image: "./src/images/аромосаше.jpeg",
    name: 'Аромосаше'
    },
    {link: './бомбочка-для-ванн.html',
    image: "./src/images/бомбочки.jpeg",
    name: 'Бомбочка для ванн'
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