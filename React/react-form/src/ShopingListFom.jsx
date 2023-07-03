import React, { useState } from "react";
const ShopingListFom = () => {
  const[formData, setFormdata] = useState({ product: "", qyantity: 0 });
  const handleChange = (e) => {
    setFormdata((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div>
      <form action="">
        <label htmlFor="product">Product Name</label>
        <input
          type="text"
          placeholder="product name"
          name="product"
          id="product"
          onChange={handleChange}
          value={formData.product}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          placeholder="1"
          name="quantity"
          id="quantity"
          onChange={handleChange}
          value={formData.quantity}
        />
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default ShopingListFom;
