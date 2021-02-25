import crystal from './crystal'
import platinum from './platinum'
import gold from './gold'

function calculatePlatinumCoins(coins: number) {
  return coins >= 1000
    ? Math.floor((coins % 1000) / 100)
    : Math.floor(coins / 100)
}

function calculateGoldCoins(coins: number) {
  return coins >= 100 ? coins % 100 : coins
}

function calculateCrystalCoins(coins: number) {
  return Math.floor(coins / 1000)
}

function calculateCoins(total: number) {
  const crystalCoins = calculateCrystalCoins(total)
  const platinumCoins = calculatePlatinumCoins(total)
  const goldCoins = calculateGoldCoins(total)

  return [
    {
      asset: crystal(crystalCoins),
      amount: crystalCoins,
    },
    {
      asset: platinum(platinumCoins),
      amount: platinumCoins,
    },
    {
      asset: gold(goldCoins),
      amount: goldCoins,
    },
  ]
}

export default calculateCoins
