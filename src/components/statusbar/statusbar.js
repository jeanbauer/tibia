import React from "react";
import statusbar from "./status_bar.png";

function StatusBar() {
  return (
    <div
      onClick={() => alert("It doesnt work yet! Send a Pull Request :P")}
      className="flex center statusbar"
    >
      <img src={statusbar} />
    </div>
  );
}

export default StatusBar;
