import { items } from '../components/Images'

export type ItemsType = typeof items
export type ItemType = typeof items[0]

export type Status = {
  healthMax: number
  manaMax: number
  health: number
  mana: number
}
