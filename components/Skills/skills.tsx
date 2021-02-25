import { Text, Flex } from '@chakra-ui/react'

import Item from '../Item/item'
import styles from './skills.module.css'

import { skills } from '../Images'

// Tibia official formula
// https://www.tibia.com/library/?subtopic=experiencetable
const xpForLevel = (level: number) =>
  (50 / 3) * Math.pow(level, 3) -
  100 * Math.pow(level, 2) +
  (850 / 3) * level -
  200

interface Props {
  level: number
  xp: number
  onLevelUp: () => void
}

const Skills = (props: Props) => {
  const nextLevelAmount = xpForLevel(props.level + 1)
  const currentXP = props.xp

  const xpProgress =
    (100 * (currentXP - xpForLevel(props.level))) /
    (nextLevelAmount - xpForLevel(props.level))

  if (currentXP - nextLevelAmount >= 0) {
    props.onLevelUp()
  }

  return (
    <Item name='Skills' icon={skills}>
      <Flex direction='column' justify='flex-start'>
        <Flex className={styles.skillsLine}>
          <Text>Experience</Text>
          <Text>{currentXP}</Text>
        </Flex>

        <Flex className={styles.skillsLine}>
          <Text>Level</Text>
          <Text>{props.level}</Text>
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
