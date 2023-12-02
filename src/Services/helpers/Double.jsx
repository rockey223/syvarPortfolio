import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./double.scss";

export default function Double({ projects, mouse }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="double">
      <div className="imageContainer">
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
              {projects[0].id}
            </div>
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
    </div>
  );
}
