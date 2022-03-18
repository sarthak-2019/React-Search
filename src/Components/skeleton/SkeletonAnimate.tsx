import styled from "styled-components";
import { keyframes } from "styled-components";

interface ContainerProps {
  width: string;
  height: string;
}

const animate = keyframes`
0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
`;

const MainContainer = styled.div`
  .skeleton-animate {
    animation: ${animate} 1s linear infinite alternate;
  }
`;

const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

interface SkeletonProps {
  height: string;
  width: string;
}
const SkeletonAnimate = ({ height, width }: SkeletonProps) => {
  return (
    <MainContainer>
      <Container
        className="skeleton-animate"
        height={height}
        width={width}
      ></Container>
    </MainContainer>
  );
};

export default SkeletonAnimate;
