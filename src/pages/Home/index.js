import React from "react";
import {
  CategoryProducts,
  WeeklyBest,
  DiscountProducts,
} from "./components/index";
const Home = () => {
  return (
    <div>
      <WeeklyBest />
      <DiscountProducts />
      <CategoryProducts />
    </div>
  );
};

export default Home;
