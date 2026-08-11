import { create } from 'zustand'

import { defaultItems } from '../components/Images/Images'
import { ItemType, Status } from '../types'
import { toaster } from '../components/ui/toaster'

const IDLE_GOLD_INTERVAL = 10
const XP_PER_KILL = 25
const GOLD_PER_KILL = 15

interface GameState {
  status: Status
  gold: number
  skills: { xp: number; level: number }
  monsterHp: number
  characterDamage: number
  equipments: typeof defaultItems

  addIdleGold: () => void
  attack: () => void
  killMonster: () => void
  levelUp: () => void
  purchaseItem: (item: ItemType) => void
}

export const useGameStore = create<GameState>((set, get) => ({
  status: { health: 100, healthMax: 150, mana: 5, manaMax: 55 },
  gold: 1,
  skills: { xp: 0, level: 1 },
  monsterHp: 100,
  characterDamage: 40,
  equipments: defaultItems,

  addIdleGold: () => set((s) => ({ gold: s.gold + IDLE_GOLD_INTERVAL })),

  attack: () => {
    const { monsterHp, characterDamage, skills } = get()
    const newHp = monsterHp - characterDamage

    if (newHp <= 0) {
      get().killMonster()
      set({ monsterHp: 100 + skills.level * 10 })
      return
    }

    set({ monsterHp: newHp })
  },

  killMonster: () => {
    set((s) => ({
      skills: { ...s.skills, xp: s.skills.xp + XP_PER_KILL },
      gold: s.gold + GOLD_PER_KILL,
    }))
    toaster.create({
      title: 'Monster killed.',
      type: 'success',
      duration: 3000,
    })
  },

  levelUp: () =>
    set((s) => {
      const { healthMax, manaMax } = s.status
      return {
        status: {
          healthMax: healthMax + 30,
          health: healthMax + 30,
          manaMax: manaMax + 5,
          mana: manaMax + 5,
        },
        characterDamage: s.characterDamage + s.skills.level,
        skills: { ...s.skills, level: s.skills.level + 1 },
      }
    }),

  purchaseItem: (item: ItemType) =>
    set((s) => ({
      gold: s.gold - item.price,
      characterDamage: s.characterDamage + item.attack,
      equipments: { ...s.equipments, [item.type]: item },
    })),
}))
