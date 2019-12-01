import React, { useState } from "react";
import getMonster from "./monsters";
import "./monster.css";

const hpStyle = hp => {
  let color = "green";
  if (hp <= 60) color = "yellow";
  if (hp <= 20) color = "red";
  return {
    borderTop: `3px solid ${color}`,
    width: `${hp >= 100 ? 100 : hp}%`
  };
};

function Monster({ attack, hp, level }) {
  const { name, img } = getMonster(level);

  return (
    <div className="flex center">
      <div onClick={attack} className="pointer">
        <p className="text-shadow monster__name">{name}</p>
        <div className="skills__bar">
          <div style={hpStyle(hp)}></div>
        </div>
        <img src={img} alt={name} />
      </div>
    </div>
  );
}

export default Monster;
