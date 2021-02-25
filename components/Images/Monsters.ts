const path = '/images/monsters'

const rat = { img: `${path}/rat.gif`, name: 'Rat' }
const snake = { img: `${path}/snake.gif`, name: 'Snake' }
const spider = { img: `${path}/spider.gif`, name: 'Spider' }
const poison_spider = {
  img: `${path}/poison_spider.gif`,
  name: 'Poison Spider',
}
const wolf = { img: `${path}/wolf.gif`, name: 'Wolf' }
const bear = { img: `${path}/bear.gif`, name: 'Bear' }
const lion = { img: `${path}/lion.gif`, name: 'Lion' }
const troll = { img: `${path}/troll.gif`, name: 'Troll' }
const frost_troll = {
  img: `${path}/frost_troll.gif`,
  name: 'Frost Troll',
}
const goblin = { img: `${path}/goblin.gif`, name: 'Goblin' }
const orc_spearman = {
  img: `${path}/orc_spearman.gif`,
  name: 'Orc Spearman',
}
const larva = { img: `${path}/larva.gif`, name: 'Larva' }
const dwarf = { img: `${path}/dwarf.gif`, name: 'Dwarf' }
const rotworm = { img: `${path}/rotworm.gif`, name: 'Rotworm' }
const dwarf_soldier = {
  img: `${path}/dwarf_soldier.gif`,
  name: 'Dwarf Soldier',
}
const minotaur = { img: `${path}/minotaur.gif`, name: 'Minotaur' }
const dragon = { img: `${path}/dragon.gif`, name: 'Dragon' }

const monsterByLevel = {
  1: rat,
  2: snake,
  3: spider,
  4: poison_spider,
  5: wolf,
  6: bear,
  7: lion,
  8: troll,
  9: frost_troll,
  10: goblin,
  11: orc_spearman,
  12: larva,
  13: dwarf,
  14: rotworm,
  15: dwarf_soldier,
  16: minotaur,
}

const getMonster = (level: number) => {
  const monster = monsterByLevel[level]

  if (monster) {
    return monster
  }

  return { img: dragon, name: 'Dragon' }
}

export default getMonster
