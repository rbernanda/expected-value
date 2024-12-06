import { assertEquals, assertThrows } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { assertSpyCall, assertSpyCalls, spy } from "@std/testing/mock";
import {
  _internals,
  validator,
} from '@/services/validators/validator.ts';
import type { EvInputKey } from '@/types/ev-input-key.ts';

describe("validator", () => {
  it("execute validateStake if the key is stake", () => {
    using validateStakeSpy = spy(_internals, "validateStake");

    const result = validator(100, "stake");
    assertEquals(result, 100);

    assertSpyCalls(validateStakeSpy, 1);
    assertSpyCall(validateStakeSpy, 0, {
      args: [100],
      returned: 100,
    });
  });

  it("execute validateTrueProbability if the key is trueProbability", () => {
    using validateTrueProbabilitySpy = spy(
      _internals,
      "validateTrueProbability",
    );

    const result = validator(51, "trueProbability");
    assertEquals(result, 51);

    assertSpyCalls(validateTrueProbabilitySpy, 1);
    assertSpyCall(validateTrueProbabilitySpy, 0, {
      args: [51],
      returned: 51,
    });
  });

  it("execute validateBookmakerDecimalOdds if the key is bookmakerDecimalOdds", () => {
    using validateBookmakerDecimalOddsSpy = spy(
      _internals,
      "validateBookmakerDecimalOdds",
    );

    const result = validator(2, "bookmakerDecimalOdds");
    assertEquals(result, 2);

    assertSpyCalls(validateBookmakerDecimalOddsSpy, 1);
    assertSpyCall(validateBookmakerDecimalOddsSpy, 0, {
      args: [2],
      returned: 2,
    });
  });

  it("throw an error if the key is not valid", () => {
    assertThrows(() => validator(100, "invalidKey" as unknown as EvInputKey));
  });
});
