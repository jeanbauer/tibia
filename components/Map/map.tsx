import { Flex } from '@chakra-ui/react'

import { map } from '../Images'
import { toaster } from '../ui/toaster'

const Map = () => {
  return (
    <Flex align='center' justify='center' className='map'>
      <img
        onClick={() =>
          toaster.create({
            title: 'Map travel is not implemented yet',
            description: 'Send a Pull Request :P',
            type: 'info',
            duration: 3000,
          })
        }
        className='minimap'
        alt='minimap'
        src={map}
      />
    </Flex>
  )
}

export default Map
