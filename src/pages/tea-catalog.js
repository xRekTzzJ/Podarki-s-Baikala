import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './taiga-sibiri-catalog.html',
    image: "./src/images/чай тайга сибири.jpeg",
    name: 'Чай "Тайга сибири"'
    },
    {link: './ivan-chai-catalog.html',
    image: "./src/images/мини иван-чай с цедрой.jpeg",
    name: 'Иван-чай с Байкальских полей'
    },
    {link: './puer-catalog.html',
    image: "./src/images/Сибирский-пуэр-кедровый-96-гр.jpg",
    name: 'Сибирский пуэр'
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