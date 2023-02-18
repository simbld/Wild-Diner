import React from "react";
import PropTypes from "prop-types";
import DishList from "../../components/DishList/DishList";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home({ dishes, onSearch }) {
  return (
    <>
      <Header dishes={dishes} />
      <div className="container">
        <h1 className="text-center my-5">Menu</h1>
        <SearchBar onSearch={onSearch} />
        <DishList dishes={dishes} />
      </div>
    </>
  );
}

Home.propTypes = {
  dishes: PropTypes.arrayOf.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Home;
