import React from "react";

const Category = ({ filterProducts }) => {
  const handleFilter = (category) => {
    filterProducts(category);
  };

  return (
    <div className="category_container">
      <h1>CATEGORIES</h1>
      <button onClick={() => handleFilter("all")}>all</button>
      <button onClick={() => handleFilter("Electronics")}>Electronics</button>
      <button onClick={() => handleFilter("Fashion")}>Fashion</button>
      <button onClick={() => handleFilter("Sports")}>Sports</button>
    </div>
  );
};

export default Category;
