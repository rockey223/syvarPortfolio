import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./double.scss";

export default function Double({ projects }) {
 

  return (
    <div className="double">
      <div className="imageContainer">
        <div className="topbox">asd</div>
        <div className="content">
          <div className="content-top">
            <div className="number">{projects[0].id}</div>
            <div className="title">{projects[0].title}</div>
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
              <p>{projects[0].content}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <div
          className="content"
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="content-top">
            <div
              className="number"
              style={{
                transform: "translateZ(75px)",
              }}
            >
              {projects[1].id}
            </div>
            <div className="title">{projects[1].title}</div>
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
              <p>{projects[1].content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
