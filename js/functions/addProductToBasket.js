import createBasketUi from '../ui/createBasketUi.js';
import Product from '../classes/Product.js';
import { basket } from '../ui/initializeBasket.js';

const addProductToBasket = (event) => {
  const { name } = event.target.dataset;
  const price = Number(event.target.dataset.price);
  const newProduct = new Product(name, price);
  basket.add(newProduct);
  createBasketUi();
};

export default addProductToBasket;
