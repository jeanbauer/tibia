// Tibia official formula
// https://www.tibia.com/library/?subtopic=experiencetable
export const xpForLevel = (level: number) =>
  (50 / 3) * Math.pow(level, 3) -
  100 * Math.pow(level, 2) +
  (850 / 3) * level -
  200

export const xpProgressPercent = (xp: number, level: number) => {
  const currentThreshold = xpForLevel(level)
  const nextThreshold = xpForLevel(level + 1)
  return (100 * (xp - currentThreshold)) / (nextThreshold - currentThreshold)
}
