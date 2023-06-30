import React from 'react'

function handleClick(){
    console.log("button clicked");
}

function hover(){
    console.log("mouse hovered");
}

const Clicker = () => {
  return (
    <div>
      <h1 onMouseOver={hover}>click</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
}


export default Clicker
