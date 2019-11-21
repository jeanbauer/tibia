import React from "react";
import Item from "../item/item";
import "./skills.css";

import skills from "../../images/skills.svg";

function Skills(props) {
  const getXpProgress = () => {
    // do some complex calc
    return {
      width: "30%"
    };
  };

  return (
    <Item name="Skills" icon={skills}>
      <div className="flex start column">
        <div className="skills__line flex">
          <p>Experience</p>
          <p>{props.xp || 0}</p>
        </div>

        <div className="skills__line flex">
          <p>Level</p>
          <p>{props.level || 0}</p>
        </div>

        <div className="skills__bar">
          <div style={getXpProgress()} className="skills__bar__progress"></div>
        </div>
      </div>
    </Item>
  );
}

export default Skills;
