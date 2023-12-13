import React from "react";
import Double from "./helpers/Double";
import services from "./helpers/services";
import "./services.scss";
import OurServices from "./helpers/OurServices";
import { Element } from "react-scroll";
const Services = ({ mouse }) => {
  return (
    <>
    <Element id="Services" className="rock-services" name="services">

      <div className="rock-services-heading">
        <div className="rock-services-left">
          We provide the Best <span>Services</span>
        </div>
        <div className="rock-services-right">
        We create responsive websites and apps that look and work great on computers, tablets and mobile devices. We develop rich internet applications in iOS, Android and WindowWe create responsive websites and apps that look and work great on computers, tablets and mobile devices. 
        </div>
      </div>
      <div className="rock-gallary">

        {
          services.map((item,index)=>{

            return <OurServices key={index} item={item}/>
          })
        }
        {/* <Double projects={[services[0], services[1]]} mouse={mouse} />
        <Double
          projects={[services[2], services[3]]}
          reversed={true}
          mouse={mouse}
        /> */}
      </div>
    </Element>
    </>
  );
};

export default Services;
