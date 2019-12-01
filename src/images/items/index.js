// default
import empty_armor from "../../images/items/empty_armor.gif";
import empty_legs from "../../images/items/empty_legs.gif";
import empty_shield from "../../images/items/empty_shield.gif";
import empty_sword from "../../images/items/empty_sword.gif";
import empty_helmet from "../../images/items/empty_helmet.gif";
import empty_necklace from "../../images/items/empty_amulet.gif";
import empty_ring from "../../images/items/empty_ring.gif";
import empty_ammo from "../../images/items/empty_ammo.gif";
import empty_boots from "../../images/items/empty_boots.gif";

import fire_sword from "./fire_sword.gif";

const defaultItems = {
  helmet: {
    img: empty_helmet
  },
  armor: {
    img: empty_armor
  },
  right_hand: {
    img: empty_shield
  },
  left_hand: {
    img: empty_sword
  },
  legs: {
    img: empty_legs
  },
  necklace: {
    img: empty_necklace
  },
  ring: {
    img: empty_ring
  },
  ammo: {
    img: empty_ammo
  },
  boots: {
    img: empty_boots
  }
};

const items = [
  {
    name: "Fire Sword",
    price: 10,
    attack: 20,
    img: fire_sword,
    type: "left_hand"
  }
];

export { items, defaultItems };
