import { Text, Flex } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

import Item from '../Item/item'
import styles from './skills.module.css'
import { skills } from '../Images'
import { useGameStore } from '../../store/useGameStore'
import { toaster } from '../ui/toaster'
import { xpProgressPercent } from '../../lib/game'

const Skills = () => {
  const { xp, level } = useGameStore((s) => s.skills)
  const prevLevelRef = useRef(level)

  const xpProgress = xpProgressPercent(xp, level)

  // Toast is a UI concern — react to level changes, don't own progression
  useEffect(() => {
    if (level > prevLevelRef.current) {
      toaster.create({
        title: 'Level up!',
        description: 'If you keep like this we can do The Desert Dungeon today...',
        type: 'success',
        duration: 6000,
      })
    }
    prevLevelRef.current = level
  }, [level])

  return (
    <Item name='Skills' icon={skills}>
      <Flex direction='column' justify='flex-start'>
        <Flex className={styles.skillsLine}>
          <Text>Experience</Text>
          <Text>{xp}</Text>
        </Flex>

        <Flex className={styles.skillsLine}>
          <Text>Level</Text>
          <Text>{level}</Text>
        </Flex>

        <div className={styles.skillsBar}>
          <div
            style={{ width: `${xpProgress}% ` }}
            className={styles.skillsBarLevel}
          />
        </div>
      </Flex>
    </Item>
  )
}

export default Skills
