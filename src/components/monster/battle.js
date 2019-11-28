import React from "react";
import Item from "../item/item";
import getMonster from "./monsters";
import battle from "../../images/battle.svg";

const hpStyle = hp => {
  let color = "green";
  if (hp <= 60) color = "yellow";
  if (hp <= 20) color = "red";
  return {
    borderTop: `3px solid ${color}`,
    width: `${hp}%`
  };
};

function Battle({ attack, hp, level }) {
  const { name, img } = getMonster(level);

  return (
    <Item name="Battle" icon={battle}>
      <div className="battle flex start">
        <div
          style={hpStyle(hp)}
          onClick={attack}
          className="monster battle__monster"
        >
          <img src={img} alt={name} />
          <span>{name}</span>
        </div>
      </div>
    </Item>
  );
}

export default Battle;
