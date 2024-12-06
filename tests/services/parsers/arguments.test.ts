import { assertEquals, assertThrows } from '@std/assert';
import { describe, it } from '@std/testing/bdd';

import { parseArguments } from '@/services/parsers/arguments.ts';
import { InvalidArgumentError } from '@/errors.ts';

describe('parseArguments', () => {
  it('parseArguments with valid inputs', () => {
    const args = ['100', '2.5', '0.4'];
    const expected = {
      stake: 100,
      bookmakerDecimalOdds: 2.5,
      trueProbability: 0.4,
    };
    const result = parseArguments(args);
    assertEquals(result, expected);
  });

  it('parseArguments with fewer than 3 arguments', () => {
    const args = ['100', '2.5'];
    assertThrows(
      () => parseArguments(args),
      InvalidArgumentError,
      'Some arguments are not specified.',
    );
  });

  it('parseArguments with invalid number format', () => {
    const args = ['100', 'invalid', '0.4'];
    assertThrows(
      () => parseArguments(args),
      InvalidArgumentError,
      'bookmakerDecimalOdds must be a valid number',
    );
  });
});
