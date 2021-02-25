const gold1 = '/images/coins/gold/1.gif'
const gold2 = '/images/coins/gold/2.gif'
const gold3 = '/images/coins/gold/3.gif'
const gold4 = '/images/coins/gold/4.gif'
const gold5 = '/images/coins/gold/5.gif'
const gold10 = '/images/coins/gold/10.gif'
const gold25 = '/images/coins/gold/25.gif'
const gold100 = '/images/coins/gold/100.gif'

const getRightCoin = (amount: number) => {
  if (amount === 1) return gold1
  if (amount === 2) return gold2
  if (amount === 3) return gold3
  if (amount === 4) return gold4
  if (amount === 5) return gold5

  if (amount >= 50) return gold100
  if (amount >= 25) return gold25
  if (amount >= 10 || amount < 25) return gold10
}

export default getRightCoin
