import React, { useState } from "react";
import Video from "../../videos/video4Fast.mp4";
import { Button } from "../ButtonElement";
import {
  CoolContainer,
  CoolBackground,
  VideoBackground,
  CoolContent,
  CoolH1,
  CoolP,
  CoolBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./MainElements";

const MainSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <CoolContainer>
      <CoolBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </CoolBackground>
      <CoolContent>
        <CoolH1>Your missing logistics solutions</CoolH1>
        <CoolP>
          In this industry we all know that saving and reducing costs is one of
          the TOP priorities without leaving behind security and logistic
          efficiency.
        </CoolP>
        <CoolBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="false"
            dark="false"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </CoolBtnWrapper>
      </CoolContent>
    </CoolContainer>
  );
};

export default MainSection;
