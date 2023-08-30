import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './shishkar.html',
    image: "../images/чай тайга сибири.jpeg",
    name: 'Шишкарь'
    },
    {link: './medvezhya-uslada.html',
    image: "../images/медвежья услада.jpeg",
    name: 'Медвежья услада'
    },
    {link: './baikalskiy.html',
    image: "../images/чай Байкальский.jpeg",
    name: 'Байкальский'
    },
    {link: './klubnichniy-kompliment.html',
    image: "../images/Чай-Клубничный-комплимент.jpg",
    name: 'Клубничный комплимент'
    },
    {link: './apelsinka.html',
    image: "../images/чай-Апельсинка.jpg",
    name: 'Апельсинка'
    },
    {link: './vitaminniy.html',
    image: "../images/чай-Витаминный.jpg",
    name: 'Витаминный'
    },
    {link: './dikaya-yagoda.html',
    image: "../../src/images/чай-дикая-ягода.jpg",
    name: 'Дикая ягода'
    },
    {link: './kedroviy-les.html',
    image: "../../src/images/чай-кедровый-лес.jpg",
    name: 'Кедровый лес'
    },
    {link: './taegniy.html',
    image: "../../src/images/Чай-Таежный.jpg",
    name: 'Таежный'
    },
    {link: './spyashiy-sayan.html',
    image: "../../src/images/чай-спящий-саян.jpg",
    name: 'Спящий Саян'
    },
    {link: './sibirskoe-leto.html',
    image: "../images/чай-сибирское-лето.jpg",
    name: 'Сибирское лето'
    },
    {link: './s-shipovnikom.html',
    image: "../images/чай-с-шиповником.jpg",
    name: 'С шиповником'
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