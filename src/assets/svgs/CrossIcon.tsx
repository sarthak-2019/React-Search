import styled from "styled-components";
const Container = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  :hover {
    transform: scale(1.2);
  }
  cursor: pointer;
`;
const CrossIcon = () => {
  return (
    <Container>
      <svg
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.46777 0.643739C8.24356 0.419535 7.87996 0.419535 7.65566 0.643739L4.61052 3.68888L1.56537 0.643739C1.34117 0.419535 0.97757 0.419535 0.753266 0.643739C0.529063 0.868042 0.529063 1.23154 0.753266 1.45585L3.79841 4.50099L0.753266 7.54613C0.529063 7.77034 0.529063 8.13394 0.753266 8.35824C0.97747 8.58244 1.34107 8.58244 1.56537 8.35824L4.61052 5.3131L7.65566 8.35824C7.87986 8.58244 8.24346 8.58254 8.46777 8.35824C8.69197 8.13404 8.69197 7.77044 8.46777 7.54613L5.42262 4.50099L8.46777 1.45585C8.69197 1.23164 8.69197 0.868042 8.46777 0.643739Z"
          fill="#3D3D3D"
        />
      </svg>
    </Container>
  );
};

export default CrossIcon;
