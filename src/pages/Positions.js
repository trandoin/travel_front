import React, { useEffect, useState } from "react";

function Positions() {
  // Create state
  const xVals = [
    0, 7.5, 5, 12.5, 10, 17.5, 15, 22.5, 20, 27.5, 25, 32.5, 30, 37.5, 35, 42.5,
    40, 45, 50,
  ];
  const [xVal, setXVal] = useState(1);
  const [yVal, setYVal] = useState(1);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((idx + 1) % xVals.length);
      setXVal(xVals[idx]);
      setYVal(yVal);
    }, 300);
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [xVal, yVal]);

  return (
    <div>
      {/* Element to Move Dynamically */}
      <h2
        style={{
          position: "absolute",
          left: `${xVal}vh`,
          top: `${yVal}vh`,
        }}
      >
        Hey I'm Moving
      </h2>
    </div>
  );
}

export default Positions;
