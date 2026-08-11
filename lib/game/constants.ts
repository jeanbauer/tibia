export const IDLE_GOLD_AMOUNT = 10
export const IDLE_GOLD_INTERVAL_MS = 5000

export const XP_PER_KILL = 25
export const GOLD_PER_KILL = 15

export const LEVEL_UP_HEALTH_BONUS = 30
export const LEVEL_UP_MANA_BONUS = 5

export const BASE_MONSTER_HP = 100
export const MONSTER_HP_PER_LEVEL = 10

export const monsterHpForLevel = (level: number) =>
  BASE_MONSTER_HP + level * MONSTER_HP_PER_LEVEL
