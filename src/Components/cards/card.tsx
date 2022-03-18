import styled from "styled-components";
import SkeletonAnimate from "../skeleton/SkeletonAnimate";
import image from "./../../assets/images/image.png";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  width: 370px;
  min-height: 200px;
  gap: 42px;
  padding: 10px;
  transition: transform ease 400ms;
  padding-bottom: 31px;
  :hover {
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.06);
    border: none;
    cursor: pointer;
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 687px) {
  }
  @media (max-width: 500px) {
  }
  @media (max-width: 360px) {
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  div {
    height: 152px;
    width: 152px;
    img {
      height: 150px;
      width: 150px;
      overflow: hidden;
      border-radius: 8px;
      object-fit: cover;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 500px) {
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  flex-grow: 1;

  .title-review {
    display: flex;
    gap: 10px;
  }
  @media (max-width: 500px) {
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  /* word-break: calc(); */
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  line-height: 21px;
  color: #939393;
  flex-wrap: wrap;
`;

const Review = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  span {
    width: max-content;
    svg {
      transform: translateY(-2px);
      vertical-align: middle;
    }
  }
`;

const Button = styled.div`
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 34px;
    width: 133px;
    color: white;
    font-size: 12px;
    font-weight: 500;
    border-radius: 2px;
    background: #1f7ae0;
    border: 1px solid #1f7ae0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
  .btn:hover {
    background-color: #2685ef;
    border-color: #2685ef;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }
`;

const Card = ({ item }: any) => {
  if (item == "loader") {
    return (
      <Container>
        <ImageContainer>
          <div>
            <SkeletonAnimate height="100%" width="100%" />
          </div>
        </ImageContainer>
        <Info>
          <Flex style={{ gap: 20, transform: "translateY(5px)" }}>
            <Title>
              <SkeletonAnimate height="30px" width="90px" />
            </Title>
            <Description>
              <SkeletonAnimate height="10px" width="90px" />
            </Description>
          </Flex>

          <Button style={{ transform: "translateY(-5px)" }}>
            <SkeletonAnimate height="34px" width="133px" />
          </Button>
        </Info>
      </Container>
    );
  }

  return (
    <Container>
      <ImageContainer>
        <div>
          <img
            src={
              item?.result_object?.photo
                ? item?.result_object?.photo?.images?.small?.url
                : image
            }
            alt="./image.png"
          />
        </div>
      </ImageContainer>
      <Info>
        <Flex>
          <Title>{item?.result_object?.name}</Title>
          <Description>
            <span>
              {item?.result_object?.category.length > 0
                ? item?.result_object.subcategory[0].name
                : item?.result_object.subcategory.length > 0
                ? item?.result_object.subcategory[0].name
                : "Unknown"}
            </span>
            <Review>
              {item?.result_object?.rating ? item?.result_object?.rating : 4.3}{" "}
              <span>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.69916 0.386942C8.62759 0.156232 8.42232 0 8.19104 0C7.95965 0 7.75449 0.156223 7.68292 0.386942L6.04028 5.68363H0.725227C0.493837 5.68363 0.288682 5.83986 0.217111 6.07058C0.145545 6.30128 0.224028 6.55376 0.41105 6.69658L4.71146 9.97026L3.06882 15.267C2.99726 15.4977 3.07526 15.7507 3.26276 15.893C3.44978 16.0357 3.70361 16.0357 3.89109 15.893L8.19089 12.6193L12.4907 15.893C12.6782 16.0357 12.932 16.0357 13.119 15.893C13.3065 15.7507 13.3846 15.4977 13.313 15.267L11.6703 9.97026L15.9707 6.69658C16.1578 6.55386 16.2364 6.30129 16.1647 6.07058C16.0931 5.83987 15.8878 5.68363 15.6566 5.68363H10.3415L8.69886 0.386942H8.69916Z"
                    fill="#FDC51C"
                  />
                </svg>
              </span>
            </Review>
          </Description>
        </Flex>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${item?.result_object?.latitude}%2C${item?.result_object?.longitude}`}
          target="_blank"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button>
            <div className="btn">Get Direction</div>
          </Button>
        </a>
      </Info>
    </Container>
  );
};

export default Card;
