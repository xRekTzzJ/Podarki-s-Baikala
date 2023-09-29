import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './tea-catalog.html',
    image: "./src/images/Чай-Клубничный-комплимент.jpg",
    name: 'Чай'
    },
    {link: './varenie-catalog.html',
    image: "./src/images/Варенье-из-брусники-с-кедровым-орехом-125-гр-100-мл.jpg",
    name: 'Варенье'
    },
    {link: './syrops-catalog.html',
    image: "./src/images/сиропы.jpg",
    name: 'Сиропы'
    },
    {link: './кедровый-орех.html',
    image: "./src/images/ядро кедрового ореха.jpeg",
    name: 'Ядро кедрового ореха'
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