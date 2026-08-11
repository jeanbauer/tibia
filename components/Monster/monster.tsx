import { useEffect, useRef } from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'

import getMonster from '../Images/Monsters'
import { useGameStore } from '../../store/useGameStore'
import { toaster } from '../ui/toaster'
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

const Monster = () => {
  const hp = useGameStore((s) => s.monsterHp)
  const level = useGameStore((s) => s.skills.level)
  const attack = useGameStore((s) => s.attack)
  const { name, img } = getMonster(level)
  const prevHpRef = useRef(hp)

  useEffect(() => {
    if (prevHpRef.current > 0 && hp > prevHpRef.current) {
      toaster.create({
        title: 'Monster killed.',
        type: 'success',
        duration: 3000,
      })
    }
    prevHpRef.current = hp
  }, [hp])

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
