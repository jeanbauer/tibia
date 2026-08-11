export type EquipmentSlot =
  | 'helmet'
  | 'armor'
  | 'right_hand'
  | 'left_hand'
  | 'legs'
  | 'necklace'
  | 'ring'
  | 'ammo'
  | 'boots'

export type ItemType = {
  name: string
  price: number
  attack: number
  img: string
  type: EquipmentSlot
}

/** Empty placeholder or a purchased item in a slot. */
export type EquipmentSlotState = { img: string } | ItemType

export type Equipments = Record<EquipmentSlot, EquipmentSlotState>

export type ItemsType = ItemType[]

export type Status = {
  healthMax: number
  manaMax: number
  health: number
  mana: number
}
