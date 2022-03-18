import { useState, useEffect, useContext } from "react";
import Header from "../Components/header/header";
import styled from "styled-components";
import Cards from "../Components/cards/cards";
import Skeleton from "../Components/skeleton/Skeleton";
import { Pagination } from "antd";
import AOS from "aos";
import { useSearchFilter } from "../customHooks/usesearchFilter";
import { DataContext } from "./../App";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  @media only screen and (max-width: 784px) {
    overflow: auto;
  }
`;
const Main = ({ data, loading }: any) => {
  const [searchTextTemp, setSearchTextTemp] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [maxPages, setMaxPages] = useState(4);
  function onChange(pageNumber: any) {
    setCurrentPage(pageNumber - 1);
  }
  const dataContext: any = useContext(DataContext);

  const resData: any = useSearchFilter(
    dataContext,
    searchText,
    currentPage,
    setMaxPages
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container data-aos="fade-up">
      <Header
        setCurrentPage={setCurrentPage}
        maxPages={maxPages}
        searchText={searchText}
        setSearchText={setSearchText}
        searchTextTemp={searchTextTemp}
        setSearchTextTemp={setSearchTextTemp}
      />
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <Cards
            setSearchTextTemp={setSearchTextTemp}
            setSearchText={setSearchText}
            searchText={searchText}
          />
          {data &&
            (data.data.length === 0 || searchText.length === 0 ? null : (
              <Pagination
                style={{ marginTop: "20px", marginBottom: "10px" }}
                defaultCurrent={currentPage + 1}
                total={maxPages}
                onChange={onChange}
              />
            ))}
        </>
      )}
    </Container>
  );
};

export default Main;
