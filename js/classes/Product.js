class Product {
  constructor(productName, productPrice) {
    this.name = productName;
    this.price = productPrice;
  }

  setNewPrice(newPrice) {
    this.price = newPrice;
  }
}

export default Product;
