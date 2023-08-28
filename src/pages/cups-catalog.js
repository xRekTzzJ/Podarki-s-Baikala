import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './enamelled-cups.html',
    image: "../images/кружка.jpeg",
    name: 'Эмалированные кружки'
    },
    {link: './ceramic-cups.html',
    image: "../images/керамическая кружка.jpg",
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