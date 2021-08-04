import createBasketUi from '../ui/createBasketUi.js';
import { basket } from '../ui/initializeBasket.js';

const buyAllProducts = () => {
  alert(`You have purchased products with a value of ${basket.getTotalValue().toFixed(2)}`);
  basket.clear();
  createBasketUi();
};

export default buyAllProducts;
