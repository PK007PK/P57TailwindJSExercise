import addProductToShop from './addProductToShop.js';
import saveProductsToLocalStorage from './saveProductsToLocalStorage.js';

const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');

const handleAddProductFormSubmit = (event) => {
  event.preventDefault();
  // console.log(nameInput.value); ** różne sposoby dostępu do value
  // console.log(event.target.elements['product-name'].value);
  const nameFromInput = nameInput.value;
  const priceFromInput = Number(priceInput.value);

  addProductToShop(nameFromInput, priceFromInput);
  saveProductsToLocalStorage(nameFromInput, priceFromInput);
};

export default handleAddProductFormSubmit;
