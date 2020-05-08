import calculateCoins from './';

describe('Coins', () => {
  describe('when there is less than or equal to 100 coins', () => {
    it('should contain only 1 platinum coin', () => {
      const [crystal, platinum, gold] = calculateCoins(100);
      expect(crystal.amount).toBe(0);
      expect(platinum.amount).toBe(1);
      expect(gold.amount).toBe(0);
    });

    it('should contain only gold coins', () => {
      const [crystal, platinum, gold] = calculateCoins(99);
      expect(crystal.amount).toBe(0);
      expect(platinum.amount).toBe(0);
      expect(gold.amount).toBe(99);
    });

    it('should NOT contain coins', () => {
      const [crystal, platinum, gold] = calculateCoins(0);
      expect(crystal.amount).toBe(0);
      expect(platinum.amount).toBe(0);
      expect(gold.amount).toBe(0);
    });
  });

  describe('when there is more than 100 and less than or equal to 1000 coins', () => {
    it('should contain only 1 crystal coin', () => {
      const [crystal, platinum, gold] = calculateCoins(1000);
      expect(crystal.amount).toBe(1);
      expect(platinum.amount).toBe(0);
      expect(gold.amount).toBe(0);
    });

    it('should contain platinum and gold coins', () => {
      const [crystal, platinum, gold] = calculateCoins(152);
      expect(crystal.amount).toBe(0);
      expect(platinum.amount).toBe(1);
      expect(gold.amount).toBe(52);
    });

    it('should contain platinum and gold coins', () => {
      const [crystal, platinum, gold] = calculateCoins(999);
      expect(crystal.amount).toBe(0);
      expect(platinum.amount).toBe(9);
      expect(gold.amount).toBe(99);
    });
  });

  describe('when there is more than 1000 coins', () => {
    it('should contain crystal, platinum, and gold coins', () => {
      const [crystal, platinum, gold] = calculateCoins(1152);
      expect(crystal.amount).toBe(1);
      expect(platinum.amount).toBe(1);
      expect(gold.amount).toBe(52);
    });

    it('should contain crystal and gold coins', () => {
      const [crystal, platinum, gold] = calculateCoins(9042);
      expect(crystal.amount).toBe(9);
      expect(platinum.amount).toBe(0);
      expect(gold.amount).toBe(42);
    });

    it('should contain crystal and platinum coins', () => {
      const [crystal, platinum, gold] = calculateCoins(9100);
      expect(crystal.amount).toBe(9);
      expect(platinum.amount).toBe(1);
      expect(gold.amount).toBe(0);
    });
  });
});
