import React from "react";
import Item from "../item/item";
import getMonster from "./monsters";
import battle from "../../images/battle.svg";

const hpStyle = hp => {
  let color = "green";
  if (hp <= 60) color = "yellow";
  if (hp <= 20) color = "red";
  return {
    marginTop: "1px",
    borderTop: `3px solid ${color}`,
    width: `${hp}%`
  };
};

function Battle({ attack, hp, level }) {
  const { name, img } = getMonster(level);

  return (
    <Item name="Battle" icon={battle}>
      <div onClick={attack} className="battle pointer flex start">
        <img height="21" src={img} alt={name} />

        <div className="column battle__monster">
          <span>{name}</span>
          <div className="skills__bar">
            <div style={hpStyle(hp)}></div>
          </div>
        </div>
      </div>
    </Item>
  );
}

export default Battle;
