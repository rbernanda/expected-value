import { assertEquals, assertThrows } from '@std/assert';
import { describe, it } from '@std/testing/bdd';

import { validateTrueProbability } from '@/services/validators/true-probability.ts';
import { InvalidArgumentError } from '@/errors.ts';

describe('validateTrueProbability', () => {
  it('valid probabilities', () => {
    // Test valid edge cases and normal values
    assertEquals(validateTrueProbability(0), 0);
    assertEquals(validateTrueProbability(100), 100);
    assertEquals(validateTrueProbability(50), 50);
    assertEquals(validateTrueProbability(75.5), 75.5);
  });

  it('invalid probabilities below 0', () => {
    assertThrows(() => validateTrueProbability(-1), InvalidArgumentError);
  });

  it('invalid probabilities above 100', () => {
    assertThrows(() => validateTrueProbability(101), InvalidArgumentError);
  });
});
