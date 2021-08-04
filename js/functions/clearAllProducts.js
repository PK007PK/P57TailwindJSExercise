import { btnLoadDefault, productUl } from '../ui/handlers.js';

function clearAllProducts() {
  productUl.innerHTML = '';
  localStorage.removeItem('shop-products');
  btnLoadDefault.removeAttribute('disabled');
}

export default clearAllProducts;
