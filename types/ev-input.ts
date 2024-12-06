/**
 * Input parameters for evaluating bet profitability and determining optimal betting decisions
 * based on stake, odds, and true probability.
 */
export type ExpectedValueInput = {
  /** The amount of money to bet */
  stake: number;

  /** The odds offered by the bookmaker in decimal format a number greater than 1 */
  bookmakerDecimalOdds: number;

  /** The actual probability of the event occurring (between 0 and 1) */
  trueProbability: number;
};
