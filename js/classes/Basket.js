class Basket {
  constructor() {
    this.items = this.loadFromLocalStorage() ?? [];
    this.basketValue = 0;
  }

  clear() {
    this.items.length = 0;
    // this.items.splice();
    // this.items = []
    this.saveToLocalStorage();
  }

  getTotalValue() {
    // const { price } = this.items.reduce((prev,curr)=>({price: prev.price + curr.price}));
    return this.items.reduce((prev, product) => prev + product.price, 0);
  }

  add(item) {
    this.items.push(item);
    this.basketValue = this.getTotalValue();
    this.saveToLocalStorage();
  }

  showBasket2() {
    this.items.forEach((item, i) => console.log(`${i} ${item.name} ${item.price} `));
  }

  getBasketSummary() {
    return this.items
      .map((item, i) => ({
        id: i + 1,
        text: `${i + 1} - ${item.name} - ${item.price.toFixed(2).replace('.', ',')} zł`,
      }));
  }

  remove(no) {
    this.items.splice(no - 1, 1);
    this.getBasketSummary();
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('basket-items', JSON.stringify(this.items));
  }

  loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem('basket-items'));
  }
}

export default Basket;
