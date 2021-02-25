import { Flex, Text, Image } from '@chakra-ui/react'
import { character } from '../Images'

function Character() {
  return (
    <Flex direction='column' align='center' justify='center'>
      <Text
        ml={'50px'}
        className='text-shadow'
        color='white'
        textAlign='center'
      >
        You
      </Text>
      <Image
        widht='50px'
        height='50px'
        transform='scale(2.5)'
        src={character}
        alt='character'
      />
    </Flex>
  )
}

export default Character
