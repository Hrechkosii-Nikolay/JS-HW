import cardsMarkup from "./template/menuCardMarkup.hbs";
import menu from "./menu.json";

const menuRef = document.querySelector(".js-menu");

const menuMarkup = cardsMarkup(menu);
menuRef.insertAdjacentHTML("beforeend", menuMarkup);
