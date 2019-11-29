import React from "react";
import map from "./map.gif";

function Map() {
  return (
    <div className="flex center map">
      <img
        onClick={() => alert("It doesnt work yet! Send a Pull Request :P")}
        className="minimap"
        alt="map"
        src={map}
      />
    </div>
  );
}

export default Map;
