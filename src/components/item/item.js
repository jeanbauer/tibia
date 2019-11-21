import React from "react";
import "./item.css";

function Item(props) {
  return (
    <div className="item">
      <div className="item__intern__border flex column">
        <div className="item__title flex start">
          <img width="14" src={props.icon} alt={props.icon} />
          <span>{props.name}</span>
        </div>
        <div className="item__content">{props.children}</div>
      </div>
    </div>
  );
}

export default Item;
