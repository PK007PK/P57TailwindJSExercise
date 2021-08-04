import handleAddProductFormSubmit from '../functions/handleAddProductFormSubmit.js';
import { addProductForm, btnKillData, btnLoadDefault } from './handlers.js';
import clearAllProducts from '../functions/clearAllProducts.js';
import loadDefaultProducts from '../functions/loadDefaultProducts.js';

const handleLoadDefaultBtn = () => loadDefaultProducts();

function createAdminUi() {
  addProductForm.addEventListener('submit', handleAddProductFormSubmit);
  btnKillData.addEventListener('click', clearAllProducts);
  btnLoadDefault.addEventListener('click', handleLoadDefaultBtn);
}

export default createAdminUi;
