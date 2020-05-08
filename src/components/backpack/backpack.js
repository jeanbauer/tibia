import React, { useMemo } from "react";

import Item from "../item/item";
import backpack from "../../images/coin/backpack.gif";
import calculateCoins from "./coins";

import "./backpack.css";

function Backpack(props) {
  const memoizedCalculateCoins = useMemo(() => calculateCoins(props.gold), [props.gold]);

  return (
    <Item name="Backpack" icon={backpack}>
      <div className="flex wrap">
        {
          memoizedCalculateCoins
            .filter(({ amount }) => amount > 0)
            .map(({ asset, amount }, i) => (
              <div key={i} className="flex center backpack__slot">
                <img src={asset} alt="" />
                <span className="text-shadow">{amount}</span>
              </div>
            ))
        }
      </div>
    </Item>
  );
}

export default Backpack;
