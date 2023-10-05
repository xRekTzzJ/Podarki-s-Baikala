import { Product } from "./Product.js"
import { Section } from "./Section.js";
import { Footer } from '../components/Footer.js';
const footerInfo = new Footer();
footerInfo.text();
const products = [
    {link: './французское-печенье-200мл.html',
    image: "./src/images/французское-печенье-200мл.jpeg",
    name: 'Арома-свеча «Французское печенье» 200 мл'
    },
    {link: './табак-и-ваниль-200мл.html',
    image: "./src/images/табак-и-ваниль-200мл.jpeg",
    name: 'Арома-свеча «Табак и ваниль» 200 мл'
    },
    {link: './молоко-и-мед-200мл.html',
    image: "./src/images/мед-и-молоко-200мл.jpeg",
    name: 'Арома-свеча «Молоко и мёд» 200 мл'
    },
    {link: './цитрусовый-взрыв-200мл.html',
    image: "./src/images/цитрусовый-взрыв-200мл.jpeg",
    name: 'Арома-свеча «Цитрусовый взрыв» 200 мл'
    },
    {link: './морская-соль-и-орхидея-200мл.html',
    image: "./src/images/морская-соль-и-орхидея-200мл.jpeg",
    name: 'Арома-свеча «Морская соль и орхидея» 200 мл'
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