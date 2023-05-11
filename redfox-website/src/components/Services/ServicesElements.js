import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ServicesContainer = styled.div `
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom left,
    ${colors.darkGray},
    ${colors.darkOrange}
  );

  @media screen and (max-width: 1500px) {
    max-height: 1000px;
  }

  @media screen and (max-width: 1000px) {
    height: 1200px;
  }

  @media screen and (max-width: 768px) {
    height: 1000px;
  }

  @media screen and (max-width: 480px) {
    height: 800px;
  }
`;

export const ServicesWrapper = styled.div `
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div `
  //background: ${colors.lightOrange};
  background: linear-gradient(
    to bottom left,
    ${colors.lightOrange},
    ${colors.darkGray}
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  height: 600px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  opacity: 0; /* initially set opacity to 0 */
  transition: all 0.5s ease-in-out; /* add transition effect */

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  /* add styles for when element is visible */
  &.fade-in {
    opacity: 1;
  }

  @media screen and (max-width: 1500px) {
    max-height: 500px;
  }

  @media screen and (max-width: 1000px) {
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    height: 400px;
  }

  @media screen and (max-width: 480px) {
    height: 300px;
  }
`;

export const ServicesIcon = styled.img `
  max-height: 400px;
  border-radius: 50%;
  margin-bottom: 10px;

  @media screen and (max-width: 1500px) {
    max-height: 20rem;
  }

  @media screen and (max-width: 1200px) {
    max-height: 15rem;
  }

  @media screen and (max-width: 768px) {
    max-height: 15rem;
  }

  @media screen and (max-width: 480px) {
    max-height: 10rem;
  }
`;

export const ServicesH1 = styled.h1 `
  font-size: 3rem;
  color: ${colors.white};
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ServicesH2 = styled.h1 `
  font-size: 2rem;
  margin-bottom: 10px;
  color: ${colors.white};

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ServicesP = styled.p `
  font-size: 1.7rem;
  text-align: center;
  color: ${colors.white};

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;