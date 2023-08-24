import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './perpetual-calendar.html',
    image: "../images/календарь 1.jpeg",
    name: 'Вечные календари'
    },
    {link: './phone-stand.html',
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
    {link: '#',
    image: "../images/этно-панно.jpeg",
    name: 'Этно-панно'
    },
    {link: '#',
    image: "../images/подушка.JPG",
    name: 'Подушки'
    },
    {link: '#',
    image: "../images/доска.jpeg",
    name: 'Доски'
    },
    {link: '#',
    image: "../images/тарелка.jpeg",
    name: 'Керамические тарелки'
    },
    {link: '#',
    image: "../images/копилка.JPG",
    name: 'Копилки'
    },
    {link: '#',
    image: "../images/флешка.JPG",
    name: 'Флешки'
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