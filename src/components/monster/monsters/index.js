import rat from "./rat.gif";
import snake from "./snake.gif";
import spider from "./spider.gif";
import poison_spider from "./poison_spider.gif";
import wolf from "./wolf.gif";
import bear from "./bear.gif";
import lion from "./lion.gif";
import troll from "./troll.gif";
import frost_troll from "./frost_troll.gif";
import goblin from "./goblin.gif";
import orc_spearman from "./orc_spearman.gif";
import larva from "./larva.gif";
import dwarf from "./dwarf.gif";
import rotworm from "./rotworm.gif";
import dwarf_soldier from "./dwarf_soldier.gif";
import minotaur from "./minotaur.gif";
import dragon from "./dragon.gif";

// This file is SO ugly, I know!
// It could be a json file and that's it. Doing tomorrow.
const getMonster = level => {
  if (level === 1) return { img: rat, name: "Rat" };
  if (level === 2) return { img: snake, name: "Snake" };
  if (level === 3) return { img: spider, name: "Spider" };
  if (level === 4) return { img: poison_spider, name: "Poison Spider" };
  if (level === 5) return { img: wolf, name: "Wolf" };
  if (level === 6) return { img: bear, name: "Bear" };
  if (level === 7) return { img: lion, name: "Lion" };
  if (level === 8) return { img: troll, name: "Troll" };
  if (level === 9) return { img: frost_troll, name: "Frost Troll" };
  if (level === 10) return { img: goblin, name: "Goblin" };
  if (level === 11) return { img: orc_spearman, name: "Orc Spearman" };
  if (level === 12) return { img: larva, name: "Larva" };
  if (level === 13) return { img: dwarf, name: "Dwarf" };
  if (level === 14) return { img: rotworm, name: "Rotworm" };
  if (level === 15) return { img: dwarf_soldier, name: "Dwarf Soldier" };
  if (level === 16) return { img: minotaur, name: "Minotaur" };
  if (level >= 17) return { img: dragon, name: "Dragon" };
};

export default getMonster;
