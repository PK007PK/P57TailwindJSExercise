import { basket } from './initializeBasket.js';
import buyAllProducts from '../functions/buyAllProducts.js';
import removeItem from '../functions/removeItem.js';
import { basketUl, btnClear, buyAllButton } from './handlers.js';

const createBasketUi = () => {
  basketUl.innerText = '';

  const clearBasket = () => {
    basket.clear();
    createBasketUi();
  };

  for (const { text, id } of basket.getBasketSummary()) {
    const newLi = document.createElement('li');

    newLi.innerText = text;
    newLi.addEventListener('click', removeItem);
    newLi.dataset.id = id;
    basketUl.appendChild(newLi);
  }

  const basketTotalValue = basket.getTotalValue();
  const message = `Place an order for the amount of ${basketTotalValue.toFixed(2)} zł`;
  buyAllButton.innerText = message;
  buyAllButton.disabled = basketTotalValue === 0;
  buyAllButton.addEventListener('click', buyAllProducts);
  btnClear.addEventListener('click', clearBasket);
};

export default createBasketUi;
