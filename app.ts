import { Printer } from '@/types/printer.ts';
import { calculateEV } from '@/services/calculate-ev.ts';
import { handleError } from '@/services/handle-error.ts';
import { parseArguments } from '@/services/parsers/arguments.ts';
import { printExpectedValue } from '@/services/print-ev.ts';

export const _internals = {
  parseArguments,
  calculateEV,
  printExpectedValue,
  handleError,
};

/**
 * Executes the main application logic for calculating expected value of bets.
 * This function takes command-line arguments containing betting parameters (stake, odds, probability),
 * calculates the expected value, and outputs the results. It handles the complete flow from parsing
 * betting inputs to displaying the expected value calculation, with integrated error handling.
 *
 * @param args - Command-line arguments in format: [stake] [bookmaker odds] [true probability]
 * @param outputPrinter - Function to print successful calculation results
 * @param errorPrinter - Function to print error messages if calculation fails
 */
export const app = (
  args: string[],
  outputPrinter: Printer,
  errorPrinter: Printer,
): void => {
  try {
    const evInput = _internals.parseArguments(args);
    const evOutput = _internals.calculateEV(evInput);

    _internals.printExpectedValue(evOutput, outputPrinter);
  } catch (error) {
    _internals.handleError(error, errorPrinter);
    Deno.exit(1);
  }
};
