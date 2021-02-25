const path = '/images'

const defaultItems = {
  helmet: {
    img: `${path}/items/empty_helmet.gif`,
  },
  armor: {
    img: `${path}/items/empty_armor.gif`,
  },
  right_hand: {
    img: `${path}/items/empty_shield.gif`,
  },
  left_hand: {
    img: `${path}/items/empty_sword.gif`,
  },
  legs: {
    img: `${path}/items/empty_legs.gif`,
  },
  necklace: {
    img: `${path}/items/empty_amulet.gif`,
  },
  ring: {
    img: `${path}/items/empty_ring.gif`,
  },
  ammo: {
    img: `${path}/items/empty_ammo.gif`,
  },
  boots: {
    img: `${path}/items/empty_boots.gif`,
  },
}

const items = [
  {
    name: 'Fire Sword',
    price: 10,
    attack: 20,
    img: `${path}/items/fire_sword.gif`,
    type: 'left_hand',
  },
  {
    name: 'Steel Helmet',
    price: 50,
    attack: 10,
    img: `${path}/items/steel_helmet.gif`,
    type: 'helmet',
  },
  {
    name: 'crystal_ring',
    price: 100,
    attack: 10,
    img: `${path}/items/crystal_ring.gif`,
    type: 'ring',
  },
  {
    name: 'Crown Armor',
    price: 200,
    attack: 25,
    img: `${path}/items/crown_armor.gif`,
    type: 'armor',
  },
  {
    name: 'Crown Legs',
    price: 400,
    attack: 20,
    img: `${path}/items/crown_legs.gif`,
    type: 'legs',
  },
  {
    name: 'BoH',
    price: 2000,
    attack: 40,
    img: `${path}/items/boh.gif`,
    type: 'boots',
  },
  {
    name: 'Demon Shield',
    price: 5000,
    attack: 100,
    img: `${path}/items/demon_shield.gif`,
    type: 'right_hand',
  },
]

const backpack = `${path}/coin/backpack.gif`

export { items, defaultItems, backpack }
