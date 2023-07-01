import React, { useState } from 'react'

function generate(){
    console.log("maaking the game board");
    return Array(5000)
}


const Dum = () => {
  const [board, setBoard] = useState(generate);
     
  return (
    <div>
      <button onClick={() => setBoard("hello!")}>
        Click me 
      </button>
    </div>
  );
}

export default Dum
