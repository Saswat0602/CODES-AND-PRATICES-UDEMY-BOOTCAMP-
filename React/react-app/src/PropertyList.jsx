import React from 'react'
import Property from './Property'
const PropertyList = ({properties}) => {
  return (
    <div className='propertyList'>
     {properties.map(p=>{
      return <Property{...p}key={p.id}/>
     })}
  
      
    </div>
  )
}

export default PropertyList
