import styled from "styled-components";
const NullContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: auto;
  margin-bottom: 15px;
  .title {
    text-align: center;
    font-size: 24px;
    color: #666666;
    font-weight: 600;
    margin-bottom: 32px;
  }
  .recommendation {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
    .type {
      display: flex;
      flex-direction: column;
      background: #f8f8f8;
      gap: 20px;
      padding: 20px;
      border-radius: 10px;

      .type-name {
        padding-left: 10px;
        font-size: 20px;
        font-weight: 500;
      }

      .items {
        display: grid;
        grid-template-columns: max-content max-content;
        gap: 20px;
        .item {
          font-weight: bold;
          text-transform: uppercase;
          padding: 12px;
          border-radius: 10px;
          box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
            rgba(17, 17, 26, 0.05) 0px 8px 32px;
          &:hover {
            box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
              rgba(17, 17, 26, 0.1) 0px 8px 24px,
              rgba(17, 17, 26, 0.1) 0px 16px 48px;
            cursor: pointer;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 784px) {
    width: auto;
    justify-content: center;
    align-items: center;
  }
`;

const TravelCities = ["Shimla", "Manali", "Ooty", "Kerala"];
const TravelPlaces = ["Mountains", "Beach", "Waterfalls", "SeaShore"];

interface CardsProps {
  setSearchText: any;
  setSearchTextTemp: any;
}

const HomeCards = ({ setSearchTextTemp, setSearchText }: CardsProps) => {
  return (
    <NullContainer>
      <div className="title">Search Ideas</div>
      <div className="recommendation">
        <div className="type">
          <div className="type-name">Cities</div>
          <div className="items">
            {TravelCities.map((item) => (
              <div
                key={item}
                className="item"
                onClick={(e: any) => {
                  setSearchText(e.target.textContent);
                  setSearchTextTemp(e.target.textContent);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="type">
          <div className="type-name">Places</div>
          <div className="items">
            {TravelPlaces.map((item) => (
              <div
                key={item}
                className="item"
                onClick={(e: any) => {
                  setSearchText(e.target.textContent);
                  setSearchTextTemp(e.target.textContent);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </NullContainer>
  );
};

export default HomeCards;
