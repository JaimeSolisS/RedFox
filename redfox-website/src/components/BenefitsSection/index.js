import React from "react";

import {
  BenefitsContainer,
  BenefitsH1,
  BenefitsH2,
  BenefitsP,
  BenefitsWrapper,
  BenefitsIcon,
  BenefitsCard,
} from "./BenefitsElements";
import {
  faGears,
  faTrafficLight,
  faPuzzlePiece,
  faPiggyBank,
  faToolbox,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

function Benefits() {
  return (
    <BenefitsContainer>
      <BenefitsH1>Benefits and Advantages</BenefitsH1>
      <BenefitsWrapper>
        <BenefitsCard>
          <BenefitsIcon icon={faGears} />
          <BenefitsH2>Improved operational efficiency</BenefitsH2>
          <BenefitsP>
            Yard trucks are designed for high-speed maneuvering and precise
            positioning of trailers and containers, which can help reduce
            loading and unloading times and increase overall productivity.
          </BenefitsP>
        </BenefitsCard>
        <BenefitsCard>
          <BenefitsIcon icon={faTrafficLight} />
          <BenefitsH2>Increased safety</BenefitsH2>
          <BenefitsP>
            Yard trucks are equipped with safety features such as rearview
            cameras, automatic braking systems, and backup alarms, which can
            help prevent accidents and injuries.
          </BenefitsP>
        </BenefitsCard>
        <BenefitsCard>
          <BenefitsIcon icon={faPuzzlePiece} />
          <BenefitsH2>Improved space utilization</BenefitsH2>
          <BenefitsP>
            Yard trucks are highly maneuverable and can operate in tight spaces,
            making it easier to move trailers and containers in and out of
            congested areas. This allows for more efficient use of available
            space.
          </BenefitsP>
        </BenefitsCard>
        <BenefitsCard>
          <BenefitsIcon icon={faPiggyBank} />
          <BenefitsH2>Cost savings</BenefitsH2>
          <BenefitsP>
            Rent a yard truck by movement to pay only for the specific movements
            required. With this model, there is no fixed rental cost.
          </BenefitsP>
        </BenefitsCard>
        <BenefitsCard>
          <BenefitsIcon icon={faToolbox} />
          <BenefitsH2>Versatility</BenefitsH2>
          <BenefitsP>
            Yard trucks can be used for multiple applications, including moving
            trailers, containers, flatbed trailers and refrigerated containers
            within a defined area, such as warehouses, distribution centers,
            industrial yards or ports.
          </BenefitsP>
        </BenefitsCard>
        <BenefitsCard>
          <BenefitsIcon icon={faLeaf} />
          <BenefitsH2>Environmentally friendly</BenefitsH2>
          <BenefitsP>
            The reduced fuel consumption of yard trucks makes them more
            environmentally friendly and can help companies reduce their carbon
            footprint.
          </BenefitsP>
        </BenefitsCard>
      </BenefitsWrapper>
    </BenefitsContainer>
  );
}

export default Benefits;
