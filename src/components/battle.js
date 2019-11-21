import React from "react";
import Item from "./item/item";

import battle from "../images/battle.svg";

function Battle(props) {
  return (
    <Item name="Battle" icon={battle}>
      <div className="flex center item__slot"></div>
    </Item>
  );
}

export default Battle;
