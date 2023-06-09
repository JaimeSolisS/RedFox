import styled from "styled-components";
import { colors } from "../../styles/colors";

//background: ${({ lightBg }) => (lightBg ? "#757780" : "#fb8104")};
// background-image: ${({ lightBg }) =>
// lightBg ? `url(${bgLight})` : `url(${bgDark})`};

export const InfoContainer = styled.div `
  color: ${colors.white};
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#545454")};

  @media screen and (max-width: 768px) {
    padding: 6.25rem 0;
    height: 800px;
  }

  @media screen and (max-width: 480px) {
    padding: 3rem 0;
    height: 700px;
  }
`;

export const InfoWrapper = styled.div `
  display: grid;
  z-index: 1;
  height: 650px;
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div `
  display: grid;

  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart
      ? `
'col2 col1'
`
      : `
'col1 col2'
`};
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
export const Column1 = styled.div `
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div `
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div `
  max-width: 540px;
  padding-top: 0;
  grid-area: col2;
`;

export const TopLine = styled.p `
  color: ${({ lightText }) => (lightText ? "#d86f04" : "#545454")};
  font-size: 1.4rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1 `
  margin-bottom: 1.5rem;
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 580px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p `
  max-width: 440px;
  margin-bottom: 2.2rem;
  font-size: 1.4rem;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 768px) {
    font-size: 1.12rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const BtnWrap = styled.div `
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div `
  max-width: 620px;
  height: 100%;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Video = styled.video `
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  padding-right: 0;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;