import React from "react";

const ListItem = ({
  data,
  setSearchTextTemp,
  setSearchText,
  setIsOpenList,
}: any) => {
  return (
    <div
      className="dropdown-menu1"
      onClick={() => {
        setSearchTextTemp(data);
        setSearchText(data);
        setIsOpenList(false);
      }}
    >
      {data}
    </div>
  );
};

export default ListItem;
