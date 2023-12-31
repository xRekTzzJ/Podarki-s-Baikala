import { Product } from "./Product.js";
import { Section } from "./Section.js";
import { Footer } from "../components/Footer.js";
const footerInfo = new Footer();
footerInfo.text();
const products = [
  {
    link: "./puer-kedroviy.html",
    image: "./src/images/Сибирский-пуэр-кедровый-96-гр.jpg",
    name: "Кедровый",
  },
  {
    link: "./puer-kalina-malina.html",
    image: "./src/images/калина-малина.jpeg",
    name: "Калина-малина",
  },
  {
    link: "./puer-smorodina.html",
    image: "./src/images/смородина.jpeg",
    name: "Смородина",
  },
  {
    link: "./puer-sibir-sibir.html",
    image: "./src/images/Сибирский-пуэр-Сибирь-Сибирь-96-гр.jpg",
    name: "Сибирь-Сибирь",
  },
  {
    link: "./чага-чай-с-мятой.html",
    image: "./src/images/чага-чай-с-мятой.jpeg",
    name: "Чага чай с мятой",
  },
  {
    link: "./puer-oblepichvoiy.html",
    image: "./src/images/Сибирский-пуэр-с-облепихой-96-гр.jpg",
    name: "Облепиховый",
  },
];
const productsList = new Section(
  {
    items: products,
    renderer: (products) => {
      const product = new Product(products, ".product");
      productsList.addItem(product.generateProduct());
    },
  },
  ".main-catalog__items-container"
);
productsList.renderItems();
