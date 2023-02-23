import React from "react";
import { useNavigate } from "react-router-dom";
import ProductImg from "../assets/laptop.jpg";
import "../styles/Product.scss";
const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="product_container">
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="other_info">
        <h1>
          {product.name} <span>{product.category}</span>
        </h1>
        <h1>${product.price}</h1>
        <button onClick={() => navigate(`/product/${product.id}`)}>More</button>
      </div>
    </div>
  );
};

export default Product;
