import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './perpetual-calendar.html',
    image: "../images/календарь 1.jpeg",
    name: 'Вечные календари'
    },
    {link: './phone-stand.html',
    image: "../images/подставка главная.jpg",
    name: 'Подставки под телефон'
    },
    {link: './notebooks-catalog.html',
    image: "../images/блокнот.jpeg",
    name: 'Блокноты'
    },
    {link: './keychains-catalog.html',
    image: "../images/brelok.jpg",
    name: 'Брелоки'
    },
    {link: './panels.html',
    image: "../images/panno.jpeg",
    name: 'Панно'
    },
    {link: './cups-catalog.html',
    image: "../images/кружка.jpeg",
    name: 'Кружки'
    },
    {link: './pendant.html',
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
    {link: './ethno-panno-catalog.html',
    image: "../images/этно-панно.jpeg",
    name: 'Этно-панно'
    },
    {link: './pillow.html',
    image: "../images/подушка.JPG",
    name: 'Подушки'
    },
    {link: './board.html',
    image: "../images/доска 1.jpeg",
    name: 'Доски'
    },
    {link: '#',
    image: "../images/тарелка.jpg",
    name: 'Керамические тарелки'
    },
    {link: './banks-catalog.html',
    image: "../images/копилка.jpeg",
    name: 'Копилки'
    },
    {link: './flash-drive.html',
    image: "../images/флешка.jpeg",
    name: 'Флешки'
    },
    {link: './wineglass.html',
    image: "../images/бокал 1.jpeg",
    name: 'Бокалы'
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