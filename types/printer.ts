/**
 * Defines a function type for printing messages. This type is used to abstract the printing execution,
 * allowing different implementations that adhere to this signature to print messages as needed
 * throughout the application.
 * It's particularly useful for logging, displaying errors, or any other text output requirements.
 *
 * @param message - The string message to be printed.
 */
export type Printer = (message: string) => void;
