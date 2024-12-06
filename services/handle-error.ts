import { ExpectedValueError } from '@/errors.ts';
import { Printer } from '@/types/printer.ts';

/**
 * Handles errors that occur during expected value calculations. This function acts as an error
 * boundary that specifically handles ExpectedValueError instances while allowing other error
 * types to propagate up the call stack.
 *
 * If the error is an ExpectedValueError, its message is printed using the provided printer
 * function. This allows for user-friendly error reporting for known validation or calculation
 * errors. For all other error types, the error is re-thrown to be handled by higher-level
 * error handlers.
 *
 * @param error - The error to handle, which may or may not be an instance of ExpectedValueError
 * @param printError - A Printer function that will be used to output any ExpectedValueError messages
 * @throws {unknown} - Re-throws any non-ExpectedValueError errors for upstream handling
 */
export const handleError = (error: unknown, printError: Printer): void => {
  if (!(error instanceof ExpectedValueError)) {
    throw error;
  }

  printError(error.message);
};
