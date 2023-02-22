import React from "react";
import ProductImg from "../assets/laptop.jpg";
import "../styles/Product.scss";
const Product = () => {
  return (
    <div className="product_container">
      <div className="image">
        <img src={ProductImg} alt="" />
      </div>
      <div className="other_info">
        <h1>
          Shoes <span>Category</span>
        </h1>
        <h1>$300</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          nulla.
        </p>
        <button>More</button>
      </div>
    </div>
  );
};

export default Product;
