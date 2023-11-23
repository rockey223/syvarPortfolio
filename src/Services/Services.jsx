import React from 'react'
import Double from './helpers/Double'
import services from "./helpers/services"
import './services.scss'
const Services = ({mouse}) => {
  return (<>
  
  <div>Services</div>
  <div className="gallary">

  <Double projects={[services[0], services[1]]} mouse={mouse}/>
  <Double projects={[services[2], services[3]]} reversed={true} mouse={mouse}/>
  </div>
  </>
  )
}

export default Services