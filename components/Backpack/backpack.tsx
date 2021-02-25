import React, { useMemo } from 'react'
import { Flex } from '@chakra-ui/react'

import Item from '../Item/item'
import { backpack } from '../Images/Images'
import calculateCoins from './coins'
import styles from './backpack.module.css'

interface Props {
  gold: number
}

const Backpack = (props: Props) => {
  const memoizedCalculateCoins = useMemo(() => calculateCoins(props.gold), [
    props.gold,
  ])

  return (
    <Item name='Backpack' icon={backpack}>
      <Flex wrap='wrap'>
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
