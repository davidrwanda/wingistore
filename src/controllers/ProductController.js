// Import the ProductRepository class and the ProductBuilder class from the "../helpers" directory
import { ProductRepository } from "../helpers/ProductRepository";
import { ProductBuilder } from "../helpers/ProductsBuilder";

// Create a new instance of the ProductRepository class
const ProductRepo = new ProductRepository();

// Define the ProductController class
export class ProductController {
  // Constructor method that initializes the products property by getting the "products" key from local storage, or setting it to an empty array if it doesn't exist
  constructor() {
    this.products = localStorage.getItem("products")
      ? localStorage.getItem("products")
      : [];
  }

  // Method that returns an array of products whose status is 1 (active)
  getProducts() {
    // Call the getProducts method of the ProductRepository class and filter the results by product status
    return ProductRepo.getProducts().filter((product) => product.status === 1);
  }

  // Method that gets a product by its ID
  getProduct(id) {
    // Call the getProductByProductId method of the ProductRepository class with the given ID and return the result
    return ProductRepo.getProductByProductId(id);
  }

  // Method that filters the products based on various criteria
  filter(name, min, max, lowerPrice, higherPrice, status, store) {
    // Create a new instance of the ProductBuilder class with the products array and chain the filter methods based on the given criteria
    const filteredProducts = new ProductBuilder(JSON.parse(this.products))
      .filterByName(name)
      .filterByPriceRange(min, max)
      .filterByLowestPrice(lowerPrice)
      .filterByHighestPrice(higherPrice)
      .filterByStatus(status)
      .filterByStore(store).filteredData;
    // Update the products property with the filtered products and return them
    this.products = filteredProducts;
    return filteredProducts;
  }

  // Method that filters the products by category
  filterByCategory(category) {
    // Create a new instance of the ProductBuilder class with the products array and chain the filterByCategory method based on the given category
    const filteredProducts = new ProductBuilder(
      JSON.parse(this.products)
    ).filterByCategory(category).filteredData;
    // Update the products property with the filtered products and return them
    this.products = filteredProducts;
    return filteredProducts;
  }

  // Method that filters the products by name
  filterByName(name) {
    // Create a new instance of the ProductBuilder class with the products array and chain the filterByName method based on the given name
    const filteredProducts = new ProductBuilder(
      JSON.parse(this.products)
    ).filterByName(name).filteredData;
    // Update the products property with the filtered products and return them
    this.products = filteredProducts;
    return filteredProducts;
  }

  // Method that resets the product filter
  resetFilter() {
    // Call the resetFilter method of the ProductBuilder class and return the filtered products
    return this.productFilter.resetFilter().filteredProducts;
  }

  // Method that adds multiple products to the repository at once
  batch(data) {
    // Iterate over the array of products and call the addProduct method of the ProductRepository class for each one
    data.forEach((product) => {
      ProductRepo.addProduct(product);
    });
  }
}
