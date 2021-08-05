import initialShopProducts from '../data/initialShopProducts.js';
import saveProductsToLocalStorage from './saveProductsToLocalStorage.js';
import addProductToShop from './addProductToShop.js';
import clearAllProducts from "./clearAllProducts.js";

const loadDefaultProducts = () => {
  clearAllProducts()
  for (const { name, price } of initialShopProducts) {
    addProductToShop(name, price);
    saveProductsToLocalStorage(name, price);
  }
};

export default loadDefaultProducts;
