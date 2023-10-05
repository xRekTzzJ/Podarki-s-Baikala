import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './французское-печенье-50мл.html',
    image: "./src/images/французское-печенье-50мл.jpeg",
    name: 'Арома-свеча «Французское печенье» 50 мл'
    },
    {link: './табак-и-ваниль-50мл.html',
    image: "./src/images/табак-и-ваниль-50мл.jpeg",
    name: 'Арома-свеча «Табак и ваниль» 50 мл'
    },
    {link: './молоко-и-мед-50мл.html',
    image: "./src/images/мед-и-молоко-50мл.jpeg",
    name: 'Арома-свеча «Молоко и мёд» 50 мл'
    },
    {link: './цитрусовый-взрыв-50мл.html',
    image: "./src/images/цитрусовый-взрыв-50мл.jpeg",
    name: 'Арома-свеча «Цитрусовый взрыв» 50 мл'
    },
    {link: './морская-соль-и-орхидея-50мл.html',
    image: "./src/images/морская-соль-и-орхидея-50мл.jpeg",
    name: 'Арома-свеча «Морская соль и орхидея» 50 мл'
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