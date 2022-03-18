import React from "react";
import SvgInk from "../../assets/svgs/Ink";
import styled from "styled-components";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 20px;
  overflow-y: auto;
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
const Text = styled.div`
  font-size: 31px;
  margin-bottom: 22px;
  font-weight: 500;
`;
const NotFound = () => {
  return (
    <MainContainer>
      <Text>No Results Found! </Text>
      <SvgInk />
    </MainContainer>
  );
};

export default NotFound;
