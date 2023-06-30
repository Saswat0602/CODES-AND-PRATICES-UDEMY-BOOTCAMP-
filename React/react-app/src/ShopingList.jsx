import React from 'react'
import ShopingListItems from './ShopingListItems'

const ShopingList = ({items}) => {
  return (
    <>
      <ul>
        {items.map((i) => (
         // <ShopingListItems
           // key={i.id}
         //   item={i.item}
           // quantity={i.quantity}
           // completed={i.completed}
          ///>
          <ShopingListItems key={i.id}{...i}/>
        ))}
      </ul>
    </>
  );
}

export default ShopingList
