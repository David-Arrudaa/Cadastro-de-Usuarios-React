import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) => (props.theme === "primary" ? "none" : "2px solid #fff")};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
      : "transparent"};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    opacity: 0.8;
    color: ${(props) => (props.theme === "primary" ? "#fff" : "black")};
    background: ${(props) =>
      props.theme === "primary"
        ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
        : "#6c6565ff"};
  }

  &:active {
    opacity: 0.5;
  }
`;
