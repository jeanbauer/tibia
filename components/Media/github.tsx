import { Button, Link, Text } from '@chakra-ui/react'

const Github = () => (
  <Button
    style={{
      position: 'absolute',
      left: '20px',
      bottom: '20px',
    }}
  >
    <Link href='https://github.com/jeanbauer/tibia' isExternal>
      <Text as='span' role='img' aria-label='star'>
        ⭐
      </Text>
      <Text as='span' ml={2}>
        Star on Github
      </Text>
    </Link>
  </Button>
)

export default Github
