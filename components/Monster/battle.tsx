import { Flex } from '@chakra-ui/react'

import Item from '@/components/Item/item'
import { battle } from '@/components/Images'
import getMonster from '@/components/Images/Monsters'
import { useGameStore } from '@/store/useGameStore'
import { hpBarStyle } from '@/lib/ui/hpBarStyle'
import styles from './monster.module.css'

function Battle() {
  const hp = useGameStore((s) => s.monsterHp)
  const level = useGameStore((s) => s.skills.level)
  const attack = useGameStore((s) => s.attack)
  const { name, img } = getMonster(level)

  return (
    <Item name='Battle' icon={battle}>
      <Flex
        justify='flex-start'
        cursor='pointer'
        onClick={attack}
        pt={1}
        pb={2}
      >
        <img height='21' src={img} alt={name} />

        <Flex direction='column' width='full'>
          <span>{name}</span>
          <div className={styles.skillsBar}>
            <div style={hpBarStyle(hp, { marginTop: '1px' })}></div>
          </div>
        </Flex>
      </Flex>
    </Item>
  )
}

export default Battle
