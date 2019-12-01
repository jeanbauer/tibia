import React, { useState, useEffect } from "react";
import Character from "./components/character/character";
import Backpack from "./components/backpack/backpack";
import Monster from "./components/monster/monster";
import Skills from "./components/skills/skills";
import Battle from "./components/monster/battle";
import Equipment from "./components/equipment/equipment";
import StatusBar from "./components/statusbar/statusbar";
import Github from "./components/github";
import Store from "./components/store/store";
import { defaultItems } from "./images/items";

import useInterval from "./hooks/setInterval";

import "./App.css";

function Sidebar(props) {
  return <div className="sidebar background flex column">{props.children}</div>;
}

function App() {
  const [gold, setGold] = useState(1);
  const [idleGold, setIdleGold] = useState(10);
  const [skills, setSkills] = useState({ xp: 0, level: 1 });
  const [hp, setHP] = useState(100);
  const [characterDamage, setCharacterDamage] = useState(40);
  const [equipments, setEquipments] = useState(defaultItems);

  useInterval(() => {
    setGold(gold + idleGold);
  }, 5000);

  const onPurchaseItem = item => {
    setCharacterDamage(characterDamage + item.attack);
    setGold(gold - item.price);

    equipments[item.type] = item;
    setEquipments(equipments);
  };

  const onKillMonster = () => {
    // it should increase accordingly to the monster, not fixed.
    const earnedXpFromMonster = 25;
    const earnedGoldFromMonster = 15;
    const { xp, level } = skills;

    const newXp = xp + earnedXpFromMonster;

    setSkills({ xp: newXp, level });
    setGold(gold + earnedGoldFromMonster);
  };

  const onLevelUp = () => {
    const { xp, level } = skills;
    setCharacterDamage(characterDamage + level);
    setSkills({ xp, level: level + 1 });
  };

  const attack = () => {
    const newHP = hp - characterDamage;

    if (newHP <= 0) {
      onKillMonster();
      setHP(100 + skills.level * 10);
      return;
    }

    setHP(newHP);
  };

  return (
    <main className="App flex">
      <div className="floor flex column">
        <Github />
        <Monster hp={hp} attack={attack} level={skills.level} />
        <Character />
      </div>

      <Sidebar>
        <Store gold={gold} onPurchaseItem={onPurchaseItem} />
        <Equipment equipments={equipments} />
        <StatusBar />
        <Battle hp={hp} attack={attack} level={skills.level} />
        <Skills onLevelUp={onLevelUp} xp={skills.xp} level={skills.level} />
        <Backpack gold={gold} />
      </Sidebar>
    </main>
  );
}

export default App;
