import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../App";
import "./../../../assets/css/search.css";
import SearchIcon from "../../../assets/svgs/SearchIcon";
import CrossIcon from "../../../assets/svgs/CrossIcon";
import DropDown from "./DropDown";

const Search = ({
  searchText,
  setSearchText,
  searchTextTemp,
  setSearchTextTemp,
  setCurrentPage,
}: any) => {
  const dataContext: any = useContext(DataContext);
  const [isOpenList, setIsOpenList] = useState<Boolean>(false);

  useEffect(() => {
    if (searchTextTemp.length < 3 && searchTextTemp.length >= 1) {
      setIsOpenList(true);
    } else {
      setIsOpenList(false);
    }

    const timer = setTimeout(() => {
      if (searchText !== searchTextTemp) {
        setCurrentPage(0);
        setSearchText(searchTextTemp);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTextTemp]);

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setIsOpenList(false);
      setCurrentPage(0);
      setSearchText(searchTextTemp);
    }
  };

  return (
    <div>
      <div className="dropdown">
        <div className="input_main">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <input
            className="input_class"
            value={searchTextTemp}
            onChange={(e) => {
              if (e.target.value.length >= 3) setIsOpenList(false);
              if (e.target.value.length < 3) setIsOpenList(true);
              setSearchTextTemp(e.target.value);
            }}
            onFocus={(e) => {
              if (e.target.value.length >= 3) setIsOpenList(false);
              else setIsOpenList(true);
            }}
            onBlur={(e) => {
              setTimeout(() => setIsOpenList(false), 500);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Let's Discover"
            autoComplete="off"
          />
          {searchTextTemp.length > 0 && (
            <div
              className="close_icon"
              onClick={() => {
                setSearchText("");
                setSearchTextTemp("");
                setIsOpenList(true);
                setCurrentPage(0);
              }}
            >
              <CrossIcon />
            </div>
          )}
        </div>
        {isOpenList ? (
          <DropDown
            setSearchText={setSearchText}
            setSearchTextTemp={setSearchTextTemp}
            setIsOpenList={setIsOpenList}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
