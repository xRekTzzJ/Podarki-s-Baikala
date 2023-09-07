import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './wooden-notepad.html',
    image: "./src/images/блокнот 5.jpeg",
    name: 'Деревянный блокнот'
    }, 
    {link: './craft-notebook.html',
    image: "./src/images/блокноты крафт.jpeg",
    name: 'Крафтовый блокнот'
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