import React from "react";
import "../../styles/Category.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const Categories = () => {
  return (
    <div className="categories_add_container">
      <h1>Categories</h1>
      <div className="addNew">
        <input type="text" placeholder="add new" />
        <button>Add New</button>
      </div>
      <table>
        <th>
          <td>Categories</td>
        </th>
        <tr>
          <td>
            Tech
            <span>
              <DeleteIcon
                className="delete"
                onClick={() =>
                  window.confirm("Are you sure you want to delete?")
                }
              />
            </span>
          </td>
        </tr>
        <tr>
          <td>
            Electronics
            <span>
              <DeleteIcon
                className="delete"
                onClick={() =>
                  window.confirm("Are you sure you want to delete?")
                }
              />
            </span>
          </td>
        </tr>
        <tr>
          <td>
            Fashion
            <span>
              <DeleteIcon
                className="delete"
                onClick={() =>
                  window.confirm("Are you sure you want to delete?")
                }
              />
            </span>
          </td>
        </tr>
        <tr>
          <td>
            Sports
            <span>
              <DeleteIcon
                className="delete"
                onClick={() =>
                  window.confirm("Are you sure you want to delete?")
                }
              />
            </span>
          </td>
        </tr>
        <tr>
          <td>
            Fashion
            <span>
              <DeleteIcon className="delete btn" />
            </span>
          </td>
        </tr>
        <tr>
          <td>
            Fashion
            <span>
              <DeleteIcon className="delete btn" />
            </span>
          </td>
        </tr>
        Sports
      </table>
    </div>
  );
};

export default Categories;
