import addProductToBasket from '../functions/addProductToBasket.js';
import loadProductsFromLocalStorage from '../functions/loadProductsFromLocalStorage.js';
import { addBtns } from './handlers.js';
import loadDefaultProducts from '../functions/loadDefaultProducts.js';

function createShopUi() {
  if (!(localStorage.hasOwnProperty('megaShopInitialized'))) {
    loadDefaultProducts();
  }

  if (localStorage.hasOwnProperty('megaShopInitialized')) {
    loadProductsFromLocalStorage();
  }

  localStorage.setItem('megaShopInitialized', 'true');

  for (const addBtn of addBtns) {
    addBtn.addEventListener('click', addProductToBasket);
  }
}

export default createShopUi;
