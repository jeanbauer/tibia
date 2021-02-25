import { Flex, Box, Text } from '@chakra-ui/react'

import styles from './item.module.css'
import { background } from '../Images'

interface Props {
  icon: string
  name: string
  onClose?: () => void
  children: React.ReactNode
}

const Item = (props: Props) => {
  return (
    <Box className={styles.item}>
      <Flex direction='column' className={styles.itemInternBorder}>
        <Flex justify='flex-start' className={styles.itemTitle}>
          <img width='14' src={props.icon} alt={props.icon} />
          <Text as='span'>{props.name}</Text>
          {props.onClose && (
            <Text
              as='span'
              cursor='pointer'
              className={styles.itemClose}
              onClick={props.onClose}
            >
              x
            </Text>
          )}
        </Flex>
        <Box className={styles.itemContent} bgImage={`url(${background})`}>
          {props.children}
        </Box>
      </Flex>
    </Box>
  )
}

export default Item
