import React from "react";
import items from "../data";

export default function Item() {
  const item = items.find(thing => `${thing.id}` === "1");
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <div>
        <p className="item-description">{item.description}</p>
      </div>
    </div>
  );
}
