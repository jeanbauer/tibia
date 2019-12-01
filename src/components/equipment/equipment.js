import React from "react";
import backpack from "../../images/coin/backpack.gif";

import "./equipment.css";

function Equipment(props) {
  const { equipments } = props;

  return (
    <div className="equipment background flex center">
      <div className="flex column center">
        <div className="equipment__slot">
          <img src={equipments.necklace.img} alt="necklace" />
        </div>
        <div className="equipment__slot">
          <img src={equipments.left_hand.img} alt="left-hand" />
        </div>
        <div className="equipment__slot">
          <img src={equipments.ring.img} alt="ring" />
        </div>
      </div>

      <div className="flex column center">
        <div className="equipment__slot">
          <img src={equipments.helmet.img} alt="helmet" />
        </div>
        <div className="equipment__slot">
          <img src={equipments.armor.img} alt="armos" />
        </div>

        <div className="equipment__slot">
          <img src={equipments.legs.img} alt="legs" />
        </div>
        <div className="equipment__slot">
          <img src={equipments.boots.img} alt="boots" />
        </div>
      </div>

      <div className="flex column center">
        <div className="equipment__slot">
          <img src={backpack} alt="backpack" />
        </div>

        <div className="equipment__slot">
          <img src={equipments.right_hand.img} alt="shield" />
        </div>
        <div className="equipment__slot">
          <img src={equipments.ammo.img} alt="ammo" />
        </div>
      </div>
    </div>
  );
}

export default Equipment;
