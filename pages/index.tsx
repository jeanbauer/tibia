import { Flex, Box, useToast } from '@chakra-ui/react'
import { useState } from 'react'

import useInterval from '../hooks/setInterval'
import { defaultItems } from '../components/Images/Images'
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
  const [status, setStatus] = useState({
    health: 100,
    healthMax: 150,
    mana: 5,
    manaMax: 55,
  })
  const [gold, setGold] = useState(1)
  const [idleGold] = useState(10)
  const [skills, setSkills] = useState({ xp: 0, level: 1 })
  const [hp, setHP] = useState(100)
  const [characterDamage, setCharacterDamage] = useState(40)
  const [equipments, setEquipments] = useState(defaultItems)
  const toast = useToast()

  useInterval(() => {
    setGold(gold + idleGold)
  }, 5000)

  const onPurchaseItem = (item) => {
    setCharacterDamage(characterDamage + item.attack)
    setGold(gold - item.price)

    equipments[item.type] = item
    setEquipments(equipments)
  }

  const onKillMonster = () => {
    // it should increase accordingly to the monster, not fixed.
    const earnedXpFromMonster = 25
    const earnedGoldFromMonster = 15
    const { xp, level } = skills

    const newXp = xp + earnedXpFromMonster

    setSkills({ xp: newXp, level })
    setGold(gold + earnedGoldFromMonster)

    toast({
      position: 'bottom-left',
      title: 'Monster killed.',
      // description: "If you keep like this dungeon quest",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  const onLevelUp = () => {
    const { xp, level } = skills
    const { healthMax, manaMax } = status
    setStatus({
      healthMax: healthMax + 30,
      health: healthMax + 30,
      manaMax: manaMax + 5,
      mana: manaMax + 5,
    })
    setCharacterDamage(characterDamage + level)
    setSkills({ xp, level: level + 1 })

    toast({
      position: 'bottom-left',
      title: 'Level up!',
      description:
        'If you keep like this we can do The Desert Dungeon today...',
      status: 'success',
      duration: 6000,
      isClosable: true,
    })
  }

  const attack = () => {
    const newHP = hp - characterDamage

    if (newHP <= 0) {
      onKillMonster()
      setHP(100 + skills.level * 10)
      return
    }

    setHP(newHP)
  }

  return (
    <Flex>
      <Flex justifyContent='space-between' direction='column' className='floor'>
        <Github />
        <Monster hp={hp} attack={attack} level={skills.level} />
        <Character />
      </Flex>

      <Flex
        direction='column'
        backgroundImage={`url(${background})`}
        width='20vw'
        height='100vh'
      >
        <Store gold={gold} onPurchaseItem={onPurchaseItem} />
        <Equipment equipments={equipments} />
        <StatusBar status={status} />
        <Battle hp={hp} attack={attack} level={skills.level} />
        <Skills onLevelUp={onLevelUp} xp={skills.xp} level={skills.level} />
        <Backpack gold={gold} />
      </Flex>
    </Flex>
  )
}
