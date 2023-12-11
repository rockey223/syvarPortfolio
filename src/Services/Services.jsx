import React from "react";
import Double from "./helpers/Double";
import services from "./helpers/services";
import "./services.scss";
import OurServices from "./helpers/OurServices";
import { Element } from "react-scroll";
const Services = ({ mouse }) => {
  return (
    <>
    <Element id="Services" className="services" name="services">

      <div className="services-heading">
        <div className="services-left">
          We provide the Best <span>Services</span>
        </div>
        <div className="services-right">
        We create responsive websites and apps that look and work great on computers, tablets and mobile devices. We develop rich internet applications in iOS, Android and WindowWe create responsive websites and apps that look and work great on computers, tablets and mobile devices. 
        </div>
      </div>
      <div className="gallary">

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
