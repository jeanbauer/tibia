import gold1 from "./1.gif";
import gold2 from "./2.gif";
import gold3 from "./3.gif";
import gold4 from "./4.gif";
import gold5 from "./5.gif";
import gold10 from "./10.gif";
import gold25 from "./25.gif";
import gold100 from "./100.gif";

const getRightCoin = amount => {
  if (amount === 1) return gold1;
  if (amount === 2) return gold2;
  if (amount === 3) return gold3;
  if (amount === 4) return gold4;
  if (amount === 5) return gold5;

  if (amount >= 50) return gold100;
  if (amount >= 25) return gold25;
  if (amount >= 10 || amount < 25) return gold10;
};

export default getRightCoin;
