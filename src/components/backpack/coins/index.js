import crystal from './crystal';
import platinum from './platinum';
import gold from './gold';

function calculatePlatinumCoins(coins) {
  return coins >= 1000
    ? Math.floor((coins % 1000) / 100)
    : Math.floor(coins / 100);
}

function calculateGoldCoins(coins) {
  return coins >= 100
    ? coins % 100
    : coins;
}

function calculateCrystalCoins(coins) {
  return Math.floor(coins / 1000);
}

function calculateCoins(total) {
  const crystalCoins = calculateCrystalCoins(total);
  const platinumCoins = calculatePlatinumCoins(total);
  const goldCoins = calculateGoldCoins(total);

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
  ];
}

export default calculateCoins;
