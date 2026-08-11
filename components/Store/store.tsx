import { useState } from 'react'
import { useDisclosure, Text, Button, Flex } from '@chakra-ui/react'

import { seller, chest, items, grass } from '../Images'
import { ItemType } from '../../types'
import { useGameStore } from '../../store/useGameStore'

import Item from '../Item/item'
import styles from './store.module.css'

const Store = () => {
  const gold = useGameStore((s) => s.gold)
  const purchaseItem = useGameStore((s) => s.purchaseItem)
  const { open, onOpen, onClose } = useDisclosure()
  const [storeItems, setStoreItems] = useState(items)

  const handleBuy = (item: ItemType) => {
    if (gold - item.price < 0) {
      return alert('Not enough gold')
    }

    setStoreItems((prev) => prev.filter((i) => i.name !== item.name))
    purchaseItem(item)
  }

  return (
    <>
      {!open && (
        <Flex bgImage={`url(${grass})`} className={styles.store}>
          <Flex
            direction='column'
            cursor='pointer'
            onClick={() => onOpen()}
            className={styles.storeSeller}
          >
            <Text className='text-shadow'>Murilo, the Seller</Text>
            <img
              className={styles.storeCharacter}
              width='100'
              src={seller}
              alt='seller'
            />
            <img className={styles.storeChest} src={chest} alt='chest' />
          </Flex>
        </Flex>
      )}

      {open && (
        <Item name='Store' icon={chest} onClose={() => onClose()}>
          <Flex justifyContent='flex-start' direction='column'>
            <div className={styles.storeItems}>
              {storeItems.map((item) => (
                <div key={item.name} className={styles.storeItem}>
                  <Flex align='center' justifyContent='space-between'>
                    <Flex direction='column'>
                      <span>{item.name}</span>
                      <span>
                        $ {item.price} | +{item.attack} atk
                      </span>
                    </Flex>
                    <img src={item.img} alt={item.name} />
                    <Button colorPalette='blue' size='xs' mr={3} onClick={() => handleBuy(item)}>
                      Buy
                    </Button>
                  </Flex>
                </div>
              ))}
            </div>
          </Flex>
        </Item>
      )}
    </>
  )
}

export default Store
