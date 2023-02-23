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
    if (!localStorage.getItem("products")) {
      localStorage.setItem("products", JSON.stringify([]));
    }
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
      filtered = controller
        .filterByCategory(category)
        .filter((p) => p.status === 1);
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
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
