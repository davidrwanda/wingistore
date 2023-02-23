import { ProductModel } from "../model/ProductModel";
const productModel = new ProductModel();

export class ProductRepository {
  getProducts() {
    return productModel.getAll();
  }
  getProductByProductId(productId) {
    return productModel.getById(productId);
  }
  addProduct(product) {
    return productModel.add(product);
  }
  updateProduct(id, productData) {
    return productModel.update(id, productData);
  }
  deleteProduct(id) {
    return productModel.delete(id);
  }
}
