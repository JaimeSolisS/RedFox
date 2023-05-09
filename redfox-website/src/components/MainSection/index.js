import React, { useState } from "react";
import Video from "../../videos/video6.mp4";
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
        <CoolH1>Your Missing Logistics Solution</CoolH1>
        <CoolP>
          In this industry, saving costs while maintaining security and
          logistical efficiency is a top priority for all of us.
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
