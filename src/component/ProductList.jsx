import React from "react";
import Product from "./Product";
import Sort from "./Sort";

const ProductList = () => {
  return (
    <div className="flex-grow p-4">
      <Sort />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
