import React from "react";
import "./equipment.css";
import boh from "../../images/items/boh.gif";
import crown_armor from "../../images/items/crown_armor.gif";
import crown_legs from "../../images/items/crown_legs.gif";
import demon_shield from "../../images/items/demon_shield.gif";
import fire_sword from "../../images/items/fire_sword.gif";
import steel_helmet from "../../images/items/steel_helmet.gif";

function Equipment() {
  return (
    <div className="equipment flex center column">
      <div className="equipment__slot equipment__helmet">
        <img src={steel_helmet} alt="helmet" />
      </div>
      <div className="flex center">
        <div className="equipment__slot equipment__left-hand">
          <img src={fire_sword} alt="left-hand" />
        </div>
        <div className="equipment__slot equipment__armos">
          <img src={crown_armor} alt="armos" />
        </div>
        <div className="equipment__slot equipment__shield">
          <img src={demon_shield} alt="shield" />
        </div>
      </div>
      <div className="equipment__slot equipment__legs">
        <img src={crown_legs} alt="legs" />
      </div>
      <div className="equipment__slot equipment__boots">
        <img src={boh} alt="boots" />
      </div>
    </div>
  );
}

export default Equipment;
