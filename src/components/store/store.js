import React, { useState } from "react";
import seller from "../../images/outfits/hardcore.png";
import chest from "./chest.gif";
import { items } from "../../images/items";
import Item from "../item/item";
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
      {!showingStore && (
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
      )}

      {showingStore && (
        <Item
          name="Store"
          icon={chest}
          onClose={() => setShowingStore(!showingStore)}
        >
          <div className="flex start column">
            <div className="store__items">
              {equipments.map(item => (
                <div className="store__item">
                  <div className="flex space-between">
                    <div className="flex column">
                      <span>{item.name}</span>
                      <span>
                        $ {item.price} | +{item.attack} atk
                      </span>
                    </div>
                    <img src={item.img} alt={item.name} />
                    <button
                      className="store__button pointer"
                      onClick={() => purchaseItem(item)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Item>
      )}
    </>
  );
}

export default Store;
