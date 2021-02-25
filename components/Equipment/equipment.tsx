import { Flex } from '@chakra-ui/react'

import { backpack } from '../Images'

import styles from '../Backpack/backpack.module.css'

function Equipment(props) {
  const { equipments } = props

  return (
    <Flex
      align='center'
      justify='center'
      position='relative'
      className='background'
    >
      <Flex direction='column' align='center' justify='center'>
        <div className={styles.slot}>
          <img src={equipments.necklace.img} alt='necklace' />
        </div>
        <div className={styles.slot}>
          <img src={equipments.left_hand.img} alt='left-hand' />
        </div>
        <div className={styles.slot}>
          <img src={equipments.ring.img} alt='ring' />
        </div>
      </Flex>

      <Flex direction='column' align='center' justify='center'>
        <div className={styles.slot}>
          <img src={equipments.helmet.img} alt='helmet' />
        </div>
        <div className={styles.slot}>
          <img src={equipments.armor.img} alt='armos' />
        </div>

        <div className={styles.slot}>
          <img src={equipments.legs.img} alt='legs' />
        </div>
        <div className={styles.slot}>
          <img src={equipments.boots.img} alt='boots' />
        </div>
      </Flex>

      <Flex direction='column' align='center' justify='center'>
        <div className={styles.slot}>
          <img src={backpack} alt='backpack' />
        </div>

        <div className={styles.slot}>
          <img src={equipments.right_hand.img} alt='shield' />
        </div>
        <div className={styles.slot}>
          <img src={equipments.ammo.img} alt='ammo' />
        </div>
      </Flex>
    </Flex>
  )
}

export default Equipment
