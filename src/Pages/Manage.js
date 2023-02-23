import React, { useState } from "react";
import Header from "../components/Header";
import Categories from "../components/Manage/Categories";
import Products from "../components/Manage/Products";
import Trash from "../components/Manage/Trash";
import "../styles/Manage.scss";

const Manage = () => {
  const [controlActive, setControlActive] = useState({
    is_product_Active: true,
    is_category_Active: false,
    is_trash_Active: false,
  });
  const activateProduct = () => {
    setControlActive({
      is_product_Active: true,
      is_category_Active: false,
      is_trash_Active: false,
    });
  };
  const activateCategory = () => {
    setControlActive({
      is_product_Active: false,
      is_category_Active: true,
      is_trash_Active: false,
    });
  };
  const activateTrash = () => {
    setControlActive({
      is_product_Active: false,
      is_category_Active: false,
      is_trash_Active: true,
    });
  };

  return (
    <div className="manage_container">
      <Header />
      <div className="manage_actions">
        <div className="actions">
          <button
            onClick={activateProduct}
            className={controlActive.is_product_Active ? "active" : ""}
          >
            Products
          </button>
          <button
            onClick={activateTrash}
            className={controlActive.is_trash_Active ? "active" : ""}
          >
            Trash
          </button>
          <button
            onClick={activateCategory}
            className={controlActive.is_category_Active ? "active" : ""}
          >
            Category
          </button>
        </div>
        {controlActive.is_product_Active && <Products />}
        {controlActive.is_trash_Active && <Trash />}
        {controlActive.is_category_Active && <Categories />}
      </div>
    </div>
  );
};

export default Manage;
