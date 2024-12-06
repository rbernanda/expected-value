import { assertEquals, assertThrows } from '@std/assert';
import { describe, it } from '@std/testing/bdd';

import { validateBookmakerDecimalOdds } from '@/services/validators/bookmaker-decimal-odds.ts';
import { InvalidArgumentError } from '@/errors.ts';

describe('validateBookmakerDecimalOdds', () => {
  it('accepts valid decimal odds', () => {
    assertEquals(validateBookmakerDecimalOdds(1.5), 1.5);
    assertEquals(validateBookmakerDecimalOdds(2.0), 2.0);
    assertEquals(validateBookmakerDecimalOdds(10.55), 10.55);
  });

  it('throws error for odds less than or equal to 1', () => {
    assertThrows(() => validateBookmakerDecimalOdds(1), InvalidArgumentError);
    assertThrows(() => validateBookmakerDecimalOdds(0.5), InvalidArgumentError);
    assertThrows(() => validateBookmakerDecimalOdds(0), InvalidArgumentError);
  });
});
