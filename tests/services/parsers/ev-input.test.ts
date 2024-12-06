import { assertEquals, assertThrows } from '@std/assert';
import { describe, it } from '@std/testing/bdd';

import { parseEvInput } from '@/services/parsers/ev-input.ts';
import { InvalidArgumentError } from '@/errors.ts';

describe('parseEvInput', () => {
  it('parseEvInput - valid numeric strings', () => {
    assertEquals(parseEvInput('100', 'stake'), 100);
    assertEquals(parseEvInput('2.5', 'bookmakerDecimalOdds'), 2.5);
    assertEquals(parseEvInput('0.75', 'trueProbability'), 0.75);
  });

  it('parseEvInput - invalid inputs throw InvalidArgumentError', () => {
    assertThrows(
      () => parseEvInput('abc', 'stake'),
      InvalidArgumentError,
      'stake must be a valid number',
    );

    assertThrows(
      () => parseEvInput('', 'bookmakerDecimalOdds'),
      InvalidArgumentError,
      'bookmakerDecimalOdds must be a valid number',
    );
  });
});
