import React from 'react'

const Github = () => (
  <div
    style={{
      position: 'absolute',
      left: '20px',
      bottom: '20px',
    }}
  >
    <a
      className='btn'
      href='https://github.com/jeanbauer/tibia'
      aria-label='Star jeanbauer/tibia on GitHub'
    >
      <span className='btn__star animated bounce' role='img' aria-label='star'>
        ⭐
      </span>{' '}
      Star on Github
    </a>
  </div>
)

export default Github
