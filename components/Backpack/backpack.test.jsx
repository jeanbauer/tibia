import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

import Backpack from './backpack';
import * as useGameStoreModule from '../../store/useGameStore';

const renderWithChakra = (ui) =>
  render(<ChakraProvider value={defaultSystem}>{ui}</ChakraProvider>);

const mockStore = (gold) => {
  vi.spyOn(useGameStoreModule, 'useGameStore').mockImplementation((selector) =>
    selector({ gold })
  );
};

describe('Backpack', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('rendering', () => {
    it('should render a single gold slot for a small amount', () => {
      mockStore(10);
      renderWithChakra(<Backpack />);

      expect(screen.getByText('10')).toBeTruthy();
    });

    it('should render platinum and gold slots for 152 gp', () => {
      mockStore(152);
      renderWithChakra(<Backpack />);

      expect(screen.getByText('1')).toBeTruthy();
      expect(screen.getByText('52')).toBeTruthy();
    });

    it('should render crystal, platinum, and gold slots for 1152 gp', () => {
      mockStore(1152);
      renderWithChakra(<Backpack />);

      // 1152 gp → 1 crystal, 1 platinum, 52 gold — two slots show "1"
      expect(screen.getAllByText('1')).toHaveLength(2);
      expect(screen.getByText('52')).toBeTruthy();
    });

    it('should not render coin slots when gold is 0', () => {
      mockStore(0);
      renderWithChakra(<Backpack />);

      // Coin slot images have empty alt; backpack icon has a non-empty alt
      expect(screen.queryByAltText('')).toBeNull();
    });
  });
});
