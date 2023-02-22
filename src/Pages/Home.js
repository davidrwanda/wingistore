import React from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import Product from "../components/Product";
import "../styles/Home.scss";
import SearchIcon from "@mui/icons-material/Search";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="home_container">
        <div className="category">
          <Category />
        </div>
        <div className="store_products_listing">
          <div className="store_products_filter">
            <div>
              <SearchIcon />
              <input type="text" placeholder="Search by name" />
            </div>
          </div>
          <div className="store_product">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
