import React from "react";
import { useSelector } from "react-redux";
import CarPage from "./CarPage";

import ProductPage from "./ProductPage";

function Dish() {
  const { page } = useSelector((state) => state.dish);

  const handlePage = () => {
    if (page === 1) {
      return <ProductPage />;
    } else if (page === 2) {
      return <CarPage />;
    }
  };

  return <section className="flex flex-col h-screen">{handlePage()}</section>;
}

export default Dish;
