import React from 'react'

const ColorList = ({colors}) => {
  const lis = colors.map((c)=> <li style={{color:c}}>{c}</li> )
  return (
    <div>
    <p>Color List</p>

    <ul>{lis}</ul>
    
    </div>
  )
}

export default ColorList