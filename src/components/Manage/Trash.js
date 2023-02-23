import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddNewProduct from "./AddNewProduct";
import { useDispatch } from "react-redux";
import RestoreIcon from "@mui/icons-material/Restore";
import SearchIcon from "@mui/icons-material/Search";
import { ManageController } from "../../controllers/ManageController";
import { exportCSV } from "../../helpers/exportCSV";

const ManageCtrl = new ManageController();

const Trash = () => {
  const [isShow, setIsShow] = useState({ show: false, data: null });
  const [trashedProducts, setTrashedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const products = trashedProducts.filter((p) => p.name == searchQuery);
    setTrashedProducts(products);
  };

  useEffect(() => {
    const trashed = ManageCtrl.getTrashedProducts();
    setTrashedProducts(trashed);
  }, []);

  return (
    <div className="manage_product_container">
      <div className="store_products_filter">
        <div>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch();
            }}
          />
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
          {trashedProducts.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  <Avatar></Avatar>
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>
                  <div className="actionbtn">
                    <RestoreIcon
                      className="restore btn"
                      onClick={() => {
                        if (
                          window.confirm("Are you sure you want to restore?")
                        ) {
                          ManageCtrl.updateProductStatus(product.id, 1);
                          const updatedTrashedProducts = trashedProducts.filter(
                            (p) => p.id !== product.id
                          );
                          setTrashedProducts(updatedTrashedProducts);
                        }
                      }}
                    />
                    <DeleteIcon
                      className="delete btn"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want delete permanently"
                          )
                        ) {
                          ManageCtrl.deleteProduct(product.id);
                          const updatedTrashedProducts = trashedProducts.filter(
                            (p) => p.id !== product.id
                          );
                          setTrashedProducts(updatedTrashedProducts);
                        }
                      }}
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
