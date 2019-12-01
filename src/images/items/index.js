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
import boh from "./boh.gif";
import crown_armor from "./crown_armor.gif";
import crown_legs from "./crown_legs.gif";
import crystal_ring from "./crystal_ring.gif";
import steel_helmet from "./steel_helmet.gif";
import demon_shield from "./demon_shield.gif";

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
  },
  {
    name: "Steel Helmet",
    price: 50,
    attack: 10,
    img: steel_helmet,
    type: "helmet"
  },
  {
    name: "crystal_ring",
    price: 100,
    attack: 10,
    img: crystal_ring,
    type: "ring"
  },
  {
    name: "Crown Armor",
    price: 200,
    attack: 25,
    img: crown_armor,
    type: "armor"
  },
  {
    name: "Crown Legs",
    price: 400,
    attack: 20,
    img: crown_legs,
    type: "legs"
  },
  {
    name: "BoH",
    price: 2000,
    attack: 40,
    img: boh,
    type: "boots"
  },
  {
    name: "Demon Shield",
    price: 5000,
    attack: 100,
    img: demon_shield,
    type: "right_hand"
  }
];

export { items, defaultItems };
