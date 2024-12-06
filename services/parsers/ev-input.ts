import { InvalidArgumentError } from '@/errors.ts';
import { validator } from '@/services/validators/validator.ts';
import type { EvInputKey } from '@/types/ev-input-key.ts';

/**
 * Validates and parses a string input into a number for expected value calculations.
 * This function attempts to convert a string value into a number and validates that
 * the conversion was successful. It's used to parse individual components of the
 * expected value calculation (stake, odds, probability) from string inputs.
 *
 * @param value - The string value to parse and validate
 * @param paramName - The name of the parameter being parsed (used for error messaging)
 * @throws {InvalidArgumentError} If the value cannot be converted to a valid number
 * @returns The parsed numeric value
 */
export const parseEvInput = (rawValue: string, key: EvInputKey): number => {
  const num = parseFloat(rawValue);

  if (isNaN(num)) {
    throw new InvalidArgumentError(`${key} must be a valid number`);
  }

  return validator(num, key);
};
