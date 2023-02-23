import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ProductImg from "../assets/laptop.jpg";
import "../styles/Details.scss";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="product_detail_container">
      <Header />
      <div className="detail">
        <button className="back" onClick={() => navigate("/")}>
          Back
        </button>
        <div className="image">
          <img src={product.image} alt="" />
        </div>
        <div className="other_info">
          <h1>
            {product.name} <span>{product.category}</span>
          </h1>
          <h5>${product.price}</h5>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
