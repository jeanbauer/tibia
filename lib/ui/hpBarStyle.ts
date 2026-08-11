export const hpBarStyle = (hp: number, extras: Record<string, string> = {}) => {
  let color = 'green'
  if (hp <= 60) color = 'yellow'
  if (hp <= 20) color = 'red'

  return {
    ...extras,
    borderTop: `3px solid ${color}`,
    width: `${hp >= 100 ? 100 : hp}%`,
  }
}
