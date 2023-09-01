import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './geser.html',
    image: "../images/гэсэр.jpeg",
    name: 'Гэсэр'
    },
    {link: './talyn-burged.html',
    image: "../images/талые-бургэд.jpeg",
    name: 'Талын Бургэд'
    },
    {link: './amtatay.html',
    image: "../images/амтатай.jpeg",
    name: 'Амтатай'
    },
    {link: './naran-tuyaa.html',
    image: "../images/наран-туяа.jpeg",
    name: 'Наран Туяа'
    },
    {link: './altan-bulag.html',
    image: "../images/алтан-булаг.jpeg",
    name: 'Алтан Булаг'
    },
    {link: './altan-luu.html',
    image: "../images/алтан-луу.jpeg",
    name: 'Алтан Луу'
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