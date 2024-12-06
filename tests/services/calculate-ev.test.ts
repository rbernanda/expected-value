import { assertEquals } from '@std/assert';
import { describe, it } from '@std/testing/bdd';

import { calculateEV } from '@/services/calculate-ev.ts';
import { ExpectedValueInput } from '@/types/ev-input.ts';

describe('calculateEV', () => {
  it('should calculate positive EV for favorable odds', () => {
    const input: ExpectedValueInput = {
      bookmakerDecimalOdds: 2.0,
      stake: 100,
      trueProbability: 60, // 60%
    };

    const result = calculateEV(input);
    assertEquals(result.expectedValue, 20.0);
    assertEquals(result.stake, 100);
  });

  it('should calculate negative EV for unfavorable odds', () => {
    const input: ExpectedValueInput = {
      bookmakerDecimalOdds: 2.0,
      stake: 100,
      trueProbability: 40, // 40%
    };

    const result = calculateEV(input);
    assertEquals(result.expectedValue, -20.0);
    assertEquals(result.stake, 100);
  });

  it('should handle zero probability correctly', () => {
    const input: ExpectedValueInput = {
      bookmakerDecimalOdds: 1.5,
      stake: 50,
      trueProbability: 0,
    };

    const result = calculateEV(input);
    assertEquals(result.expectedValue, -50.0);
    assertEquals(result.stake, 50);
  });

  it('should handle 100% probability correctly', () => {
    const input: ExpectedValueInput = {
      bookmakerDecimalOdds: 1.5,
      stake: 50,
      trueProbability: 100,
    };

    const result = calculateEV(input);
    assertEquals(result.expectedValue, 25.0);
    assertEquals(result.stake, 50);
  });

  it('should handle even odds correctly', () => {
    const input: ExpectedValueInput = {
      bookmakerDecimalOdds: 2.0,
      stake: 100,
      trueProbability: 50,
    };

    const result = calculateEV(input);
    assertEquals(result.expectedValue, 0.0);
    assertEquals(result.stake, 100);
  });
});
