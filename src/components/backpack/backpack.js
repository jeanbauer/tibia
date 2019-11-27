import React from "react";

import Item from "../item/item";
import backpack from "../../images/coin/backpack.gif";
import gold from "./coins/gold";

import "./backpack.css";

function Backpack(props) {
  const getCoinImage = () => gold(props.gold);

  return (
    <Item name="Backpack" icon={backpack}>
      <div className="flex wrap">
        <div className="flex center backpack__slot">
          <img src={getCoinImage()} alt="" />
          <span>{props.gold}</span>
        </div>
      </div>
    </Item>
  );
}

export default Backpack;
