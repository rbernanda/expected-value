import { InvalidArgumentError } from '@/errors.ts';
import type { Validator } from '@/types/ev-validator.ts';

export const validateStake: Validator = (num) => {
  if (num <= 0) {
    throw new InvalidArgumentError(
      `Invalid stake: ${num}. Stake must be greater than 0 (e.g. 100 means betting $100). ` +
        'This represents how much money you want to bet.',
    );
  }

  return num;
};
