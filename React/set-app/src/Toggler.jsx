import React, { useState } from 'react'

const Toggler = () =>{
const [isHappy, setIsHappy] = useState(true)
const toggle=()=>{
    setIsHappy(!isHappy)
}

  return (
    <div>
    <h1 className='toggler' onClick={toggle}>
    {isHappy ? '😎' :'😒' }
    </h1>
      
    </div>
  )
}

export default Toggler
