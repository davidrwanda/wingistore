import React, { useState } from "react";
import { Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddNewProduct from "./AddNewProduct";
const Products = () => {
  const [isShow, setIsShow] = useState({ show: false, data: null });
  return (
    <div className="manage_product_container">
      <h1>Products</h1>
      <div className="add_action">
        <button onClick={() => setIsShow({ show: !isShow.show, data: null })}>
          Add
        </button>
      </div>
      <div className="product_table">
        <table id="products">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Descrption</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <Avatar></Avatar>
            </td>
            <td>Shoes</td>
            <td>Fashion</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
            <td>$200</td>
            <td>
              <EditIcon
                onClick={() => setIsShow({ show: !isShow.show, data: null })}
              />
              <DeleteIcon />
            </td>
          </tr>
        </table>
      </div>
      <AddNewProduct isShow={isShow} />
    </div>
  );
};

export default Products;
