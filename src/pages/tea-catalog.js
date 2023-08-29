import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './taiga-sibiri-catalog.html',
    image: "../images/чай тайга сибири.jpeg",
    name: 'Чай "Тайга сибири"'
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