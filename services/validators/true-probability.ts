import type { Validator } from '@/types/ev-validator.ts';
import { InvalidArgumentError } from '@/errors.ts';

export const validateTrueProbability: Validator = (num) => {
  if (num < 0 || num > 100) {
    throw new InvalidArgumentError(
      `Invalid true probability: ${num}. True probability must be between 0 and 100 (e.g. 75 means 75% chance of winning). ` +
        'This represents your estimated probability of the bet winning.',
    );
  }

  return num;
};
