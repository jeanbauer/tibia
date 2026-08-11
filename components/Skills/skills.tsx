import { Text, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'

import Item from '../Item/item'
import styles from './skills.module.css'
import { skills } from '../Images'
import { useGameStore } from '../../store/useGameStore'
import { toaster } from '../ui/toaster'

// Tibia official formula
// https://www.tibia.com/library/?subtopic=experiencetable
const xpForLevel = (level: number) =>
  (50 / 3) * Math.pow(level, 3) -
  100 * Math.pow(level, 2) +
  (850 / 3) * level -
  200

const Skills = () => {
  const { xp, level } = useGameStore((s) => s.skills)
  const levelUp = useGameStore((s) => s.levelUp)

  const nextLevelAmount = xpForLevel(level + 1)
  const currentXP = xp

  const xpProgress =
    (100 * (currentXP - xpForLevel(level))) /
    (nextLevelAmount - xpForLevel(level))

  useEffect(() => {
    if (currentXP - nextLevelAmount >= 0) {
      levelUp()
      toaster.create({
        title: 'Level up!',
        description: 'If you keep like this we can do The Desert Dungeon today...',
        type: 'success',
        duration: 6000,
      })
    }
  }, [currentXP, nextLevelAmount, levelUp])

  return (
    <Item name='Skills' icon={skills}>
      <Flex direction='column' justify='flex-start'>
        <Flex className={styles.skillsLine}>
          <Text>Experience</Text>
          <Text>{currentXP}</Text>
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
