import React from "react";
import Item from "../item/item";
import "./skills.css";

import skills from "../../images/skills.svg";

// Tibia official formula
// https://www.tibia.com/library/?subtopic=experiencetable
const xpForLevel = level =>
  (50 / 3) * Math.pow(level, 3) -
  100 * Math.pow(level, 2) +
  (850 / 3) * level -
  200;

function Skills(props) {
  const nextLevelAmount = xpForLevel(props.level + 1);
  const currentXP = props.xp;

  const xpProgress =
    (100 * (currentXP - xpForLevel(props.level))) /
    (nextLevelAmount - xpForLevel(props.level));

  if (currentXP - nextLevelAmount >= 0) {
    props.onLevelUp();
  }

  return (
    <Item name="Skills" icon={skills}>
      <div className="flex start column">
        <div className="skills__line flex">
          <p>Experience</p>
          <p>{currentXP}</p>
        </div>

        <div className="skills__line flex">
          <p>Level</p>
          <p>{props.level}</p>
        </div>

        <div className="skills__bar">
          <div
            style={{ width: `${xpProgress}%` }}
            className="skills__bar__progress"
          ></div>
        </div>
      </div>
    </Item>
  );
}

export default Skills;
