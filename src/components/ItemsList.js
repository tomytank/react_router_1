import React from "react";

import items from "../data";

function ItemsList() {
  return (
    <div className="items-list-wrapper">
      {items.map(item => {
        return (
          <div className="item-card" key={item.id}>
            <img
              className="item-list-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ItemsList;
