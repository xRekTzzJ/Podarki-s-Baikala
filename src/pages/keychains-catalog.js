import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './wooden-keychain.html',
    image: "../images/брелоки деревянные.jpeg",
    name: 'Деревянные брелоки'
    },
    {link: './leather-keychains.html',
    image: "../images/brelok.jpg",
    name: 'Брелоки кожа/дерево'
    },
    {link: '#',
    image: "../images/блокнот.jpeg",
    name: 'Кожанные мини брелки'
    },
    {link: '#',
    image: "../images/блокнот.jpeg",
    name: 'Кожанные брелоки'
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