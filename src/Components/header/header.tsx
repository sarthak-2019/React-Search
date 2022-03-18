import React, { useState } from "react";
import Search from "./searchbar/search";
import "./../../assets/css/header.css";

const Header = ({
  searchText,
  setSearchText,
  searchTextTemp,
  setSearchTextTemp,
  setCurrentPage,
}: any) => {
  return (
    <div className="header_main">
      <div className="image"></div>
      <div className="inside_class">
        <div className="header-title">
          There's more to life than
          <br /> being on the couch.
        </div>
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          searchTextTemp={searchTextTemp}
          setSearchTextTemp={setSearchTextTemp}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Header;
