import Basket from '../classes/Basket.js';

function initializeBasket() {
  const basket = new Basket();
  return basket;
}

export const basket = initializeBasket();
export default initializeBasket;
