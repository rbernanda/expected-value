import { describe, it } from "@std/testing/bdd";
import { assertSpyCall, assertSpyCalls, spy } from "@std/testing/mock";
import { assertNotEquals } from "@std/assert";

import { _internals, app } from '@/app.ts';
import { ExpectedValueOutput } from '@/types/ev-output.ts';
import { ExpectedValueInput } from '@/types/ev-input.ts';

describe('app', () => {
  it('parse arguments, calculate expected value and print result', () => {
    using parseArgumentsSpy = spy(_internals, 'parseArguments');
    using calculateEVSpy = spy(_internals, 'calculateEV');
    using printExpectedValueSpy = spy(_internals, 'printExpectedValue');

    const outputPrinterSpy = spy((_msg: string) => {});
    const errorPrinterSpy = spy((_msg: string) => {});

    const inputArgs = ['100', '2', '51'];
    const parsedArguments: ExpectedValueInput = {
      stake: 100,
      bookmakerDecimalOdds: 2,
      trueProbability: 51,
    };

    const expectedValue: ExpectedValueOutput = {
      stake: 100,
      expectedValue: 2,
    };

    app(inputArgs, outputPrinterSpy, errorPrinterSpy);

    assertSpyCalls(parseArgumentsSpy, 1);
    assertSpyCall(parseArgumentsSpy, 0, {
      args: [inputArgs],
      returned: parsedArguments,
    });

    assertSpyCalls(calculateEVSpy, 1);
    assertSpyCall(calculateEVSpy, 0, {
      args: [parsedArguments],
      returned: expectedValue,
    });

    assertSpyCalls(printExpectedValueSpy, 1);
    assertSpyCall(printExpectedValueSpy, 0, {
      args: [expectedValue, outputPrinterSpy],
    });

    assertSpyCalls(errorPrinterSpy, 0);

    assertNotEquals(Deno.exitCode, 1);
  });
});
