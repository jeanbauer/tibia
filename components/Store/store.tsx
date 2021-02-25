import { useState } from 'react'
import { useDisclosure, Text, Button, Flex } from '@chakra-ui/react'

import { seller, chest, items, grass } from '../Images'
import { ItemType } from '../../types'

import Item from '../Item/item'
import styles from './store.module.css'

interface Props {
  gold: number
  onPurchaseItem: (item: ItemType) => void
}

const Store = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [equipments, setEquipments] = useState(items)

  const purchaseItem = (item: ItemType) => {
    if (props.gold - item.price < 0) {
      return alert('Not enough gold')
    }

    const equipmentsWithoutThePurchased = equipments.filter(
      (equip) => equip.name !== item.name
    )
    setEquipments(equipmentsWithoutThePurchased)

    props.onPurchaseItem(item)
  }

  return (
    <>
      {!isOpen && (
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

      {isOpen && (
        <Item name='Store' icon={chest} onClose={() => onClose()}>
          <Flex justifyContent='flex-start' direction='column'>
            <div className={styles.storeItems}>
              {equipments.map((item) => (
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
                      colorScheme='blue'
                      size='xs'
                      mr={3}
                      onClick={() => purchaseItem(item)}
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
