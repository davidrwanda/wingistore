import React, { useState } from "react";
import Header from "../components/Header";
import Categories from "../components/Manage/Categories";
import Products from "../components/Manage/Products";
import "../styles/Manage.scss";

const Manage = () => {
  const [controlActive, setControlActive] = useState({
    is_product_Active: true,
    is_category_Active: false,
  });
  const activateProduct = () => {
    setControlActive({
      is_product_Active: true,
      is_category_Active: false,
    });
  };
  const activateCategory = () => {
    setControlActive({
      is_product_Active: false,
      is_category_Active: true,
    });
  };
  return (
    <div className="manage_container">
      <Header />
      <div className="manage_actions">
        <div className="actions">
          <button onClick={activateProduct}>Products</button>
          <button onClick={activateCategory}>Category</button>
        </div>
        {controlActive.is_product_Active && <Products />}
        {controlActive.is_category_Active && <Categories />}
      </div>
    </div>
  );
};

export default Manage;
