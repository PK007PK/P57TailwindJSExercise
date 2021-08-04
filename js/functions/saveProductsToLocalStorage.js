const saveProductsToLocalStorage = (name, price) => {
  const oldProductsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
  oldProductsList.push({ name, price });
  localStorage.setItem('shop-products', JSON.stringify(oldProductsList));
};

export default saveProductsToLocalStorage;
