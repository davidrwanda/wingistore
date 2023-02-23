import React, { useEffect, useRef, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { resetTab, selectTab, showIsSubmitted } from "../../features/tabSlice";
import { ManageController } from "../../controllers/ManageController";

const AddNewProduct = () => {
  const manageController = new ManageController();
  const whichTab = useSelector(selectTab);
  const dispatch = useDispatch();
  const [pid, setPid] = useState("");
  const [pname, setPname] = useState("");
  const [pdesc, setPdesc] = useState("");
  const [pprice, setPprice] = useState("");
  const [pcategory, setPcategory] = useState("");
  const [pimage, setPimage] = useState("");

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imageUrl = URL.createObjectURL(file);
      setPimage(imageUrl);
    };
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: pname,
      description: pdesc,
      price: pprice,
      category: pcategory,
      image: pimage,
      status: 1,
    };
    whichTab.edit.show
      ? manageController.updateProduct(pid, newProduct)
      : manageController.postProduct(newProduct);
    resetForm();
    dispatch(showIsSubmitted());
  };

  useEffect(() => {
    if (whichTab?.edit?.show) {
      console.log(whichTab.edit.data.product);
      setPid(whichTab.edit.data.id);
      setPname(whichTab.edit.data.name);
      setPdesc(whichTab.edit.data.description);
      setPprice(whichTab.edit.data.price);
      setPcategory(whichTab.edit.data.category);
      setPimage(whichTab.edit.data.image);
    }
  }, [whichTab]);

  const resetForm = () => {
    setPid("");
    setPname("");
    setPdesc("");
    setPprice("");
    setPcategory("");
    setPimage("");
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
      <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={pname}
          onChange={(e) => setPname(e.target.value)}
          placeholder="Name"
        />
        <label>Description</label>
        <input
          type="text"
          value={pdesc}
          onChange={(e) => setPdesc(e.target.value)}
          placeholder="Description"
        />
        <label>Price</label>
        <input
          type="text"
          value={pprice}
          onChange={(e) => setPprice(e.target.value)}
          placeholder="Price"
        />
        <label>Category</label>
        <select
          value={pcategory}
          onChange={(e) => setPcategory(e.target.value)}
        >
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="sports">Sports</option>
        </select>
        <label>Image</label>
        <input type="file" onChange={handleImageChange} placeholder="" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewProduct;
