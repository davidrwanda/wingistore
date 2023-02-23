// Import the ProductRepository class from the "../helpers/ProductRepository" file
import { ProductRepository } from "../helpers/ProductRepository";

// Create a new instance of the ProductRepository class
const ProductRepo = new ProductRepository();

// Define the ManageController class
export class ManageController {
  // Constructor method that initializes the products property by parsing the "products" key from local storage
  constructor() {
    this.products = JSON.parse(localStorage.getItem("products"));
  }

  // Method that returns an array of products whose status is 1 (active)
  getProducts() {
    // Call the getProducts method of the ProductRepository class and filter the results by product status
    return ProductRepo.getProducts().filter((product) => product.status === 1);
  }

  // Method that returns an array of products whose status is 0 (trashed)
  getTrashedProducts() {
    // Call the getProducts method of the ProductRepository class and filter the results by product status
    return ProductRepo.getProducts().filter((product) => product.status === 0);
  }

  // Method that gets a product by its ID
  getProduct(productId) {
    // Call the getProductByProductId method of the ProductRepository class with the given ID and return the result
    return ProductRepo.getProductByProductId(productId);
  }

  // Method that adds a new product to the repository
  postProduct(product) {
    // Call the addProduct method of the ProductRepository class with the new product and return the result
    return ProductRepo.addProduct(product);
  }

  // Method that updates an existing product in the repository
  updateProduct(id, product) {
    // Call the updateProduct method of the ProductRepository class with the ID and updated product, and return the result
    return ProductRepo.updateProduct(id, product);
  }

  // Method that updates the status of a product in the repository
  updateProductStatus(id, status) {
    // Find the product with the given ID in the this.products array
    const product = this.products.find((product) => product.id === id);
    // Update the product status
    product.status = status;
    // Call the updateProduct method of the ProductRepository class with the ID and updated product, and return the result
    return ProductRepo.updateProduct(id, product);
  }

  // Method that deletes a product from the repository
  deleteProduct(id) {
    // Call the deleteProduct method of the ProductRepository class with the ID and return the result
    return ProductRepo.deleteProduct(id);
  }

  // Method that adds multiple products to the repository at once
  batch(data) {
    // Iterate over the array of products and call the postProduct method for each one
    data.forEach((item) => {
      this.postProduct(item);
    });
  }
}
