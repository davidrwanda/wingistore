import React, { useEffect, useRef, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { resetTab, selectTab } from "../../features/tabSlice";

const AddNewProduct = () => {
  const whichTab = useSelector(selectTab);
  const dispatch = useDispatch();
  const [pname, setPname] = useState();
  useEffect(() => {
    if (whichTab?.edit?.show) {
      setPname(whichTab.edit.data.name);
    }
  }, [whichTab]);
  const resetForm = () => {
    setPname("");
    dispatch(resetTab());
  };
  return (
    <div
      className={`add_new_product ${
        whichTab.add.show || whichTab.edit.show ? "show" : "hide"
      }`}
    >
      <h1>
        {whichTab.edit.show && "Edit Product"}
        {whichTab.add.show && "Add New Product"}
        <span>
          <ClearIcon onClick={resetForm} />
        </span>
      </h1>
      <hr />
      <form action="">
        <label>Name</label>
        <input
          type="text"
          value={pname}
          onChange={(e) => setPname(e.target.value)}
          placeholder="Name"
        />
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
