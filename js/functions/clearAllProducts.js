import { btnLoadDefault, productUl } from '../ui/handlers.js';

function clearAllProducts() {
  productUl.innerHTML = '';
  localStorage.removeItem('shop-products');
}

export default clearAllProducts;
