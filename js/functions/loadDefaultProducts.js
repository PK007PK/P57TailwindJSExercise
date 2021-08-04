import initialShopProducts from '../data/initialShopProducts.js';
import saveProductsToLocalStorage from './saveProductsToLocalStorage.js';
import addProductToShop from './addProductToShop.js';
import { btnLoadDefault } from '../ui/handlers.js';

const loadDefaultProducts = () => {
  for (const { name, price } of initialShopProducts) {
    addProductToShop(name, price);
    saveProductsToLocalStorage(name, price);
  }
  btnLoadDefault.setAttribute('disabled', 'true');
};

export default loadDefaultProducts;
