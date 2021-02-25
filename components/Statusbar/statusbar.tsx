import { Flex, Image } from '@chakra-ui/react'
import { Status } from '../../types'

import styles from './statusbar.module.css'

interface Props {
  status: Status
}

const StatusBar = ({ status }: Props) => {
  const healthBar = (status.health * 100) / status.healthMax
  const manaBar = (status.mana * 100) / status.manaMax
  const healthBarStyle = healthBar > 99 ? 'endBarStyle' : 'healthBar'
  const manaBarStyle = manaBar > 99 ? 'endBarStyle' : 'manaBar'

  return (
    <Flex my={2} align='center' justify='center'>
      <div className={styles.cropped}>
        <Image src={'/images/statusbar.png'} alt='status bar' />
      </div>
      <Flex align='center' justify='center' direction='column'>
        <div className={styles.statusBar}>
          <div
            className={`${styles.healthBar} ${styles[healthBarStyle]}`}
            style={{ width: healthBar + '%' }}
          />
        </div>
        <div className={styles.statusBar}>
          <div
            className={`${styles.manaBar} ${styles[manaBarStyle]}`}
            style={{ width: manaBar + '%' }}
          />
        </div>
      </Flex>
      <Flex align='center' justify='center' direction='column'>
        <div className={styles.health}>{status.health}</div>
        <div className={styles.mana}>{status.mana}</div>
      </Flex>
    </Flex>
  )
}

export default StatusBar
