import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ServicesContainer = styled.div`
  height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom left,
    ${colors.darkGray},
    ${colors.darkOrange}
  );

  @media screen and (max-width: 768px) {
    height: 1800px;
  }

  @media screen and (max-width: 480px) {
    height: 1900px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
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
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  opacity: 0; /* initially set opacity to 0 */
  transition: all 0.5s ease-in-out; /* add transition effect */

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  /* add styles for when element is visible */
  &.fade-in {
    opacity: 1;
  }
`;

export const ServicesIcon = styled.img`
  max-height: 200px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: ${colors.white};
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ServicesH2 = styled.h1`
  font-size: 1rem;
  margin-bottom: 10px;
  color: ${colors.white};
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${colors.white};
`;
