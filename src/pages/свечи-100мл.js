import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './французское-печенье-100мл.html',
    image: "./src/images/французское-печенье-100мл.jpeg",
    name: 'Арома-свеча «Французское печенье» 100 мл'
    },
    {link: './табак-и-ваниль-100мл.html',
    image: "./src/images/табак-и-ваниль-100мл.jpeg",
    name: 'Арома-свеча «Табак и ваниль» 100 мл'
    },
    {link: './молоко-и-мед-100мл.html',
    image: "./src/images/мед-и-молоко-100мл.jpeg",
    name: 'Арома-свеча «Молоко и мёд» 100 мл'
    },
    {link: './цитрусовый-взрыв-100мл.html',
    image: "./src/images/цитрусовый-взрыв-100мл.jpeg",
    name: 'Арома-свеча «Цитрусовый взрыв» 100 мл'
    },
    {link: './морская-соль-и-орхидея-100мл.html',
    image: "./src/images/морская-соль-и-орхидея-100мл.jpeg",
    name: 'Арома-свеча «Морская соль и орхидея» 100 мл'
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