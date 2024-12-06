import { assertEquals, assertThrows } from '@std/assert';
import { describe, it } from '@std/testing/bdd';

import { validateStake } from '@/services/validators/stake.ts';
import { InvalidArgumentError } from '@/errors.ts';

describe('validateStake', () => {
  it('should accept positive numbers', () => {
    assertEquals(validateStake(100), 100);
    assertEquals(validateStake(1), 1);
    assertEquals(validateStake(999999), 999999);
  });

  it('should throw InvalidArgumentError for zero', () => {
    assertThrows(() => validateStake(0), InvalidArgumentError);
  });

  it('should throw InvalidArgumentError for negative numbers', () => {
    assertThrows(() => validateStake(-1), InvalidArgumentError);
    assertThrows(() => validateStake(-100), InvalidArgumentError);
  });
});
