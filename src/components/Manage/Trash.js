import React, { useState } from "react";
import { Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddNewProduct from "./AddNewProduct";
import { useDispatch } from "react-redux";
import RestoreIcon from "@mui/icons-material/Restore";

const Trash = () => {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState({ show: false, data: null });
  return (
    <div className="manage_product_container">
      <h1>Trash</h1>
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => {
            return (
              <tr key={el}>
                <td>
                  <Avatar></Avatar>
                </td>
                <td>Shoes</td>
                <td>Fashion</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
                <td>$200</td>
                <td>
                  <div className="actionbtn">
                    <RestoreIcon
                      className="restore btn"
                      onClick={() =>
                        window.confirm("Are sure you want to restore")
                      }
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <AddNewProduct isShow={isShow} />
    </div>
  );
};

export default Trash;
