import React from "react";
import { useNavigate } from "react-router-dom";
import ProductImg from "../assets/laptop.jpg";
import "../styles/Product.scss";
const Product = ({ product }) => {
  return (
    <div className="product_container">
      <div className="image">
        <img src={ProductImg} alt="" />
      </div>
      <div className="other_info">
        <h1>
          {product.name} <span>{product.category}</span>
        </h1>
        <h1>{product.price}</h1>
        <p>{product.description}</p>
        <button>More</button>
      </div>
    </div>
  );
};

export default Product;
