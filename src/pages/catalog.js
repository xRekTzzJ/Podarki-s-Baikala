import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: '#',
    image: "../images/календарь.jpeg",
    name: 'Вечные календари'
    },
    {link: '#',
    image: "../images/подставка.jpeg",
    name: 'Подставки под телефон'
    },
    {link: '#',
    image: "../images/блокнот.jpeg",
    name: 'Блокноты'
    },
    {link: '#',
    image: "../images/brelok.jpg",
    name: 'Брелоки'
    },
    {link: '#',
    image: "../images/panno.jpeg",
    name: 'Панно'
    },
    {link: '#',
    image: "../images/кружка.jpeg",
    name: 'Кружки'
    },
    {link: '#',
    image: "../images/украшения.jpeg",
    name: 'Украшения'
    },
    {link: '#',
    image: "../images/подвеска.jpeg",
    name: 'Подвески в машину'
    },
    {link: '#',
    image: "../images/чай.jpeg",
    name: 'Чай'
    },
    {link: '#',
    image: "../images/свечи.jpeg",
    name: 'Свечи'
    },
]
const productsList = new Section({
    items: products,
    renderer: (products) => {
        const product = new Product(products, '.product');
        productsList.addItem(product.generateProduct())
    }
}, '.main-catalog')
productsList.renderItems();