import { Flex } from '@chakra-ui/react'

import { map } from '../Images'

const Map = () => {
  return (
    <Flex align='center' justify='center' className='map'>
      <img
        onClick={() => alert('It doesnt work yet! Send a Pull Request :P')}
        className='minimap'
        alt='map'
        src={map}
      />
    </Flex>
  )
}

export default Map
