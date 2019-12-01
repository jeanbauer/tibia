import React, { useState } from "react";
import seller from "../../images/outfits/hardcore.png";
import chest from "./chest.gif";
import "./store.css";

function Store() {
  const [showingStore, setShowingStore] = useState(false);

  return (
    <>
      <div className="store  flex">
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
        <div>
          It should show the available items on the store (in the future)
        </div>
      )}
    </>
  );
}

export default Store;
