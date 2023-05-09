import styled from "styled-components";
import { colors } from "../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgLight from "../../images/bg-4.svg";

export const ContactContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  //background: ${colors.darkGray};
  //background-image: url(${bgLight});
  @media screen and (max-width: 768px) {
    padding: 6.25rem 0;
  }
`;

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 400px;
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  grid-template-columns: 1fr; // add this property
`;

export const ContactRow = styled.div`
  display: flex;
  width: 100%;
  display: grid;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);

  //grid-auto-columns: repeat(2, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart
      ? `
'col2 col1'
`
      : `
'col1 col2'
`};
  grid-template-columns: 30% 70%;
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart
        ? `
'col2 col2'
'col1 col1'
`
        : `
'col1 col1'
'col2 col2'
`};
  }
`;

export const GridWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Column1 = styled(GridWrapper)`
  grid-area: col1;
`;

export const Column2 = styled(GridWrapper)`
  grid-area: col2;
`;

export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: ${colors.darkOrange};
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const InformationContainer = styled.div`
  background: ${colors.darkOrange};
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ContactH2 = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const DataLine = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ContactIcon = styled(FontAwesomeIcon)`
  color: ${colors.white};
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const DataText = styled.p`
  font-size: 16px;
  color: ${colors.white};
`;

export const StyledContactForm = styled.div`
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    background: ${colors.darkGray};
    padding: 10px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: white;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
      width: 20%;
    }
  }
`;
