import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  function changeNum() {
    setNum(num + 1);
  }

  return (
    <div>
      <p>the count is {num}</p>
      <button onClick={changeNum}>click</button>
    </div>
  );
};

export default Counter;
