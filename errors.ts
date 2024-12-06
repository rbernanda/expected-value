/**
 * An abstract base class for custom error types within the application, extending the native JavaScript Error class.
 * This class serves as a foundation for more specific error types,
 * ensuring consistency in error handling across the application.
 */
export abstract class ExpectedValueError extends Error {}

/**
 * Represents an error related to invalid arguments passed to functions or methods.
 * This class is typically used when arguments do not meet the expected format, type, or constraints.
 *
 * @param message - A message describing the specifics of the invalid argument error.
 */
export class InvalidArgumentError extends ExpectedValueError {
  constructor(message: string) {
    super(message);
    this.name = "InvalidArgumentError";
  }
}
