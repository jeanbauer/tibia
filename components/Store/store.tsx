import { useDisclosure, Text, Button, Flex } from '@chakra-ui/react'

import { seller, chest, items, grass } from '../Images'
import { ItemType } from '@/types'
import { useGameStore } from '@/store/useGameStore'
import { toaster } from '@/components/ui/toaster'

import Item from '../Item/item'
import styles from './store.module.css'

const Store = () => {
  const gold = useGameStore((s) => s.gold)
  const purchasedItemNames = useGameStore((s) => s.purchasedItemNames)
  const purchaseItem = useGameStore((s) => s.purchaseItem)
  const { open, onOpen, onClose } = useDisclosure()

  const storeItems = items.filter((item) => !purchasedItemNames.includes(item.name))

  const handleBuy = (item: ItemType) => {
    const purchased = purchaseItem(item)
    if (!purchased) {
      toaster.create({
        title: 'Not enough gold',
        type: 'error',
        duration: 3000,
      })
    }
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
            data-testid='store-seller'
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
                    <Button
                      colorPalette='blue'
                      size='xs'
                      mr={3}
                      disabled={gold < item.price}
                      onClick={() => handleBuy(item)}
                    >
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
