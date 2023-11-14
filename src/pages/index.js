import { Popup } from "../components/Popup.js";
import { Product } from "./Product.js";
import { Section } from "./Section.js";
import { Footer } from "../components/Footer.js";
const footerInfo = new Footer();
footerInfo.text();
//попап просмотра изображения
const popupWithImage = new Popup(".popup_main");
const mainImage = document.querySelector(".about-us__image");
const mainImageSrc = (mainImage.src = "./src/images/prospekt-2.jpg");
mainImage.addEventListener("click", () => {
  popupWithImage.open(mainImageSrc);
});
popupWithImage.setEventListeners();

// хиты продаж

const products = [
  {
    link: "./perpetual-calendar.html",
    image: "./src/images/календарь 2.jpeg",
    name: "Вечные календари",
  },
  {
    link: "./phone-stand.html",
    image: "./src/images/подставка 4.jpeg",
    name: "Подставки под телефон",
  },
  {
    link: "./notebooks-catalog.html",
    image: "./src/images/блокнот 1.jpeg",
    name: "Блокноты",
  },
  {
    link: "./орешки-с-предсказанием.html",
    image: "./src/images/орешек 1.jpeg",
    name: "Орешки с предсказанием",
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
  ".bestsellers__items-container"
);
productsList.renderItems();
