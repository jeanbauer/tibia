import { useEffect, useRef } from 'react'

import { useGameStore } from '@/store/useGameStore'
import { toaster } from '@/components/ui/toaster'

const showToast = (...args: Parameters<typeof toaster.create>) => {
  queueMicrotask(() => toaster.create(...args))
}

/** Listens to game state transitions and shows UI feedback. */
const GameToasts = () => {
  const killCount = useGameStore((s) => s.killCount)
  const deathCount = useGameStore((s) => s.deathCount)
  const level = useGameStore((s) => s.skills.level)
  const prevKillCount = useRef(killCount)
  const prevDeathCount = useRef(deathCount)
  const prevLevel = useRef(level)

  useEffect(() => {
    if (killCount > prevKillCount.current) {
      showToast({
        title: 'Monster killed.',
        type: 'success',
        duration: 3000,
      })
    }
    prevKillCount.current = killCount
  }, [killCount])

  useEffect(() => {
    if (deathCount > prevDeathCount.current) {
      showToast({
        title: 'You died!',
        description: 'The temple healed your wounds. Try again...',
        type: 'error',
        duration: 4000,
      })
    }
    prevDeathCount.current = deathCount
  }, [deathCount])

  useEffect(() => {
    if (level > prevLevel.current) {
      showToast({
        title: 'Level up!',
        description: 'If you keep like this we can do The Desert Dungeon today...',
        type: 'success',
        duration: 6000,
      })
    }
    prevLevel.current = level
  }, [level])

  return null
}

export default GameToasts
