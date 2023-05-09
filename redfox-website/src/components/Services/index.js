import React, { useEffect, useState } from "react";
import Icon1 from "../../images/dock.png";
import Icon2 from "../../images/industrialPark.png";
import Icon3 from "../../images/yard.jpeg";
import Icon4 from "../../images/plant.png";
import Icon5 from "../../images/daycab.jpeg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard className={isVisible ? "fade-in" : ""}>
          <ServicesH2>Yard Spotter</ServicesH2>
          <ServicesIcon src={Icon1} />
          <ServicesP>Dock movements</ServicesP>
        </ServicesCard>
        <ServicesCard className={isVisible ? "fade-in" : ""}>
          <ServicesH2>Yard Spotter</ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP>Transfers within the industrial park</ServicesP>
        </ServicesCard>
        <ServicesCard className={isVisible ? "fade-in" : ""}>
          <ServicesH2>Yard Spotter</ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP>Rearrangement of boxes within yards</ServicesP>
        </ServicesCard>
        <ServicesCard className={isVisible ? "fade-in" : ""}>
          <ServicesH2>Yard Spotter</ServicesH2>
          <ServicesIcon src={Icon4} />
          <ServicesP>Movements within plants</ServicesP>
        </ServicesCard>

        <ServicesCard className={isVisible ? "fade-in" : ""}>
          <ServicesH2>Day Cab Trucks</ServicesH2>
          <ServicesIcon src={Icon5} />
          <ServicesP>Local Moves</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
