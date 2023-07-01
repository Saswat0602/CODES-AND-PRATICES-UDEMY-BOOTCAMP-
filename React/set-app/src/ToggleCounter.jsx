import React, { useState } from "react";

const TogglerCounter = () => {
  const [isHappy, setIsHappy] = useState(true);
  const [count,setCount] = useState(0)
  const toggle = () => {
    setIsHappy(!isHappy);
    setCount(count + 10);

  };

  return (
    <div>
      <h1 className="toggler" onClick={toggle}>
        {isHappy ? "😎" : "😒"}
      </h1>
      <h1 onClick={toggle}>{count}</h1>
    </div>
  );
};

export default TogglerCounter;
