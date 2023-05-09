import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../styles/colors";
import bgLight from "../../images/bg-4.svg";

export const BenefitsContainer = styled.div`
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  //background-image: url(${bgLight});

  @media screen and (max-width: 768px) {
    height: 1500px;
  }

  @media screen and (max-width: 480px) {
    height: 1700px;
  }
`;

export const BenefitsWrapper = styled.div`
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

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  /* Center the last item in the grid when there are even elements */
  &:nth-child(even) > *:last-child {
    margin-top: auto;
  }
`;

export const BenefitsH1 = styled.h1`
  font-size: 2.5rem;
  color: ${colors.darkOrange};
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const BenefitsCard = styled.div`
  height: auto;
  background: ${colors.burntOrange};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 40px;
  max-height: 340px;
  padding: 30px 30px 40px 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border: 2px solid ${colors.orange};
  transition: all 0.2s ease-in-out;
  font-size: 1.2rem;
  color: ${colors.white};
  text-shadow: 1px 1px ${colors.black};

  @media screen and (min-width: 768px) {
    height: ${({ maxHeight }) => maxHeight};
  }

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const BenefitsIcon = styled(FontAwesomeIcon)`
  color: ${colors.white};
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const BenefitsH2 = styled.h1`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const BenefitsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
