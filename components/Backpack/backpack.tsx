import React, { useMemo } from 'react'
import { Flex } from '@chakra-ui/react'

import Item from '../Item/item'
import { backpack } from '../Images/Images'
import calculateCoins from './coins'
import styles from './backpack.module.css'
import { useGameStore } from '@/store/useGameStore'

const Backpack = () => {
  const gold = useGameStore((s) => s.gold)
  const memoizedCalculateCoins = useMemo(() => calculateCoins(gold), [gold])

  return (
    <Item name='Backpack' icon={backpack}>
      <Flex wrap='wrap' data-testid='backpack-gold' data-gold={String(gold)}>
        {memoizedCalculateCoins
          .filter(({ amount }) => amount > 0)
          .map(({ asset, amount }, i) => (
            <Flex
              align='center'
              justify='center'
              key={i}
              className={styles.slot}
            >
              <img src={asset} alt='' />
              <span className='text-shadow'>{amount}</span>
            </Flex>
          ))}
      </Flex>
    </Item>
  )
}

export default Backpack
