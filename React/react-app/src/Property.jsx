import React from 'react'

const Property = ({ name, price, rating, id }) => {
  return (
    <div className='property'>
      <h2>{name}</h2>
      <h2>{price}</h2>
      <h2>{rating}⭐</h2>
    </div>
  );
};

export default Property
