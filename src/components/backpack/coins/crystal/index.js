import crystal1 from "./1.gif";
import crystal2 from "./2.gif";
import crystal3 from "./3.gif";
import crystal4 from "./4.gif";
import crystal5 from "./5.gif";
import crystal10 from "./10.gif";
import crystal25 from "./25.gif";
import crystal100 from "./100.gif";

const getRightCoin = amount => {
  if (amount === 1) return crystal1;
  if (amount === 2) return crystal2;
  if (amount === 3) return crystal3;
  if (amount === 4) return crystal4;
  if (amount === 5) return crystal5;

  if (amount >= 50) return crystal100;
  if (amount >= 25) return crystal25;
  if (amount >= 10 || amount < 25) return crystal10;
};

export default getRightCoin;
