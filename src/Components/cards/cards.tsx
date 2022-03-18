import { useContext, useEffect } from "react";
import styled from "styled-components";
import { DataContext } from "../../App";
import Card from "./card";
import HomeCards from "./HomeCards";
import NotFound from "./NotFound";
const MainContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 500px) {
    height: auto;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 350px 350px;
  align-items: center;
  justify-content: center;
  gap: 22px;
  overflow-x: hidden;
  @media only screen and (max-width: 784px) {
    grid-template-columns: 350px;
  }
`;

interface CardsProps {
  setSearchText: any;
  setSearchTextTemp: any;
  searchText: any;
}

const Cards = ({
  setSearchTextTemp,
  setSearchText,
  searchText,
}: CardsProps) => {
  const dataContext: any = useContext(DataContext);

  if (searchText.length === 0) {
    return (
      <MainContainer>
        <HomeCards
          setSearchTextTemp={setSearchTextTemp}
          setSearchText={setSearchText}
        />
      </MainContainer>
    );
  } else
    return (
      <MainContainer>
        {dataContext.data ? (
          dataContext?.data.data.length === 0 ? (
            <NotFound />
          ) : (
            <Container>
              {dataContext?.data.data.map((item: any, index: any) => {
                return <Card item={item} key={index} />;
              })}
            </Container>
          )
        ) : (
          <HomeCards
            setSearchTextTemp={setSearchTextTemp}
            setSearchText={setSearchText}
          />
        )}
      </MainContainer>
    );
};

export default Cards;
