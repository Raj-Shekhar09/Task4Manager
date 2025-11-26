import React, { useState } from "react";
import Register from "./ResetPWD";
import Login1 from "./Login1";

const Flipcard = () => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`
        relative w-[400px] h-[500px] mx-auto 
        [perspective:1000px]
      `}
    >
      <div
        className={`
          relative w-full h-full 
          transition-transform duration-700 
          [transform-style:preserve-3d]
          ${flip ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        <div
          className={`
            absolute inset-0 
            [backface-visibility:hidden]
          `}
        >
          <Login1 onFlip={() => setFlip(true)} />
        </div>

        <div
          className={`
            absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]
          `}
        >
          <Register onFlip={() => setFlip(false)} />
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
