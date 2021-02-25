import { Flex } from '@chakra-ui/react'

import Item from '../Item/item'
import { battle } from '../Images'
import getMonster from '../Images/Monsters'
import styles from './monster.module.css'

const hpStyle = (hp: number) => {
  let color = 'green'
  if (hp <= 60) color = 'yellow'
  if (hp <= 20) color = 'red'
  return {
    marginTop: '1px',
    borderTop: `3px solid ${color}`,
    width: `${hp >= 100 ? 100 : hp}%`,
  }
}

function Battle({ attack, hp, level }) {
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
            <div style={hpStyle(hp)}></div>
          </div>
        </Flex>
      </Flex>
    </Item>
  )
}

export default Battle
