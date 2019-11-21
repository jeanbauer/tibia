import React, { useState } from "react";
import rat from "../images/monsters/rat.gif";

function Monster({ onKill }) {
  const [hp, setHP] = useState(100);

  const attack = () => {
    const newHP = hp - 20;
    if (newHP <= 0) {
      onKill();
      setHP(100);
      return;
    }

    setHP(hp - 20);
  };

  const hpStyle = () => {
    let color = "green";
    if (hp <= 60) color = "yellow";
    if (hp <= 20) color = "red";
    return {
      borderTop: `3px solid ${color}`
    };
  };

  return (
    <div className="flex center">
      <div onClick={attack} className="monster">
        <div className="monster__hp" style={hpStyle()}>
          HP: {hp}
        </div>
        <img src={rat} />
      </div>
    </div>
  );
}

export default Monster;
