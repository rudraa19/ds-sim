import { useState } from "react";
import Block from "./Block";

const StackSimulator = () => {
  const [top, setTop] = useState(3);

  const pop = () => {
    if (top < 0) {
      return;
    } else {
      setTop((prevTop) => prevTop - 1);
    }
  };

  const push = () => {
    if (top >= 3) {
      return;
    } else {
      setTop((prevTop) => prevTop + 1);
    }
  };

  return (
    <div>
      <h2>Stack</h2>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "flex-end",
          padding: 5,
          border: "gray solid 1px",
          height: 240,
          borderRadius: "0 0 15px 15px",
          borderTop: "none",
        }}
      >
        <Block isTapped={top < 0} />
        <Block isTapped={top < 1} />
        <Block isTapped={top < 2} />
        <Block isTapped={top < 3} />
      </div>

      <button
        onClick={pop}
        style={{ margin: 10, backgroundColor: "black", color: "white" }}
      >
        Pop
      </button>
      <button
        onClick={push}
        style={{ margin: 10, backgroundColor: "black", color: "white" }}
      >
        Push
      </button>

      <br />
      <h3>Top: {top}</h3>
    </div>
  );
};

export default StackSimulator;