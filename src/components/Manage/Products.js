import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddNewProduct from "./AddNewProduct";
import { useDispatch } from "react-redux";
import { ManageController } from "../../controllers/ManageController";
import { showAdd, showEdit } from "../../features/tabSlice";
import { importCSV } from "../../helpers/importCSV"; // import the importCSV helper function
import { exportCSV } from "../../helpers/exportCSV";

const Products = () => {
  const dispatch = useDispatch();
  const manageController = new ManageController();
  const productList = manageController.getProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    const products = manageController.filterByName(searchQuery);
    setProducts(products);
  };

  const handleDelete = (id) => {
    manageController.updateProductStatus(id, 0);
    setProducts(manageController.getProducts());
  };

  useEffect(() => {
    const products = manageController.getProducts();
    setProducts(products);
  }, []);

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    importCSV(file, (data) => {
      manageController.batch(data);
    });
  };

  const handleExportCSV = () => {
    exportCSV(products);
  };
  return (
    <div className="manage_product_container">
      <h1>Products</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch();
        }}
      />
      <div className="add_action">
        <button onClick={() => dispatch(showAdd())}>Add</button>
        <button onClick={handleExportCSV}>Export</button>
        <button onClick={() => document.getElementById("import-input").click()}>
          Import
        </button>
        <input
          id="import-input"
          type="file"
          accept=".csv"
          style={{ display: "none" }}
          onChange={handleFileInput}
        />
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
          {productList.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  <Avatar src={product.image}></Avatar>
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>
                  <div className="actionbtn">
                    <EditIcon
                      onClick={() =>
                        dispatch(
                          showEdit({
                            id: product.id,
                            name: product.name,
                            category: product.category,
                          })
                        )
                      }
                      className="edit btn"
                    />
                    <DeleteIcon
                      className="delete btn"
                      onClick={() =>
                        window.confirm("Are sure you want to delete") &&
                        handleDelete(product.id)
                      }
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <AddNewProduct />
    </div>
  );
};

export default Products;
