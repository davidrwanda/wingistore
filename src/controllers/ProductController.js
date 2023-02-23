import { ProductRepository } from "../helpers/ProductRepository";
import { ProductBuilder } from "../helpers/ProductsBuilder";
// import { stringify } from "csv-stringify";
// import { saveAs } from "file-saver";
// import { parse } from "csv-parse";
// import * as buffer from "buffer";
// global.Buffer = buffer.Buffer;
const ProductRepo = new ProductRepository();
export class ProductController {
  constructor() {
    this.products = localStorage.getItem("products")
      ? localStorage.getItem("products")
      : [];
  }
  getProducts() {
    return ProductRepo.getProducts().filter((product) => product.status === 1);
  }
  getProduct(id) {
    return ProductRepo.getProductByProductId(id);
  }
  filter(name, min, max, lowerPrice, higherPrice, status, store) {
    const filteredProducts = new ProductBuilder(JSON.parse(this.products))
      .filterByName(name)
      .filterByPriceRange(min, max)
      .filterByLowestPrice(lowerPrice)
      .filterByHighestPrice(higherPrice)
      .filterByStatus(status)
      .filterByStore(store).filteredData;
    this.products = filteredProducts;
    return filteredProducts;
  }
  filterByCategory(category) {
    const filteredProducts = new ProductBuilder(
      JSON.parse(this.products)
    ).filterByCategory(category).filteredData;
    this.products = filteredProducts;
    return filteredProducts;
  }
  filterByName(name) {
    const filteredProducts = new ProductBuilder(
      JSON.parse(this.products)
    ).filterByName(name).filteredData;
    this.products = filteredProducts;
    return filteredProducts;
  }
  resetFilter() {
    return this.productFilter.resetFilter().filteredProducts;
  }
  batch(data) {
    data.forEach((product) => {
      ProductRepo.addProduct(product);
    });
  }
}
