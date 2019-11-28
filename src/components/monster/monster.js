import React, { useState } from "react";
import getMonster from "./monsters";

const hpStyle = hp => {
  let color = "green";
  if (hp <= 60) color = "yellow";
  if (hp <= 20) color = "red";
  return {
    borderTop: `3px solid ${color}`
  };
};

function Monster({ attack, hp, level }) {
  const { name, img } = getMonster(level);

  return (
    <div className="flex center">
      <div onClick={attack} className="monster">
        <div className="monster__hp" style={hpStyle(hp)}>
          HP: {hp}
        </div>
        <img src={img} alt={name} />
      </div>
    </div>
  );
}

export default Monster;
