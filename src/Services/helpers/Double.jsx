
import "./double.scss";

import { useRef } from "react";

export default function Double({ projects, reversed, mouse }) {

  const firstImage = useRef(null);
  const secondImage = useRef(null);
  const firstparagraphText= useRef(null);
  const secondparagraphText= useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    // const { clientX } = e;
    console.log(mouse.x);
    xPercent = (mouse.x / window.innerWidth) * 100;


    const firstImagePercent = 66.66 - (xPercent * 0.33);

    const secondImagePercent = 33.33 + (xPercent * 0.33);

    firstImage.current.style.width = `${firstImagePercent}%`

    secondImage.current.style.width = `${secondImagePercent}%`
    // if (!requestAnimationFrameId) {
    //   requestAnimationFrameId = window.requestAnimationFrame(animate);
    // }
  }; 

  const animate = () =>{
  
  }

  // const animate = () => {
  //   //Add easing to the animation
  //   const xPercentDelta = xPercent - currentXPercent;
  //   currentXPercent = currentXPercent + xPercentDelta * speed;

  //   //Change width of images between 33.33% and 66.66% based on cursor
  //   const firstImagePercent = 66.66 - currentXPercent * 0.33;
  //   const secondImagePercent = 33.33 + currentXPercent * 0.33;
    
  //   firstImage.current.style.width = `${firstImagePercent}%`;
  //   secondImage.current.style.width = `${secondImagePercent}%`;
  //   firstparagraphText.current.style.fontSize = `80%`;
  //   secondparagraphText.current.style.fontSize = `80%`;

  //   if (Math.round(xPercent) == Math.round(currentXPercent)) {
  //     window.cancelAnimationFrame(requestAnimationFrameId);
  //     requestAnimationFrameId = null;
  //   } else {
  //     window.requestAnimationFrame(animate);
  //   }
  // };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="double"
    >
      {/* <div ref={firstImage} className={.imageContainer}>
        <div className={.stretchyWrapper}>
          <div className={.meroContainer}>
            <Image
              src={`/images/${projects[0].src}`}
              // fill={true}
              width={50}
              height={50}
              alt={"image"}
            />

            <p>
              We create responsive websites and apps that look and work great on
              computers, tablets and mobile devices. We develop rich internet
              applications in iOS, Android and Window{" "}
            </p>
          </div>
        </div>
      </div> */}
      <div ref={firstImage} className="imageContainer">
        <div className="stretchyWrapper">
          <div className="meroContainer">
            <div className="number"> {projects[0].id}</div>
            <div className="left">
              <img
                src="https://i.postimg.cc/tR5fcG4g/unsplash-e-Ypc-LDXHVb0.png"
                // fill={true}
                
                alt={"image"}
              />
            </div>
            <div className="right">
              <div className="title">{projects[0].title}</div>
              <p ref={firstparagraphText}>
                {projects[0].content}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={secondImage} className="imageContainer">
        <div className="stretchyWrapper">
          <div className="meroContainer">
          <div className="number"> {projects[1].id}</div>
            <div className="left">
              <img
                src={"https://i.postimg.cc/tR5fcG4g/unsplash-e-Ypc-LDXHVb0.png"}
                // fill={true}
                
                alt={"image"}
              />
            </div>
            <div className="right">
              <div className="title">{projects[1].title}</div>
              <p ref={secondparagraphText}>
              {projects[1].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
