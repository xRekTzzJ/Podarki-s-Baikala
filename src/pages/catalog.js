import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './perpetual-calendar.html',
    image: "./src/images/календарь 2.jpeg",
    name: 'Вечные календари'
    },
    {link: './phone-stand.html',
    image: "./src/images/подставка 1.jpeg",
    name: 'Подставки под телефон'
    },
    {link: './notebooks-catalog.html',
    image: "./src/images/блокнот 5.jpeg",
    name: 'Блокноты'
    },
    {link: './keychains-catalog.html',
    image: "./src/images/brelok.jpg",
    name: 'Брелоки'
    },
    {link: './panels.html',
    image: "./src/images/panno.jpeg",
    name: 'Панно'
    },
    {link: './cups-catalog.html',
    image: "./src/images/кружка.jpeg",
    name: 'Кружки'
    },
    {link: './pendant.html',
    image: "./src/images/подвеска.jpeg",
    name: 'Подвески в машину'
    },
    {link: './gastronom.html',
    image: "./src/images/Варенье-из-брусники-с-кедровым-орехом-125-гр-100-мл.jpg",
    name: 'Гастрономические подарки'
    },
    {link: './ethno-panno-catalog.html',
    image: "./src/images/этно-панно.jpeg",
    name: 'Этно-панно'
    },
    {link: './pillow.html',
    image: "./src/images/подушка.JPG",
    name: 'Подушки'
    },
    {link: './board.html',
    image: "./src/images/доска 1.jpeg",
    name: 'Доски'
    },
    {link: './banks-catalog.html',
    image: "./src/images/копилка.jpeg",
    name: 'Копилки'
    },
    {link: './ceramic-plates.html',
    image: "./src/images/тарелка 3.jpeg",
    name: 'Керамические тарелки'
    },
    {link: './flash-drive.html',
    image: "./src/images/флешка.jpeg",
    name: 'Флешки'
    },
    {link: './wineglass.html',
    image: "./src/images/бокал 1.jpeg",
    name: 'Бокалы'
    },
    {link: './gift-bags.html',
    image: "./src/images/подарочные мешочки.jpeg",
    name: 'Подарочные мешочки'
    },
    {link: './mini-boxes.html',
    image: "./src/images/мини-боксы.jpeg",
    name: 'Мини-боксы'
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