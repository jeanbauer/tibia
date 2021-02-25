const platinum1 = '/images/coins/platinum/1.gif'
const platinum2 = '/images/coins/platinum/2.gif'
const platinum3 = '/images/coins/platinum/3.gif'
const platinum4 = '/images/coins/platinum/4.gif'
const platinum5 = '/images/coins/platinum/5.gif'
const platinum10 = '/images/coins/platinum/10.gif'
const platinum25 = '/images/coins/platinum/25.gif'
const platinum100 = '/images/coins/platinum/100.gif'

const getRightCoin = (amount: number) => {
  if (amount === 1) return platinum1
  if (amount === 2) return platinum2
  if (amount === 3) return platinum3
  if (amount === 4) return platinum4
  if (amount === 5) return platinum5

  if (amount >= 50) return platinum100
  if (amount >= 25) return platinum25
  if (amount >= 10 || amount < 25) return platinum10
}

export default getRightCoin
