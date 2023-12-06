import React from 'react'
import './ourServices.scss'
const OurServices = ({item}) => {
  return (
    <div className="imageContainer">
        <div className="topbox">asd</div>
        <div className="content">
          <div className="content-top">
            <div className="number">{item.id}</div>
            <div className="title">{item.title}</div>
          </div>
          <div
            className="text-content"
            style={{
              transform: "translateZ(75px)",
            }}
          >
            <div className="left">
              <img
                src={"https://i.postimg.cc/tR5fcG4g/unsplash-e-Ypc-LDXHVb0.png"}
                alt="image"
              />
            </div>
            <div className="right">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default OurServices