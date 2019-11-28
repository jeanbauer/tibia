import dragon from "./dragon.gif";
import minotaur from "./minotaur.gif";
import orc_spearman from "./orc_spearman.gif";
import rat from "./rat.gif";
import rotworm from "./rotworm.gif";
import troll from "./troll.gif";

const getMonster = level => {
  if (level <= 5) return { img: rat, name: "Rat" };
  if (level <= 15) return { img: troll, name: "Troll" };
  if (level <= 25) return { img: orc_spearman, name: "Orc Spearman" };
  if (level <= 35) return { img: rotworm, name: "Rotworm" };
  if (level <= 40) return { img: minotaur, name: "Minotaur" };
  if (level > 40) return { img: dragon, name: "Dragon" };
};

export default getMonster;
