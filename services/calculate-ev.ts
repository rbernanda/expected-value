import { ExpectedValueInput } from '@/types/ev-input.ts';
import { ExpectedValueOutput } from '@/types/ev-output.ts';

/**
 * Calculates the Expected Value (EV) for a betting opportunity
 *
 * @param input - The input parameters for EV calculation
 * @param input.bookmakerDecimalOdds - The decimal odds offered by the bookmaker
 * @param input.stake - The amount of money to bet
 * @param input.trueProbability - The estimated true probability of winning (as a percentage)
 * @returns An object containing the calculated expected value and stake
 * @returns {number} expectedValue - The expected value of the bet rounded to 2 decimal places
 * @returns {number} stake - The original stake amount
 */
export const calculateEV = (input: ExpectedValueInput): ExpectedValueOutput => {
  // Calculate potential win amount ((odds - 1) * stake)
  const winAmount = (input.bookmakerDecimalOdds - 1) * input.stake;
  const loseAmount = input.stake;

  // Convert probability from percentage (1-100) to decimal (0-1)
  const winProbability = input.trueProbability / 100;
  const loseProbability = 1 - winProbability;

  // Calculate expected wins and losses to determine overall expected value
  const wins = winProbability * winAmount;
  const losses = loseProbability * loseAmount;
  const expectedValue = wins - losses;

  return {
    expectedValue: Number(expectedValue.toFixed(2)),
    stake: input.stake,
  };
};
