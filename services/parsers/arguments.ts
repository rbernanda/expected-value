import { InvalidArgumentError } from '@/errors.ts';
import { ExpectedValueInput } from '@/types/ev-input.ts';
import { parseEvInput } from '@/services/parsers/ev-input.ts';

/**
 * Parses command-line arguments to create an ExpectedValueInput object for EV calculations.
 * This function validates the number of arguments and converts string inputs into numbers
 * in the format: [command] [stake] [bookmaker odds] [true probability].
 * It ensures all required parameters are provided and properly formatted.
 *
 * @param args - An array of strings representing the command-line arguments.
 * @returns An ExpectedValueInput object containing the parsed stake, bookmaker odds, and true probability.
 * @throws {InvalidArgumentError} If fewer than 3 arguments are provided or if any argument is not a valid number.
 */
export const parseArguments = (args: string[]): ExpectedValueInput => {
  if (args.length < 3) {
    throw new InvalidArgumentError('Some arguments are not specified.');
  }

  return {
    stake: parseEvInput(args[0], 'stake'),
    bookmakerDecimalOdds: parseEvInput(args[1], 'bookmakerDecimalOdds'),
    trueProbability: parseEvInput(args[2], 'trueProbability'),
  };
};
