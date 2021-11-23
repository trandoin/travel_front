import React from "react";
import { useSpring, animated } from "react-spring";

function Gallery() {
  const stylesBox1 = useSpring({
    loop: { reverse: true },
    config: { duration: 10000 },
    from: { x: 1400, y: 50 },
    to: { x: 3000, y: 50 },
  });
  const stylesBox2 = useSpring({
    loop: { reverse: true },
    config: { duration: 10000 },
    from: { x: 1100, y: -40 },
    to: { x: 2700, y: -40 },
  });
  const stylesBox3 = useSpring({
    loop: { reverse: true },
    config: { duration: 10000 },
    from: { x: 600, y: -400 },
    to: { x: 2200, y: -400 },
  });
  const stylesBox4 = useSpring({
    loop: { reverse: true },
    config: { duration: 10000 },
    from: { x: 400, y: -700 },
    to: { x: 2000, y: -700 },
  });
  const stylesBox5 = useSpring({
    loop: { reverse: true },
    config: { duration: 10000 },
    from: { x: -100, y: -1000 },
    to: { x: 1500, y: -1000 },
  });
  const stylesBox6 = useSpring({
    loop: { reverse: true },
    config: { duration: 10000 },
    from: { x: -600, y: -1200 },
    to: { x: 1000, y: -1200 },
  });
  const stylesBox7 = useSpring({
    loop: { reverse: true },
    config: { duration: 10000 },
    from: { x: -1100, y: -1500 },
    to: { x: 500, y: -1500 },
  });
  const stylesBox8 = useSpring({
    loop: { reverse: true },
    config: { duration: 10000 },
    from: { x: -1400, y: -1700 },
    to: { x: 200, y: -1700 },
  });

  return (
    <div style={{ height: "50vh", width: "100v", backgroundColor: "#000" }}>
      <animated.div
        style={{
          width: "30vh",
          height: "30vh",
          backgroundColor: "#46e891",
          borderRadius: 16,
          zIndex: 1,
          ...stylesBox1,
        }}
      ></animated.div>
      <animated.div
        style={{
          width: "20vh",
          height: "20vh",
          backgroundColor: "#e84691",
          zIndex: 2,
          borderRadius: 16,

          ...stylesBox2,
        }}
      ></animated.div>
      <animated.div
        style={{
          width: "35vh",
          height: "35vh",
          backgroundColor: "#46e891",
          borderRadius: 16,
          zIndex: 3,
          ...stylesBox3,
        }}
      ></animated.div>
      <animated.div
        style={{
          width: "25vh",
          height: "25vh",
          backgroundColor: "#e84691",
          zIndex: 4,
          borderRadius: 16,

          ...stylesBox4,
        }}
      ></animated.div>
      <animated.div
        style={{
          width: "30vh",
          height: "30vh",
          backgroundColor: "#46e891",
          borderRadius: 16,
          zIndex: 5,
          ...stylesBox5,
        }}
      ></animated.div>
      <animated.div
        style={{
          width: "20vh",
          height: "20vh",
          backgroundColor: "#e84691",
          zIndex: 6,
          borderRadius: 16,

          ...stylesBox6,
        }}
      ></animated.div>
      <animated.div
        style={{
          width: "35vh",
          height: "35vh",
          backgroundColor: "#46e891",
          borderRadius: 16,
          zIndex: 7,
          ...stylesBox7,
        }}
      ></animated.div>
      <animated.div
        style={{
          width: "25vh",
          height: "25vh",
          backgroundColor: "#e84691",
          zIndex: 8,
          borderRadius: 16,

          ...stylesBox8,
        }}
      ></animated.div>
    </div>
  );
}

export default Gallery;
