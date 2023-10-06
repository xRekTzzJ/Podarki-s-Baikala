import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './perpetual-calendar.html',
    image: "./src/images/календарь 2.jpeg",
    name: 'Вечные календари'
    },
    {link: './phone-stand.html',
    image: "./src/images/подставка 4.jpeg",
    name: 'Подставки под телефон'
    },
    {link: './notebooks-catalog.html',
    image: "./src/images/блокнот 1.jpeg",
    name: 'Блокноты'
    },
    {link: './орешки-с-предсказанием.html',
    image: "./src/images/орешек 1.jpeg",
    name: 'Орешки с предсказанием'
    },
    {link: './магниты.html',
    image: "./src/images/магниты.jpeg",
    name: 'Магниты'
    },
    {link: './keychains-catalog.html',
    image: "./src/images/brelok.jpg",
    name: 'Брелоки'
    },
    {link: './cups-catalog.html',
    image: "./src/images/керамическая кружка.jpg",
    name: 'Кружки'
    },
    {link: './board.html',
    image: "./src/images/доска 1.jpeg",
    name: 'Досточка подарочная кухонная'
    },
    {link: './pillow.html',
    image: "./src/images/подушка.JPG",
    name: 'Подушки'
    },
    {link: './flash-drive.html',
    image: "./src/images/флешка.jpeg",
    name: 'Флешки'
    },
    {link: './gift-bags.html',
    image: "./src/images/подарочные мешочки.jpeg",
    name: 'Подарочные мешочки'
    },
    {link: './mini-boxes.html',
    image: "./src/images/мини-боксы.jpeg",
    name: 'Мини-боксы'
    },
    {link: './натуральная-косметика-и-мыло.html',
    image: "./src/images/мечта-золушки.jpeg",
    name: 'Натуральная косметика и мыло'
    },
    {link: './свечи.html',
    image: "./src/images/свечи.jpeg",
    name: 'Свечи'
    },
    {link: './panels.html',
    image: "./src/images/panno.jpeg",
    name: 'Панно'
    },
    {link: './pendant.html',
    image: "./src/images/подвеска 1.jpeg",
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
    {link: './banks-catalog.html',
    image: "./src/images/копилка.jpeg",
    name: 'Копилки'
    },
    {link: './ceramic-plates.html',
    image: "./src/images/тарелка 3.jpeg",
    name: 'Керамические тарелки'
    },
    {link: './wineglass.html',
    image: "./src/images/бокал 1.jpeg",
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