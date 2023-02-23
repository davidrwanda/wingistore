import { ProductRepository } from "../helpers/ProductRepository";
// import { stringify } from "csv-stringify";
// import { saveAs } from "file-saver";
// import { parse } from "csv-parse";
// import * as buffer from "buffer";
// global.Buffer = buffer.Buffer;
const ProductRepo = new ProductRepository();
export class ManageController {
  constructor() {
    this.products = JSON.parse(localStorage.getItem("products"));
  }
  getProducts() {
    return ProductRepo.getProducts().filter((product) => product.status === 1);
  }
  getTrashedProducts() {
    return ProductRepo.getProducts().filter((product) => product.status === 0);
  }
  getProduct(productId) {
    ProductRepo.getProductByProductId(productId);
  }
  postProduct(product) {
    return ProductRepo.addProduct(product);
  }
  updateProduct(id, product) {
    return ProductRepo.updateProduct(id, product);
  }
  updateProductStatus(id, status) {
    const product = this.products.find((product) => product.id === id);
    product.status = status;
    return ProductRepo.updateProduct(id, product);
  }
  deleteProduct(id) {
    return ProductRepo.deleteProduct(id);
  }
  batch(data) {
    data.forEach((item) => {
      this.postProduct(item);
    });
  }
}
