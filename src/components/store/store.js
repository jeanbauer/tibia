import React, { useState } from "react";
import seller from "../../images/outfits/hardcore.png";
import chest from "./chest.gif";
import { items } from "../../images/items";

import "./store.css";

function Store(props) {
  const [showingStore, setShowingStore] = useState(false);
  const [equipments, setEquipments] = useState(items);

  const purchaseItem = item => {
    if (props.gold - item.price < 0) {
      return alert("Not enough gold");
    }

    const equipmentsWithoutThePurchased = equipments.filter(
      equip => equip.name !== item.name
    );
    setEquipments(equipmentsWithoutThePurchased);

    props.onPurchaseItem(item);
  };

  return (
    <>
      <div className="store flex">
        <div
          onClick={() => setShowingStore(!showingStore)}
          className="store__seller pointer flex column"
        >
          <p className="text-shadow">Murilo, the Seller</p>
          <img className="store__character" src={seller} alt="seller" />
          <img className="store__chest" src={chest} alt="chest" />
        </div>
      </div>

      {showingStore && (
        <div className="store__items">
          {equipments.map(item => (
            <div className="store__item">
              <p>Name: {item.name}</p>
              <p>Price: {item.price}</p>
              <p>Attack: {item.attack}</p>
              <img src={item.img} alt={item.name} />
              <button onClick={() => purchaseItem(item)}>Buy</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Store;
