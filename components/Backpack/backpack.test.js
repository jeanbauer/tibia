import React from 'react';
import { render } from '@testing-library/react'

import Backpack from './backpack';
import * as calculateCoins from './coins';

describe('Backpack', () => {
  describe('calculateCoins', () => {
    let mockedCalculateCoins;
    let spy;

    beforeEach(() => {
      mockedCalculateCoins = jest.fn().mockReturnValue([]);
      spy = jest.spyOn(calculateCoins, 'default').mockImplementation(mockedCalculateCoins);
    });

    afterAll(() => {
      spy.mockRestore();
    });

    it('should not call calculateCoins again when gold amount is the same', () => {
      const { rerender } = render(<Backpack gold={10} />);
      rerender(<Backpack gold={10} />);

      expect(mockedCalculateCoins).toHaveBeenCalledTimes(1);
    });

    it('should call calculateCoins when gold amount changes', () => {
      const { rerender } = render(<Backpack gold={10} />);
      rerender(<Backpack gold={10} />);
      rerender(<Backpack gold={15} />);

      expect(mockedCalculateCoins).toHaveBeenNthCalledWith(1, 10);
      expect(mockedCalculateCoins).toHaveBeenNthCalledWith(2, 15);
    });
  });

  describe('rendering', () => {
    it('should render 1 slot', () => {
      const { getByText } = render(<Backpack gold={10} />);

      const { parentNode: { parentNode: flexContainer } } = getByText('10');
      expect(flexContainer.childNodes.length).toBe(1);
    });

    it('should render the right values in slots', () => {
      const { getByText } = render(<Backpack gold={1250} />);

      expect(getByText('1').textContent).toBe('1');
      expect(getByText('2').textContent).toBe('2');
      expect(getByText('50').textContent).toBe('50');

      const { parentNode: { parentNode: flexContainer } } = getByText('1');
      expect(flexContainer.childNodes.length).toBe(3);
    });

    it('should rerender with the right slots', () => {
      const { rerender, queryByText } = render(<Backpack gold={10} />);
      expect(queryByText('10').textContent).toBe('10');

      rerender(<Backpack gold={200} />);
      expect(queryByText('10')).toBeNull();
      expect(queryByText('2').textContent).toBe('2');
    });
  });
});
