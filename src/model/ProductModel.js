export class ProductModel {
  constructor() {
    this.data = JSON.parse(localStorage.getItem("products"));
  }

  // Get all products
  getAll() {
    return this.data;
  }

  // Get a product by ID
  getById(pid) {
    // console.log(this.data);
    const productData = this.data.find((product) => product.id == pid);
    return productData;
  }

  // Add a new product
  add(product) {
    console.log(product);
    let counter = this.data.length;
    product.id = counter + 1;
    this.data.push(product);
    const products = localStorage.setItem(
      "products",
      JSON.stringify(this.data)
    );
    return products ? true : false;
  }

  // Update an existing product
  update(id, productData) {
    console.log(productData);
    const productIndex = this.data.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      this.data[productIndex] = {
        ...this.data[productIndex],
        ...productData,
      };
    }
    const products = localStorage.setItem(
      "products",
      JSON.stringify(this.data)
    );
    return products ? true : false;
  }

  // Delete a product
  delete(id) {
    this.data = this.data.filter((product) => product.id !== id);
    localStorage.setItem("products", JSON.stringify(this.data));
    return true;
  }
}
