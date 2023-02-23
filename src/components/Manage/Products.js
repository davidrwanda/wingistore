import React, { useState } from "react";
import { Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddNewProduct from "./AddNewProduct";
import { useDispatch } from "react-redux";
import { showAdd, showEdit } from "../../features/tabSlice";
import SearchIcon from "@mui/icons-material/Search";
const Products = () => {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState({ show: false, data: null });
  return (
    <div className="manage_product_container">
      <h1>Products</h1>
      <div className="add_action">
        <button onClick={() => dispatch(showAdd())}>Add</button>
        <div className="store_products_filter">
          <div>
            <SearchIcon />
            <input type="text" placeholder="Search by name" />
          </div>
        </div>
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
                    <EditIcon
                      onClick={() =>
                        dispatch(
                          showEdit({
                            id: 1,
                            name: "shoes",
                            category: "Fashion",
                          })
                        )
                      }
                      className="edit btn"
                    />
                    <DeleteIcon
                      className="delete btn"
                      onClick={() =>
                        window.confirm("Are sure you want to delete")
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

export default Products;
