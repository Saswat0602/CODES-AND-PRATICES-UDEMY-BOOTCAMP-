import React from 'react'

const ListPicker = ({values}) => {
    const randIdx = Math.floor(Math.random()*values.length)
    const randElement  = values [randIdx]
  return (
    <div>
        <h1>the list of values : {values}</h1>
        <p>random element is {randElement}</p>
    </div>
  )
}

export default ListPicker