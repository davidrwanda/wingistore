import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

const AddNewProduct = ({ isShow }) => {
  return (
    <div className={`add_new_product ${isShow.show ? "show" : "hide"}`}>
      <h1>
        Add New Product{" "}
        <span>
          <ClearIcon />
        </span>
      </h1>
      <hr />
      <form action="">
        <label>Name</label>
        <input type="text" placeholder="Name" />
        <label>Description</label>
        <input type="text" placeholder="Description" />
        <label>Price</label>
        <input type="text" placeholder="Price" />
        <label>Category</label>
        <select name="" id="">
          <option value="">Tech</option>
          <option value="">Fashion</option>
          <option value="">Trending</option>
        </select>
        <label>Image</label>
        <input type="file" placeholder="" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddNewProduct;
