import React from "react";
import "./equipment.css";
import boh from "../../images/items/boh.gif";
import empty_armor from "../../images/items/empty_armor.gif";
import empty_legs from "../../images/items/empty_legs.gif";
import empty_shield from "../../images/items/empty_shield.gif";
import empty_sword from "../../images/items/empty_sword.gif";
import empty_helmet from "../../images/items/empty_helmet.gif";
import empty_necklace from "../../images/items/empty_amulet.gif";
import empty_ring from "../../images/items/empty_ring.gif";
import empty_ammo from "../../images/items/empty_ammo.gif";
import empty_boots from "../../images/items/empty_boots.gif";
import backpack from "../../images/coin/backpack.gif";

function Equipment() {
  return (
    <div className="equipment background flex center">
      <div className="flex column center">
        <div className="equipment__slot">
          <img src={empty_necklace} alt="necklace" />
        </div>
        <div className="equipment__slot-hand">
          <img src={empty_sword} alt="left-hand" />
        </div>
        <div className="equipment__slot">
          <img src={empty_ring} alt="ring" />
        </div>
      </div>

      <div className="flex column center">
        <div className="equipment__slot">
          <img src={empty_helmet} alt="helmet" />
        </div>
        <div className="equipment__slot">
          <img src={empty_armor} alt="armos" />
        </div>

        <div className="equipment__slot">
          <img src={empty_legs} alt="legs" />
        </div>
        <div className="equipment__slot">
          <img src={empty_boots} alt="boots" />
        </div>
      </div>

      <div className="flex column center">
        <div className="equipment__slot">
          <img src={backpack} alt="backpack" />
        </div>

        <div className="equipment__slot">
          <img src={empty_shield} alt="shield" />
        </div>
        <div className="equipment__slot">
          <img src={empty_ammo} alt="ammo" />
        </div>
      </div>
    </div>
  );
}

export default Equipment;
