import React, { useState, useEffect } from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import Product from "../components/Product";
import "../styles/Home.scss";
import SearchIcon from "@mui/icons-material/Search";
import { ProductController } from "../controllers/ProductController";

const Home = () => {
  const controller = new ProductController();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const productData = controller.getProducts();
    setFilteredProducts(productData);
  }, []);

  const handleSearch = () => {
    const products = controller.filterByName(searchQuery);
    setFilteredProducts(products);
  };

  const filterProducts = (category) => {
    let filtered = [];
    if (category === "all") {
      filtered = controller.getProducts();
    } else {
      filtered = controller.filterByCategory(category);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Header />
      <div className="home_container">
        <div className="category">
          <Category filterProducts={filterProducts} />
        </div>
        <div className="store_products_listing">
          <div className="store_products_filter">
            <div>
              <SearchIcon />
              <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearch();
                }}
              />
            </div>
          </div>
          <div className="store_product">
<<<<<<< HEAD
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
=======
            <Product></Product>
            {/* <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product> */}
>>>>>>> 6121a0f04022d1b2d9cb7d60479784771b20a77f
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
