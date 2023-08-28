import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './bank-365.html',
    image: "../images/копилка.jpeg",
    name: 'Копилка "365 дней"'
    },
    {link: './mini-bank.html',
    image: "../images/мини-копилка 1.jpeg",
    name: 'Мини-копилка "На мечту"'
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