import React from "react";
import Banner_part from "../banner/banner";
import FeaturedGames from "../banner/featured";
import Categories from "../banner/categories";
import Recommend from "../banner/recommend";

const HomePage = () => {
  return (
    <div>
      <Banner_part />
      <FeaturedGames />
      <Categories />
      <Recommend />
    </div>
  );
};

export default HomePage;
