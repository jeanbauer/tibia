import { Flex } from '@chakra-ui/react'

import useInterval from '../hooks/setInterval'
import { useGameStore } from '../store/useGameStore'
import Character from '../components/Character/character'
import Backpack from '../components/Backpack/backpack'
import Monster from '../components/Monster/monster'
import Skills from '../components/Skills/skills'
import Battle from '../components/Monster/battle'
import Equipment from '../components/Equipment/equipment'
import StatusBar from '../components/Statusbar/statusbar'
import Github from '../components/Media/github'
import Store from '../components/Store/store'

import { background } from '../components/Images'

export default function Home() {
  const addIdleGold = useGameStore((s) => s.addIdleGold)

  useInterval(addIdleGold, 5000)

  return (
    <Flex>
      <Flex justifyContent='space-between' direction='column' className='floor'>
        <Github />
        <Monster />
        <Character />
      </Flex>

      <Flex
        direction='column'
        backgroundImage={`url(${background})`}
        width='20vw'
        height='100vh'
      >
        <Store />
        <Equipment />
        <StatusBar />
        <Battle />
        <Skills />
        <Backpack />
      </Flex>
    </Flex>
  )
}
