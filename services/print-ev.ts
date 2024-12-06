import { ExpectedValueOutput } from '@/types/ev-output.ts';
import { Printer } from '@/types/printer.ts';

/**
 * Prints the expected value calculation results. This function takes the expected value output
 * and formats it into a human-readable message, then uses a provided printer function to output
 * the message. It is designed to interface with any printing mechanism that matches the Printer
 * type signature.
 *
 * @param result - The expected value calculation results containing stake and expected value.
 * @param print - A Printer function responsible for outputting the formatted message.
 */
export const printExpectedValue = (
  result: ExpectedValueOutput,
  print: Printer,
): void => {
  const { stake, expectedValue } = result;
  const outcome = expectedValue >= 0 ? 'make' : 'lose';
  const formattedAmount =
    outcome === 'make' ? `$${expectedValue}` : `-$${Math.abs(expectedValue)}`;

  const message = `For every bet of $${stake}, you can expect to ${outcome} ${formattedAmount} on average`;
  print(message);
};
