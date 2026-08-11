import { Box, Text, Flex } from '@chakra-ui/react'

import getMonster from '@/components/Images/Monsters'
import { useGameStore } from '@/store/useGameStore'
import { hpBarStyle } from '@/lib/ui/hpBarStyle'
import skillsStyles from '@/components/Skills/skills.module.css'
import styles from './monster.module.css'

const Monster = () => {
  const hp = useGameStore((s) => s.monsterHp)
  const level = useGameStore((s) => s.skills.level)
  const attack = useGameStore((s) => s.attack)
  const { name, img } = getMonster(level)

  return (
    <Flex align='center' justify='center' direction='column'>
      <Text className={`text-shadow ${styles.monsterName}`}>{name}</Text>
      <Box onClick={attack} cursor='pointer'>
        <div className={skillsStyles.skillsBar}>
          <div style={hpBarStyle(hp)}></div>
        </div>
        <img src={img} alt={name} data-testid='monster-sprite' />
      </Box>
    </Flex>
  )
}

export default Monster
