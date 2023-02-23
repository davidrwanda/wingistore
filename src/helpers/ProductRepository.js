import { ProductModel } from "../model/ProductModel";
const products = [
  {
    id: 1,
    name: "product1",
    price: 300,
    description: "product description",
    image: "images/apple",
    category: "Fashion",
    status: 1,
    store: "apple",
  },
  {
    id: 2,
    name: "product1",
    price: 300,
    description: "product description",
    image: "images/apple",
    category: "Sports",
    status: 1,
    store: "apple",
  },
  {
    id: 3,
    name: "product1",
    price: 300,
    description: "product description",
    image: "images/apple",
    category: "Electronics",
    status: 0,
    store: "apple",
  },
  {
    id: 4,
    name: "product1",
    price: 300,
    description: "product description",
    image: "images/apple",
    category: "Electronics",
    status: 1,
    store: "apple",
  },
];
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
