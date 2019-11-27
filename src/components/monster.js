import React, { useState } from "react";
import rat from "../images/monsters/rat.gif";

const hpStyle = hp => {
  let color = "green";
  if (hp <= 60) color = "yellow";
  if (hp <= 20) color = "red";
  return {
    borderTop: `3px solid ${color}`
  };
};

function Monster({ attack, hp }) {
  return (
    <div className="flex center">
      <div onClick={attack} className="monster">
        <div className="monster__hp" style={hpStyle(hp)}>
          HP: {hp}
        </div>
        <img src={rat} />
      </div>
    </div>
  );
}

export default Monster;
