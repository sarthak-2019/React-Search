import styled from "styled-components";
import Card from "../cards/card";

const MainContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  overflow-y: auto;
  @media (max-width: 500px) {
    overflow: hidden;
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
  gap: 40px;
  @media only screen and (max-width: 784px) {
    grid-template-columns: 350px;
  }
`;

const Skeleton = () => {
  return (
    <MainContainer>
      <Container>
        {[1, 2, 3, 4, 5].map((data: number, key: any) => {
          return <Card key={key} item="loader" />;
        })}
      </Container>
    </MainContainer>
  );
};

export default Skeleton;
