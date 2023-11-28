import React from "react";
import Double from "./helpers/Double";
import services from "./helpers/services";
import "./services.scss";
const Services = ({ mouse }) => {
  return (
    <>
    <div className="services">

      <div className="services-heading">
        <div className="services-left">
          We provide the Best <span>Services</span>
        </div>
        <div className="services-right">
        We create responsive websites and apps that look and work great on computers, tablets and mobile devices. We develop rich internet applications in iOS, Android and WindowWe create responsive websites and apps that look and work great on computers, tablets and mobile devices. 
        </div>
      </div>
      <div className="gallary">
        <Double projects={[services[0], services[1]]} mouse={mouse} />
        <Double
          projects={[services[2], services[3]]}
          reversed={true}
          mouse={mouse}
        />
      </div>
    </div>
    </>
  );
};

export default Services;
