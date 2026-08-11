import { create } from 'zustand'

import { defaultItems } from '../components/Images/Images'
import { Equipments, ItemType, Status } from '../types'
import {
  IDLE_GOLD_AMOUNT,
  XP_PER_KILL,
  GOLD_PER_KILL,
  MANA_RESTORE_ON_KILL,
  LEVEL_UP_HEALTH_BONUS,
  LEVEL_UP_MANA_BONUS,
  monsterHpForLevel,
  retaliationDamage,
  xpForLevel,
} from '../lib/game'

interface GameState {
  status: Status
  gold: number
  skills: { xp: number; level: number }
  monsterHp: number
  characterDamage: number
  equipments: Equipments
  purchasedItemNames: string[]
  killCount: number
  deathCount: number

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
  purchasedItemNames: [],
  killCount: 0,
  deathCount: 0,

  addIdleGold: () => set((s) => ({ gold: s.gold + IDLE_GOLD_AMOUNT })),

  attack: () => {
    const { monsterHp, characterDamage, skills, status } = get()
    const incoming = retaliationDamage(skills.level)
    const healthAfterHit = status.health - incoming

    // Player dies → temple revive (full HP/Mana)
    if (healthAfterHit <= 0) {
      set({
        status: {
          ...status,
          health: status.healthMax,
          mana: status.manaMax,
        },
        deathCount: get().deathCount + 1,
      })
      return
    }

    set({ status: { ...status, health: healthAfterHit } })

    const newMonsterHp = monsterHp - characterDamage

    if (newMonsterHp <= 0) {
      get().killMonster()
      set({ monsterHp: monsterHpForLevel(get().skills.level) })
      return
    }

    set({ monsterHp: newMonsterHp })
  },

  killMonster: () => {
    set((s) => ({
      skills: { ...s.skills, xp: s.skills.xp + XP_PER_KILL },
      gold: s.gold + GOLD_PER_KILL,
      killCount: s.killCount + 1,
      status: {
        ...s.status,
        mana: Math.min(s.status.manaMax, s.status.mana + MANA_RESTORE_ON_KILL),
      },
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
    const { gold, purchasedItemNames } = get()
    if (gold < item.price) {
      return false
    }
    if (purchasedItemNames.includes(item.name)) {
      return false
    }

    set((s) => ({
      gold: s.gold - item.price,
      characterDamage: s.characterDamage + item.attack,
      equipments: { ...s.equipments, [item.type]: item },
      purchasedItemNames: [...s.purchasedItemNames, item.name],
    }))
    return true
  },
}))
