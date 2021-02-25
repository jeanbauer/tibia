import { Box, Text, Flex } from '@chakra-ui/react'

import getMonster from '../Images/Monsters'

import skillsStyles from '../Skills/skills.module.css'
import styles from './monster.module.css'

const hpStyle = (hp: number) => {
  let color = 'green'
  if (hp <= 60) color = 'yellow'
  if (hp <= 20) color = 'red'
  return {
    borderTop: `3px solid ${color}`,
    width: `${hp >= 100 ? 100 : hp}%`,
  }
}

interface Props {
  attack: () => void
  hp: number
  level: number
}

const Monster = ({ attack, hp, level }: Props) => {
  const { name, img } = getMonster(level)

  return (
    <Flex align='center' justify='center' direction='column'>
      <Text className={`text-shadow ${styles.monsterName}`}>{name}</Text>
      <Box onClick={attack} cursor='pointer'>
        <div className={skillsStyles.skillsBar}>
          <div style={hpStyle(hp)}></div>
        </div>
        <img src={img} alt={name} />
      </Box>
    </Flex>
  )
}

export default Monster
