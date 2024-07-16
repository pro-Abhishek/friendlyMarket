import React from "react";
import Product from "./Product";
import { useFilterContext } from "../contaxt/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";
const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();
  if (grid_view === true) {
    return <GridView products={filter_products}></GridView>;
  }
  if (grid_view === false) {
    console.log(filter_products);
    return <ListView products={filter_products}></ListView>;
  }
};

export default ProductList;
