const crystal1 = '/images/coins/crystal/1.gif'
const crystal2 = '/images/coins/crystal/2.gif'
const crystal3 = '/images/coins/crystal/3.gif'
const crystal4 = '/images/coins/crystal/4.gif'
const crystal5 = '/images/coins/crystal/5.gif'
const crystal10 = '/images/coins/crystal/10.gif'
const crystal25 = '/images/coins/crystal/25.gif'
const crystal100 = '/images/coins/crystal/100.gif'

const getRightCoin = (amount: number) => {
  if (amount === 1) return crystal1
  if (amount === 2) return crystal2
  if (amount === 3) return crystal3
  if (amount === 4) return crystal4
  if (amount === 5) return crystal5

  if (amount >= 50) return crystal100
  if (amount >= 25) return crystal25
  if (amount >= 10 || amount < 25) return crystal10
}

export default getRightCoin
