import { Button } from '@chakra-ui/react'

const Github = () => (
  <Button
    asChild
    style={{
      position: 'absolute',
      left: '20px',
      bottom: '20px',
    }}
  >
    <a href='https://github.com/jeanbauer/tibia' target='_blank' rel='noopener noreferrer'>
      <span role='img' aria-label='star'>
        ⭐
      </span>
      <span style={{ marginLeft: '8px' }}>Star on Github</span>
    </a>
  </Button>
)

export default Github
