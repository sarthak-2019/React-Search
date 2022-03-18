import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

const DropDown = ({ setSearchText, setSearchTextTemp, setIsOpenList }: any) => {
  const [optionLoop, setOptionLoop] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("searchList")) {
      let searchListNew = JSON.parse(localStorage.searchList);
      setOptionLoop(searchListNew);
    }
  }, []);

  return (
    <div className="dropdown-menu">
      <div className="first_instrection">
        <div className="text_1">Type at least 3 characters</div>
        <div className="text_2">to start searching</div>
      </div>
      {optionLoop.length !== 0 && (
        <div className="recent_text">Recent searches</div>
      )}
      {optionLoop.map((data, index) => {
        return (
          <ListItem
            data={data}
            key={index}
            setSearchText={setSearchText}
            setSearchTextTemp={setSearchTextTemp}
            setIsOpenList={setIsOpenList}
          />
        );
      })}
    </div>
  );
};

export default DropDown;
