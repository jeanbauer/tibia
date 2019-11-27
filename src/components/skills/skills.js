import React from "react";
import Item from "../item/item";
import "./skills.css";

import skills from "../../images/skills.svg";

function Skills(props) {
  const xpProgress = {
    width: `${props.xp.toString().slice(props.xp.toString().length - 2)}%`
  };

  return (
    <Item name="Skills" icon={skills}>
      <div className="flex start column">
        <div className="skills__line flex">
          <p>Experience</p>
          <p>{props.xp}</p>
        </div>

        <div className="skills__line flex">
          <p>Level</p>
          <p>{props.level}</p>
        </div>

        <div className="skills__bar">
          <div style={xpProgress} className="skills__bar__progress"></div>
        </div>
      </div>
    </Item>
  );
}

export default Skills;
