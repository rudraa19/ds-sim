import { useEffect, useState } from "react";
import Block from "./Block";

const StackSimulator = () => {
  const [top, setTop] = useState(3);
  const [condition, setCondition] = useState('');

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

  useEffect(() => {
    if(top === -1){
      setCondition("Stack is empty");
    } else if(top === 3) {
      setCondition("Stack is full")
    }
  }, [top]);

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
        style={{ margin: 10, backgroundColor: (top==-1)?"gray":"black", color: "white", cursor: top==-1 && "not-allowed", transition: "background-color 0.1s linear" }} disabled={top==-1}
      >
        Pop
      </button>
      <button
        onClick={push}
        style={{ margin: 10, backgroundColor: (top==3)?"gray":"black", color: "white", cursor: top==3 && "not-allowed", transition: "background-color 0.1s linear" }} disabled={top==3}
      >
        Push
      </button>
      <br />
      <h3 style={{
        opacity: (top === -1 || top === 3) ? 1 : 0,
        transition: 'opacity 0.1s linear'
      }}>{condition}</h3>
      <h3>Top: {top}</h3>
    </div>
  );
};

export default StackSimulator;
