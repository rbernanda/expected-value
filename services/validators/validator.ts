import type { EvValidator, Validator } from '@/types/ev-validator.ts';
import { validateTrueProbability } from '@/services/validators/true-probability.ts';
import { validateBookmakerDecimalOdds } from '@/services/validators/bookmaker-decimal-odds.ts';
import { validateStake } from '@/services/validators/stake.ts';

export const _internals = {
  validateTrueProbability,
  validateBookmakerDecimalOdds,
  validateStake,
};

export const validator: EvValidator = (value, key) => {
  let chosenValidator: Validator;

  if (key === 'trueProbability') {
    chosenValidator = _internals.validateTrueProbability;
  } else if (key === 'bookmakerDecimalOdds') {
    chosenValidator = _internals.validateBookmakerDecimalOdds;
  } else if (key === 'stake') {
    chosenValidator = _internals.validateStake;
  } else {
    throw new Error(`Should never happen: Invalid validator key: ${key}`);
  }

  return chosenValidator(value);
};
