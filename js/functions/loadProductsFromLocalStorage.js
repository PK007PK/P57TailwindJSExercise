import addProductToShop from './addProductToShop.js';

const loadProductsFromLocalStorage = () => {
  const productsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
  for (const { name, price } of productsList) {
    addProductToShop(name, price);
  }
};

export default loadProductsFromLocalStorage;
