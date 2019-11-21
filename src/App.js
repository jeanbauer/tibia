import React, { useState, useEffect } from "react";
import Character from "./components/character";
import Backpack from "./components/backpack/backpack";
import Monster from "./components/monster";
import Skills from "./components/skills/skills";
import Battle from "./components/battle";
import Equipment from "./components/equipment";

import useInterval from "./hooks/setInterval";
import map from "./images/map.png";
import "./App.css";

function Sidebar(props) {
  return <div className="sidebar flex column">{props.children}</div>;
}

function App() {
  const [gold, setGold] = useState(0);

  useInterval(() => {
    setGold(gold + 10);
  }, 50000);

  const onKillMonster = () => {
    setGold(gold + 1);
  };

  return (
    <main className="App flex ">
      <div className="floor flex column">
        <Monster onKill={onKillMonster} />
        <Character />
      </div>

      <Sidebar>
        <img height="190" src={map} />
        <Equipment />
        <Battle />
        <Skills />
        <Backpack gold={gold} />
      </Sidebar>
    </main>
  );
}

export default App;
