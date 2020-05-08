import platinum1 from "./1.gif";
import platinum2 from "./2.gif";
import platinum3 from "./3.gif";
import platinum4 from "./4.gif";
import platinum5 from "./5.gif";
import platinum10 from "./10.gif";
import platinum25 from "./25.gif";
import platinum100 from "./100.gif";

const getRightCoin = amount => {
  if (amount === 1) return platinum1;
  if (amount === 2) return platinum2;
  if (amount === 3) return platinum3;
  if (amount === 4) return platinum4;
  if (amount === 5) return platinum5;

  if (amount >= 50) return platinum100;
  if (amount >= 25) return platinum25;
  if (amount >= 10 || amount < 25) return platinum10;
};

export default getRightCoin;
