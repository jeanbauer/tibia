import { create } from 'zustand'

import { defaultItems } from '../components/Images/Images'
import { ItemType, Status } from '../types'
import {
  IDLE_GOLD_AMOUNT,
  XP_PER_KILL,
  GOLD_PER_KILL,
  LEVEL_UP_HEALTH_BONUS,
  LEVEL_UP_MANA_BONUS,
  monsterHpForLevel,
  xpForLevel,
} from '../lib/game'

interface GameState {
  status: Status
  gold: number
  skills: { xp: number; level: number }
  monsterHp: number
  characterDamage: number
  equipments: typeof defaultItems
  killCount: number

  addIdleGold: () => void
  attack: () => void
  killMonster: () => void
  levelUp: () => void
  purchaseItem: (item: ItemType) => boolean
}

export const useGameStore = create<GameState>((set, get) => ({
  status: { health: 100, healthMax: 150, mana: 5, manaMax: 55 },
  gold: 1,
  skills: { xp: 0, level: 1 },
  monsterHp: 100,
  characterDamage: 40,
  equipments: defaultItems,
  killCount: 0,

  addIdleGold: () => set((s) => ({ gold: s.gold + IDLE_GOLD_AMOUNT })),

  attack: () => {
    const { monsterHp, characterDamage } = get()
    const newHp = monsterHp - characterDamage

    if (newHp <= 0) {
      get().killMonster()
      set({ monsterHp: monsterHpForLevel(get().skills.level) })
      return
    }

    set({ monsterHp: newHp })
  },

  killMonster: () => {
    set((s) => ({
      skills: { ...s.skills, xp: s.skills.xp + XP_PER_KILL },
      gold: s.gold + GOLD_PER_KILL,
      killCount: s.killCount + 1,
    }))

    while (get().skills.xp >= xpForLevel(get().skills.level + 1)) {
      get().levelUp()
    }
  },

  levelUp: () =>
    set((s) => {
      const { healthMax, manaMax } = s.status
      return {
        status: {
          healthMax: healthMax + LEVEL_UP_HEALTH_BONUS,
          health: healthMax + LEVEL_UP_HEALTH_BONUS,
          manaMax: manaMax + LEVEL_UP_MANA_BONUS,
          mana: manaMax + LEVEL_UP_MANA_BONUS,
        },
        characterDamage: s.characterDamage + s.skills.level,
        skills: { ...s.skills, level: s.skills.level + 1 },
      }
    }),

  purchaseItem: (item: ItemType) => {
    const { gold } = get()
    if (gold < item.price) {
      return false
    }

    set((s) => ({
      gold: s.gold - item.price,
      characterDamage: s.characterDamage + item.attack,
      equipments: { ...s.equipments, [item.type]: item },
    }))
    return true
  },
}))
