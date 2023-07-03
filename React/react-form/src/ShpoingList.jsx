import React, { useState } from "react";
import ShopingListFom from "./ShopingListFom";

const ShpoingList = () => {
  const [items, setItems] = useState([
    { id: 1, product: "banana", qty: 8 },
    { id: 2, product: "apple", qty: 8 },
  ]);
    const addItem = (item) => {
      setItems((currItems) => {
        return [...currItems, { ...item, id: uuid() }];
      });
    };
  return (
    <div>
      <h1>Shoping list</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product}-{i.qty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShpoingList;
