import React from "react";

import Item from "../item/item";
import backpack from "../../images/coin/backpack.gif";
import gold from "./coins/gold";

import "./backpack.css";

function Backpack(props) {
  const amountOfGold = 200;
  const space = new Array(16);
  space.fill(1);

  const getCoinImage = () => gold(amountOfGold);

  return (
    <Item name="Backpack" icon={backpack}>
      <div className="flex wrap">
        <div className="flex center backpack__slot">
          <img src={getCoinImage()} alt="" />
          <span>{props.gold}</span>
        </div>
        {space.map(s => (
          <div key={s} className="flex center backpack__slot"></div>
        ))}
      </div>
    </Item>
  );
}

export default Backpack;
