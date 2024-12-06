import { InvalidArgumentError } from '@/errors.ts';
import type { Validator } from '@/types/ev-validator.ts';

export const validateBookmakerDecimalOdds: Validator = (num) => {
  if (num <= 1) {
    throw new InvalidArgumentError(
      `Invalid decimal odds: ${num}. Decimal odds must be greater than 1 (e.g. 1.50 means 2/3 or 66.7% implied probability). ` +
        'Bookmakers typically display decimal odds with up to two decimal places.',
    );
  }

  return num;
};
