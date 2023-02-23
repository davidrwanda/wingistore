import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddNewProduct from "./AddNewProduct";
import { useDispatch, useSelector } from "react-redux";
import { ManageController } from "../../controllers/ManageController";
import { ProductController } from "../../controllers/ProductController";
import { selectIsSubmitted, showAdd, showEdit } from "../../features/tabSlice";
import SearchIcon from "@mui/icons-material/Search";
import { importCSV } from "../../helpers/importCSV"; // import the importCSV helper function
import { exportCSV } from "../../helpers/exportCSV";

const Products = () => {
  const dispatch = useDispatch();
  const manageController = new ManageController();
  const productController = new ProductController();
  const triggered = useSelector(selectIsSubmitted);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    const products = productController.filterByName(searchQuery);
    console.log(searchQuery);
    setProducts(products);
  };

  const handleDelete = (id) => {
    manageController.updateProductStatus(id, 0);
    setProducts(manageController.getProducts());
  };

  const categoryFilterHandler = (event) => {
    const category = event.target.value;
    if (category == "All") {
      setProducts(productController.getProducts());
    } else {
      const products = productController.filterByCategory(category);
      setProducts(products);
    }
  };
  useEffect(() => {
    const products = manageController.getProducts();
    setProducts(products);
  }, [triggered]);

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

      <div className="add_action">
        <div>
          <button onClick={() => dispatch(showAdd())}>Add</button>
          <button onClick={handleExportCSV}>Export</button>
          <button
            onClick={() => document.getElementById("import-input").click()}
          >
            Import
          </button>
        </div>

        <div>
          <div className="store_products_filter">
            <div>
              <SearchIcon />
              <select
                type="text"
                placeholder="Search by name"
                onChange={categoryFilterHandler}
              >
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Sport">Sports</option>
              </select>
            </div>
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
        </div>

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
          {products.map((product) => {
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
                            price: product.price,
                            description: product.description,
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
