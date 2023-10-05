import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './лесное.html',
    image: "./src/images/лесное.jpeg",
    name: 'Лесное'
    },
    {link: './шелковый-лепесток.html',
    image: "./src/images/лепесток.jpeg",
    name: 'Шелковый лепесток'
    },
    {link: './очарование.html',
    image: "./src/images/очарование.jpeg",
    name: 'Очарование'
    },
    {link: './молоко-и-мед.html',
    image: "./src/images/молоко и мед.jpeg",
    name: 'Молоко и мед'
    },
    {link: './байкальская-ягодка.html',
    image: "./src/images/байкальская ягодка.jpeg",
    name: 'Байкальская ягодка'
    },
    {link: './байкальский-бриз.html',
    image: "./src/images/байкальский бриз.jpeg",
    name: 'Байкальский бриз'
    },
    {link: './байкальская-галька.html',
    image: "./src/images/мыло-камни.jpeg",
    name: 'Байкальская галька'
    },
    {link: './нежное-прикосновение.html',
    image: "./src/images/мыло-кролики.jpeg",
    name: 'Нежное прикосновение'
    },
    {link: './мыло-сердечко-и-мыло-роза.html',
    image: "./src/images/роза и сердечки.jpeg",
    name: 'Мыло сердечко и мыло роза'
    },
    {link: './мечта-золушки.html',
    image: "./src/images/мечта-золушки.jpeg",
    name: 'Мечта золушки'
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