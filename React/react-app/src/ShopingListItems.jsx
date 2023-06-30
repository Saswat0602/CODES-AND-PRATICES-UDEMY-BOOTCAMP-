import React from 'react'
// import PropTypes from "prop-types";


const ShopingListItems = ({ item, quantity, completed }) => {
  const styles = {
    color: completed ? "grey" : "magenta",
    textDecoration: completed ? "line-through" : "none",
  };
  return (
    <>
      <li style={styles}>
        {item}-{quantity}
      </li>
    </>
  );
};

// ShoppingListItem.propTypes = {
//   item: PropTypes.string,
//   quantity: PropTypes.number,
//   completed: PropTypes.bool,
// };


export default ShopingListItems


    // {
    //   items.map((i) => (
    //     <li
    //       key={i.id}
    //       style={{
    //         color: i.completed ? "gray" : "red",
    //         textDecoration: i.completed ? "line-through" : "none",
    //       }}
    //     >
    //       {i.item} - {i.quantity}
    //     </li>
    //   ));
    // }