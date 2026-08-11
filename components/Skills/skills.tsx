import { Text, Flex } from '@chakra-ui/react'

import Item from '../Item/item'
import styles from './skills.module.css'
import { skills } from '../Images'
import { useGameStore } from '@/store/useGameStore'
import { xpProgressPercent } from '@/lib/game'

const Skills = () => {
  const { xp, level } = useGameStore((s) => s.skills)
  const xpProgress = xpProgressPercent(xp, level)

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
