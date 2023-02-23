import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ProductImg from "../assets/laptop.jpg";
import "../styles/Details.scss";

const ProductDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="product_detail_container">
      <Header />
      <div className="detail">
        <button className="back" onClick={() => navigate("/")}>
          Back
        </button>
        <div className="image">
          <img src={ProductImg} alt="" />
        </div>
        <div className="other_info">
          <h1>
            Shoes <span>Category</span>
          </h1>
          <h5>$300</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint
            iste saepe minus quisquam illo dicta dolorum rem, doloribus aliquam
            et exercitationem vero nulla culpa! Doloremque incidunt modi aliquid
            voluptatibus tenetur error animi laboriosam quae et, rerum similique
            veritatis molestiae, velit at saepe ducimus beatae nostrum suscipit
            repudiandae aspernatur officiis minus quo? Doloribus dolorem
            possimus expedita cum in dignissimos quae repellendus? Voluptates,
            nostrum autem iure ex qui consequuntur optio maxime non laborum
            vitae! Culpa fuga tempora doloremque architecto, mollitia nihil sint
            saepe assumenda itaque minus consectetur minima molestiae quisquam
            fugit ullam quis dignissimos quia perferendis! Id commodi magni
            labore maiores?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
