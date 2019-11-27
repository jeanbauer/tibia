import React from "react";
import Item from "./item/item";
import rat from "../images/monsters/rat.gif";
import battle from "../images/battle.svg";

const hpStyle = hp => {
  let color = "green";
  if (hp <= 60) color = "yellow";
  if (hp <= 20) color = "red";
  return {
    borderTop: `3px solid ${color}`,
    width: `${hp}%`
  };
};

function Battle({ attack, hp }) {
  return (
    <Item name="Battle" icon={battle}>
      <div className="battle flex start">
        <div
          style={hpStyle(hp)}
          onClick={attack}
          className="monster battle__monster"
        >
          <img src={rat} />
          <span>Rat</span>
        </div>
      </div>
    </Item>
  );
}

export default Battle;
