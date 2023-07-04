import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount ] = useState(0)
      const [name, setName] = useState("");
      
      useEffect(function effects() {
        console.log("use effect");
      }, []);



    const increment =()=>{
        setCount((c)=> c+1)
    }
    const handelChange = (e)=>{
      setName(e.target.value)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <h3>{name}</h3>
      <input type="text" onChange={handelChange} value={name} />
    </div>
  );
}

export default Counter
