import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './mini-ethno.html',
    image: "../images/этно-панно.jpeg",
    name: 'Мини-панно'
    }, 
    {link: './ethno.html',
    image: "../images/этно.jpeg",
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