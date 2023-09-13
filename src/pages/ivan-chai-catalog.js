import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './ivan-chai-classic-50g.html',
    image: "./src/images/мини иван-чай класический.jpeg",
    name: 'Иван-чай классический 50г.'
    },
    {link: './ivan-chai-s-chabrecom-50g.html',
    image: "./src/images/мини иван-чай с чабрецом.jpeg",
    name: 'Иван-чай с чабрецом 50г.'
    },
    {link: './ivan-chai-s-shipovnikom-50g.html',
    image: "./src/images/мини иван-чай с шиповником.jpeg",
    name: 'Иван-чай с шиповником 50г.'
    },
    {link: './ivan-chai-s-cedroy-50g.html',
    image: "./src/images/мини иван-чай с цедрой.jpeg",
    name: 'Иван-чай с мандариновой цедрой 50г.'
    },
    {link: './ivan-chai-posidelki-50g.html',
    image: "./src/images/мини иван-чай дачные посиделки.jpeg",
    name: 'Иван-чай "дачные посиделки" 50г.'
    },
    {link: './ivan-chai-classic-100g.html',
    image: "./src/images/иван-чай классический.jpeg",
    name: 'Иван-чай классический 100г.'
    },
    {link: './ivan-chai-s-chabrecom-100g.html',
    image: "./src/images/иван-чай с чабрецом.jpeg",
    name: 'Иван-чай с чабрецом 100г.'
    },
    {link: './ivan-chai-s-shipovnikom-100g.html',
    image: "./src/images/иван-чай с шиповником.jpeg",
    name: 'Иван-чай с шиповником 100г.'
    },
    {link: './ivan-chai-s-cedroy-100g.html',
    image: "./src/images/иван-чай с цедрой.jpeg",
    name: 'Иван-чай с мандариновой цедрой 100г.'
    },
    {link: './ivan-chai-posidelki-100g.html',
    image: "./src/images/иван-чай дачные посиделки.jpeg",
    name: 'Иван-чай "дачные посиделки" 100г.'
    },
    {link: './подарочный набор иван-чай.html',
    image: "./src/images/иван-чай подарочный 1.jpeg",
    name: 'Подарочный набор иван-чай'
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