import styled from "styled-components";
import { Link, link } from "react-scroll";
import { colors } from "../styles/colors";

export const Button = styled(Link)
`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#c66705" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#010606")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#c66705")};
    color: ${colors.black};
  }
`;