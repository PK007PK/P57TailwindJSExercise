import { basket } from '../ui/initializeBasket.js';
import createBasketUi from '../ui/createBasketUi.js';

const removeItem = (event) => {
  const id = Number(event.target.dataset.id);
  basket.remove(id);
  createBasketUi();
};

export default removeItem;
